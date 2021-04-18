import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';



const stripePromise = loadStripe('pk_test_51IeIifFdPPyeqbGZ1VnsRVuY4Tnxbtj4TjCy7Emb9PLtMEX9VxPfokhIn4DId5OA94ckyzfPkhqWTNk5NXgfMse9008Qg8N8uu');
const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePaymentSuccess={handlePaymentSuccess}></SimpleCardForm>
       
        </Elements>
    );
};

export default ProcessPayment;