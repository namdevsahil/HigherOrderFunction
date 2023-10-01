// Store's inventory with prices in USD
const inventory = {
  item1: 10,   
  item2: 25,   
  item3: 15,   
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Function to convert USD to INR
function usdToInr(priceInUsd) {
  return priceInUsd * exchangeRate;
}

// Use the map function to create a new object with prices in INR
const inventoryInInr = Object.fromEntries(
  Object.entries(inventory).map(([item, priceInUsd]) => {
    return [item, usdToInr(priceInUsd)];
  })
);

console.log("Inventory in INR:", inventoryInInr);
