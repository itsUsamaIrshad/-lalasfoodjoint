export const menuCategories = [
  { id: 'special', name: 'Specials', icon: '⭐' },
  { id: 'grilled', name: 'Grilled Burgers', icon: '🔥' },
  { id: 'crumbled', name: 'Crumbled Burgers', icon: '🍗' },
  { id: 'beef', name: 'Beef Burgers', icon: '🥩' },
  { id: 'chickenwraps', name: 'Chicken Wraps', icon: '🌯' },
  { id: 'beefwraps', name: 'Beef Wraps', icon: '🌯' },
  { id: 'sides', name: 'Sides', icon: '🍟' },
  { id: 'sauces', name: 'Sauces', icon: '🥫' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
  { id: 'deals', name: 'Deals', icon: '🎉' },
];

export const menuData = {
  special: [
    {
      name: "Lala's Special Burger",
      price: "$17.99",
      desc: "Extra Grilled Chicken Patty, Juicy Angus Patty, Double Cheese, Fresh Onion, Jalapeños, Salad, Hot Sauce & Peri-Peri Sauce",
      badge: "SIGNATURE",
      accent: "#D32F2F"
    },
    {
      name: "Veggie Burger",
      price: "$13.99",
      desc: "Crispy Veggie Patty, Cheese, Fresh Onion, Pickles, Salad, Tomato Sauce & Garlic Sauce",
      badge: "VEGGIE",
      accent: "#1B5E20"
    },
    {
      name: "Shami Burger",
      price: "$13.99",
      desc: "Pure Pakistani Style — Special Shami, Fresh Onion, Egg, Salad, Mint Sauce, Hot Sauce, Tomato Sauce & Garlic Aioli Sauce",
      badge: "PAKISTANI",
      accent: "#1B5E20"
    }
  ],
  grilled: [
    { name: "Volcano", price: "$14.99", desc: "Extra Grilled Chicken Patty, Cheese, Fresh Onion, Roasted Bell Pepper, Jalapeños, Salad, Hot Sauce & Peri-Peri Sauce", badge: "SPICY", accent: "#E65100" },
    { name: "Lala Chick Burger", price: "$13.99", desc: "Single Grilled Chicken Patty, Cheese, Fresh Onion, Salad, Peri-Peri Sauce", accent: "#E65100" },
    { name: "The Tropical Delight", price: "$13.99", desc: "Single Grilled Chicken Patty, Cheese, Fresh Onion, Juicy Pineapple, Pickles, Salad, Sweet Chilli Sauce & Creamy Garlic Aioli Sauce", accent: "#E65100" },
    { name: "Classic Chicken Cheese", price: "$13.99", desc: "Single Grilled Chicken Patty, Cheese, Fresh Onion, Pickles, Salad, Tomato Sauce & Creamy Garlic Aioli Sauce", accent: "#E65100" }
  ],
  crumbled: [
    { name: "Lala's Zinger", price: "$13.99", desc: "Crispy Crumbled Chicken Patty, Cheese, Pickle, Salad, Sweet Chilli Sauce & Creamy Garlic Aioli Sauce", accent: "#BF360C" },
    { name: "The Arnold", price: "$14.99", desc: "Crispy Crumbled Chicken, Cheese, Fresh Onion, Fried Egg, Pickles, Salad, Sweet Chilli Sauce & Creamy Garlic Aioli Sauce", accent: "#BF360C" },
    { name: "Goldie Hen", price: "$14.99", desc: "Crispy Crumbled Chicken, Cheese, Fresh Onion, Crunchy Hash Brown, Salad, BBQ Sauce & Peri-Peri Sauce", accent: "#BF360C" }
  ],
  beef: [
    { name: "Classic Beef", price: "$13.99", desc: "Juicy Angus Meat, Cheese, Fresh Onion, Pickles, Salad, Tomato Sauce & Creamy Garlic Aioli Sauce", accent: "#4E342E" },
    { name: "Gringo Burger", price: "$15.99", desc: "Juicy Angus Meat, Cheese, Fresh Onion, Fried Egg, Pineapple Slice, Pickles, Tomato Sauce & Mustard Sauce", accent: "#4E342E" },
    { name: "Juicy Lucy Burger", price: "$14.99", desc: "Juicy Angus Meat, Cheese, Fresh Onion, Fried Egg, Pickles, Tomato Sauce & Mustard Sauce", accent: "#4E342E" },
    { name: "The Royal Burger", price: "$14.99", desc: "Crumbled Juicy Angus Meat, Cheese, Fresh Onion, Pickles, BBQ Sauce & Creamy Garlic Aioli Sauce", accent: "#4E342E" },
    { name: "Lava Burger", price: "$14.99", desc: "Juicy Angus Meat, Cheese, Fresh Onion, Fried Bell Pepper, Jalapeños, Salad, Hot Sauce & Peri-Peri Sauce", badge: "SPICY", accent: "#4E342E" },
    { name: "The Hungry Mate", price: "$15.99", desc: "Double Juicy Angus Meat, Double Cheese, Fresh Onion, BBQ Sauce & Creamy Garlic Aioli Sauce", badge: "DOUBLE", accent: "#4E342E" },
    { name: "The Big Burger", price: "$13.99", desc: "Juicy Angus Meat, Cheese, Fresh Onion, Salad, BBQ Sauce & Creamy Garlic Aioli Sauce", accent: "#4E342E" }
  ],
  chickenwraps: [
    { name: "Volcano Wrap", price: "$14.99", desc: "Extra Grilled Chicken Patty, Cheese, Fresh Onion, Roasted Bell Pepper, Jalapeños, Salad, Hot Sauce & Peri-Peri Sauce", badge: "SPICY", accent: "#1B5E20" },
    { name: "Lala Chick Wrap", price: "$13.99", desc: "Single Grilled Chicken Patty, Cheese, Fresh Onion, Salad, Creamy Garlic Aioli Sauce & Peri-Peri Sauce", accent: "#1B5E20" },
    { name: "Lala Zinger Wrap", price: "$13.99", desc: "Single Grilled Chicken Patty, Cheese, Pickles, Salad, Sweet Chilli Sauce & Creamy Garlic Aioli Sauce", accent: "#1B5E20" },
    { name: "Classic Chicken Cheese", price: "$13.99", desc: "Crispy Crumbled Chicken, Cheese, Fresh Onion, Pickles, Salad, Tomato Sauce & Creamy Garlic Aioli Sauce", accent: "#1B5E20" }
  ],
  beefwraps: [
    { name: "Classic Beef Wrap", price: "$13.99", desc: "Juicy Angus Meat, Cheese, Fresh Onion, Pickles, Salad, Tomato Sauce & Creamy Garlic Aioli Sauce", accent: "#33691E" },
    { name: "The Royal Wrap", price: "$14.99", desc: "Crumbled Juicy Angus Meat, Cheese, Fresh Onion, Pickles, BBQ Sauce & Creamy Garlic Aioli Sauce", accent: "#33691E" },
    { name: "Lava Wrap", price: "$14.99", desc: "Juicy Angus Meat, Cheese, Fresh Onion, Roasted Bell Pepper, Jalapeños, Salad, Hot Sauce & Peri-Peri Sauce", badge: "SPICY", accent: "#33691E" },
    { name: "The Big Wrap", price: "$13.99", desc: "Juicy Angus Meat, Cheese, Fresh Onion, Salad, BBQ Sauce & Creamy Garlic Aioli Sauce", accent: "#33691E" },
    { name: "Veggie Wrap", price: "$13.99", desc: "Crispy Veggie Patty, Cheese, Fresh Onion, Salad, Garlic Sauce", badge: "VEGGIE", accent: "#1B5E20" }
  ],
  sides: [
    { name: "Steak Cut Chips", price: "Reg $6.99 / Lrg $8.99", desc: "Golden steak-cut chips, perfectly seasoned", accent: "#F57F17" },
    { name: "Sweet Potato Fries", price: "Reg $6.99 / Lrg $8.99", desc: "Crispy sweet potato fries", accent: "#F57F17" },
    { name: "Spiced Crunchy Wedges", price: "Reg $6.99 / Lrg $8.99", desc: "Crunchy wedges with a signature spice blend", accent: "#F57F17" },
    { name: "Loaded Fries", price: "Reg $6.99 / Lrg $8.99", desc: "Fries loaded with delicious toppings", accent: "#F57F17" },
    { name: "Shoe String Fries", price: "Reg $5.99 / Lrg $7.99", desc: "Thin, crispy shoestring fries", accent: "#F57F17" },
    { name: "Onion Rings", price: "Reg $6.99 / Lrg $8.99", desc: "Crispy golden battered onion rings", accent: "#F57F17" },
    { name: "Nuggets", price: "$1.99 ea", desc: "Crunchy golden chicken nuggets", accent: "#F57F17" },
    { name: "Mozzarella Sticks", price: "$1.99 ea", desc: "Fried golden mozzarella sticks", accent: "#F57F17" },
    { name: "Wings", price: "$1.99 ea", desc: "Spicy crispy chicken wings", accent: "#F57F17" },
    { name: "Chicken Tenderloins", price: "$3.99 ea", desc: "Juicy golden chicken tenderloins", accent: "#F57F17" }
  ],
  sauces: [
    { name: "Mint Sauce", price: "Incl.", desc: "Fresh cooling mint sauce", accent: "#AD1457" },
    { name: "BBQ Sauce", price: "+$0.50", desc: "Rich smoky BBQ sauce", accent: "#AD1457" },
    { name: "Tomato Sauce", price: "Incl.", desc: "Classic tomato sauce", accent: "#AD1457" },
    { name: "Peri Peri Sauce", price: "+$0.50", desc: "Spicy peri-peri sauce", accent: "#AD1457" },
    { name: "Mustard Sauce", price: "+$0.50", desc: "Classic yellow mustard", accent: "#AD1457" },
    { name: "Hot Chilli Sauce", price: "+$0.50", desc: "Fiery hot chilli sauce", accent: "#AD1457" },
    { name: "Sweet Chilli Sauce", price: "+$0.50", desc: "Sweet & mild chilli sauce", accent: "#AD1457" },
    { name: "Creamy Garlic Aioli", price: "+$0.50", desc: "Creamy garlic aioli sauce", accent: "#AD1457" }
  ],
  drinks: [
    { name: "Can", price: "$3.00", desc: "Can of your choice", accent: "#0277BD" },
    { name: "Bottle (1.25L)", price: "$6.00", desc: "1.25L bottle of your choice", accent: "#0277BD" }
  ],
  deals: [
    { name: "The Knockout Deal", price: "$21.99", desc: "1 Burger of your choice + 1 Regular Fries + 1 Can of your choice + 1 Sauce of your choice", serves: "👤 1 Person", badge: "SOLO", accent: "#4A148C" },
    { name: "The Mighty Deal", price: "$45.99", desc: "2 Burgers of your choice + 1 Large Fries + 2 Cans of your choice + 4 Spicy Wings + 2 Sauces of your choice", serves: "👥 2 People", badge: "DUO", accent: "#6A1B9A" },
    { name: "Friends Deal", price: "$67.99", desc: "3 Burgers of your choice + 1 Large Fries + 6 Crunchy Nuggets + 6 Spicy Wings + 1.25L Drink of your choice + 3 Sauces of your choice", serves: "👥 3 People", badge: "GROUP", accent: "#D32F2F" },
    { name: "Family Deal", price: "$92.99", desc: "4 Burgers of your choice + 1 Large Fries + Large Onion Rings + 6 Crunchy Nuggets + 6 Spicy Wings + 1.25L Drink of your choice + 4 Sauces of your choice", serves: "👨‍👩‍👧‍👦 4+ People", badge: "FAMILY", accent: "#1B5E20" }
  ]
};
