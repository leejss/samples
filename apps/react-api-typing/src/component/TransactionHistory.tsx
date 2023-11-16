import { Transaction } from "../model/transaction.model";

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export const TransactionHistory = ({ transactions }: TransactionHistoryProps) => {
  return (
    <ul
      style={{
        display: "grid",
        gap: "16px",
        listStyle: "none",
        padding: 0,
      }}
    >
      {transactions.map((t) => {
        return (
          <li key={t.id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 200,
                }}
              >
                {t.from}
              </div>
              <span>➡️</span>
              <div
                style={{
                  width: 200,
                }}
              >
                {t.to}
              </div>
              <span>|</span>
              <b>{t.amt} $</b>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
