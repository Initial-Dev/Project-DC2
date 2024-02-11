import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function getCartItems(idUser: number) {
  return prisma.cart.findMany({
    where: {
      userID: idUser,
    },
  });
}

export async function addItem(idUser: number, idItem: number, quantity: number) {
  return prisma.cart.create({
    data: {
      userID: idUser,
      itemId: idItem,
      quantity: quantity,
    },
  });
}

export async function changeItemQuantity(idUser: number, idItem: number, quantity: number) {
  return prisma.cart.update({
    where: {
      userID_itemId: {
        userID: idUser,
        itemId: idItem,
      },
    },
    data: {
      quantity: quantity,
    },
  });
}

export async function removeItem(idUser: number, idItem: number) {
  return prisma.cart.delete({
    where: {
      userID_itemId: {
        userID: idUser,
        itemId: idItem,
      },
    },
  });
}

export async function cleanCart(idUser: number) {
  return prisma.cart.deleteMany({
    where: {
      userID: idUser,
    },
  });
}

export async function getTotalPriceForUser(idUser: number) {
  return `TODO: Get user ${idUser} cart total price`;
}

export async function goToPayment(idUser: number) {
  return `TODO: Proceed to user ${idUser} payment`;
}
