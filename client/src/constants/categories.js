import appliancesImg from '../assets/homepage/shopping-categories/appliances.png';
import artsCraftsImg from '../assets/homepage/shopping-categories/arts-and-crafts.png';
import automotivesImg from '../assets/homepage/shopping-categories/automotives.png';
import babyImg from '../assets/homepage/shopping-categories/baby.png';
import beautyImg from '../assets/homepage/shopping-categories/beauty-and-personal-care.png';
import cellphoneImg from '../assets/homepage/shopping-categories/cellphone.png';
import clothingImg from '../assets/homepage/shopping-categories/clothing.png';
import electronicsImg from '../assets/homepage/shopping-categories/electronics.png';
import flowersPlantsImg from '../assets/homepage/shopping-categories/flowers-and-plants.png';
import furnitureImg from '../assets/homepage/shopping-categories/furniture.png';
import groceryImg from '../assets/homepage/shopping-categories/grocery.png';
import handbagsWalletsImg from '../assets/homepage/shopping-categories/handbags-and-wallets.png';
import healthWellnessImg from '../assets/homepage/shopping-categories/health-and-wellness.png';
import homeImg from '../assets/homepage/shopping-categories/home.png';
import householdImg from '../assets/homepage/shopping-categories/household-supplies.png';
import jewelryImg from '../assets/homepage/shopping-categories/jewelry.png';
import luggageImg from '../assets/homepage/shopping-categories/luggage.png';
import officeProductsImg from '../assets/homepage/shopping-categories/office-products.png';
import outdoorImg from '../assets/homepage/shopping-categories/outdoor.png';
import patioLawnGardenImg from '../assets/homepage/shopping-categories/patio-lawn-garden.png';
import petsImg from '../assets/homepage/shopping-categories/pets.png';
import shoesImg from '../assets/homepage/shopping-categories/shoes.png';
import sportsImg from '../assets/homepage/shopping-categories/sports.png';
import toysGamesImg from '../assets/homepage/shopping-categories/toys-and-games.png';
import Pet from '../assets/preferences/pet.png';
import Home from '../assets/preferences/home.png';
import Art from '../assets/preferences/art.png';
import Household from '../assets/preferences/household.png';
import Cloth from '../assets/preferences/cloth.png';
import Jewllery from '../assets/preferences/jewellery.png';
import Outdoor from '../assets/preferences/outdoor.png';
import Groceries from '../assets/preferences/groceries.png';
import Baby_product from '../assets/preferences/baby_product.png';
import CellPhone from '../assets/preferences/cellphone.png';
import Toys from '../assets/preferences/toys.png';
import Luggage from '../assets/preferences/luggage.png';
import Health from '../assets/preferences/health.png';
import Handbags from '../assets/preferences/handbags.png';
import Furniture from '../assets/preferences/furniture.png';

