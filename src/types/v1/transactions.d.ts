import { TransactionStatus } from "@prisma/client";

export interface ITransaction {
  id?: string;
  transactionId: string;
  amount: number;
  paymentType: string;
  paidById: string;
  contractId: string;
  transactionsInfo: any;
  status?: TransactionStatus;
  refundId?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IRefund {
  id?: string;
  transactionId: string;
  amount: number;
  refundedTransactions?: string[];
  transactionsInfo: any;
  status?: TransactionStatus;
  refundedToId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
