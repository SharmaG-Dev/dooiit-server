import { PrismaClient } from "@prisma/client";
import { IRefund } from "../../../types/v1/transactions";


const prisma = new PrismaClient();

export async function createRefund(data: IRefund): Promise<IRefund> {
  const connectArray = data.refundedTransactions
    ? data.refundedTransactions.map((txId) => ({ id: txId }))
    : undefined;

  return prisma.refunds.create({
    data: {
      transactionId: data.transactionId,
      amount: data.amount,
      refundedTransactions: connectArray ? { connect: connectArray } : undefined,
      transactionsInfo: data.transactionsInfo,
      status: data.status ?? undefined,
      refundedToId: data.refundedToId
    }
  });
}

export async function getRefundById(id: string): Promise<IRefund | null> {
  return prisma.refunds.findUnique({ where: { id } });
}

export async function listRefunds(
  filter?: { status?: string; refundedToId?: string }
): Promise<IRefund[]> {
  const whereClause: any = {};
  if (filter?.status) whereClause.status = filter.status;
  if (filter?.refundedToId) whereClause.refundedToId = filter.refundedToId;
  return prisma.refunds.findMany({
    where: whereClause,
    orderBy: { createdAt: "desc" }
  });
}

export async function updateRefund(
  id: string,
  updates: Partial<
    Pick<IRefund, "transactionId" | "amount" | "refundedTransactions" | "transactionsInfo" | "status">
  >
): Promise<IRefund> {
  const setArray = updates.refundedTransactions
    ? updates.refundedTransactions.map((txId) => ({ id: txId }))
    : undefined;

  return prisma.refunds.update({
    where: { id },
    data: {
      transactionId: updates.transactionId,
      amount: updates.amount,
      refundedTransactions: setArray ? { set: setArray } : undefined,
      transactionsInfo: updates.transactionsInfo,
      status: updates.status
    }
  });
}

export async function deleteRefund(id: string): Promise<IRefund> {
  return prisma.refunds.delete({ where: { id } });
}
