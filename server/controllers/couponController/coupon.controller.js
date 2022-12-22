const knex = require('../../utils/knex').instance();

module.exports.getCoupon = (req, res) => {
    knex('coupon_data')
        .select('*')
        .then((allCoupons) => res.status(200).json({ gaming_coupon_data: allCoupons }))
        .catch((err) => res.status(500).json({ message: 'Something went wrong', error: err }))
};

// levels completed
// high score (and whether they got new high score)

module.exports.addCoupon = (info, res) => {
    const {
        coupon_id, coupon_name, coupon_desc, created_on, expires_on, coupon_type, coupon_category,
        product_id, product_name, product_link, product_quantity, product_price, product_savings, product_brand, product_store
    } = info.body;
    knex('coupon_data')
        .insert(
            {
                coupon_id: coupon_id,
                coupon_name: coupon_name,
                coupon_desc: coupon_desc,
                created_on: created_on,
                expires_on: expires_on,
                coupon_type: coupon_type,
                coupon_category: coupon_category,
                product_id: product_id,
                product_name: product_name, 
                product_link: product_link,
                product_quantity: product_quantity,
                product_price: product_price,
                product_savings: product_savings,
                product_brand: product_brand,
                product_store: product_store
            }, [
                'coupon_id', 'coupon_name', 'coupon_desc', 'created_on', 'expires_on', 'coupon_type', 'coupon_category', 'product_id', 'product_name',
                'product_link', 'product_quantity', 'product_price', 'product_savings', 'product_brand', 'product_store'
            ]
        )
        .then((addedCoupon) => res.status(200).json(addedCoupon[0]))
        .catch((err) => res.status(500).json(err));
};

module.exports.updateCoupon = (req, res) => {
    knex('coupon_data')
        .where({ user_id: req.params.id })
        .update(
            {
                coupon_id: req.body.coupon_id,
                coupon_name: req.body.coupon_name,
                coupon_desc: req.body.coupon_desc,
                created_on: req.body.created_on,
                expires_on: req.body.expires_on,
                coupon_type: req.body.coupon_type,
                coupon_category: req.body.coupon_category,
                product_id: req.body.product_id,
                product_name: req.body.product_name, 
                product_link: req.body.product_link,
                product_quantity: req.body.product_quantity,
                product_price: req.body.product_price,
                product_savings: req.body.product_savings,
                product_brand: req.body.product_brand,
                product_store: req.body.product_store
            }, [
                'coupon_id', 'coupon_name', 'coupon_desc', 'created_on', 'expires_on', 'coupon_type', 'coupon_category', 'product_id', 'product_name',
                'product_link', 'product_quantity', 'product_price', 'product_savings', 'product_brand', 'product_store'
            ]
        )
        .then((updatedCoupon) => res.status(200).json(updatedCoupon[0]))
        .catch((err) => res.status(500).json(err));
};

module.exports.deleteCoupon = (req, res) => {
    knex('coupon_data')
        .where({ user_id: req.params.id })
        .del()
        .then((deletedCoupon) => res.status(200).json(deletedCoupon))
        .catch((err) => res.status(500).json(err));
};