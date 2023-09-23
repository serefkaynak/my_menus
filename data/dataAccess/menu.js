async function getRestaurantMenu(id) {
    let menu = await fetch(`/data/api/menu_${id}.json`).then(x=>x.json());
    return menu
}