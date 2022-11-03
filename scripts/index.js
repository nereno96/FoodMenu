"use strict"

let menu = {
    drinks : [
    "Water", "Tea", "Sweet Tea",
    "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees : [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate"
    ],
    desserts: [
    "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

const optionsList = document.getElementById("optionsList");
const foodsList = document.getElementById("foodsList");

window.onload = function () {
    initFoodsList();
    optionsList.onchange = optionChanged;
}

function initFoodsList () {

    let selectedValue = optionsList.value;
    if (selectedValue == "drinks") {
        for (let value of menu.drinks) {
            let option = document.createElement("option");
            option.textContent = value;
            option.value = value;
            // new Option (value, value);
            foodsList.appendChild(option);
        }
        foodsList.style.display = "block";
    }
    else if (selectedValue == "entrees") {
        for (let value of menu.entrees) {
            let option = document.createElement("option");
            option.textContent = value;
            option.value = value;
            //new Option (value, value);
            foodsList.appendChild(option);
        }
        foodsList.style.display = "block";
    }
    else if (selectedValue == "desserts"){
        for (let value of menu.desserts) {
            let option = document.createElement("option");
            option.textContent = value;
            option.value = value;
            //new Option (value, value);
            foodsList.appendChild(option);
        }
        foodsList.style.display = "block";
    }
    else {
        foodsList.style.display = "none";
    }
    
    return foodsList;
}

function optionChanged () {
    foodsList.options.length = 0;
    initFoodsList();
}