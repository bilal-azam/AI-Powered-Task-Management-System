// UI Component for Applying Coupons at Checkout
function CouponUI({ onApplyCoupon }) {
    return (
        <div className="coupon-ui">
            <h2>Have a Coupon?</h2>
            <input type="text" placeholder="Enter coupon code" />
            <button onClick={onApplyCoupon}>Apply</button>
        </div>
    );
}

module.exports = { CouponUI };