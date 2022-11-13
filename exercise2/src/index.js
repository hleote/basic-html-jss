const favouriteDishes = [
    {dishName: "pizza", isFavourite: true},
    {dishName: "risotto", isFavourite: false},
    {dishName: "hamburger", isFavourite: false},
    {dishName: "fries", isFavourite: false},
    {dishName: "shake", isFavourite: false},
    {dishName: "pasta", isFavourite: false}
];


const foodsUl = document.querySelector('#foods');
favouriteDishes.map(function (dish) {
    const li = document.createElement('li');
    li.textContent = dish.dishName;
    if (dish.isFavourite) {
        li.textContent = `${dish.dishName} - My favourite`;
    }
    foodsUl.appendChild(li);
});
