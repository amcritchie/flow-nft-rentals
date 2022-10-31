import './App.css'
import * as fcl from "@onflow/fcl";
import * as types from "@onflow/types";

// Configure FCL to Testnet and Testnet wallets
fcl.config()
  .put("accessNode.api", "https://access-testnet.onflow.org")
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")

// 0xfb3acf2dd1569a14 - Blocto Wallet

function App() {
  return (
    <div className="App">
      <h1>Hello, World!!</h1>
      <button onClick={() => getTheGreeting()}></button>
    </div>
  );
}

export default App
