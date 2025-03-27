import express from 'express'
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, 
    updateStatus, userOrders, 
    verifyStripePayment} from '../controllers/order.controller.js'
import { adminAuth } from '../middleware/adminAuth.js';
import { authUser } from '../middleware/auth.js';

const router = express.Router()

router.post('/list',adminAuth,allOrders);

router.post('/status',adminAuth,updateStatus)

router.post('/place',authUser,placeOrder)


router.post('/stripe',authUser,placeOrderStripe)

router.post('/razorpay',authUser,placeOrderRazorpay)


router.post('/userorders',authUser,userOrders)
//verify stripe payment

router.post('/verifyStripe',authUser, verifyStripePayment)


export default router