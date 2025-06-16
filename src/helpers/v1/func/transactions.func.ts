import { PrismaClient } from "@prisma/client";
import { ITransaction } from "../../../types/v1/transactions";

const prisma = new PrismaClient();

export async function createTransaction(data: ITransaction): Promise<ITransaction> {
  return prisma.transactions.create({
    data: {
      transactionId: data.transactionId,
      amount: data.amount,
      paymentType: data.paymentType,
      paidById: data.paidById,
      contractId: data.contractId,
      transactionsInfo: data.transactionsInfo,
      status: data.status ?? undefined,
      refundId: data.refundId ?? null
    }
  });
}

export async function getTransactionById(id: string): Promise<ITransaction | null> {
  return prisma.transactions.findUnique({ where: { id } });
}

export async function listTransactions(
  filter?: { status?: string; paidById?: string }
): Promise<ITransaction[]> {
  const whereClause: any = {};
  if (filter?.status) whereClause.status = filter.status;
  if (filter?.paidById) whereClause.paidById = filter.paidById;
  return prisma.transactions.findMany({
    where: whereClause,
    orderBy: { createdAt: "desc" }
  });
}

export async function updateTransaction(
  id: string,
  updates: Partial<
    Pick<
      ITransaction,
      "transactionId" | "amount" | "paymentType" | "transactionsInfo" | "status" | "refundId"
    >
  >
): Promise<ITransaction> {
  return prisma.transactions.update({
    where: { id },
    data: {
      transactionId: updates.transactionId,
      amount: updates.amount,
      paymentType: updates.paymentType,
      transactionsInfo: updates.transactionsInfo,
      status: updates.status,
      refundId: updates.refundId ?? undefined
    }
  });
}

export async function deleteTransaction(id: string): Promise<ITransaction> {
  return prisma.transactions.delete({ where: { id } });
}
