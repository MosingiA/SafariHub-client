import React, { useState } from 'react';

const PaymentForm = () => {
  const [method, setMethod] = useState("card");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment method selected: ${method}`);
  };

  return (
    <div className="payment-form-container">
      <h2 className="payment-title">Secure Payment 🔒</h2>
      <p className="payment-subtitle">Select your preferred payment method below.</p>

      {/* Payment Method Selection */}
      <div className="payment-methods">
        <button
          type="button"
          className={`payment-method-btn ${method === "card" ? "active" : "inactive"}`}
          onClick={() => setMethod("card")}
        >
          Credit/Debit Card
        </button>
        <button
          type="button"
          className={`payment-method-btn ${method === "paypal" ? "active" : "inactive"}`}
          onClick={() => setMethod("paypal")}
        >
          PayPal
        </button>
        <button
          type="button"
          className={`payment-method-btn ${method === "mpesa" ? "active" : "inactive"}`}
          onClick={() => setMethod("mpesa")}
        >
          M-PESA
        </button>
      </div>

      <form className="payment-form" onSubmit={handleSubmit}>
        {/* Credit/Debit Card */}
        {method === "card" && (
          <div className="card-section">
            <label htmlFor="fullName" className="form-label">Full Name (as on card)</label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              required
              className="form-input"
            />

            <label htmlFor="cardNumber" className="form-label">Card Number</label>
            <input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              required
              className="form-input"
            />

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="expiry" className="form-label">Expiry Date (MM/YY)</label>
                <input
                  id="expiry"
                  type="text"
                  placeholder="07/27"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-col">
                <label htmlFor="cvv" className="form-label">CVV</label>
                <input
                  id="cvv"
                  type="password"
                  placeholder="123"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <label htmlFor="address" className="form-label">Billing Address (optional)</label>
            <input
              id="address"
              type="text"
              placeholder="123 Safari Lane, Nairobi"
              className="form-input"
            />
          </div>
        )}

        {/* PayPal */}
        {method === "paypal" && (
          <div className="paypal-section">
            <p className="paypal-text">
              You'll be redirected to PayPal to complete your payment securely.
            </p>
            <button
              type="button"
              className="paypal-btn"
            >
              Continue to PayPal
            </button>
          </div>
        )}

        {/* M-PESA */}
        {method === "mpesa" && (
          <div className="mpesa-section">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="+2547XXXXXXXX"
              required
              className="form-input"
            />

            <label htmlFor="amount" className="form-label">Amount (KES)</label>
            <input
              id="amount"
              type="text"
              value="18,500"
              readOnly
              className="form-input readonly"
            />

            <p className="mpesa-note">
              You'll receive a pop-up on your phone to enter your M-PESA PIN.
            </p>
          </div>
        )}

        {/* Terms & Submit */}
        <div className="terms-section">
          <input id="terms" type="checkbox" required className="checkbox" />
          <label htmlFor="terms" className="terms-label">
            I agree to SafariHub's Terms & Conditions and Cancellation Policy.
          </label>
        </div>

        <button
          type="submit"
          className="submit-btn"
        >
          {method === "card"
            ? "Pay with Card"
            : method === "paypal"
            ? "Pay with PayPal"
            : "Pay with M-PESA"}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;