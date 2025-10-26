const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.post('/api/payments', async (req, res) => {
  const { amount, recipient } = req.body;
  try {
    const payment = await prisma.payment.create({
      data: {
        amount: parseFloat(amount),
        recipient,
      },
    });
    res.status(201).json({ message: 'Payment created successfully', payment });
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Failed to create payment', details: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('MediPay Backend is running');
});

// Test Prisma connection on startup
async function startServer() {
  try {
    await prisma.$connect();
    console.log('Connected to Neon database');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  }
}

startServer();