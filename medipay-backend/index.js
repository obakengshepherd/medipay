const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

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

async function startServer() {
  try {
    await prisma.$connect();
    console.log('Connected to Neon database');
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server running on http://0.0.0.0:${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  }
}

startServer();