export const categories = [
  {
    id: 0,
    name: 'Appliances',
    value: 'appliances',
    selected: false,
    image: appliancesImg,
  },
  {
    id: 1,
    name: 'Arts, Crafts & Sewing',
    value: 'arts_crafts_sewing',
    selected: false,
    image: artsCraftsImg,
  },
  {
    id: 2,
    name: 'Automotive',
    value: 'automotive',
    selected: false,
    image: automotivesImg,
  },
  {
    id: 3,
    name: 'Baby Products',
    value: 'baby_products',
    selected: false,
    image: babyImg,
  },
  {
    id: 4,
    name: 'Beauty & Personal Care',
    value: 'beauty_personal_care',
    selected: false,
    image: beautyImg,
  },
  {
    id: 5,
    name: 'Cell Phones & Accessories',
    value: 'cell_phones_accessories',
    selected: false,
    image: cellphoneImg,
  },
  {
    id: 6,
    name: 'Clothing',
    value: 'clothing',
    selected: false,
    image: clothingImg,
  },
  {
    id: 7,
    name: 'Electronics',
    value: 'electronics',
    selected: false,
    image: electronicsImg,
  },
  {
    id: 8,
    name: 'Flowers & Plants',
    value: 'flowers_plants',
    selected: false,
    image: flowersPlantsImg,
  },
  {
    id: 9,
    name: 'Grocery & Gourmet Food',
    value: 'grocery_gourmet_food',
    selected: false,
    image: groceryImg,
  },
  {
    id: 10,
    name: 'Handbags & Wallets',
    value: 'handbags_wallets',
    selected: false,
    image: handbagsWalletsImg,
  },
  {
    id: 11,
    name: 'Luggage',
    value: 'luggage',
    selected: false,
    image: luggageImg,
  },
  {
    id: 12,
    name: 'Health & Wellness',
    value: 'health_wellness',
    selected: false,
    image: healthWellnessImg,
  },
  {
    id: 13,
    name: 'Home & Furniture',
    value: 'home_furniture',
    selected: false,
    image: furnitureImg,
  },
  {
    id: 14,
    name: 'Household Supplies',
    value: 'household_supplies',
    selected: false,
    image: householdImg,
  },
  {
    id: 15,
    name: 'Jewelry & Watches',
    value: 'jewelry_watches',
    selected: false,
    image: jewelryImg,
  },
  {
    id: 16,
    name: 'Office Products',
    value: 'office_products',
    selected: false,
    image: officeProductsImg,
  },
  {
    id: 17,
    name: 'Patio, Lawn & Garden',
    value: 'patio_lawn_garden',
    selected: false,
    image: patioLawnGardenImg,
  },
  {
    id: 18,
    name: 'Pet Supplies',
    value: 'pet_supplies',
    selected: false,
    image: petsImg,
  },
  {
    id: 19,
    name: 'Shoes',
    value: 'shoes',
    selected: false,
    image: shoesImg,
  },
  {
    id: 20,
    name: 'Sports',
    value: 'sports',
    selected: false,
    image: sportsImg,
  },
  {
    id: 21,
    name: 'Outdoors',
    value: 'outdoors',
    selected: false,
    image: outdoorImg,
  },
  {
    id: 22,
    name: 'Tools & Home Improvement',
    value: 'tools_home_improvement',
    selected: false,
    image: homeImg,
  },
  {
    id: 23,
    name: 'Toys & Video Games',
    value: 'toys_video_games',
    selected: false,
    image: toysGamesImg,
  },
];

export const preferenceCategories = [
  {
    id: 0,
    name: 'Home',
    value: 'home',
    img:Home,
    selected: false,
  },
  {
    id: 1,
    name: 'Pet Supplies',
    value: 'pet_supplies',
    img: Pet ,
    selected: false,
  },
  {
    id: 2,
    name: 'Arts & craft',
    value: 'arts_craft',
    img: Art,
    selected: false,
  },
  {
    id: 3,
    name: 'Household Supplies',
    value: 'household_supplies',
    img: Household,
    selected: false,
  },
  {
    id: 4,
    name: 'Clothing',
    value: 'clothing',
    img: Cloth,
    selected: false,
  },
  {
    id: 5,
    name: 'Jewellery',
    value: 'jewellery',
    img: Jewllery,
    selected: false,
  },
  {
    id: 6,
    name: 'Body Products',
    value: 'body_products',
    img: Baby_product,
    selected: false,
  },
  {
    id: 7,
    name: 'Groceries',
    value: 'groceries',
    img: Groceries,
    selected: false,
  },
  {
    id: 8,
    name: 'Outdoor',
    value: 'outdoor',
    img: Outdoor,
    selected: false,
  },
  {
    id: 9,
    name: 'Cell Phones & accessories',
    value: 'cell_phones_accessories',
    img: CellPhone,
    selected: false,
  },
  {
    id: 10,
    name: 'Handbags & Wallets',
    value: 'handbags_wallets',
    img: Handbags,
    selected: false,
  },
  {
    id: 11,
    name: 'Furniture',
    value: 'furniture',
    img: Furniture,
    selected: false,
  },
  {
    id: 12,
    name: 'Luggage',
    value: 'luggage',
    img: Luggage,
    selected: false,
  },
  {
    id: 13,
    name: 'Health & Wellness',
    value: 'health_wellness',
    img: Health,
    selected: false,
  },
  {
    id: 14,
    name: 'Toys & Games',
    value: 'toys_games',
    img: Toys,
    selected: false,
  },
];

