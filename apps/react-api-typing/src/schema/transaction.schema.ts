import { z } from "zod";

export const transactionSchema = z.object({
  id: z.string(),
  from: z.string(),
  to: z.string(),
  amt: z.string(),
  createdAt: z.string(),
  status: z.string(),
  type: z.string(),
  hash: z.string(),
  network: z.string(),
  retry: z.number(),
});

export type TransactionSchema = z.infer<typeof transactionSchema>;

export const transactionResponseSchema = z.array(transactionSchema);
export type TransactionResponseSchema = z.infer<typeof transactionResponseSchema>;
