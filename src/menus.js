const menus = {
    veg: 
      {
        1: {
          breakfast: "Poori, Aloo Masala, Poha Nampkin, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Panchmela, White Rice, Sambar, Rasam, Curd, Kadai Panneer",
          snacks: "Masala Peanuts/ Sundal, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Masoor, White Rice, Rasam, Sambar, Butter Milk, Channa Masala, Plain Dosa, Chutney, Fruits: Papaya"
        },
        2: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Thadka, White Rice, Sambar, Rasam, Curd, Papad, Veg Jal Frizhi, Sweet: Bread Halwa",
          snacks: "Cake, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Fry, White Rice, Rasam, Sambar, Butter Milk, Veg Fried Rice, Gobi Manchurian, Fruits: Pineapple"
        },
        3: {
          breakfast: "Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Ghee Phulka, Dal Fry, White Rice, Sambar, Rasam, Curd, Fryums, Veg Hydrabadi",
          snacks: "Onion Pakoda, Chutney, Ice Lemon Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Thadka, White Rice, Rasam, Sambar, Butter Milk, Puliyodra, Aloo Podimas, Bindi Masala, Fruits: Water Melon"
        },
        4: {
          breakfast: "Gobi Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Masala, White Rice, Sambar, Rasam, Curd, Green Veg Sabzhi, Sweet: Badushai / Coconut Laddu",
          snacks: "Assorted Bonda, Chutney, Tea, Coffee, Milk",
          dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Jeera Rice, Cabbage Poriyal, Fruits: Banana"
        },
        5: {
          breakfast: "Kal Dosa, Vadacurry, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Lasoni, White Rice, Sambar, Rasam, Curd, Wheel Chips, Panneer Makhanwala/ Panneer Butter Masala",
          snacks: "Sweet Corn/ Bread Bajji, Cold Badam Milk, Tea",
          dinner: "Phulka, Dhal Makhani, White Rice, Rasam, Sambar, Butter Milk, Chutney, Idly, Sambar, Beetroot Poriyal, Fruits: Seasonal Fruits"
        },
        6: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Maharani, White Rice, Sambar, Rasam, Karakozhambu/ More Kozhambhu, Poriyal, Dahi Vada, Fryums, Sweet: Gulab Jamun",
          snacks: "Aloo Bonda, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Rajma, White Rice, Rasam, Sambar, Curd, Garlic Sauce, Veg Fried Rice, Thurai Tomato Sabzhi, Fruits: Water Melon"
        },
        7: {
          breakfast: "Vada Paav/ Paav Bhaji, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Papad, Veg Biryani, Panneer Burji, Onion Raitha, Sweet: Ice Cream",
          snacks: "Veg Puffs, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Gobi Capsicum Masala, Fruit Salad"
        },
        8: {
          breakfast: "Poori, Aloo Masala, Semiya, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Ajawin, White Rice, Sambar, Rasam, Butter Milk, Onion Rings, Mushroom Peas Masala/ Dingri Muttar, Sweet: Rava Laddu/ Boondhi Laddu",
          snacks: "Veg Cutlet, Cold Coffee, Tea",
          dinner: "Phulka, Dosa, Chutney, Dhal, White Rice, Rasam, Sambar, Butter Milk, Green Veg Sabzhi, Seasonal Fruits"
        },
        9: {
          breakfast: "Idly, Vada, Sambar, Chutney, Kitchadi, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Gujrati, White Rice, Rasam, Loose Curd, Papad, Coconut Rice/ Lemon Rice, Thuvayal, Dingri Muttar",
          snacks: "Veg Samosa, Sauce, Tea, Coffee, Milk",
          dinner: "Chapathi, Dhal, White Rice, Rasam, Sambar, Butter Milk, Dhum Aloo, Thai Veg Fried Rice, Garlic Sauce, Fruits: Pineapple"
        },
        10: {
          breakfast: "Masala Uthappam, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Punjabi, White Rice, Sambar, Rasam, Loose Curd, Fryums, Panneer Do Piaza, Poriyal, Sweet: Jangri/ Jilebi",
          snacks: "Pani Poori, Ice Lemon Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Fry, White Rice, Rasam, Sambar, Curd Rice, Meal Maker Peas & Capsicum Masala, Fruits: Water Melon"
        },
        11: {
          breakfast: "Gobi Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Madka, White Rice, Sambar, Rasam, Curd, Papad, Green Veg Sabzhi, Avaraikai Poriyal",
          snacks: "Raw Banana Bajji, Tea, Coffee, Milk",
          dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Butter Milk, Cabbage Poriyal, Fruits: Banana"
        },
        12: {
          breakfast: "Masala Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Curd, Masala Papad, Panneer Tikka Masala, Keerai Kootu, Sweet: Gulab Jamun",
          snacks: "Cake, Cold Badam Milk, Tea",
          dinner: "Phulka, Idly, Chutney, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Brinjal Drumstic Masala, Fruits: Seasonal Fruits"
        },
        13: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Thadka, White Rice, Rasam, Kadi Pakoda/ Dahi Vada, Papad, Sambar, Capsicum Peas Masala",
          snacks: "Mysore Bonda, Chutney, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Masala, White Rice, Rasam, Sambar, Butter Milk, Schezwan Fried Rice, Gobi Manchurian, Fruits: Papaya"
        },
        14: {
          breakfast: "Idly, Vada, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Curd, Fryums, Veg Biryani, Oil Brinjal, Onion Raitha, Sweet: Ice Cream",
          snacks: "Vada Paav, Mint Chutney, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Thoor, White Rice, Rasam, Sambar, Butter Milk, Lemon Rice, Aloo Capsicum Muttar Masala, Seasonal Fruits"
        },
        15: {
          breakfast: "Poori, Aloo Masala, Poha Nampkin, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Panchmela, White Rice, Sambar, Rasam, Curd, Kadai Panneer",
          snacks: "Masala Peanuts/ Sundal, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Masoor, White Rice, Rasam, Sambar, Butter Milk, Channa Masala, Plain Dosa, Chutney, Fruits: Papaya"
        },
        16: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Thadka, White Rice, Sambar, Rasam, Curd, Papad, Veg Jal Frizhi, Sweet: Bread Halwa",
          snacks: "Cake, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Fry, White Rice, Rasam, Sambar, Butter Milk, Veg Fried Rice, Gobi Manchurian, Fruits: Pineapple"
        },
        17: {
          breakfast: "Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Ghee Phulka, Dal Fry, White Rice, Sambar, Rasam, Curd, Fryums, Veg Hydrabadi",
          snacks: "Onion Pakoda, Chutney, Ice Lemon Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Thadka, White Rice, Rasam, Sambar, Butter Milk, Puliyodra, Aloo Podimas, Bindi Masala, Fruits: Water Melon"
        },
        18: {
          breakfast: "Gobi Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Masala, White Rice, Sambar, Rasam, Curd, Green Veg Sabzhi, Sweet: Badushai / Coconut Laddu",
          snacks: "Assorted Bonda, Chutney, Tea, Coffee, Milk",
          dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Jeera Rice, Cabbage Poriyal, Fruits: Banana"
        },
        19: {
          breakfast: "Kal Dosa, Vadacurry, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Lasoni, White Rice, Sambar, Rasam, Curd, Wheel Chips, Panneer Makhanwala/ Panneer Butter Masala",
          snacks: "Sweet Corn/ Bread Bajji, Cold Badam Milk, Tea",
          dinner: "Phulka, Dhal Makhani, White Rice, Rasam, Sambar, Butter Milk, Chutney, Idly, Sambar, Beetroot Poriyal, Fruits: Seasonal Fruits"
        },
        20: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Maharani, White Rice, Sambar, Rasam, Karakozhambu/ More Kozhambhu, Poriyal, Dahi Vada, Fryums, Sweet: Gulab Jamun",
          snacks: "Aloo Bonda, Sauce, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Rajma, White Rice, Rasam, Sambar, Curd, Garlic Sauce, Veg Fried Rice, Thurai Tomato Sabzhi, Fruits: Water Melon"
        },
        21: {
          breakfast: "Vada Paav/ Paav Bhaji, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Papad, Veg Biryani, Panneer Burji, Onion Raitha, Sweet: Ice Cream",
          snacks: "Veg Puffs, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Gobi Capsicum Masala, Fruit Salad"
        },
        22: {
          breakfast: "Poori, Aloo Masala, Semiya, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Ajawin, White Rice, Sambar, Rasam, Butter Milk, Onion Rings, Mushroom Peas Masala/ Dingri Muttar, Sweet: Rava Laddu/ Boondhi Laddu",
          snacks: "Veg Cutlet, Cold Coffee, Tea",
          dinner: "Phulka, Dosa, Chutney, Dhal, White Rice, Rasam, Sambar, Butter Milk, Green Veg Sabzhi, Seasonal Fruits"
        },
        23: {
          breakfast: "Idly, Vada, Sambar, Chutney, Kitchadi, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Gujrati, White Rice, Rasam, Loose Curd, Papad, Coconut Rice/ Lemon Rice, Thuvayal, Dingri Muttar",
          snacks: "Veg Samosa, Sauce, Tea, Coffee, Milk",
          dinner: "Chapathi, Dhal, White Rice, Rasam, Sambar, Butter Milk, Dhum Aloo, Thai Veg Fried Rice, Garlic Sauce, Fruits: Pineapple"
        },
        24: {
          breakfast: "Masala Uthappam, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Punjabi, White Rice, Sambar, Rasam, Loose Curd, Fryums, Panneer Do Piaza, Poriyal, Sweet: Jangri/ Jilebi",
          snacks: "Pani Poori, Ice Lemon Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Fry, White Rice, Rasam, Sambar, Curd Rice, Meal Maker Peas & Capsicum Masala, Fruits: Water Melon"
        },
        25: {
          breakfast: "Gobi Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Madka, White Rice, Sambar, Rasam, Curd, Papad, Green Veg Sabzhi, Avaraikai Poriyal",
          snacks: "Raw Banana Bajji, Tea, Coffee, Milk",
          dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Butter Milk, Cabbage Poriyal, Fruits: Banana"
        },
        26: {
          breakfast: "Masala Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Curd, Masala Papad, Panneer Tikka Masala, Keerai Kootu, Sweet: Gulab Jamun",
          snacks: "Cake, Cold Badam Milk, Tea",
          dinner: "Phulka, Idly, Chutney, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Brinjal Drumstic Masala, Fruits: Seasonal Fruits"
        },
        27: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Thadka, White Rice, Rasam, Kadi Pakoda/ Dahi Vada, Papad, Sambar, Capsicum Peas Masala",
          snacks: "Mysore Bonda, Chutney, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Masala, White Rice, Rasam, Sambar, Butter Milk, Schezwan Fried Rice, Gobi Manchurian, Fruits: Papaya"
        },
        28: {
          breakfast: "Idly, Vada, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Curd, Fryums, Veg Biryani, Oil Brinjal, Onion Raitha, Sweet: Ice Cream",
          snacks: "Vada Paav, Mint Chutney, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Thoor, White Rice, Rasam, Sambar, Butter Milk, Lemon Rice, Aloo Capsicum Muttar Masala, Seasonal Fruits"
        },
        29: {
          breakfast: "Poori, Aloo Masala, Poha Nampkin, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Panchmela, White Rice, Sambar, Rasam, Curd, Kadai Panneer",
          snacks: "Masala Peanuts/ Sundal, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Masoor, White Rice, Rasam, Sambar, Butter Milk, Channa Masala, Plain Dosa, Chutney, Fruits: Papaya"
        },
        30: {
          breakfast: "Aloo Paratha, Curd, Kitchadi, Sambar, B,B,J, Tea, Coffee, Milk",
          lunch: "Phulka, Dal Thadka, White Rice, Sambar, Rasam, Curd, Papad, Veg Jal Frizhi, Sweet: Bread Halwa",
          snacks: "Cake, Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Fry, White Rice, Rasam, Sambar, Butter Milk, Veg Fried Rice, Gobi Manchurian, Fruits: Pineapple"
        },
        31: {
          breakfast: "Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk",
          lunch: "Ghee Phulka, Dal Fry, White Rice, Sambar, Rasam, Curd, Fryums, Veg Hydrabadi",
          snacks: "Onion Pakoda, Chutney, Ice Lemon Tea, Coffee, Milk",
          dinner: "Phulka, Dhal Thadka, White Rice, Rasam, Sambar, Butter Milk, Puliyodra, Aloo Podimas, Bindi Masala, Fruits: Water Melon"
        },
      },
      
    nonVeg: {
      1: {
        breakfast: "Poori, Aloo Masala, Poha Nampkin, B,B,J, Tea, Coffee, Milk, Masala Omelette (2 nos)",
        lunch: "Phulka, Dal Panchmela, White Rice, Sambar, Rasam, Curd, Onion Rings, Kadai Chicken, Poriyal",
        snacks: "Masala Peanuts/ Sundal, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal masoor, White Rice, Rasam, Sambar, Butter Milk, Channa Masala, Plain Dosa, Chutney, Fruits: Fruit Salad"
      },
      2: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Sambar, B,B,J, Tea, Coffee, Milk",
        lunch: "Phulka, Dal Thadka, White Rice, Sambar, Rasam, Curd, Papad, Veg Jal Frizhi, Sweet: Fruit Kesari / Bread Halwa",
        snacks: "Cake, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal fry, White Rice, Rasam, Sambar, Butter Milk, Egg Chow Mein, Gobi Manchurian, Fruits: Fruit Salad"
      },
      3: {
        breakfast: "French Toast, Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Scrambled Egg (2 nos)",
        lunch: "Phulka, Dal Fry, White Rice, Sambar, Rasam, Butter Milk, Fryums, Chicken Hydrabadi",
        snacks: "Onion Pakoda, Chutney, ICE LEMON TEA, Coffee, Milk",
        dinner: "Phulka, Dhal Thadka, White Rice, Rasam, Sambar, Butter Milk, Puliyodra, Aloo Podimas, Bindi masala, Fruits: Water Melon"
      },
      4: {
        breakfast: "Gobi Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Fried Egg Masala (2 nos)",
        lunch: "Phulka, Dal Masala, White Rice, Sambar, Rasam, Curd, Onion Rings, Green Veg Sabzhi, Sweet: Badushai / Coconut Laddu",
        snacks: "Assorted Bonda, Chutney, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Jeera Rice, Cabbage Poriyal, Fruits: Banana"
      },
      5: {
        breakfast: "Kal Dosa, Vadacurry / Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Lasoni, White Rice, Sambar, Rasam, Butter Milk, Wheel Chips, Chicken 65/Chicken Tikka Masala, Avarakkai Poriyal",
        snacks: "Sweet Corn / Bread Bajji, Cold Badam Milk, Tea",
        dinner: "Phulka, Dhal Makhani, White Rice, Rasam, Sambar, Butter Milk, Chutney, Idly, Sambar, Beetroot Poriyal, Fruits: Seasonal Fruits"
      },
      6: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Fried Egg (2 nos)",
        lunch: "Phulka, Dal Maharani, White Rice, Sambar, Rasam, Kara/Morekozhambu, Sabzhi, Dahi Vada, Fryums, Sweet: Gulab Jamun",
        snacks: "Aloo Bonda, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Rajma, White Rice, Rasam, Sambar, Curd, Garlic Sauce, Egg Fried rice, Thurai Tomato Sabzhi, Fruits: Water melon"
      },
      7: {
        breakfast: "Vada Paav/ Paav Bhaji, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Masala Omelette (2 nos)",
        lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Curd, Papad, Onion Raitha, Chicken Biryani, Banaras Baigan, Sweet: Ice Cream",
        snacks: "Veg Puffs, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Gobi Capsicum Masala, Fruit Salad"
      },
      8: {
        breakfast: "Poori, Aloo Masala, Semiya, Chutney, B,B,J, Tea, Coffee, Milk, Boiled Egg Masala Dry (2 nos)",
        lunch: "Phulka, Dal Ajawin, White Rice, Sambar, Rasam, Curd, Onion rings, Egg Masala, Poriyal, Sweet: Rava Laddu / Boondhi laddu",
        snacks: "Veg Cutlet, COLD COFFEE, Tea",
        dinner: "Phulka, Dosa, Chutney, Dhal, White Rice, Rasam, Sambar, Butter Milk, Green Veg Sabzhi, Fruits: Seasonal Fruits"
      },
      9: {
        breakfast: "Idly, Vada, Sambar, Chutney, Kitchadi, B,B,J, Tea, Coffee, Milk",
        lunch: "Phulka, Dal Gujrati, White Rice, Rasam, Curd, Papad, Coconut Rice / Lemon Rice, Thuvayal, Dingri Muttar",
        snacks: "Veg Samosa, Sauce, Tea, Coffee, Milk",
        dinner: "Chapathi, Dhal, White Rice, Rasam, Sambar, Butter Milk, Dhum Aloo, Egg Thai Fried Rice, Garlic Sauce, Fruits: Cut Fruits Mixed"
      },
      10: {
        breakfast: "French Toast, Masala Uthappam, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Boiled Egg (2 nos)",
        lunch: "Phulka, Dal Punjabi, White Rice, Sambar, Rasam, Butter Milk, Fryums, Chicken Masala, Poriyal, Sweet: Jangri / Jilebi",
        snacks: "Pani Poori, ICE LEMON TEA, Coffee, Milk",
        dinner: "Phulka, Dhal fry, White Rice, Rasam, Sambar, Curd rice, Meal maker peas & Capsicum Masala, Fruits: Water Melon"
      },
      11: {
        breakfast: "Gobi Paratha, Curd, Pongal, Chutney, B,B,J, Tea, Coffee, Milk, Sambar, Scrambled Egg (2 nos)",
        lunch: "Phulka, Dal Madka, White Rice, Sambar, Rasam, Curd, Papad, Aloo Palak, Avaraikai Poriyal",
        snacks: "Raw Banana Bajji, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Butter Milk, Cabbage Poriyal, Fruits: Banana"
      },
      12: {
        breakfast: "Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Egg (2 nos)",
        lunch: "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Butter Milk, Masala Papad, Chicken 65, Keerai Kootu, Sweet: Gulab Jamun",
        snacks: "Cake, Cold Badam Milk, Tea",
        dinner: "Phulka, Idly, Chutney, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Brinjal Drumstic Masala, Fruits: Seasonal Fruits"
      },
      13: {
        breakfast: "Aloo Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Thadka, White Rice, Rasam, Dahi vada / Kadi Pakoda, Papad, Capsicum Peas Masala, Sambar",
        snacks: "Mysore Bonda, Chutney, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Masala, White Rice, Rasam, Sambar, Butter Milk, Schezwan Egg Fried Rice, Gobi Manchurian, Fruits: Papaya"
      },
      14: {
        breakfast: "Idly, Vada, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Egg Masala (2 nos)",
        lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Fryums, Onion Raitha, Chicken Biryani, Oil Brinjal, Sweet: Ice Cream",
        snacks: "Vada Paav, Mint Chutney, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Thoor, White Rice, Rasam, Sambar, Butter Milk, Lemon Rice, Aloo Capsicum Muttar Masala, Fruits: Seasonal Fruits"
      },
      15: {
        breakfast: "Poori, Aloo Masala, Poha Nampkin, B,B,J, Tea, Coffee, Milk, Masala Omelette (2 nos)",
        lunch: "Phulka, Dal Panchmela, White Rice, Sambar, Rasam, Curd, Onion Rings, Kadai Chicken, Poriyal",
        snacks: "Masala Peanuts/ Sundal, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal masoor, White Rice, Rasam, Sambar, Butter Milk, Channa Masala, Plain Dosa, Chutney, Fruits: Fruit Salad"
      },
      16: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Sambar, B,B,J, Tea, Coffee, Milk",
        lunch: "Phulka, Dal Thadka, White Rice, Sambar, Rasam, Curd, Papad, Veg Jal Frizhi, Sweet: Fruit Kesari / Bread Halwa",
        snacks: "Cake, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal fry, White Rice, Rasam, Sambar, Butter Milk, Egg Chow Mein, Gobi Manchurian, Fruits: Fruit Salad"
      },
      17: {
        breakfast: "French Toast, Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Scrambled Egg (2 nos)",
        lunch: "Phulka, Dal Fry, White Rice, Sambar, Rasam, Butter Milk, Fryums, Chicken Hydrabadi",
        snacks: "Onion Pakoda, Chutney, ICE LEMON TEA, Coffee, Milk",
        dinner: "Phulka, Dhal Thadka, White Rice, Rasam, Sambar, Butter Milk, Puliyodra, Aloo Podimas, Bindi masala, Fruits: Water Melon"
      },
      18: {
        breakfast: "Gobi Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Fried Egg Masala (2 nos)",
        lunch: "Phulka, Dal Masala, White Rice, Sambar, Rasam, Curd, Onion Rings, Green Veg Sabzhi, Sweet: Badushai / Coconut Laddu",
        snacks: "Assorted Bonda, Chutney, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Loose Curd, Jeera Rice, Cabbage Poriyal, Fruits: Banana"
      },
      19: {
        breakfast: "Kal Dosa, Vadacurry / Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Lasoni, White Rice, Sambar, Rasam, Butter Milk, Wheel Chips, Chicken 65/Chicken Tikka Masala, Avarakkai Poriyal",
        snacks: "Sweet Corn / Bread Bajji, Cold Badam Milk, Tea",
        dinner: "Phulka, Dhal Makhani, White Rice, Rasam, Sambar, Butter Milk, Chutney, Idly, Sambar, Beetroot Poriyal, Fruits: Seasonal Fruits"
      },
      20: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Fried Egg (2 nos)",
        lunch: "Phulka, Dal Maharani, White Rice, Sambar, Rasam, Kara/Morekozhambu, Sabzhi, Dahi Vada, Fryums, Sweet: Gulab Jamun",
        snacks: "Aloo Bonda, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Rajma, White Rice, Rasam, Sambar, Curd, Garlic Sauce, Egg Fried rice, Thurai Tomato Sabzhi, Fruits: Water melon"
      },
      21: {
        breakfast: "Vada Paav/ Paav Bhaji, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Masala Omelette (2 nos)",
        lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Curd, Papad, Onion Raitha, Chicken Biryani, Banaras Baigan, Sweet: Ice Cream",
        snacks: "Veg Puffs, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Gobi Capsicum Masala, Fruit Salad"
      },
      22: {
        breakfast: "Poori, Aloo Masala, Semiya, Chutney, B,B,J, Tea, Coffee, Milk, Boiled Egg Masala Dry (2 nos)",
        lunch: "Phulka, Dal Ajawin, White Rice, Sambar, Rasam, Curd, Onion rings, Egg Masala, Poriyal, Sweet: Rava Laddu / Boondhi laddu",
        snacks: "Veg Cutlet, COLD COFFEE, Tea",
        dinner: "Phulka, Dosa, Chutney, Dhal, White Rice, Rasam, Sambar, Butter Milk, Green Veg Sabzhi, Fruits: Seasonal Fruits"
      },
      23: {
        breakfast: "Idly, Vada, Sambar, Chutney, Kitchadi, B,B,J, Tea, Coffee, Milk",
        lunch: "Phulka, Dal Gujrati, White Rice, Rasam, Curd, Papad, Coconut Rice / Lemon Rice, Thuvayal, Dingri Muttar",
        snacks: "Veg Samosa, Sauce, Tea, Coffee, Milk",
        dinner: "Chapathi, Dhal, White Rice, Rasam, Sambar, Butter Milk, Dhum Aloo, Egg Thai Fried Rice, Garlic Sauce, Fruits: Cut Fruits Mixed"
      },
      24: {
        breakfast: "French Toast, Masala Uthappam, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Boiled Egg (2 nos)",
        lunch: "Phulka, Dal Punjabi, White Rice, Sambar, Rasam, Butter Milk, Fryums, Chicken Masala, Poriyal, Sweet: Jangri / Jilebi",
        snacks: "Pani Poori, ICE LEMON TEA, Coffee, Milk",
        dinner: "Phulka, Dhal fry, White Rice, Rasam, Sambar, Curd rice, Meal maker peas & Capsicum Masala, Fruits: Water Melon"
      },
      25: {
        breakfast: "Gobi Paratha, Curd, Pongal, Chutney, B,B,J, Tea, Coffee, Milk, Sambar, Scrambled Egg (2 nos)",
        lunch: "Phulka, Dal Madka, White Rice, Sambar, Rasam, Curd, Papad, Aloo Palak, Avaraikai Poriyal",
        snacks: "Raw Banana Bajji, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Sambar, Butter Milk, Cabbage Poriyal, Fruits: Banana"
      },
      26: {
        breakfast: "Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Egg (2 nos)",
        lunch: "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Butter Milk, Masala Papad, Chicken 65, Keerai Kootu, Sweet: Gulab Jamun",
        snacks: "Cake, Cold Badam Milk, Tea",
        dinner: "Phulka, Idly, Chutney, Dhal, White Rice, Rasam, Sambar, Butter Milk, Aloo Brinjal Drumstic Masala, Fruits: Seasonal Fruits"
      },
      27: {
        breakfast: "Aloo Paratha, Curd, Pongal, Chutney, Sambar, B,B,J, Tea, Coffee, Milk, Egg Burji (2 nos)",
        lunch: "Phulka, Dal Thadka, White Rice, Rasam, Dahi vada / Kadi Pakoda, Papad, Capsicum Peas Masala, Sambar",
        snacks: "Mysore Bonda, Chutney, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Masala, White Rice, Rasam, Sambar, Butter Milk, Schezwan Egg Fried Rice, Gobi Manchurian, Fruits: Papaya"
      },
      28: {
        breakfast: "Idly, Vada, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Fried Egg Masala (2 nos)",
        lunch: "Phulka, Dal Rajma, White Rice, Sambar, Rasam, Fryums, Onion Raitha, Chicken Biryani, Oil Brinjal, Sweet: Ice Cream",
        snacks: "Vada Paav, Mint Chutney, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal Thoor, White Rice, Rasam, Sambar, Butter Milk, Lemon Rice, Aloo Capsicum Muttar Masala, Fruits: Seasonal Fruits"
      },
      29: {
        breakfast: "Poori, Aloo Masala, Poha Nampkin, B,B,J, Tea, Coffee, Milk, Masala Omelette (2 nos)",
        lunch: "Phulka, Dal Panchmela, White Rice, Sambar, Rasam, Curd, Onion Rings, Kadai Chicken, Poriyal",
        snacks: "Masala Peanuts/ Sundal, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal masoor, White Rice, Rasam, Sambar, Butter Milk, Channa Masala, Plain Dosa, Chutney, Fruits: Fruit Salad"
      },
      30: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Sambar, B,B,J, Tea, Coffee, Milk",
        lunch: "Phulka, Dal Thadka, White Rice, Sambar, Rasam, Curd, Papad, Veg Jal Frizhi, Sweet: Fruit Kesari / Bread Halwa",
        snacks: "Cake, Tea, Coffee, Milk",
        dinner: "Phulka, Dhal fry, White Rice, Rasam, Sambar, Butter Milk, Egg Chow Mein, Gobi Manchurian, Fruits: Fruit Salad"
      },
      31: {
        breakfast: "French Toast, Plain Dosa, Sambar, Chutney, B,B,J, Tea, Coffee, Milk, Scrambled Egg (2 nos)",
        lunch: "Phulka, Dal Fry, White Rice, Sambar, Rasam, Butter Milk, Fryums, Chicken Hydrabadi",
        snacks: "Onion Pakoda, Chutney, ICE LEMON TEA, Coffee, Milk",
        dinner: "Phulka, Dhal Thadka, White Rice, Rasam, Sambar, Butter Milk, Puliyodra, Aloo Podimas, Bindi masala, Fruits: Water Melon"
      },
    },      
    special: {
      1: {
        breakfast: "Poori, Aloo Masala, Poha Nampkin, Chutney, Banana Milk Shake, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, CowPeasSalad, French Toast",
        lunch: "Phulka, Butter Chicken Masala, Dal Fry, Panneer Butter Masala, Poriyal, Butter Milk, White Rice, Sambar, Pepper Rasam, Wheel Chips, Sweet: Mothichoor Laddu / Rava Laddu",
        snacks: "Mysore Bonda / Onion Pakoda, Tea, Coffee, Milk",
        dinner: "Pudhina Roti, Dosa, Sambar, Chutney, Loose Curd, Dhal Maharani, Channa Masala, White Rice, Rasam, Veg Mushroom Soup, Fruits: Seasonal"
      },
      2: {
        breakfast: "Gobi Paratha, Curd, Kitchadi, Sambar, Date Milk Shake, Cold Milk, Cornflakes, B,B,J,Pickle, Tea, Coffee, Milk, Chutney, Black eye Peas Salad, Fried Eggs",
        lunch: "Phulka, Dal Ajwin, Veg Jal Frizhe, White Rice, Pineapple Rasam, Curd, Bisibilla Bath, Potato Chips, Sweet: Carrot Halwa / Beetroot Halwa",
        snacks: "Mixed Veg Samosa, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Fry, Veg & Egg Fried Rice, Baby Corn Manchurian, Poriyal, White Rice, Sambar, Rasam, Curd, Veg Manchow Soup, Fruits: Orange"
      },
      3: {
        breakfast: "Andhra Masala Dosa, Sambar, Chutney, Fresh Juice, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, Green Salad, Egg Burji (2 nos)",
        lunch: "Diamond Chapathi, Dal Fry, Pepper/Navabi Chicken, Panneer Tikka Masala, Curd, Aloo Methi / Aloo Saagwala, White Rice, Sambar, Rasam, Fryums, Sweet: Coconut Burfi / Coconut Laddu",
        snacks: "Veg Burger, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Maharani, Bindi Do Piaza, Snack Guard Kootu, White Rice, Sambar, Rasam, Loose Curd, Puliyodra, Chetinad Soup, Fruits: Papaya"
      },
      4: {
        breakfast: "Plain Paratha, Panneer Burji, Pongal, Sambar, Fresh Juice, Cold Milk, Cornflakes, Chutney, B,B,J Tea, Coffee, Milk, Black Channa Sprout, Boiled Eggs (2 nos)",
        lunch: "Phulka, Malabar fish Curry / Fish Fry, Panneer kuftha Curry, White Rice, Sambar, Rasam, Wheel Chips, Dal Rajma, Butter Milk, Sweet: Rasmalai / Rasagula",
        snacks: "Onion Bajji, Chutney, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Vaangi Baath, Poriyal, Curd, Cr. Of Broccoli Soup, Fruit Salad"
      },
      5: {
        breakfast: "Mysore Masala Dosa, Sambar, Chutney, Fresh Juice, Cold Milk, Cornflakes, B,B,J Tea, Coffee, Milk, Moong Dal Sprout, Scrambled Egg (2)",
        lunch: "Phulka, Dhal, Tandoori Chicken, Panneer Fingers, White rice, Sambar, Gr.Veg Sabzhi (without potato), Curd, Fryums, Pineapple Rasam, Sweet: Gulab Jamun / Makhan peda",
        snacks: "Brownie Cake, Sauce, Tea, Hot Badam Milk",
        dinner: "Phulka, Dal Rajma, Idly, Sambar, Chutney, White Rice, Dhum Aloo / Banaras Aloo, Rasam, Loose Curd, Cream of Tomato, Fruits: Fresh Fruits"
      },
      6: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Fresh Juice, Cold Milk, Chocos, Sambar, Pickle, B,B,J Tea, Coffee, Milk, Salad, Egg Podimas",
        lunch: "Phulka, Dal Makhani, Mushroom Peas Masala, Dhai Vada, Dal Rasam, Fryums, White Rice, Karakozhambu / Sambar, Sweet: Kova Mysore Paak / Ghee Mysore Paak",
        snacks: "French Fries, Sauce, Ice Lemon Tea, Coffee",
        dinner: "Phulka, Dal Rajasthani, Veg & Egg Fried Rice, Aloo capsicum Masala, Garlic Sauce, White Rice, Sambar, Rasam, Curd, Spring Onion Soup, Fruits: Musk melon"
      },
      7: {
        breakfast: "Paav Bhaji / Vada Paav, Pongal, Fresh Juice, Cold Milk, Corn Flakes, B,B,J Tea, Coffee, Milk, Sambar, Chutney, Green Salad, Fried Eggs (2 nos)",
        lunch: "Phulka, Dal Rajma, Chicken Biryani, Veg Biryani, Banaras Baigan, Crumb Fry Panneer, Onion Raitha, White Rice, Sambar, Tomato Rasam, Papad, Sweet: Assorted Ice Cream",
        snacks: "Dilkush / Veg Puff, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Banjara, Baby Corn Masala, White Rice, Drumstick Sambar, Poriyal, Butter Milk, Mint Pulav, Rasam, Minestroni Soup, Fruits: Papaya"
      },
      8: {
        breakfast: "Poori, Aloo Masala, Poha Nampkin, Banana Milk Shake, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, Mint Chutney, Cow Peas Salad, French toast",
        lunch: "Phulka, Mangolian Chicken, Mangolean Panneer, Schezwan Fried Rice, Poriyal, Dhal Fry, White Rice, Sambar, Rasam, Wheel Chips, Butter Milk, Sweet: Chandrakala / Suryakala",
        snacks: "Spring Roll, Sauce, COLD COFFEE, Tea",
        dinner: "Plain Dosa, Dal, Sambar, Chutney, Veg Jal Frizhi, Methi Roti, White Rice, Rasam, Butter Milk, Hot n Sour Veg Soup, Fruits: Fresh Fruits"
      },
      9: {
        breakfast: "Idly, Vada, Sambar, Kitchadi, Chutney, Fresh Juice, Cold Milk, Cornflakes, B,B,J, Tea, Coffee, Milk, Black eye Peas Salad, Fried Eggs",
        lunch: "Diamond Chapathi, Dal Thadka, Channa Masala, White Rice, Pineapple Rasam, Curd, Bagala Bath / Bisibilla Huliyana, Potato Chips, Sweet: Carrot Halwa",
        snacks: "Onion Samosa, Imly Chutney, Jal Jeera, Coffee, Milk",
        dinner: "Chapathi, Veg & Egg Schezwan Fried Rice, Rajma Masala, Long Beans Sabzhi, Garlic sauce, White Rice, Sambar, Rasam, Butter Milk, Veg Manchow Soup, Fruits: Fruits Salad"
      },
      10: {
        breakfast: "Kal Dosa, Vadacurry, Chutney, Fresh Juice, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, Green Salad, Egg Burji (2 nos)",
        lunch: "Phulka, Karavali Chicken, Panneer Hariyali, Arvi Fry, Dhal Lasoni, Curd, Fryums, White Rice, Kadhambam Sambar, Tomato Rasam, Sweet: Shahi Thukra / Bread Halwa",
        snacks: "Raw banana bajji, Tea, Coffee, Milk, Sweet Corn",
        dinner: "Phulka, Dal Maharani, Bindi Jaipuri, Snack Guard Kootu, White Rice, Sambar, Rasam, Curd Rice, Butter Milk, Chetinad Soup, Fruits: Papaya"
      },
      11: {
        breakfast: "Paratha, Panneer Burji, Pongal, Sambar, Dates Milk Shake, Cold Milk, Cornflakes, B,B,J Tea, Coffee, Milk, Chutney, Sweet Corn Salad, Fried Eggs (2 nos)",
        lunch: "Phulka, Mughlai Egg Masala, Nargesi Kuftha curry, White Rice, Sambar, Rasam, Banaras Baigan, Fryums, Dal Panchamela, Curd, Sweet: Rasmalai / Rasagula",
        snacks: "Masala Peanuts, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Jeera Rice, Poriyal, Loose Curd, Mixed veg Soup, Fruits: Seasonal"
      },
      12: {
        breakfast: "Masala Ghee Roast Dosa, Sambar, Fresh Juice, Cold Milk, Chocos, Chutney, B,B,J, Tea, Coffee, Milk, Moong Dal Sprout, Scrambled Egg (2)",
        lunch: "Phulka, Dal Fry, Tandoori Chicken, Panneer Amritsari, White rice, Sambar, Poondu Rasam, Loose Curd, Fryums, Keira Kootu, Sweet: Gulab Jamun / Makhan peda",
        snacks: "Plain Cake, Cold Badam Milk, Tea",
        dinner: "Phulka, Dal Maharani, White Rice, Dhum Aloo / Banaras Aloo, Rasam, Curd, Idly, Sambar, Chutney, Cream of Tomato, Fruits: Papaya"
      },
      13: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Fresh Juice, Cold Milk, Chocos, Sambar, B,B,J Tea, Coffee, Milk, Salad, Egg Burji (2)",
        lunch: "Phulka, Dal Makhani, Dingri Muttar, Dahi Vada, Poriyal, Sambar / Karakolambu, White Rice, Paruppu Rasam, Fryums, Sweet: Ghee Mysore Paak",
        snacks: "French Fries, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Fry, Veg & Egg Manchow Fried Rice, Baby corn Manchurian, Poriyal, Loose Curd, White Rice, Sambar, Rasam, Spring Onion Soup, Fruits: Fresh Fruits"
      },
      14: {
        breakfast: "Idly, Vada, Sambar, Chutney, Fresh Juice, Cold Milk, Corn Flakes, Tea, Coffee, Milk, B,B,J Sprouted Channa Black, Omelette Sandwich",
        lunch: "Phulka, Dal, Chicken Biryani, Veg Biryani, Banaras Baigan, Dragon Panneer, Onion Raitha, White Rice, Sambar, Tomato Rasam, Papad, Sweet: Ice Cream / Kulfi",
        snacks: "Vada Paav / Pani Poori, SWEET LASSI, Tea",
        dinner: "Phulka, Dal Masala, Butter Peas masala, White Rice, Sambar, Rasam, Aloo Jeera, Curd, Variety Rice, Sweet corn Soup, Fruits: Cut Fruits"
      },
      15: {
        breakfast: "Poori, Aloo Masala, Poha Nampkin, Chutney, Banana Milk Shake, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, CowPeasSalad, French Toast",
        lunch: "Phulka, Butter Chicken Masala, Dal Fry, Panneer Butter Masala, Poriyal, Butter Milk, White Rice, Sambar, Pepper Rasam, Wheel Chips, Sweet: Mothichoor Laddu / Rava Laddu",
        snacks: "Mysore Bonda / Onion Pakoda, Tea, Coffee, Milk",
        dinner: "Pudhina Roti, Dosa, Sambar, Chutney, Loose Curd, Dhal Maharani, Channa Masala, White Rice, Rasam, Veg Mushroom Soup, Fruits: Seasonal"
      },
      16: {
        breakfast: "Gobi Paratha, Curd, Kitchadi, Sambar, Date Milk Shake, Cold Milk, Cornflakes, B,B,J,Pickle, Tea, Coffee, Milk, Chutney, Black eye Peas Salad, Fried Eggs",
        lunch: "Phulka, Dal Ajwin, Veg Jal Frizhe, White Rice, Pineapple Rasam, Curd, Bisibilla Bath, Potato Chips, Sweet: Carrot Halwa / Beetroot Halwa",
        snacks: "Mixed Veg Samosa, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Fry, Veg & Egg Fried Rice, Baby Corn Manchurian, Poriyal, White Rice, Sambar, Rasam, Curd, Veg Manchow Soup, Fruits: Orange"
      },
      17: {
        breakfast: "Andhra Masala Dosa, Sambar, Chutney, Fresh Juice, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, Green Salad, Egg Burji (2 nos)",
        lunch: "Diamond Chapathi, Dal Fry, Pepper/Navabi Chicken, Panneer Tikka Masala, Curd, Aloo Methi / Aloo Saagwala, White Rice, Sambar, Rasam, Fryums, Sweet: Coconut Burfi / Coconut Laddu",
        snacks: "Veg Burger, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Maharani, Bindi Do Piaza, Snack Guard Kootu, White Rice, Sambar, Rasam, Loose Curd, Puliyodra, Chetinad Soup, Fruits: Papaya"
      },
      18: {
        breakfast: "Plain Paratha, Panneer Burji, Pongal, Sambar, Fresh Juice, Cold Milk, Cornflakes, Chutney, B,B,J Tea, Coffee, Milk, Black Channa Sprout, Boiled Eggs (2 nos)",
        lunch: "Phulka, Malabar fish Curry / Fish Fry, Panneer kuftha Curry, White Rice, Sambar, Rasam, Wheel Chips, Dal Rajma, Butter Milk, Sweet: Rasmalai / Rasagula",
        snacks: "Onion Bajji, Chutney, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Vaangi Baath, Poriyal, Curd, Cr. Of Broccoli Soup, Fruit Salad"
      },
      19: {
        breakfast: "Mysore Masala Dosa, Sambar, Chutney, Fresh Juice, Cold Milk, Cornflakes, B,B,J Tea, Coffee, Milk, Moong Dal Sprout, Scrambled Egg (2)",
        lunch: "Phulka, Dhal, Tandoori Chicken, Panneer Fingers, White rice, Sambar, Gr.Veg Sabzhi (without potato), Curd, Fryums, Pineapple Rasam, Sweet: Gulab Jamun / Makhan peda",
        snacks: "Brownie Cake, Sauce, Tea, Hot Badam Milk",
        dinner: "Phulka, Dal Rajma, Idly, Sambar, Chutney, White Rice, Dhum Aloo / Banaras Aloo, Rasam, Loose Curd, Cream of Tomato, Fruits: Fresh Fruits"
      },
      20: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Fresh Juice, Cold Milk, Chocos, Sambar, Pickle, B,B,J Tea, Coffee, Milk, Salad, Egg Podimas",
        lunch: "Phulka, Dal Makhani, Mushroom Peas Masala, Dhai Vada, Dal Rasam, Fryums, White Rice, Karakozhambu / Sambar, Sweet: Kova Mysore Paak / Ghee Mysore Paak",
        snacks: "French Fries, Sauce, Ice Lemon Tea, Coffee",
        dinner: "Phulka, Dal Rajasthani, Veg & Egg Fried Rice, Aloo capsicum Masala, Garlic Sauce, White Rice, Sambar, Rasam, Curd, Spring Onion Soup, Fruits: Musk melon"
      },
      21: {
        breakfast: "Paav Bhaji / Vada Paav, Pongal, Fresh Juice, Cold Milk, Corn Flakes, B,B,J Tea, Coffee, Milk, Sambar, Chutney, Green Salad, Fried Eggs (2 nos)",
        lunch: "Phulka, Dal Rajma, Chicken Biryani, Veg Biryani, Banaras Baigan, Crumb Fry Panneer, Onion Raitha, White Rice, Sambar, Tomato Rasam, Papad, Sweet: Assorted Ice Cream",
        snacks: "Dilkush / Veg Puff, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Banjara, Baby Corn Masala, White Rice, Drumstick Sambar, Poriyal, Butter Milk, Mint Pulav, Rasam, Minestroni Soup, Fruits: Papaya"
      },
      22: {
        breakfast: "Poori, Aloo Masala, Poha Nampkin, Banana Milk Shake, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, Mint Chutney, Cow Peas Salad, French toast",
        lunch: "Phulka, Mangolian Chicken, Mangolean Panneer, Schezwan Fried Rice, Poriyal, Dhal Fry, White Rice, Sambar, Rasam, Wheel Chips, Butter Milk, Sweet: Chandrakala / Suryakala",
        snacks: "Spring Roll, Sauce, COLD COFFEE, Tea",
        dinner: "Plain Dosa, Dal, Sambar, Chutney, Veg Jal Frizhi, Methi Roti, White Rice, Rasam, Butter Milk, Hot n Sour Veg Soup, Fruits: Fresh Fruits"
      },
      23: {
        breakfast: "Idly, Vada, Sambar, Kitchadi, Chutney, Fresh Juice, Cold Milk, Cornflakes, B,B,J, Tea, Coffee, Milk, Black eye Peas Salad, Fried Eggs",
        lunch: "Diamond Chapathi, Dal Thadka, Channa Masala, White Rice, Pineapple Rasam, Curd, Bagala Bath / Bisibilla Huliyana, Potato Chips, Sweet: Carrot Halwa",
        snacks: "Onion Samosa, Imly Chutney, Jal Jeera, Coffee, Milk",
        dinner: "Chapathi, Veg & Egg Schezwan Fried Rice, Rajma Masala, Long Beans Sabzhi, Garlic sauce, White Rice, Sambar, Rasam, Butter Milk, Veg Manchow Soup, Fruits: Fruits Salad"
      },
      24: {
        breakfast: "Kal Dosa, Vadacurry, Chutney, Fresh Juice, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, Green Salad, Egg Burji (2 nos)",
        lunch: "Phulka, Karavali Chicken, Panneer Hariyali, Arvi Fry, Dhal Lasoni, Curd, Fryums, White Rice, Kadhambam Sambar, Tomato Rasam, Sweet: Shahi Thukra / Bread Halwa",
        snacks: "Raw banana bajji, Tea, Coffee, Milk, Sweet Corn",
        dinner: "Phulka, Dal Maharani, Bindi Jaipuri, Snack Guard Kootu, White Rice, Sambar, Rasam, Curd Rice, Butter Milk, Chetinad Soup, Fruits: Papaya"
      },
      25: {
        breakfast: "Paratha, Panneer Burji, Pongal, Sambar, Dates Milk Shake, Cold Milk, Cornflakes, B,B,J Tea, Coffee, Milk, Chutney, Sweet Corn Salad, Fried Eggs (2 nos)",
        lunch: "Phulka, Mughlai Egg Masala, Nargesi Kuftha curry, White Rice, Sambar, Rasam, Banaras Baigan, Fryums, Dal Panchamela, Curd, Sweet: Rasmalai / Rasagula",
        snacks: "Masala Peanuts, Tea, Coffee, Milk",
        dinner: "Poori, Channa Masala, White Rice, Rasam, Jeera Rice, Poriyal, Loose Curd, Mixed veg Soup, Fruits: Seasonal"
      },
      26: {
        breakfast: "Masala Ghee Roast Dosa, Sambar, Fresh Juice, Cold Milk, Chocos, Chutney, B,B,J, Tea, Coffee, Milk, Moong Dal Sprout, Scrambled Egg (2)",
        lunch: "Phulka, Dal Fry, Tandoori Chicken, Panneer Amritsari, White rice, Sambar, Poondu Rasam, Loose Curd, Fryums, Keira Kootu, Sweet: Gulab Jamun / Makhan peda",
        snacks: "Plain Cake, Cold Badam Milk, Tea",
        dinner: "Phulka, Dal Maharani, White Rice, Dhum Aloo / Banaras Aloo, Rasam, Curd, Idly, Sambar, Chutney, Cream of Tomato, Fruits: Papaya"
      },
      27: {
        breakfast: "Aloo Paratha, Curd, Kitchadi, Chutney, Fresh Juice, Cold Milk, Chocos, Sambar, B,B,J Tea, Coffee, Milk, Salad, Egg Burji (2)",
        lunch: "Phulka, Dal Makhani, Dingri Muttar, Dahi Vada, Poriyal, Sambar / Karakolambu, White Rice, Paruppu Rasam, Fryums, Sweet: Ghee Mysore Paak",
        snacks: "French Fries, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Fry, Veg & Egg Manchow Fried Rice, Baby corn Manchurian, Poriyal, Loose Curd, White Rice, Sambar, Rasam, Spring Onion Soup, Fruits: Fresh Fruits"
      },
      28: {
        breakfast: "Idly, Vada, Sambar, Chutney, Fresh Juice, Cold Milk, Corn Flakes, Tea, Coffee, Milk, B,B,J Sprouted Channa Black, Omelette Sandwich",
        lunch: "Phulka, Dal, Chicken Biryani, Veg Biryani, Banaras Baigan, Dragon Panneer, Onion Raitha, White Rice, Sambar, Tomato Rasam, Papad, Sweet: Ice Cream / Kulfi",
        snacks: "Vada Paav / Pani Poori, SWEET LASSI, Tea",
        dinner: "Phulka, Dal Masala, Butter Peas masala, White Rice, Sambar, Rasam, Aloo Jeera, Curd, Variety Rice, Sweet corn Soup, Fruits: Cut Fruits"
      },
      29: {
        breakfast: "Poori, Aloo Masala, Poha Nampkin, Chutney, Banana Milk Shake, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, CowPeasSalad, French Toast",
        lunch: "Phulka, Butter Chicken Masala, Dal Fry, Panneer Butter Masala, Poriyal, Butter Milk, White Rice, Sambar, Pepper Rasam, Wheel Chips, Sweet: Mothichoor Laddu / Rava Laddu",
        snacks: "Mysore Bonda / Onion Pakoda, Tea, Coffee, Milk",
        dinner: "Pudhina Roti, Dosa, Sambar, Chutney, Loose Curd, Dhal Maharani, Channa Masala, White Rice, Rasam, Veg Mushroom Soup, Fruits: Seasonal"
      },
      30: {
        breakfast: "Gobi Paratha, Curd, Kitchadi, Sambar, Date Milk Shake, Cold Milk, Cornflakes, B,B,J,Pickle, Tea, Coffee, Milk, Chutney, Black eye Peas Salad, Fried Eggs",
        lunch: "Phulka, Dal Ajwin, Veg Jal Frizhe, White Rice, Pineapple Rasam, Curd, Bisibilla Bath, Potato Chips, Sweet: Carrot Halwa / Beetroot Halwa",
        snacks: "Mixed Veg Samosa, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Fry, Veg & Egg Fried Rice, Baby Corn Manchurian, Poriyal, White Rice, Sambar, Rasam, Curd, Veg Manchow Soup, Fruits: Orange"
      },
      31: {
        breakfast: "Andhra Masala Dosa, Sambar, Chutney, Fresh Juice, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, Green Salad, Egg Burji (2 nos)",
        lunch: "Diamond Chapathi, Dal Fry, Pepper/Navabi Chicken, Panneer Tikka Masala, Curd, Aloo Methi / Aloo Saagwala, White Rice, Sambar, Rasam, Fryums, Sweet: Coconut Burfi / Coconut Laddu",
        snacks: "Veg Burger, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Maharani, Bindi Do Piaza, Snack Guard Kootu, White Rice, Sambar, Rasam, Loose Curd, Puliyodra, Chetinad Soup, Fruits: Papaya"
      },
    },      
  }

  export default menus;
