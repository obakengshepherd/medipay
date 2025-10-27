const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('Connected to Neon database successfully!');
    await prisma.$disconnect();
  } catch (error) {
    console.error('Connection failed:', error.message);
  }
}

testConnection();