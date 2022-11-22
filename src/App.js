import AppRouter from "./routes/AppRouter";
import { UserProvider } from "./context/UserProvider";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <>
      <UserProvider>
      <AppRouter/>
      <PayPalScriptProvider options={{"client-id": " "}}/>
      </UserProvider>
    </>
  );
}

export default App;