import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect  ,useLayoutEffect } from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { CurrencyRupeeIcon } from '@heroicons/react/16/solid';

const App = () => {
  const today = new Date();
  const [currentDay, setCurrentDay] = useState(today.getDate());
  const [selectedMenuType, setSelectedMenuType] = useState(() => {
    // Retrieve the selected menu type from local storage if available
    const storedMenuType = localStorage.getItem('selectedMenuType');
    return storedMenuType ? storedMenuType : "special"; // Default to special menu if not stored
  });
  const [menus, setMenus] = useState({}); // Object to hold all menus
  
  const currDate = today.getDate();
  const currHour =today.getHours();
  const currMin =today.getMinutes();

  useEffect(() => {
    const storedMenus = localStorage.getItem('menus');
    const storedDate = localStorage.getItem('storedDate');
    if (storedMenus && storedDate === currDate) {
      // If menus are found in local storage, parse and set them
      setMenus(JSON.parse(storedMenus)[selectedMenuType]);
    }
  
    else {
      const fetchedMenus = {
        veg: 
      {
        1: {
          breakfast: "Plain Dosa (THIN), Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Curd, Masala Papad, Paneer Tikka Masala, Keerai Kootu, Sweet: Gulab Jamun",
          snacks: "Eggless Cake, Tea, Coffee, Milk",
          dinner: "Phulka Variety Rice, Dal, White Rice, Rasam, Sambar, Butter Milk, Aloo Brinjal Drumstick Masala, Fruits: Seasonal Fruits"
        },
        2: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Tadka, White Rice, Kara Kozhambu, Rasam, Kadi Pakoda / Dahi Vada, Papad, Sambar, Capsicum Peas Masala",
          snacks: "Crouquette Potato, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Masala, White Rice, Rasam, Sambar, Butter Milk, Schezwan Veg Fried Rice, Gobi Manchurian, Fruits: Papaya"
        },
        3: {
          breakfast: "Podi Idly, Paav Bhaji, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Curd, Fryums, Veg Biryani, Oil Brinjal, Onion Raita, Sweet: Ice Cream",
          snacks: "Channa Chat, Mint Chutney, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Toor, White Rice, Rasam, Sambar, Butter Milk, Lemon Rice, Aloo Capsicum Muttar Masala, Fruits: Seasonal Fruits"
        },
        4: {
          breakfast: "Poori, Aloo Masala, Poha Namkeen, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Panchmela, White Rice, Sambar, Rasam, Loose Curd, Kadai Paneer",
          snacks: "Masala Peanuts / Sundal, Tea, Coffee, Milk",
          dinner: "Methi Roti, Plain Dosa, Sambar, Chutney, Rasam, Sambar, Butter Milk, Poriyal, Channa Masala, White Rice, Fruits: Papaya"
        },
        5: {
          breakfast: "Gobi Paratha, Curd, Pickle, Kitchadi, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Tadka, White Rice, Sambar, Rasam, Curd, Papad, Veg Jalfrezi, Sweet: Fruit Kesari",
          snacks: "Stuffed Bread Roll, Veg Roll, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Fry, White Rice, Rasam, Sambar, Curd, Variety Rice, Veg Kofta Curry, Fruits: Fruit Salad with Ice Cream"
        },
        6: {
          breakfast: "Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Ghee Phulka, Dal Fry, White Rice, Sambar, Rasam, Curd, Fryums, Veg Hyderabadi, Sweet: Gova Jangri",
          snacks: "Onion Pakoda, Chutney, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Tadka, White Rice, Rasam, Sambar, Butter Milk, Puliyodarai, Aloo Podimas, Bhindi Masala, Fruits: Watermelon"
        },
        7: {
          breakfast: "Gobi Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Masala, White Rice, Sambar, Rasam, Curd, Onion Rings, Green Veg Sabzi (no potatoes), Sweet: Badushah / Coconut Laddu",
          snacks: "Dahi Papdi Chat / Dahi Poori Chat, Tea, Coffee, Milk",
          dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Jeera Rice, Cabbage Poriyal, Fruits: Banana"
        },
        8: {
          breakfast: "Kal Dosa, Vada Curry / Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Lasooni, White Rice, Sambar, Rasam, Loose Curd, Wheel Chips, Paneer Makhanwala, Sweet: Bread Halwa",
          snacks: "Eggless Cake, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Makhani, White Rice, Rasam, Sambar, Butter Milk, Chutney, Idly, Sambar, Beetroot Poriyal, Fruits: Seasonal Fruits"
        },
        9: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Maharani, White Rice, Sambar, Rasam, Kara Kozhambu / More Kozhambu, Poriyal, Dahi Vada, Fryums, Sweet: Gulab Jamun",
          snacks: "Onion Bajji / Onion Pakoda, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Rajma, White Rice, Rasam, Sambar, Curd, Garlic Sauce, Veg Fried Rice, Ridge Gourd Tomato Sabzi, Fruits: Watermelon"
        },
        10: {
          breakfast: "Vada Pav / Pav Bhaji, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Papad, Veg Biryani, Paneer Bhurji, Onion Raita, Sweet: Ice Cream",
          snacks: "Veg Puffs, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dal, White Rice, Rasam, Sambar, Loose Curd, Aloo Gobi Capsicum Masala, Fruits: Papaya"
        },
        11: {
          breakfast: "Poori, Aloo Masala, Semiya, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Ajwain, White Rice, Sambar, Rasam, Butter Milk, Onion Rings, Soya Chunk Tikka Masala, Sweet: Rava Laddu / Boondhi Laddu",
          snacks: "Veg Cutlet, Tea, Coffee, Milk",
          dinner: "Roti, Dosa, Chutney, Dal, White Rice, Rasam, Sambar, Loose Curd, Green Veg Sabzi, Fruits: Fresh Fruits"
        },
        12: {
          breakfast: "Idly, Vada, Sambar, Chutney, Kitchadi, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Tadka, White Rice, Rasam, Loose Curd, Papad, Coconut Rice / Lemon Rice, Thuvayal, Soya Chunk Masala",
          snacks: "Veg Samosa / Imly Sauce, Tea, Coffee, Milk",
          dinner: "Chapathi, Dal, White Rice, Rasam, Sambar, Butter Milk, Banaras Aloo Baingan, Thai Veg Fried Rice, Garlic Sauce, Hot Badam Milk, Banana"
        },
        13: {
          breakfast: "Plain Masala Dosa (Thin), Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Punjabi, White Rice, Sambar, Rasam, Curd, Fryums, Paneer Do Piaza, Poriyal, Sweet: Jangri / Jalebi",
          snacks: "Pani Poori / Channa Chat, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Fry, White Rice, Rasam, Sambar, Curd Rice, Meal Maker & Capsicum Masala, Fruits: Watermelon"
        },
        14: {
          breakfast: "Aloo Paratha, Curd, Pickle, Rava Upma, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Curd, Papad, Poriyal, Veg Kolhapuri",
          snacks: "Raw Banana Bajji, Coconut Chutney, Tea, Coffee, Milk",
          dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Variety Rice, Green Poriyal, Fruits: Banana"
        },
        15: {
          breakfast: "Plain Dosa (THIN), Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Curd, Masala Papad, Paneer Tikka Masala, Keerai Kootu, Sweet: Gulab Jamun",
          snacks: "Eggless Cake, Tea, Coffee, Milk",
          dinner: "Phulka Variety Rice, Dal, White Rice, Rasam, Sambar, Butter Milk, Aloo Brinjal Drumstick Masala, Fruits: Seasonal Fruits"
        },
        16: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Tadka, White Rice, Kara Kozhambu, Rasam, Kadi Pakoda / Dahi Vada, Papad, Sambar, Capsicum Peas Masala",
          snacks: "Crouquette Potato, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Masala, White Rice, Rasam, Sambar, Butter Milk, Schezwan Veg Fried Rice, Gobi Manchurian, Fruits: Papaya"
        },
        17: {
          breakfast: "Podi Idly, Paav Bhaji, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Curd, Fryums, Veg Biryani, Oil Brinjal, Onion Raita, Sweet: Ice Cream",
          snacks: "Channa Chat, Mint Chutney, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Toor, White Rice, Rasam, Sambar, Butter Milk, Lemon Rice, Aloo Capsicum Muttar Masala, Fruits: Seasonal Fruits"
        },
        18: {
          breakfast: "Poori, Aloo Masala, Poha Namkeen, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Panchmela, White Rice, Sambar, Rasam, Loose Curd, Kadai Paneer",
          snacks: "Masala Peanuts / Sundal, Tea, Coffee, Milk",
          dinner: "Methi Roti, Plain Dosa, Sambar, Chutney, Rasam, Sambar, Butter Milk, Poriyal, Channa Masala, White Rice, Fruits: Papaya"
        },
        19: {
          breakfast: "Gobi Paratha, Curd, Pickle, Kitchadi, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Tadka, White Rice, Sambar, Rasam, Curd, Papad, Veg Jalfrezi, Sweet: Fruit Kesari",
          snacks: "Stuffed Bread Roll, Veg Roll, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Fry, White Rice, Rasam, Sambar, Curd, Variety Rice, Veg Kofta Curry, Fruits: Fruit Salad with Ice Cream"
        },
        20: {
          breakfast: "Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Ghee Phulka, Dal Fry, White Rice, Sambar, Rasam, Curd, Fryums, Veg Hyderabadi, Sweet: Gova Jangri",
          snacks: "Onion Pakoda, Chutney, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Tadka, White Rice, Rasam, Sambar, Butter Milk, Puliyodarai, Aloo Podimas, Bhindi Masala, Fruits: Watermelon"
        },
        21: {
          breakfast: "Gobi Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Masala, White Rice, Sambar, Rasam, Curd, Onion Rings, Green Veg Sabzi (no potatoes), Sweet: Badushah / Coconut Laddu",
          snacks: "Dahi Papdi Chat / Dahi Poori Chat, Tea, Coffee, Milk",
          dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Jeera Rice, Cabbage Poriyal, Fruits: Banana"
        },
        22: {
          breakfast: "Kal Dosa, Vada Curry / Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Lasooni, White Rice, Sambar, Rasam, Loose Curd, Wheel Chips, Paneer Makhanwala, Sweet: Bread Halwa",
          snacks: "Eggless Cake, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Makhani, White Rice, Rasam, Sambar, Butter Milk, Chutney, Idly, Sambar, Beetroot Poriyal, Fruits: Seasonal Fruits"
        },
        23: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Maharani, White Rice, Sambar, Rasam, Kara Kozhambu / More Kozhambu, Poriyal, Dahi Vada, Fryums, Sweet: Gulab Jamun",
          snacks: "Onion Bajji / Onion Pakoda, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Rajma, White Rice, Rasam, Sambar, Curd, Garlic Sauce, Veg Fried Rice, Ridge Gourd Tomato Sabzi, Fruits: Watermelon"
        },
        24: {
          breakfast: "Vada Pav / Pav Bhaji, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Papad, Veg Biryani, Paneer Bhurji, Onion Raita, Sweet: Ice Cream",
          snacks: "Veg Puffs, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dal, White Rice, Rasam, Sambar, Loose Curd, Aloo Gobi Capsicum Masala, Fruits: Papaya"
        },
        25: {
          breakfast: "Poori, Aloo Masala, Semiya, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Ajwain, White Rice, Sambar, Rasam, Butter Milk, Onion Rings, Soya Chunk Tikka Masala, Sweet: Rava Laddu / Boondhi Laddu",
          snacks: "Veg Cutlet, Tea, Coffee, Milk",
          dinner: "Roti, Dosa, Chutney, Dal, White Rice, Rasam, Sambar, Loose Curd, Green Veg Sabzi, Fruits: Fresh Fruits"
        },
        26: {
          breakfast: "Idly, Vada, Sambar, Chutney, Kitchadi, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Tadka, White Rice, Rasam, Loose Curd, Papad, Coconut Rice / Lemon Rice, Thuvayal, Soya Chunk Masala",
          snacks: "Veg Samosa / Imly Sauce, Tea, Coffee, Milk",
          dinner: "Chapathi, Dal, White Rice, Rasam, Sambar, Butter Milk, Banaras Aloo Baingan, Thai Veg Fried Rice, Garlic Sauce, Hot Badam Milk, Banana"
        },
        27: {
          breakfast: "Plain Masala Dosa (Thin), Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Punjabi, White Rice, Sambar, Rasam, Curd, Fryums, Paneer Do Piaza, Poriyal, Sweet: Jangri / Jalebi",
          snacks: "Pani Poori / Channa Chat, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Fry, White Rice, Rasam, Sambar, Curd Rice, Meal Maker & Capsicum Masala, Fruits: Watermelon"
        },
        28: {
          breakfast: "Aloo Paratha, Curd, Pickle, Rava Upma, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Curd, Papad, Poriyal, Veg Kolhapuri",
          snacks: "Raw Banana Bajji, Coconut Chutney, Tea, Coffee, Milk",
          dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Variety Rice, Green Poriyal, Fruits: Banana"
        },
        29: {
          breakfast: "Plain Dosa (THIN), Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Curd, Masala Papad, Paneer Tikka Masala, Keerai Kootu, Sweet: Gulab Jamun",
          snacks: "Eggless Cake, Tea, Coffee, Milk",
          dinner: "Phulka Variety Rice, Dal, White Rice, Rasam, Sambar, Butter Milk, Aloo Brinjal Drumstick Masala, Fruits: Seasonal Fruits"
        },
        30: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Tadka, White Rice, Kara Kozhambu, Rasam, Kadi Pakoda / Dahi Vada, Papad, Sambar, Capsicum Peas Masala",
          snacks: "Crouquette Potato, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dal Masala, White Rice, Rasam, Sambar, Butter Milk, Schezwan Veg Fried Rice, Gobi Manchurian, Fruits: Papaya"
        },
        
        
      },
      
    nonVeg: {

      1: {
        breakfast: "Plain Dosa (THIN), Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Egg (2 nos)",
        lunch: "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Curd, Masala Papad, Chicken 65, Keerai Kootu, Sweet: Gulab Jamun",
        snacks: " Cake, Tea, Coffee, Milk",
        dinner: "Phulka, Variety Rice, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Brinjal Drumstick Masala, Fruits: Seasonal Fruits"
      },
      2: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Thadka, White Rice, Kara Kozhambu, Rasam, Dahi Vada / Kadi Pakoda, Papad, Capsicum Peas Masala, Sambar",
        snacks: "Crouquete Potato, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Masala, White Rice, Rasam, Sambar, Butter Milk, Schezwan Egg Fried Rice, Gobi Manchurian, Fruits: Papaya"
      },
      3: {
        breakfast: "Podi Idly, Paav Bhaji, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Egg Masala (2 nos)",
        lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Fryums, Onion Raitha, Chicken Biryani, Oil Brinjal, Sweet: Ice Cream",
        snacks: "Channa Chat, Mint Chutney, Tea, Coffee, Milk",
        dinner: "Chapathi, Dhal Thoor, White Rice, Rasam, Sambar, Butter Milk, Lemon Rice, Aloo Capsicum Peas Masala, Seasonal Fruits"
      },
      4: {
        breakfast: "Poori, Aloo Masala, Poha Namkeen, B,B,J, Tea, Coffee, Milk, Chutney, Masala Omelette (2 nos)",
        lunch: "Phulka, Dal Panchmela, White Rice, Sambar, Rasam, Loose Curd, Onion Rings, Kadai Chicken, Poriyal",
        snacks: "Masala Peanuts / Sundal, Tea, Coffee, Milk",
        dinner: "Pudhina Roti, Plain Dosa, Sambar, Chutney, Rasam, Butter Milk, Poriyal, Channa Masala, Fruits: Musk Melon"
      },
      5: {
        breakfast: "Gobi Paratha, Curd, Kitchadi, Sambar, B,B,J, Tea, Coffee, Milk, Pickle, Boiled Egg Masala Dry (2 nos)",
        lunch: "Phulka, Dal Thadka, White Rice, Sambar, Rasam, Curd, Papad, Veg Jal Frizhi, Sweet: Fruit Kesari",
        snacks: "Stuffed Bread Roll, Veg Roll, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Fry, White Rice, Rasam, Sambar, Curd, Variety Rice, Veg Kofta Curry, Fruits: Fruit Salad with Ice Cream"
      },
      6: {
        breakfast: "Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Scrambled Egg (2 nos)",
        lunch: "Phulka, Dal Fry, White Rice, Sambar, Rasam, Butter Milk, Fryums, Poriyal, Fryums, Chicken Hydrabadi, Sweet: Gova Jangri",
        snacks: "Onion Pakoda, Chutney, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Thadka, White Rice, Rasam, Sambar, Butter Milk, Puliyodarai, Aloo Podimas, Bhindi Masala, Fruits: Water Melon"
      },
      7: {
        breakfast: "Gobi Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Fried Egg Masala (2 nos)",
        lunch: "Phulka, Dal Masala, White Rice, Sambar, Rasam, Butter Milk, Onion Rings, Green Veg Sabzi (no potatoes), Sweet: Badushai / Coconut Laddu",
        snacks: "Dahi Papdi Chat / Dahi Poori Chat, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Jeera Rice, Poriyal, Fruits: Banana"
      },
      8: {
        breakfast: "Kal Dosa, Vadacurry / Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Lasoni, White Rice, Sambar, Rasam, Loose Curd, Wheel Chips, Chicken 65 / Chicken Tikka Masala, Avarakkai Poriyal, Bread Halwa",
        snacks: "Eggless Cake, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Makhani, White Rice, Rasam, Sambar, Butter Milk, Chutney, Idly, Sambar, Beetroot Poriyal, Fruits: Seasonal Fruits"
      },
      9: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Fried Egg (2 nos)",
        lunch: "Phulka, Dal Maharani, White Rice, Sambar, Rasam, Karakozhambu / More Kozhambu, Poriyal, Dahi Vada, Fryums, Sweet: Gulab Jamun",
        snacks: "Onion Bajji / Onion Pakoda, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Rajma, White Rice, Rasam, Sambar, Curd, Garlic Sauce, Egg Fried Rice, Thurai Tomato Sabzi, Fruits: Watermelon"
      },
      10: {
        breakfast: "Vada Paav / Paav Bhaji, Pongal, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Papad, Onion Raitha, Chicken Biryani, Banaras Baigan, Sweet: Ice Cream",
        snacks: "Veg Puffs, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Gobi Capsicum Masala, Fruits: Papaya"
      },
      11: {
        breakfast: "Poori, Aloo Masala, Semiya, Chutney, B,B,J, Tea, Coffee, Milk, French Toast",
        lunch: "Phulka, Dal Ajwain, White Rice, Sambar, Rasam, Curd, Onion Rings, Egg Masala, Poriyal, Sweet: Rava Laddu / Boondhi Laddu",
        snacks: "Veg Cutlet, Tea, Coffee, Milk",
        dinner: "Roti, Dosa, Chutney, Dhal, White Rice, Rasam, Sambar, Butter Milk, Green Veg Sabzi, Fresh Fruits"
      },
      12: {
        breakfast: "Idly, Vada, Sambar, Chutney, Kitchadi, B,B,J, Tea, Coffee, Milk, Fried Eggs (2 nos)",
        lunch: "Phulka, Dal Thadka, White Rice, Rasam, Loose Curd, Papad, Coconut Rice / Lemon Rice, Thuvayal, Soya Chunk Masala",
        snacks: "Veg Samosa / Imly Sauce, Tea, Coffee, Milk",
        dinner: "Chapathi, Dhal, White Rice, Rasam, Sambar, Butter Milk, Banaras Aloo Baigan, Egg Thai Fried Rice, Garlic Sauce, Hot Badam Milk, Banana"
      },
      13: {
        breakfast: "Plain Masala Dosa (Thin), Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Boiled Egg (2 nos)",
        lunch: "Phulka, Dal Lasoni, White Rice, Sambar, Rasam, Curd, Fryums, Chicken Do Piaza, Poriyal, Sweet: Jangri / Jilebi",
        snacks: "Pani Poori / Channa Chat, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Fry, White Rice, Rasam, Sambar, Curd Rice, Meal Maker Peas & Capsicum Masala, Fruits: Watermelon"
      },
      14: {
        breakfast: "Aloo Paratha, Curd, Pickle, Rava Upma, B,B,J, Tea, Coffee, Milk, Sambar, Chutney, Scrambled Egg (2 nos)",
        lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Curd, Papad, Poriyal, Veg Kolhapuri",
        snacks: "Raw Banana Bajji, Coconut Chutney, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Variety Rice, Green Poriyal, Fruits: Banana"
      },
      15: {
        breakfast: "Plain Dosa (THIN), Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Egg (2 nos)",
        lunch: "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Curd, Masala Papad, Chicken 65, Keerai Kootu, Sweet: Gulab Jamun",
        snacks: " Cake, Tea, Coffee, Milk",
        dinner: "Phulka, Variety Rice, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Brinjal Drumstick Masala, Fruits: Seasonal Fruits"
      },
      16: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Thadka, White Rice, Kara Kozhambu, Rasam, Dahi Vada / Kadi Pakoda, Papad, Capsicum Peas Masala, Sambar",
        snacks: "Crouquete Potato, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Masala, White Rice, Rasam, Sambar, Butter Milk, Schezwan Egg Fried Rice, Gobi Manchurian, Fruits: Papaya"
      },
      17: {
        breakfast: "Podi Idly, Paav Bhaji, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Egg Masala (2 nos)",
        lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Fryums, Onion Raitha, Chicken Biryani, Oil Brinjal, Sweet: Ice Cream",
        snacks: "Channa Chat, Mint Chutney, Tea, Coffee, Milk",
        dinner: "Chapathi, Dhal Thoor, White Rice, Rasam, Sambar, Butter Milk, Lemon Rice, Aloo Capsicum Peas Masala, Seasonal Fruits"
      },
      18: {
        breakfast: "Poori, Aloo Masala, Poha Namkeen, B,B,J, Tea, Coffee, Milk, Chutney, Masala Omelette (2 nos)",
        lunch: "Phulka, Dal Panchmela, White Rice, Sambar, Rasam, Loose Curd, Onion Rings, Kadai Chicken, Poriyal",
        snacks: "Masala Peanuts / Sundal, Tea, Coffee, Milk",
        dinner: "Pudhina Roti, Plain Dosa, Sambar, Chutney, Rasam, Butter Milk, Poriyal, Channa Masala, Fruits: Musk Melon"
      },
      19: {
        breakfast: "Gobi Paratha, Curd, Kitchadi, Sambar, B,B,J, Tea, Coffee, Milk, Pickle, Boiled Egg Masala Dry (2 nos)",
        lunch: "Phulka, Dal Thadka, White Rice, Sambar, Rasam, Curd, Papad, Veg Jal Frizhi, Sweet: Fruit Kesari",
        snacks: "Stuffed Bread Roll, Veg Roll, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Fry, White Rice, Rasam, Sambar, Curd, Variety Rice, Veg Kofta Curry, Fruits: Fruit Salad with Ice Cream"
      },
      20: {
        breakfast: "Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Scrambled Egg (2 nos)",
        lunch: "Phulka, Dal Fry, White Rice, Sambar, Rasam, Butter Milk, Fryums, Poriyal, Fryums, Chicken Hydrabadi, Sweet: Gova Jangri",
        snacks: "Onion Pakoda, Chutney, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Thadka, White Rice, Rasam, Sambar, Butter Milk, Puliyodarai, Aloo Podimas, Bhindi Masala, Fruits: Water Melon"
      },
      21: {
        breakfast: "Gobi Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Fried Egg Masala (2 nos)",
        lunch: "Phulka, Dal Masala, White Rice, Sambar, Rasam, Butter Milk, Onion Rings, Green Veg Sabzi (no potatoes), Sweet: Badushai / Coconut Laddu",
        snacks: "Dahi Papdi Chat / Dahi Poori Chat, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Jeera Rice, Poriyal, Fruits: Banana"
      },
      22: {
        breakfast: "Kal Dosa, Vadacurry / Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Lasoni, White Rice, Sambar, Rasam, Loose Curd, Wheel Chips, Chicken 65 / Chicken Tikka Masala, Avarakkai Poriyal, Bread Halwa",
        snacks: "Eggless Cake, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Makhani, White Rice, Rasam, Sambar, Butter Milk, Chutney, Idly, Sambar, Beetroot Poriyal, Fruits: Seasonal Fruits"
      },
      23: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Fried Egg (2 nos)",
        lunch: "Phulka, Dal Maharani, White Rice, Sambar, Rasam, Karakozhambu / More Kozhambu, Poriyal, Dahi Vada, Fryums, Sweet: Gulab Jamun",
        snacks: "Onion Bajji / Onion Pakoda, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Rajma, White Rice, Rasam, Sambar, Curd, Garlic Sauce, Egg Fried Rice, Thurai Tomato Sabzi, Fruits: Watermelon"
      },
      24: {
        breakfast: "Vada Paav / Paav Bhaji, Pongal, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Papad, Onion Raitha, Chicken Biryani, Banaras Baigan, Sweet: Ice Cream",
        snacks: "Veg Puffs, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Gobi Capsicum Masala, Fruits: Papaya"
      },
      25: {
        breakfast: "Poori, Aloo Masala, Semiya, Chutney, B,B,J, Tea, Coffee, Milk, French Toast",
        lunch: "Phulka, Dal Ajwain, White Rice, Sambar, Rasam, Curd, Onion Rings, Egg Masala, Poriyal, Sweet: Rava Laddu / Boondhi Laddu",
        snacks: "Veg Cutlet, Tea, Coffee, Milk",
        dinner: "Roti, Dosa, Chutney, Dhal, White Rice, Rasam, Sambar, Butter Milk, Green Veg Sabzi, Fresh Fruits"
      },
      26: {
        breakfast: "Idly, Vada, Sambar, Chutney, Kitchadi, B,B,J, Tea, Coffee, Milk, Fried Eggs (2 nos)",
        lunch: "Phulka, Dal Thadka, White Rice, Rasam, Loose Curd, Papad, Coconut Rice / Lemon Rice, Thuvayal, Soya Chunk Masala",
        snacks: "Veg Samosa / Imly Sauce, Tea, Coffee, Milk",
        dinner: "Chapathi, Dhal, White Rice, Rasam, Sambar, Butter Milk, Banaras Aloo Baigan, Egg Thai Fried Rice, Garlic Sauce, Hot Badam Milk, Banana"
      },
      27: {
        breakfast: "Plain Masala Dosa (Thin), Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Boiled Egg (2 nos)",
        lunch: "Phulka, Dal Lasoni, White Rice, Sambar, Rasam, Curd, Fryums, Chicken Do Piaza, Poriyal, Sweet: Jangri / Jilebi",
        snacks: "Pani Poori / Channa Chat, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Fry, White Rice, Rasam, Sambar, Curd Rice, Meal Maker Peas & Capsicum Masala, Fruits: Watermelon"
      },
      28: {
        breakfast: "Aloo Paratha, Curd, Pickle, Rava Upma, B,B,J, Tea, Coffee, Milk, Sambar, Chutney, Scrambled Egg (2 nos)",
        lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Curd, Papad, Poriyal, Veg Kolhapuri",
        snacks: "Raw Banana Bajji, Coconut Chutney, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Variety Rice, Green Poriyal, Fruits: Banana"
      },
      29: {
        breakfast: "Plain Dosa (THIN), Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Egg (2 nos)",
        lunch: "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Curd, Masala Papad, Chicken 65, Keerai Kootu, Sweet: Gulab Jamun",
        snacks: " Cake, Tea, Coffee, Milk",
        dinner: "Phulka, Variety Rice, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Brinjal Drumstick Masala, Fruits: Seasonal Fruits"
      },
      30: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Thadka, White Rice, Kara Kozhambu, Rasam, Dahi Vada / Kadi Pakoda, Papad, Capsicum Peas Masala, Sambar",
        snacks: "Crouquete Potato, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Masala, White Rice, Rasam, Sambar, Butter Milk, Schezwan Egg Fried Rice, Gobi Manchurian, Fruits: Papaya"
      },

      
      
    },      
    special: {
      
      1: {
        breakfast: "Masala Ghee Roast Dosa (Thin), Sambar, Fresh Juice, Cold Milk, Chocos, Chutney, B,B,J, Tea, Coffee, Milk, Moong Dal Sprout, Scrambled Egg (2)",
        lunch: "Phulka, Dal Fry, Malai Chicken Tikka, Paneer Amritsari, White Rice, Sambar, Poondu Rasam, Loose Curd, Fryums, Keera Kootu, Sweet: Gulab Jamun/ Makhan Peda",
        snacks: "Brownie Cake, Sauce",
        dinner: "Phulka, Dal Maharani, White Rice, Dhum Aloo / Banaras Aloo, Rasam, Curd, Meal Maker Pulav, Cream of Tomato, Fruits: Papaya"
      },
      2: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Fresh Juice, Cold Milk, Chocos, Sambar, B,B,J, Tea, Coffee, Milk, Salad, Egg Burji (2)",
        lunch: "Phulka, Dal Makhani, Dingri Muttar, Dahi Vada, Poriyal, Sambar / Karakolambu, White Rice, Paruppu Rasam, Fryums, Sweet: Ghee Mysore Paak",
        snacks: "Tea, Coffee, Milk, French Fries, Sauce, Masala Tea, Coffee, Milk",
        dinner: "Phulka, Dal Fry, Schezwan Egg & Veg Rice, Baby Corn Manchurian, Poriyal, Loose Curd, White Rice, Sambar, Rasam, Fresh Garden Peas Soup, Fruits: Fresh Fruits"
      },
      3: {
        breakfast: "Podi Idly, Pav Bhaji, Sambar, Chutney, Cold Milk, Corn Flakes, Tea, Coffee, Milk, Fresh Juice, B,B,J, Sprouted Channa Black, Spanish Omelette",
        lunch: "Phulka, Dal, Chicken Biryani, Veg Biryani, Banaras Baigan, Dragon Paneer, Onion Raitha, White Rice, Sambar, Tomato Rasam, Papad, Sweet: Ice Cream",
        snacks: "Hot Dog (Sauce), Dahi Papdi Chat, Jal Jeera, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Masala, Butter Peas Masala, White Rice, Sambar, Rasam, Aloo Jeera, Curd, Variety Rice, Sweet Corn Soup, Fruits: Cut Fruits"
      },
      4: {
        breakfast: "Poori, Aloo Masala, Poha Namkeen, Chutney, Banana Milk Shake, Cold Milk, Chocos, B,B,J, Tea, Coffee, Milk, Cow Peas Salad, French Toast",
        lunch: "Phulka, Chicken Tikka Lababdar, Dal Fry, Paneer Butter Masala, Poriyal, Loose Curd, White Rice, Sambar, Pepper Rasam, Wheel Chips, Sweet: Mothichoor Laddu / Rava Laddu",
        snacks: "Mysore Bonda / Masala Sweet Corn (1 cup), Tea, Coffee, Milk",
        dinner: "Pudhina Roti, Plain Dosa, Sambar, Chutney, Loose Curd, Dal Maharani, Channa Masala, White Rice, Rasam, Veg Mushroom Soup, Fruits: Seasonal"
      },
      5: {
        breakfast: "Gobi Paratha, Curd, Kitchadi, Sambar, Date Milk Shake, Cold Milk, Cornflakes, B,B,J, Pickle, Tea, Coffee, Milk, Chutney, Black Eye Peas Salad, Fried Eggs",
        lunch: "Phulka, Dal Ajwain, Veg Jal Frazi, White Rice, Pineapple Rasam, Curd, Bisibilla Bath, Potato Chips, Sweet: Carrot Halwa",
        snacks: "Onion Samosa / Veg Samosa, Imly Chutney, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Fry, Veg & Egg Fried Rice, Baby Corn Manchurian, Bhindi Jaipuri, White Rice, Sambar, Rasam, Curd, Veg Manchow Soup, Cut Fruits with Ice Cream"
      },
      6: {
        breakfast: "Mysore Masala Dosa (Thin), Sambar, Chutney, Fresh Juice, Cold Milk, Chocos, B,B,J, Tea, Coffee, Milk, Green Salad, Egg Burji (2 nos)",
        lunch: "Diamond Chapathi, Dal Fry, Nilagiri Chicken, Paneer Hariyali, Curd, Aloo Methi / Aloo Saagwala, White Rice, Sambar, Rasam, Fryums, Sweet: Gova Jangri",
        snacks: "Veg Burger / Potato Croissant Fry, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Maharani, Bhindi Do Piaza, Aloo Podimas, White Rice, Sambar, Rasam, Loose Curd, Puliyodarai, Milagutanya Soup, Fruits: Papaya"
      },
      7: {
        breakfast: "Paneer Paratha, Pongal, Vada, Sambar, Fresh Juice, Cold Milk, Cornflakes, Chutney, B,B,J, Tea, Coffee, Milk, Black Channa Sprout, Boiled Eggs (2 nos)",
        lunch: "Phulka, Malabar Fish Curry / Masala Fried Fish, Nargesi Kofta Curry, White Rice, Sambar, Wheel Chips, Dal Rajma, Butter Milk, Rasam, Sweet: Rasmalai / Rasgulla",
        snacks: "Spring Roll, Sauce, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Vaangi Baath, Poriyal, Curd, Cream of Broccoli Soup, Fruit Salad"
      },
      8: {
        breakfast: "Kal Dosa, Vada Curry / Sambar, Chutney, Fresh Juice, Cold Milk, Cornflakes, B,B,J, Tea, Coffee, Milk, Moong Dal Sprout, Scrambled Egg (2)",
        lunch: "Phulka, Dal, Tandoori Chicken, Paneer Fingers, White Rice, Sambar, Green Vegetable Subzi (without potato), Curd, Fryums, Pineapple Rasam, Sweet: Milk Peda",
        snacks: "Brownie Cake / Hot Badam Milk, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Makhani, Idly, Sambar, Chutney, White Rice, Dhum Aloo / Banaras Aloo, White Rice, Rasam, Loose Curd, Cream of Tomato Soup, Fruits: Fresh Fruits"
      },
      9: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Fresh Juice, Cold Milk, Chocos, Sambar, Pickle, B,B,J, Tea, Coffee, Milk, Salad, Boiled Egg Masala",
        lunch: "Phulka, Dal Maharani, Mushroom Peas Masala, Dahi Vada, Dal Rasam, Fryums, White Rice, Karakozhambu / Sambar, Sweet: Gulab Jamun / Makhan Peda",
        snacks: "French Fries, Sauce, Ice Lemon Tea, Coffee",
        dinner: "Phulka, Dal Rajma, Veg & Egg Fried Rice, Aloo Capsicum Masala, Garlic Sauce, White Rice, Sambar, Rasam, Curd, Spring Onion Soup, Fruits: Musk Melon"
      },
      10: {
        breakfast: "Pav Bhaji / Vada Pav, Pongal, Vada, Fresh Juice, Cold Milk, Cornflakes, B,B,J, Tea, Coffee, Milk, Sambar, Chutney, Green Salad, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Rajma, Chicken Biryani, Veg Biryani, Banaras Baigan, Crumb Fry Paneer, Onion Raitha, White Rice, Sambar, Tomato Rasam, Papad, Sweet: Assorted Ice Cream",
        snacks: "Veg Puffs, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Banjara, Baby Corn Masala, White Rice, Drumstick Sambar, Poriyal, Butter Milk, Mint Pulav, Rasam, Minestrone Soup, Fruits: Papaya"
      },
      11: {
        breakfast: "Poori, Aloo Masala, Semiya, Chutney, Banana Milk Shake, Cold Milk, Chocos, B,B,J, Tea, Coffee, Milk, Mint Chutney, Cow Peas Salad, French Toast",
        lunch: "Phulka, Chilly Chicken, Dragon Paneer, Thai Fried Rice, Poriyal, Dal Fry, White Rice, Sambar, Rasam, Wheel Chips, Curd, Sweet: Lavangalatha",
        snacks: "Veg Franky, Sauce, Tea, Coffee, Milk",
        dinner: "Plain Dosa, Dal Panchmela, Sambar, Chutney, Veg Jal Frazi, Methi Roti, White Rice, Rasam, Butter Milk, Cream of Mushroom Soup, Fruits: Fresh Fruits"
      },
      12: {
        breakfast: "Idly, Vada, Sambar, Veg Kitchadi, Chutney, Fresh Juice, Cold Milk, Cornflakes, B,B,J, Tea, Coffee, Milk, Black Eye Peas Salad, Fried Eggs",
        lunch: "Phulka, Dal Tadka, Channa Masala, White Rice, Pineapple Rasam, Curd, Bisibilla Huliyana, Potato Chips, Sweet: Carrot Halwa",
        snacks: "Veg Samosa, Imly Chutney, Jal Jeera, Coffee, Milk",
        dinner: "Chapathi, Veg & Egg Schezwan Fried Rice, Rajma Masala, Long Beans Sabzi, Garlic Sauce, White Rice, Sambar, Rasam, Butter Milk, Veg Manchow Soup, Hot Badam Milk, Banana"
      },
      13: {
        breakfast: "Andhra Masala Dosa (Thin), Sambar, Chutney, Fresh Juice, Cold Milk, Chocos, B,B,J, Tea, Coffee, Milk, Green Salad, Egg Burji (2 nos)",
        lunch: "Phulka, Chicken Lababdar, Shahi Paneer, Peas Pulao, Arvi Fry, Dal Lasooni, Curd, Fryums, White Rice, Kadhambam Sambar, Tomato Rasam, Sweet: Shahi Tukda / Basundi",
        snacks: "Channa Chat / Masala Chat, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Maharani, Bhindi Jaipuri, Veg Jal Frazi, White Rice, Sambar, Rasam, Curd Rice, Butter Milk, Coriander Soup, Fruits: Papaya & Watermelon"
      },
      14: {
        breakfast: "Paneer Paratha, Rava Upma, Sambar, Dates Milk Shake, Cold Milk, Cornflakes, B,B,J, Tea, Coffee, Milk, Chutney, Sweet Corn Salad, Fried Eggs (2 nos)",
        lunch: "Phulka, Baked Egg Masala, Paneer Kofta, White Rice, Sambar, Rasam, Banaras Baigan, Fryums, Dal Panchamela, Loose Curd, Sweet: Rasmalai / Rasgulla",
        snacks: "Raw Banana Bajji, Coconut Chutney, Hot Badam Milk, Tea, Coffee",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Jeera Rice, Poriyal, Loose Curd, Sweet Lassi, Mixed Veg Soup, Fruits: Orange"
      },
      15: {
        breakfast: "Masala Ghee Roast Dosa (Thin), Sambar, Fresh Juice, Cold Milk, Chocos, Chutney, B,B,J, Tea, Coffee, Milk, Moong Dal Sprout, Scrambled Egg (2)",
        lunch: "Phulka, Dal Fry, Malai Chicken Tikka, Paneer Amritsari, White Rice, Sambar, Poondu Rasam, Loose Curd, Fryums, Keera Kootu, Sweet: Gulab Jamun/ Makhan Peda",
        snacks: "Brownie Cake, Sauce",
        dinner: "Phulka, Dal Maharani, White Rice, Dhum Aloo / Banaras Aloo, Rasam, Curd, Meal Maker Pulav, Cream of Tomato, Fruits: Papaya"
      },
      16: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Fresh Juice, Cold Milk, Chocos, Sambar, B,B,J, Tea, Coffee, Milk, Salad, Egg Burji (2)",
        lunch: "Phulka, Dal Makhani, Dingri Muttar, Dahi Vada, Poriyal, Sambar / Karakolambu, White Rice, Paruppu Rasam, Fryums, Sweet: Ghee Mysore Paak",
        snacks: "Tea, Coffee, Milk, French Fries, Sauce, Masala Tea, Coffee, Milk",
        dinner: "Phulka, Dal Fry, Schezwan Egg & Veg Rice, Baby Corn Manchurian, Poriyal, Loose Curd, White Rice, Sambar, Rasam, Fresh Garden Peas Soup, Fruits: Fresh Fruits"
      },
      17: {
        breakfast: "Podi Idly, Pav Bhaji, Sambar, Chutney, Cold Milk, Corn Flakes, Tea, Coffee, Milk, Fresh Juice, B,B,J, Sprouted Channa Black, Spanish Omelette",
        lunch: "Phulka, Dal, Chicken Biryani, Veg Biryani, Banaras Baigan, Dragon Paneer, Onion Raitha, White Rice, Sambar, Tomato Rasam, Papad, Sweet: Ice Cream",
        snacks: "Hot Dog (Sauce), Dahi Papdi Chat, Jal Jeera, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Masala, Butter Peas Masala, White Rice, Sambar, Rasam, Aloo Jeera, Curd, Variety Rice, Sweet Corn Soup, Fruits: Cut Fruits"
      },
      18: {
        breakfast: "Poori, Aloo Masala, Poha Namkeen, Chutney, Banana Milk Shake, Cold Milk, Chocos, B,B,J, Tea, Coffee, Milk, Cow Peas Salad, French Toast",
        lunch: "Phulka, Chicken Tikka Lababdar, Dal Fry, Paneer Butter Masala, Poriyal, Loose Curd, White Rice, Sambar, Pepper Rasam, Wheel Chips, Sweet: Mothichoor Laddu / Rava Laddu",
        snacks: "Mysore Bonda / Masala Sweet Corn (1 cup), Tea, Coffee, Milk",
        dinner: "Pudhina Roti, Plain Dosa, Sambar, Chutney, Loose Curd, Dal Maharani, Channa Masala, White Rice, Rasam, Veg Mushroom Soup, Fruits: Seasonal"
      },
      19: {
        breakfast: "Gobi Paratha, Curd, Kitchadi, Sambar, Date Milk Shake, Cold Milk, Cornflakes, B,B,J, Pickle, Tea, Coffee, Milk, Chutney, Black Eye Peas Salad, Fried Eggs",
        lunch: "Phulka, Dal Ajwain, Veg Jal Frazi, White Rice, Pineapple Rasam, Curd, Bisibilla Bath, Potato Chips, Sweet: Carrot Halwa",
        snacks: "Onion Samosa / Veg Samosa, Imly Chutney, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Fry, Veg & Egg Fried Rice, Baby Corn Manchurian, Bhindi Jaipuri, White Rice, Sambar, Rasam, Curd, Veg Manchow Soup, Cut Fruits with Ice Cream"
      },
      20: {
        breakfast: "Mysore Masala Dosa (Thin), Sambar, Chutney, Fresh Juice, Cold Milk, Chocos, B,B,J, Tea, Coffee, Milk, Green Salad, Egg Burji (2 nos)",
        lunch: "Diamond Chapathi, Dal Fry, Nilagiri Chicken, Paneer Hariyali, Curd, Aloo Methi / Aloo Saagwala, White Rice, Sambar, Rasam, Fryums, Sweet: Gova Jangri",
        snacks: "Veg Burger / Potato Croissant Fry, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Maharani, Bhindi Do Piaza, Aloo Podimas, White Rice, Sambar, Rasam, Loose Curd, Puliyodarai, Milagutanya Soup, Fruits: Papaya"
      },
      21: {
        breakfast: "Paneer Paratha, Pongal, Vada, Sambar, Fresh Juice, Cold Milk, Cornflakes, Chutney, B,B,J, Tea, Coffee, Milk, Black Channa Sprout, Boiled Eggs (2 nos)",
        lunch: "Phulka, Malabar Fish Curry / Masala Fried Fish, Nargesi Kofta Curry, White Rice, Sambar, Wheel Chips, Dal Rajma, Butter Milk, Rasam, Sweet: Rasmalai / Rasgulla",
        snacks: "Spring Roll, Sauce, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Vaangi Baath, Poriyal, Curd, Cream of Broccoli Soup, Fruit Salad"
      },
      22: {
        breakfast: "Kal Dosa, Vada Curry / Sambar, Chutney, Fresh Juice, Cold Milk, Cornflakes, B,B,J, Tea, Coffee, Milk, Moong Dal Sprout, Scrambled Egg (2)",
        lunch: "Phulka, Dal, Tandoori Chicken, Paneer Fingers, White Rice, Sambar, Green Vegetable Subzi (without potato), Curd, Fryums, Pineapple Rasam, Sweet: Milk Peda",
        snacks: "Brownie Cake / Hot Badam Milk, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Makhani, Idly, Sambar, Chutney, White Rice, Dhum Aloo / Banaras Aloo, White Rice, Rasam, Loose Curd, Cream of Tomato Soup, Fruits: Fresh Fruits"
      },
      23: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Fresh Juice, Cold Milk, Chocos, Sambar, Pickle, B,B,J, Tea, Coffee, Milk, Salad, Boiled Egg Masala",
        lunch: "Phulka, Dal Maharani, Mushroom Peas Masala, Dahi Vada, Dal Rasam, Fryums, White Rice, Karakozhambu / Sambar, Sweet: Gulab Jamun / Makhan Peda",
        snacks: "French Fries, Sauce, Ice Lemon Tea, Coffee",
        dinner: "Phulka, Dal Rajma, Veg & Egg Fried Rice, Aloo Capsicum Masala, Garlic Sauce, White Rice, Sambar, Rasam, Curd, Spring Onion Soup, Fruits: Musk Melon"
      },
      24: {
        breakfast: "Pav Bhaji / Vada Pav, Pongal, Vada, Fresh Juice, Cold Milk, Cornflakes, B,B,J, Tea, Coffee, Milk, Sambar, Chutney, Green Salad, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Rajma, Chicken Biryani, Veg Biryani, Banaras Baigan, Crumb Fry Paneer, Onion Raitha, White Rice, Sambar, Tomato Rasam, Papad, Sweet: Assorted Ice Cream",
        snacks: "Veg Puffs, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Banjara, Baby Corn Masala, White Rice, Drumstick Sambar, Poriyal, Butter Milk, Mint Pulav, Rasam, Minestrone Soup, Fruits: Papaya"
      },
      25: {
        breakfast: "Poori, Aloo Masala, Semiya, Chutney, Banana Milk Shake, Cold Milk, Chocos, B,B,J, Tea, Coffee, Milk, Mint Chutney, Cow Peas Salad, French Toast",
        lunch: "Phulka, Chilly Chicken, Dragon Paneer, Thai Fried Rice, Poriyal, Dal Fry, White Rice, Sambar, Rasam, Wheel Chips, Curd, Sweet: Lavangalatha",
        snacks: "Veg Franky, Sauce, Tea, Coffee, Milk",
        dinner: "Plain Dosa, Dal Panchmela, Sambar, Chutney, Veg Jal Frazi, Methi Roti, White Rice, Rasam, Butter Milk, Cream of Mushroom Soup, Fruits: Fresh Fruits"
      },
      26: {
        breakfast: "Idly, Vada, Sambar, Veg Kitchadi, Chutney, Fresh Juice, Cold Milk, Cornflakes, B,B,J, Tea, Coffee, Milk, Black Eye Peas Salad, Fried Eggs",
        lunch: "Phulka, Dal Tadka, Channa Masala, White Rice, Pineapple Rasam, Curd, Bisibilla Huliyana, Potato Chips, Sweet: Carrot Halwa",
        snacks: "Veg Samosa, Imly Chutney, Jal Jeera, Coffee, Milk",
        dinner: "Chapathi, Veg & Egg Schezwan Fried Rice, Rajma Masala, Long Beans Sabzi, Garlic Sauce, White Rice, Sambar, Rasam, Butter Milk, Veg Manchow Soup, Hot Badam Milk, Banana"
      },
      27: {
        breakfast: "Andhra Masala Dosa (Thin), Sambar, Chutney, Fresh Juice, Cold Milk, Chocos, B,B,J, Tea, Coffee, Milk, Green Salad, Egg Burji (2 nos)",
        lunch: "Phulka, Chicken Lababdar, Shahi Paneer, Peas Pulao, Arvi Fry, Dal Lasooni, Curd, Fryums, White Rice, Kadhambam Sambar, Tomato Rasam, Sweet: Shahi Tukda / Basundi",
        snacks: "Channa Chat / Masala Chat, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Maharani, Bhindi Jaipuri, Veg Jal Frazi, White Rice, Sambar, Rasam, Curd Rice, Butter Milk, Coriander Soup, Fruits: Papaya & Watermelon"
      },
      28: {
        breakfast: "Paneer Paratha, Rava Upma, Sambar, Dates Milk Shake, Cold Milk, Cornflakes, B,B,J, Tea, Coffee, Milk, Chutney, Sweet Corn Salad, Fried Eggs (2 nos)",
        lunch: "Phulka, Baked Egg Masala, Paneer Kofta, White Rice, Sambar, Rasam, Banaras Baigan, Fryums, Dal Panchamela, Loose Curd, Sweet: Rasmalai / Rasgulla",
        snacks: "Raw Banana Bajji, Coconut Chutney, Hot Badam Milk, Tea, Coffee",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Jeera Rice, Poriyal, Loose Curd, Sweet Lassi, Mixed Veg Soup, Fruits: Orange"
      },
      29: {
        breakfast: "Masala Ghee Roast Dosa (Thin), Sambar, Fresh Juice, Cold Milk, Chocos, Chutney, B,B,J, Tea, Coffee, Milk, Moong Dal Sprout, Scrambled Egg (2)",
        lunch: "Phulka, Dal Fry, Malai Chicken Tikka, Paneer Amritsari, White Rice, Sambar, Poondu Rasam, Loose Curd, Fryums, Keera Kootu, Sweet: Gulab Jamun/ Makhan Peda",
        snacks: "Brownie Cake, Sauce",
        dinner: "Phulka, Dal Maharani, White Rice, Dhum Aloo / Banaras Aloo, Rasam, Curd, Meal Maker Pulav, Cream of Tomato, Fruits: Papaya"
      },
      30: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Fresh Juice, Cold Milk, Chocos, Sambar, B,B,J, Tea, Coffee, Milk, Salad, Egg Burji (2)",
        lunch: "Phulka, Dal Makhani, Dingri Muttar, Dahi Vada, Poriyal, Sambar / Karakolambu, White Rice, Paruppu Rasam, Fryums, Sweet: Ghee Mysore Paak",
        snacks: "Tea, Coffee, Milk, French Fries, Sauce, Masala Tea, Coffee, Milk",
        dinner: "Phulka, Dal Fry, Schezwan Egg & Veg Rice, Baby Corn Manchurian, Poriyal, Loose Curd, White Rice, Sambar, Rasam, Fresh Garden Peas Soup, Fruits: Fresh Fruits"
      },

      
    },      
      }
      const stringifiedMenus = JSON.stringify(fetchedMenus);
      localStorage.setItem('menus', stringifiedMenus);
      localStorage.setItem('storedDate', currDate);
      setMenus(fetchedMenus[selectedMenuType]);
    }

  }, [selectedMenuType]);

  
  const weekDays = ['', 'Friday', 'Saturday','Sunday','Monday',
    'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday','Sunday','Monday',
    'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday','Sunday','Monday',
    'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday','Sunday','Monday',
    'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday','Sunday','Monday',
    'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday','Sunday','Monday',

  
  ];

  
