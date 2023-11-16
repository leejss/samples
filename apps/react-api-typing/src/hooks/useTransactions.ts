import ky from "ky";
import useSWR from "swr";
import { Transaction } from "../model/transaction.model";
import { TransactionSchema, transactionResponseSchema } from "../schema/transaction.schema";

export const useTransactions = () => {
  return useSWR("/transactions", async (path: string) => {
    // return transactionSchema.parse(await ky.get(path).json<TransactionSchema>());

    const json = transactionResponseSchema.parse(await ky.get(path).json<TransactionSchema[]>());
    return json.map((schema) => new Transaction(schema));
  });
};
