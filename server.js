const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const authRoutes = require('./src/routes/auth/authRoutes');

app.use(express.json());

app.get('/health', (req, res) => {
    res.send('Working!')
})

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
