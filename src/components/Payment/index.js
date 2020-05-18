import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { makePayment } from "../../actions/paymentAction";
import { connect } from "react-redux";
import Loader from "react-loader";
import { toast } from "react-toastify";

class Payment extends Component {
  render() {
    const { makePaymentAction, loading, error, status } = this.props;

    if (status === false && error) {
      toast.error(
        "Some error Occured while doing payment. Please try again after some time",
        { position: toast.POSITION.TOP_RIGHT }
      );
    } else if (status === true && loading === false && !error) {
      toast.success("Your payment was successfull", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    return (
      <>
        <Loader loaded={!loading}></Loader>
        <StripeCheckout
          name="Feedback"
          description="Add Credeits"
          token={makePaymentAction}
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        >
          <button>Add Credits</button>
        </StripeCheckout>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    makePaymentAction: token => dispatch(makePayment(token))
  };
}

function mapStateToProps({ payments: { loading, error, status } }) {
  return {
    loading,
    error,
    status
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);
