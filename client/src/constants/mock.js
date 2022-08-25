var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1); //January is 0!
var yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;

export const featured = [
  {
    code: 'BANKCODE',
    endDate: '5-12-2024',
    hasCode: true,
    isEligible: true,
    ranking: 'Top Rated',
    title: 'New Credit Card',
    type: 'discountCode',
    sponsored: true,
    discount: '50% off',
    source: 'https://mma.prnewswire.com/media/524600/ONEUNITED_BANK_LOGO.jpg',
    whitebg: true,
  },
  {
    code: 'MASSAGECODE',
    endDate: '5-12-2024',
    hasCode: true,
    isEligible: true,
    ranking: 'Top Rated',
    title: 'One-time Massage Sessions',
    type: 'discountCode',
    sponsored: false,
    discount: '50% off',
    source: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw66279b42/images/1480000/1481633.jpg',
    whitebg: false,
  }, 
  {
    code: 'FACECREAMCODE',
    endDate: '5-12-2024',
    hasCode: true,
    isEligible: true,
    ranking: 'Top Rated',
    title: 'Annual memberships for $40',
    type: 'discountCode',
    sponsored: false,
    discount: '$20 off',
    source: 'https://cdn.shopify.com/s/files/1/0250/0322/9287/products/brown-and-coconut-body-brightening-face-polish-design-milk-shop-30600996520127_1024x.jpg?v=1634827069',
    whitebg: true,
  }
];
