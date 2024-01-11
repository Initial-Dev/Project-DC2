import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function getCartItems() {
  return prisma.cart.findFirst({
      where: {
          userID: 1,
      },
  });
}

export async function addItemToCart() {
  return prisma.cart.create({
      data: {
          userID: 1,
          itemId: 1,
          quantity: 1,
      },
  });
}