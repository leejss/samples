import { TransactionHistory } from "./component/TransactionHistory";
import { useTransactions } from "./hooks/useTransactions";

const App = () => {
  const { data } = useTransactions();
  console.log(data);
  return (
    <div>
      <h1>Transactions</h1>
      {data && <TransactionHistory transactions={data} />}
    </div>
  );
};

export default App;
