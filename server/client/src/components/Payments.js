import StripeCheckout from 'react-stripe-checkout';

import { useThunk } from '../hooks/use-thunk';
import { handleToken } from '../store/thunks/handleToken';

function Payments() {
  const [doToken, isLoadingToken, isErrorToken] = useThunk(handleToken);

  console.log(isLoadingToken);
  console.log(isErrorToken);

  return (
    <StripeCheckout
      name="FUE"
      description="5$ for 5 email"
      amount={500}
      token={(token) => doToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credit</button>
    </StripeCheckout>
  );
}

export default Payments;
