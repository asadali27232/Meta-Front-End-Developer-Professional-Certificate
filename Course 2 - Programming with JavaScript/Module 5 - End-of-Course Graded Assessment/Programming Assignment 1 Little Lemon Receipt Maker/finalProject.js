const dishData = [
    {
        name: 'Italian pasta',
        price: 9.55,
    },
    {
        name: 'Rice with veggies',
        price: 8.65,
    },
    {
        name: 'Chicken with potatoes',
        price: 15.55,
    },
    {
        name: 'Vegetarian Pizza',
        price: 6.45,
    },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
    if (typeof taxBoolean !== 'boolean') {
        console.log('You need to pass a boolean to the getPrices call!');
        return;
    }

    dishData.forEach((dish) => {
        let finalPrice = taxBoolean ? dish.price * tax : dish.price;
        // Format price to 2 decimal places and add dollar sign
        console.log(`Dish: ${dish.name} Price: $${finalPrice.toFixed(2)}`);
    });
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    // First, call getPrices() to log the prices
    getPrices(taxBoolean);

    // Then, validate the guests parameter
    if (typeof guests !== 'number' || guests <= 0 || guests >= 30) {
        console.log('The second argument must be a number between 0 and 30');
        return;
    }

    // If guests are valid, calculate and print the discount
    let discount = guests < 5 ? 5 : 10;
    console.log('Discount is: $' + discount);
}

// Call getDiscount()
getDiscount(true, 2); // Applies tax and less than 5 guests, discount = $5
getDiscount(false, 10); // No tax, more than 5 guests, discount = $10
