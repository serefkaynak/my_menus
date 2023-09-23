async function getRestaurants() {
    let restaurants = await fetch('/data/api/restaurants.json').then(x=>x.json());
    return restaurants
}