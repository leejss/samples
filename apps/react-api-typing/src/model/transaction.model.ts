import type { TransactionSchema } from "../schema/transaction.schema";

export class Transaction {
  // field

  id: string;
  from: string;
  to: string;
  amt: string;

  constructor(schema: TransactionSchema) {
    this.id = schema.id;
    this.from = schema.from;
    this.to = schema.to;
    this.amt = schema.amt;
  }
}
