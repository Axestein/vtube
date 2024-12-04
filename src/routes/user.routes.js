import express from 'express';

const router = express.Router();

// POST /api/v1/users/register
router.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Mock response for demo
    res.status(201).json({
        message: 'User successfully registered',
        data: { username, email },
    });
});

export default router;
