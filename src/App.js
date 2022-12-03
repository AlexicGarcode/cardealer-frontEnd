import AppRouter from "./routes/AppRouter";
import { UserProvider } from "./context/UserProvider";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <>      
      <UserProvider>
        <PayPalScriptProvider options={{ "client-id": "AQAHPo_cOwFlj1iJ0svHUchANLemrfnsg6MrKp9Y9k31KGt-pZNRURS_IzRDkLAbe0zoS32Q6_znn7uF" }}>
          <AppRouter />
        </PayPalScriptProvider>
      </UserProvider>
    </>
  );
}

export default App;