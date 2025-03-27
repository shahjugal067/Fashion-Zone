import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import Stripe from 'stripe'

// global variable 
const currency = "inr";
const delivery_fee = 30;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const placeOrder = async(req ,res)=> {

    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now(),
            address,

        }
        const newOrder = new Order(orderData);

        await newOrder.save();

        await User.findByIdAndUpdate(userId,{cartData:{}}); // clear the cart data
        res.json({success:true, message:'Order placed success'});

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Server error in place order"});
    }
};

export const placeOrderStripe = async(req,res)=>{
    try {
        const { userId, items, amount,address } = req.body;
        const { origin } = req.headers;

        const orderData ={
            userId,
            items,
            amount,
            paymentMethod:"Stripe",
            payment:false,
            date:Date.now(),
            address,

        }
        const newOrder = new Order(orderData)
        await newOrder.save()

        const line_items = items.map((item)=>({
            price_data:{
                currency:currency,
                product_data:{
                    name:item.name,
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
    }))

    line_items.push({
        price_data:{
            currency:currency,
            product_data:{
                name:"Delivery Fee",
            },
            unit_amount: delivery_fee *100,
        },
        quantity:1
    })
    const sessionId = await stripe.checkout.sessions.create({
        success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
        line_items,
        mode:"payment",
    })
    res.json({success:true,session_url:sessionId.url})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"server error in stripe payment"})
    }

};
// verify stripe payment

export const verifyStripePayment = async(req,res) => {
    const { orderId ,success, userId } = req.body;
    try {
        if(success === 'true'){
            await Order.findByIdAndUpdate(orderId,{payment:true});
            await User.findByIdAndUpdate(userId,{cartData:{}});
            res.json({ success: true, message:"Payment success"})
        }else{
            await Order.findByIdAndDelete(orderId);
            res.json({ success: false, message:"Payment failed"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"server error stripe payment verify"})
    }
};

export const placeOrderRazorpay = async(req,res)=>{

};


// all orders data get for admin panel 

export const allOrders = async(req,res)=>{

    try {
        
        const orders = await Order.find({})

        res.json({success:true, orders})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Server error in all orders"});
    }
};

// order details for frontend
export const userOrders = async(req,res)=>{
   try {
    const { userId } = req.body;

    const orders = await Order.find({userId})

    res.json({success:true, orders});

   } catch (error) {
    console.log(error)
    res.json({success:false, message:"Server error in user orders"});
   }

};
// update order status in admin panel
export const updateStatus = async(req,res)=>{
    try {
        const {orderId,status} = req.body;

        await Order.findByIdAndUpdate(orderId,{status})
        res.json({success:true, message:"Order status updated"})
    } catch (error) {
        console.log(error)
    }
};
