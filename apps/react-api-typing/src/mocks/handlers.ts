import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";

export const handlers = [
  http.get("/transactions", () => {
    const transactions = [];

    for (let i = 1; i <= 100; i++) {
      const transaction = {
        id: i.toString(),
        from: faker.internet.userName(),
        to: faker.internet.userName(),
        amt: faker.finance.amount(),
        createdAt: faker.date.past().toISOString(),
        status: "pending",
        type: "payment",
        hash: faker.string.uuid(),
        network: "aptos",
        retry: 0,
      };

      transactions.push(transaction);
    }

    return HttpResponse.json(transactions);
  }),
];
