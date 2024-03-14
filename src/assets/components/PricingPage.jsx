import * as React from "react";

function PricingPage() {
  // Paste the stripe-pricing-table snippet in your React component
  return (
    <div className="pricingPage">
    <h1>Pricing</h1>
    <stripe-pricing-table
      pricing-table-id="prctbl_1OpdzsBpcU7XUiKJfZTKM5Se"
      publishable-key="pk_test_51OpJfDBpcU7XUiKJV7t0jOInCLAa64424L0broxkRBQ6y4k2pHOQ7FlEFPVqJRftpZAc2yj53RYQwt74Hk6xzLd500ZcEZMfVy"
    ></stripe-pricing-table>
    </div>
  );
}

export default PricingPage;
