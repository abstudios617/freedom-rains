const { 
    addCoupon, getCoupon, updateCoupon, deleteCoupon
} = require('../../controllers/couponController/coupon.controller');

module.exports = (app) => {
    app.post('/coupon/create', addCoupon);
    app.get('/coupon/', getCoupon);
    app.put('/coupon/update/:id', updateCoupon);
    app.delete('/coupon/delete/:id', deleteCoupon);
};
