import { useEffect, useContext } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';
import ModelContext from "../context/ModelContext";

const style = { layout: "vertical" };



const PaypalCheckoutButton = ({ currency, amount, showSpinner }) => {

  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, showSpinner]);



  // eslint-disable-next-line no-unused-vars
  const { cart, emptyCart } = useContext(ModelContext)

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {

              console.log("Orden de compra: " + orderId);
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            console.log("Compra realizada");
            Swal.fire('Compra realizada', '', 'success');
            emptyCart();
            console.log(data);
          });
        }}
      />
    </>
  );
};

export default PaypalCheckoutButton;