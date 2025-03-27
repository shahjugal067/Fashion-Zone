import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { currency, backendUrl,token } = useContext(ShopContext);
  const [orderData,setOrderData] = useState([]);

  const loadOrderData = async()=>{
    try {
      if(!token){
        return null
      }
      const response = await axios.post(backendUrl+'/api/order/userorders',{},{headers:{token}})

      if(response.data.success){
        let allOrderItem = []

        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status;
            item['payment']= order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;

            allOrderItem.push(item);
          })
        })
        
      setOrderData(allOrderItem.reverse())

      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    loadOrderData();
  },[token])

  return (
    <div className="border-t pt-16 px-10">
      <div className="text-2xl">
        <Title text1="My" text2="Orders" />
      </div>
      <div className="">
        {orderData.map((item, index) => (
          <div
            key={index}
            className="border-t border-b py-4 text-gray-700
             flex flex-col md:flex-row md:text-center justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={item.image[0]}
                alt=""
                className="w-16 h-16sm:w-20 sm:h-20"
              />
              <div>
                <p className="sm:text-base ">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="text-yellow-400">Payment: {item.paymentMethod}</p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-800"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button onClick={loadOrderData}
               className="bg-yellow-400 px-4 py-2 text-sm rounded-sm">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
