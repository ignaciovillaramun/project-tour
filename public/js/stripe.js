import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51NTrj7EbGprg56fqiF3fvjwfFYjMWx6Le3BJuCwPmFa2wn4x1UXLuFduYzmq868mX8HLACWQ2T4X4AIsJnzWXzSR00YxtPgkSm'
  );

  try {
    //   1. Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    //   2. Create checkout form + charge credit card
    const checkoutPageUrl = session.data.session.url;
    console.log(checkoutPageUrl);
    window.location.assign(checkoutPageUrl);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