const genZJokes = [
  "",
"Aryan - I'm not lazy, I'm just on energy-saving mode.",
  "Aisha - your to-do list is getting longer, but your motivation is getting shorter.",
  "Nikhil - I'm not procrastinating, I'm just taking a strategic nap.",
  "Riya - my idea of a balanced diet is a pizza in one hand and a soda in the other.",
  "Dev - I'm not afraid of failure, I'm just too lazy to try.",
  "Priya - I'm so tired, I could sleep through a lecture... and probably still ace the exam.",
  "Karan - I'm not a night owl, I'm just a morning worm who's been squashed.",
  "Anjali - I'm not addicted to coffee, I'm just deeply committed to caffeine.",
  "Aditya - I'm not stressed, I'm just superbly motivated.",
  "Neha - I'm not a perfectionist, I'm just too lazy to do it right the first time.",
  "Raj - I'm not a quitter, I'm just a very good starter.",
  "Fatima - I'm not a procrastinator, I'm just a master of timing.",
  "Samir - I'm not lazy, I'm just conserving energy for important things like Netflix.",
  "Anika - I'm not a failure, I'm just early success.",
  "Rohit - I'm not a procrastinator, I'm just a highly skilled scheduler.",
  "Tanya - I'm not stressed, I'm just extra caffeinated.",
  "Vikram - I'm not a night owl, I'm just a daydreamer who works the night shift.",
  "Pooja - I'm not lazy, I'm just efficient at doing nothing.",
  "Siddharth - I'm not a procrastinator, I'm just a master of delayed gratification.",
  "Maya - I'm not afraid of failure, I'm just too lazy to even try.",
  "Akshay - I'm not a quitter, I'm just very good at starting over.",
  "Sneha - I'm not a perfectionist, I'm just too lazy to do it right the first time.",
  "Karan - I'm not lazy, I'm just on energy-saving mode.",
  "Riya - I'm not a procrastinator, I'm just a highly skilled scheduler.",
  "Aditya - I'm not stressed, I'm just extra caffeinated.",
  "Neha - I'm not a night owl, I'm just a daydreamer who works the night shift.",
  "Raj - I'm not lazy, I'm just efficient at doing nothing.",
  "Fatima - I'm not a procrastinator, I'm just a master of delayed gratification.",
  "Samir - I'm not afraid of failure, I'm just too lazy to even try.",
  "Anika - I'm not a quitter, I'm just very good at starting over."
  ];
  

  const handleMenuTypeSelect = (menuType) => {
    setSelectedMenuType(menuType);
    localStorage.setItem('selectedMenuType', menuType);
  };

  

  const getMenuForDay = (day) => {
    const menu = menus[day];
    if (!menu) {
      console.warn(`Menu not found for day ${day}`);
      return null;
    }
    return menu;
  };

  const [message, setMessage] = useState('');
  
  const handleMessageChange = (event) => {
      setMessage(event.target.value);
  };

  const [name, setName] = useState('');
  
  const handleNameChange = (event) => {
      setName(event.target.value);
  };

  const [typejoke, setTypejoke] = useState('');
  
  const handleJokeChange = (event) => {
      setTypejoke(event.target.value);
  };
  const riddleSubmissions = [
    '. - I am the guy in 6 bedroom who farts and puts blame'
    ,'Shreyans - If I could be any fictional character, Id choose Groot from Guardians of the Galaxy. Think about it: minimal dialogue responsibilities, so no stressful presentations or exams, just a consistent \`I am Groot.`\ And yet, somehow, Id still be the most loved character in the room. Plus, being a tree-like alien means Id never have to worry about running out of oxygen or Wi-Fi during long study sessions. Oh, and I can grow my own snacks—who wouldnt want that level of convenience?'
    ,'V - Loki, because I can rewrite my grade history…………'
    ,'anonymous  - kitni gaur sey dekha tha meri nazron ney ussey ki uske baad koi aur chehra khoobsurat hee na laga'
    ,'Brutal Bhes  - The V-ed up Sheep in The Boys OR Levi from AOT. Both are very Brutal.'
    ,'AJ - I wanna be Nobita, soo i could ask Doraemon for gadgets for CAT and FAT 🥹.'
    ,'Batman - Superman'
    ,'Raunak - Arthur Morgan because 1. he is cool, 2. he is cool, duh.'
    ,'babygotback - snorlax. already there personality wise. just need the looks.'
    ,'Dean Academics - To declare Saturday instructional.'
    ,'. - Minion Quite unlike Sigma choice, but that is funny, cute and adorable'
    ,'Cinderella - I am a guy but i would love it if aditya from q block 5xx brings me a glass heel and picks me up in his arms'
    ,'Rapunzel - I have a hair fetish'
    ,'Siddarth A  - I would like to be my dad'
    ,'Spiderman - So I couldve stopped the train and saved that guy'
    ,'Yajur - Ben 10. He is the best. There is nothing he can not do. '
    ,'Deadpool - To do the twerk dance'
    ,'Batman - To save Gotham from all the non-flushers'
    ];
  const dataRiddle = "Which fictional character would you like to be and why?";
  const dataRiddleNextWeek = "Which fictional character would you like to be and why?";
  const [riddle, setRiddle] = useState('');

  
  const handleRiddleChange = (event) => {
      setRiddle(event.target.value);
  };




  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend or perform validation
    console.log('Message:', message);
    // You can add further logic here, like sending the review to a server
    // Reset form fields after submission if needed
    await sendMessageSubmitToTelegram(message);
    setMessage('');
  };

  const handleJoke = async (event) =>{
    event.preventDefault();
    console.log(name, typejoke);
    await sendJokeToTelegram(name, typejoke);
    window.alert("Your Joke has been sent! Please ensure the language is appropriate to increase the chances of it being shortlisted for others to see. 😊");

    localStorage.setItem('name', name);
    setName('');
    setTypejoke('');
  }

  const handleRiddle = async (event) =>{
    event.preventDefault();
    console.log(name, riddle);

    await sendJokeToTelegram("Riddle -"+dataRiddleNextWeek+" by- "+ name, riddle);
    window.alert("Your message has been sent! Please ensure the language is appropriate to increase the chances of it being shortlisted for others to see. 😊");
    localStorage.setItem('name', name);
    setName('');
    setRiddle('');
  }

  
  
  const [clickedTimes, setClickedTimes] = useState(0);


  const [emoji, setemoji] = useState(false);
  const emojisend = async (event) =>{
    console.log("laughing");
    setemoji(true);
    setLike(false);
    if(localStorage.getItem('name'))
      {
        setName(localStorage.getItem('name'));
      }

    if (clickedTimes < 2) {
      setClickedTimes(clickedTimes+1); // Increment clickedTimes
      await sendJokeToTelegram(name, "laughing");
    }

  }

  const [like, setLike] = useState(false);
  const likesend = async (event) =>{
    console.log("liked");
    setLike(true);
    setemoji(false);
    if(localStorage.getItem('name'))
      {
        setName(localStorage.getItem('name'));
      }

    if (clickedTimes < 2) {
      setClickedTimes(clickedTimes + 1); // Increment clickedTimes
      await sendJokeToTelegram(name, "liked");
    }


  }

  
  useEffect(() => {
    if(localStorage.getItem('name'))
    {
      setName(localStorage.getItem('name'));
    }
    sendMessageToTelegram(message);
  }, []);




  const currentTime = new Date().toLocaleString();
  const currentMonth = new Date().getMonth(); // January is 0, February is 1, ..., December is 11

  const sendMessageToTelegram = async (message) => { 
    try {
      const response = await fetch('https://api.telegram.org/bot6270744341:AAFpOfrQj1RFEHKwx8qfo8W77oc7et0iTM0/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: '-1002035897228',
          text: `Men - ${currentTime}`
        })
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error message:', error);
    }
  };
  
  const sendMessageSubmitToTelegram = async (message) => {
    try {
      const response = await fetch('https://api.telegram.org/bot6842910125:AAHtoikFcZgSLih4i7dfkDyQmYxO0IPM2s8/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: '-1002047632263',
          text: `Men - ${currentTime} Message - ${message}`
        })
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error message:', error);
    }
  };
  
  const sendJokeToTelegram = async (namee, typejokee) => {
    try {
      const response = await fetch('https://api.telegram.org/bot7132361049:AAFz9hWhsn64mQHP5DZWWQqERKrVAQY87YE/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: '-1002067896338',
          text: `(Men - ${currentTime}) - ${namee} - ${typejokee}`
        })
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error message:', error);
    }
  };
  
  
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  


  const rotatee = () => {
    const rotatees = document.querySelectorAll(".rotatee");
    for (let i = 0; i < rotatees.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = rotatees[i].getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        rotatees[i].classList.add("active");
      } else {
        rotatees[i].classList.remove("active");
      }
    }
  };



  useEffect(() => {
    reveal();
    rotatee();

    window.addEventListener('scroll', () => {
      reveal();
      rotatee();
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Simulate animation trigger on component mount (like a refresh)
      setTimeout(() => setIsVisible(true), 100);
    }, []);

    const [slidefromUp, setslidefromUp] = useState(false);
  
    useEffect(() => {
      // Simulate animation trigger on component mount (like a refresh)
      setTimeout(() => setslidefromUp(true), 100);
    }, []);








      
      const [theme, setTheme] = useState('automatic');

      // Function to initialize theme based on local storage or device preference
      const initializeTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
        if (storedTheme === 'dark' || storedTheme === 'light') {
          setTheme(storedTheme);
        } else {
          setTheme(prefersDarkMode ? 'dark' : 'light');
        }
      };
    
      useEffect(() => {
        initializeTheme(); // Initialize theme when component mounts
      }, []);
    
      const setAutomaticTheme = () => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const themeToSet = prefersDarkMode ? 'dark' : 'light';
        setTheme(themeToSet);
        localStorage.setItem('theme', 'automatic');
      };
    
      const setLightTheme = () => {
        setTheme('light');
        localStorage.setItem('theme', 'light');
      };
    
      const setDarkTheme = () => {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
      };




      const [showButtons, setShowButtons] = useState(false);

      const toggleButtons = () => {
        setShowButtons((prevShowButtons) => !prevShowButtons);
      };

      const [showMore, setShowMore] = useState(false);

      const toggleMore = () => {
        setShowMore((prevShowMore) => !prevShowMore);
      };

      const [toggleRiddle,setToggleRiddle] = useState(false);
      const toggleRiddleButton = () =>{
        setToggleRiddle((toggleRiddle)=> !toggleRiddle);
      }


  return (
    
<div className={`flex overflow-hidden  sm:p-5 justify-center ${theme === 'dark' ? 'bg-slate-950' : 'bg-sky-50'}`}>
  <div className='sm:p-5 p-5 flex sm:w-2/3 w-full flex-col justify-center'>

    
    
    <div className='flex-1 flex-col flex items-center'>
      <div className={`m-2 p-1 sm:w-2/3 w-full flex flex-row rounded-full   ${theme === 'dark' ? 'bg-sky-950' : 'bg-sky-100'} opacity-0 transition-all duration-300 ease-in-out ${slidefromUp ? 'opacity-100 -transky-y-0 p-1 sm:w-2/3' : '-transky-y-20 sm:pl-20 sm:pr-20 pt-50 pb-20 sm:w-1.5'} `}>
        <button 
          className={`flex w-1/3 justify-center font-bold transition-all p-3 m-2 rounded-full 
            ${selectedMenuType === "veg" 
              ? theme === 'dark' 
                ? 'text-sky-50 bg-green-700 hover:bg-green-600' 
                : 'text-black bg-green-400 hover:bg-green-300'
              : theme === 'dark' 
                ? 'text-sky-50 hover:bg-sky-900 bg-sky-950' 
                : 'text-black hover:bg-sky-200 bg-sky-100'
            }`} 
          onClick={() => handleMenuTypeSelect('veg')}
        > Veg
        </button>

        <button 
          className={`flex w-1/3 justify-center font-bold transition-all p-3 m-2 rounded-full 
            ${selectedMenuType === "special" 
              ? theme === 'dark' 
                ? 'text-sky-50 bg-sky-800 hover:bg-sky-600' 
                : 'text-black  bg-sky-400 hover:bg-sky-300 '
              : theme === 'dark' 
              ? 'text-sky-50 hover:bg-sky-900 bg-sky-950' 
              : 'text-black hover:bg-sky-200 bg-sky-100'
            }`} 
          onClick={() => handleMenuTypeSelect('special')}
        > Special
        </button>

        <button 
          className={`flex w-1/3 justify-center font-bold transition-all p-3 m-2 rounded-full 
            ${selectedMenuType === "nonVeg" 
              ? theme === 'dark' 
                ? 'text-sky-50 bg-red-800 hover:bg-red-600' 
                : 'text-black  bg-red-400 hover:bg-red-300 '
              : theme === 'dark' 
              ? 'text-sky-50 hover:bg-sky-900 bg-sky-950' 
              : 'text-black hover:bg-sky-200 bg-sky-100'
            }`} 
          onClick={() => handleMenuTypeSelect('nonVeg')}
        > Non-Veg
        </button>

      </div>







      




      <h2 className={`text-xl mt-3 font-bold ${theme === 'dark' ? 'text-white ' : 'text-sky-600'}`}>
            {(( currentDay === today.getDate()) ? "( Today )" : (currentDay === (today.getDate() - 1) % 31) ? "( Yesterday )" : (currentDay === (today.getDate() + 1) % 31) ? "( Tomorrow )" : "")} 
          </h2>
          <h2 className={`text-3xl mt-3 font-extrabold ${theme === 'dark' ? 'text-gray-200' : ''}`}>
             November {currentDay} - {weekDays[currentDay]}
        </h2>

      <div className='flex w-full mt-2 justify-between '>
      <button className={` hover:underline p-2 m-2 rounded ${theme === 'dark' ? 'text-white' : ' text-black'}`} onClick={() => setCurrentDay((currentDay - 1 >= 1) ? currentDay - 1 : today.getDate())}>&lt;&lt; Previous Day</button>
      <button className={` hover:underline p-2 m-2 rounded ${theme === 'dark' ? ' text-white' : ' text-black'}`} onClick={() => setCurrentDay((currentDay + 1 <= 31) ? currentDay + 1 : today.getDate())}>Next Day &gt;&gt;</button>
   </div>
    </div>
    {currentMonth === 10 && getMenuForDay(currentDay) ? (
      <div>

          {Object.entries(getMenuForDay(currentDay)).map(([sectionName, menuItems]) => (
            <div className={`m-3 mt-7  p-4 rounded-lg  opacity-0 transition-all duration-500 ease-in-out 
              ${isVisible ? 'opacity-100 transky-y-0' : 'transky-y-20'}   dark: ${theme === 'dark' ? '  bg-sky-800 shadow-md border-sky-200 border-b-4 ' : ' bg-sky-100 border-sky-500 shadow-md border-b-4'}
              ${(sectionName === "breakfast" && (currentDay === 4 || currentDay === 5 || currentDay === 11 || currentDay === 12 || currentDay === 18 || currentDay === 19 || currentDay === 25 || currentDay === 26) && ((currHour === 7 && currMin>=30)||(currHour>7)) && ((currHour === 9 && currMin<=15)||(currHour<9)) )
                  || (sectionName === "breakfast" && !(currentDay === 4 || currentDay === 5 || currentDay === 11 || currentDay === 12 || currentDay === 18 || currentDay === 19 || currentDay === 25 || currentDay === 26) && currHour >= 7 && currHour<9 )
                  || (sectionName === "lunch" && ((currHour === 12 && currMin>=30)||(currHour>12)) && ((currHour === 14 && currMin<=30)||(currHour<14)))
                  ||  (sectionName === "snacks" && ((currHour === 16 && currMin>=30)||(currHour>16)) && ((currHour === 18 && currMin<=30)||(currHour<18)))
                  ||   (sectionName === "dinner" && currHour >= 19 && currHour<21 )                  
                  ?
                (theme === 'dark' ? '  bg-sky-800 shadow-slate-600 shadow-xl ml-1 mr-1 pt-6 pb-6 border-sky-200 border-b-8 ' : ' bg-sky-100 ml-1 mr-1 pt-6 pb-6 border-sky-500 shadow-slate-400 shadow-lg border-b-8'): 
                ""}

              `} key={sectionName}>
              <h3 className={`font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-black'}  `}>{sectionName.toUpperCase()}:</h3>
              <p className={` ${theme === 'dark' ? 'text-gray-100' : 'text-black'}  `}>{menuItems}</p>
              <br></br>
              <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-sky-600'}  text-xs `}>{(sectionName === "breakfast" && (currentDay === 3 || currentDay === 9|| currentDay === 3 || currentDay === 9||currentDay === 10 || currentDay === 16||currentDay === 17 || currentDay === 23|| currDate === 24)) ? "7:15 AM - 9:30 AM" : (sectionName === "breakfast") ? "7:00 AM - 9:00 AM" : (sectionName === "lunch") ? "12:30 PM- 2:30 PM" : (sectionName === "snacks") ? "4:00 PM- 6:00 PM" : "7:00 PM - 9:00 PM"}</p>
            </div>
          ))}

      </div>
    ) : (
      <div className={` ${theme === 'dark' ? 'text-white' : 'text-black'}  `}>
      <p className='text-center'>Menu not available for this date. Please wait for one day so that we can fetch mess menu for you.</p>
      </div>
    )}




    <div className={` w-full mt-4 sm:w-full flex-col flex items-center`} onClick={toggleButtons}>
      <div className={`m-2  p-4 w-full flex flex-col items-center justify-center rounded-3xl   ${showButtons ? 'bg-opacity-100 shadow-md hover:bg-opacity-100' : ' bg-opacity-0 shadow-none hover:bg-opacity-70'}  
            ${theme === 'dark' ? 'bg-gray-800' : 'bg-slate-200 hover:bg-slate-200 shadow-md'}  `}>
        <div className='flex flex-row items-center'>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6   h-6 ${theme === 'dark' ? 'fill-sky-900 text-gray-400 ':'fill-white text-gray-600'} `}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

              <span className={`flex pl-2 text-lg   font-semibold ${theme === 'dark' ? 'text-gray-400':'text-gray-600'}`}>  Settings</span>
         </div>
        {showButtons && (
          <>
            <button 
              className={`flex w-1/2 mt-8  justify-center font-bold transition-all p-3 m-2 rounded-full 
                ${theme === 'light' ? 'text-white bg-sky-400 hover:bg-sky-500' : 'text-white bg-gray-800 hover:bg-gray-700'}
              `}
              onClick={setLightTheme}
            >
              Light
            </button>

            <button 
              className={`flex w-1/2 justify-center font-bold transition-all p-3 m-2 rounded-full 
                ${theme === 'dark' ? 'text-white bg-sky-500 hover:bg-sky-600' : 'text-black bg-gray-200 hover:bg-gray-300'}
              `}
              onClick={setDarkTheme}
            >
              Dark
            </button>

            <button 
              className={`flex w-1/2 mt-10 justify-center font-bold transition-all p-3 m-2 rounded-full 
                ${theme === 'light' ? 'text-white bg-gray-700 hover:bg-gray-700' : 'text-black bg-gray-200 hover:bg-gray-300'}
              `}
              onClick={setAutomaticTheme}
            >
              Device
            </button>
          </>
        )}
      </div>
    </div>

    <div className={` reveal rotatee  mt-4 w-full font-mono font-bold   shadow-lg  rounded-2xl ${theme === 'dark' ? ' bg-gradient-to-bl from-sky-300 shadow-sky-500 to-violet-300 text-black' : 'bg-gradient-to-bl shadow-sky-600 from-sky-700 to-violet-700 text-white'}`}>
      <div className='p-5'>
        <p className=' text-md font-bold opacity-50 text-center '>J o k e B o x</p>
        <p className=' text-4xl font-extrabold '>"</p>
          {genZJokes[currDate]}
        <p className=' text-4xl text-right font-extrabold'>"</p>
        <div className={`flex flex-row items-center justify-center rounded-full w-fit p-2 ${theme === 'dark' ? 'bg-white bg-opacity-70': 'bg-white bg-opacity-90'}`}>
        <button className={` rounded-full text-xl drop-shadow-md shadow-black transition-all    ${emoji === true? 'opacity-100 rounded-full scale-125':'opacity-60 '} `}  onClick={emojisend} alt ="emoji">😂</button>
        <button className={` rounded-full text-xl drop-shadow-md shadow-black transition-all pl-4   ${like === true? 'opacity-100 rounded-full scale-125':'opacity-60 '} `}  onClick={likesend} alt ="like">❤️</button>
        </div>
      </div>
    </div>

    <div className={` reveal rotatee mt-6 w-full font-mono font-bold   shadow-lg  rounded-2xl ${theme === 'dark' ? ' bg-gradient-to-bl from-slate-400 shadow-slate-500 to-slate-300 text-black' : 'bg-gradient-to-bl shadow-slate-400 from-slate-600 to-slate-500 text-white'}`}>
      <div className='p-3'>
        <p className=' text-md font-bold  opacity-50 text-center '> w e e k l y - t o p i c</p>
        <br></br>
        {dataRiddle}
        <br></br><br></br>
        {riddleSubmissions.map((riddles, index) => (
        <p key={index} className="bg-white p-2 mt-2 rounded-xl bg-opacity-30">
          {riddles}
        </p>
        ))}
        <p className='mt-10 text-center'>NEXT WEEK TOPIC IS AVAILABLE BELOW 😋</p>

        <div className={`flex flex-row items-center justify-center  w-full rounded-lg  transition-all duration-300 ${theme ==='dark'?"text-black":"text-black"}  `}>
          <form onSubmit={handleRiddle} className={`p-4 mt-10 hover:shadow-xl  rounded-2xl bg-slate-100 flex-col items-center justify-center transition-all duration-300 ease-in-out ${toggleRiddle? "h-auto":"h-16"}  overflow-clip`}>
          <p onClick={toggleRiddleButton} className=' text-md font-extrabold  text-center text-lg'>SUBMIT FOR NEXT WEEK</p><br></br>

            
            {dataRiddleNextWeek}<br></br>
            
            <input
                  id="name"
                  rows="1"
                  onChange={handleNameChange}
                  value={name}
                  className={`w-full p-3 mt-2 placeholder:text-base text-base   bg-transparent border-b-2 border-slate-400 ${theme === 'dark' ? ' text-black' : 'text-black'}   placeholder:text-slate-400 border-0 focus:ring-0 focus:outline-none active:ring-0`}
                  placeholder="Name"
                  required
                />
            <textarea
                  id="riddle"
                  rows="2"
                  onChange={handleRiddleChange}
                  value={riddle}
                  className={`w-full p-3 mt-2  placeholder:text-base text-base bg-transparent border-b-2 border-slate-400 ${theme === 'dark' ? ' text-black' : 'text-black'}   placeholder:text-slate-400 border-0 focus:ring-0 focus:outline-none active:ring-0`}
                  placeholder="Type here. Best answers will be shown next week"
                  required
                />
              <button type="submit" className={`text-center mt-2 py-2.5 px-4 text-base sm:w-full w-full font-medium ${theme === 'dark' ? 'text-white bg-slate-800 hover:bg-slate-700' : 'text-white bg-slate-500 hover:bg-slate-600'}    rounded-2xl focus:ring-4 focus:ring-sky-200`}>
                Send
              </button>
          </form>
        </div>
      </div>
    </div>

    



      


    <div className={` w-full  mt-8 mb-8 m-0 sm:w-full flex-col flex items-center`} >
      <p className={`${theme === 'dark' ? 'text-slate-50' : 'text-black'} font-bold text-xl pb-4`}> Please give  suggestions/changes in mess you want in feedback. We will try to convey them to Hostel Office. 😊😊</p>
      <div className={` p-4 w-full flex flex-col  items-center justify-center rounded-3xl   ${showMore ? 'bg-opacity-100 shadow-md hover:bg-opacity-100' : ' bg-opacity-70 shadow-none hover:bg-opacity-100'}  
            ${theme === 'dark' ? 'bg-gray-800' : 'bg-slate-200 hover:bg-slate-200 shadow-md'}  `}>
        
        <div className='flex w-full justify-center flex-row items-center' onClick={toggleMore}>
          <span className={`flex pl-2 text-lg   font-semibold ${theme === 'dark' ? 'text-gray-400':'text-gray-600'}`}> Submit to JokeBox / Give Feedback </span>
        </div>
        {showMore && (
          <>
            <form onSubmit={handleJoke} className={`sm:w-2/3 w-full flex p-4 sm:m-2 mt-4 items-center justify-center ${theme === 'dark' ? '' : ' '} rounded-2xl border-spacing-4`}>
              <div className="w-full rounded-lg ">

                <div className={`px-2 py-2  ${theme === 'dark' ? '' : ' '} rounded-t-lg `}>
                <p className={` text-xl text-center font-bold mb-4 ${theme === 'dark' ? 'text-white' : ''} `}>Submit to JokeBox</p>

                <input
                  id="name"
                  rows="1"
                  onChange={handleNameChange}
                  value={name}
                  className={`w-full p-3  placeholder:text-base text-base bg-transparent border-slate-600 border-b-2 ${theme === 'dark' ? 'text-white' : 'text-black'}   placeholder:text-slate-500 border-0 focus:ring-0 focus:outline-none active:ring-0`}
                  placeholder="Name"
                  required
                />
                <input
                  id="joke"
                  rows="1"
                  onChange={handleJokeChange}
                  value={typejoke}
                  className={`w-full p-3 placeholder:text-base text-base  bg-transparent border-slate-600 border-b-2   ${theme === 'dark' ? 'text-white' : 'text-black'}   placeholder:text-slate-500 border-0 focus:ring-0 focus:outline-none active:ring-0`}
                  placeholder="Type and get quoted for a day of month."
                  required
                />
                </div>
                <div className="flex items-end px-3 py-2 ">
                  <button type="submit" className={`text-center py-2.5 px-4 text-base sm:w-full w-full font-medium ${theme === 'dark' ? 'text-white bg-sky-900 hover:bg-sky-700' : 'text-white bg-sky-500 hover:bg-sky-600'}    rounded-2xl focus:ring-4 focus:ring-sky-200`}>
                    Send
                  </button>
                </div>
              </div>
            </form>
            <form onSubmit={handleSubmit} className={`sm:w-2/3 w-full flex p-4 sm:m-2 mt-4 items-center justify-center ${theme === 'dark' ? '' : ' '} rounded-2xl border-spacing-4`}>
              <div className="w-full rounded-lg ">
                <div className={`px-2 py-2  ${theme === 'dark' ? '' : ' '} rounded-t-lg `}>
                <p className={` text-xl text-center font-bold mb-4 ${theme === 'dark' ? 'text-white' : ''} `}>Your valuable Feedback</p>

                <textarea
                  id="message"
                  rows="5"
                  onChange={handleMessageChange}
                  value={message}
                  className={`w-full px-0 placeholder:text-sm text-base bg-transparent ${theme === 'dark' ? ' ' : ''} text-white border-b-2 border-slate-600  placeholder:text-slate-500 border-0 focus:ring-0 focus:outline-none active:ring-0`}
                  placeholder="Please share us your experience/suggestions. This app is live only because you use it. Your views are all that matters to us. Please also include ur contact to help us reach you. Type here...."
                  required
                />
                </div>
                <div className="flex items-end px-3 py-2 ">
                  <button type="submit" className={`text-center py-2.5 px-4 text-base sm:w-min w-full font-medium ${theme === 'dark' ? 'text-white bg-sky-900 hover:bg-sky-700' : 'text-white bg-sky-500 hover:bg-sky-600'}    rounded-2xl focus:ring-4 focus:ring-sky-200`}>
                    Send
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div> 
    </div>

    <div className={` w-full p-0 sm:mt-8 mt-10 reveal ${theme === 'dark' ? 'bg-sky-800 hover:bg-sky-700' : 'bg-sky-400 hover:bg-sky-500'}   transition-all duration-200 rounded-2xl`}>
        <button className={`m-0 p-10 rounded-lg text-3xl  ${theme === 'dark' ? 'text-white':'text-black'}  text-left transition-all`} >
          <a href="https://drive.google.com/drive/folders/1CbQJwKgpRlPuQJtpb16Bn73QlXbSnLTA?usp=sharing">
            How to make a homescreen shortcut of this app for iOS and android?
            <p className='text-sm mt-4'>click here</p>

          </a>
        </button>
    </div>

    
    <div className='flex flex-row justify-between'>
    <div className={`mt-4 text-base text-left font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}> MESSTIME</div>
    <div className={`mt-4 text-base text-right font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}> - arc</div>
    </div>
      
    </div>
  </div>

    
  );
};


export default App;
