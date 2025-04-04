import express from 'express'
import { adminLogin, loginUser, logout, registerUser } from '../controllers/user.controller.js';
import User from '../models/user.model.js';

const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/logout',logout)
router.post('/admin',adminLogin)

router.get('/profile',async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');

    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Update user profile
// @route   PUT /api/user/profile
// @access  Private
router.put('/profile',async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        const updatedUser = await user.save();
        res.json({
            id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            token: jwt.sign({ id: updatedUser.id }, process.env.JWT_SECRET, {
                expiresIn: '30d',
            }),
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

export default router