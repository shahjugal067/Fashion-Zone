import Subscriber from "../models/subscriber.model.js";
import express from 'express'


const router  =  express.Router()

// Subscribe Route
router.post("/subscribe", async (req, res) => {
    
    const { email } = req.body;

    if (!email || !email.includes("@")) {
        return res.status(400).json({ success: false, message: "Invalid email address." });
    }

    try {
        const existingUser = await Subscriber.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: "Email already subscribed." });
        }

        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        return res.status(201).json({ success: true, message: "Successfully subscribed!" });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error, try again later." });
    }
});

// Get Subscribers Route
router.get("/subscribers", async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json({ count: subscribers.length, subscribers });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error." });
    }
});
export default router