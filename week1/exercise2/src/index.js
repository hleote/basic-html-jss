const favouriteDishes = [
    {dishName: "pizza", isFavourite: true},
    {dishName: "risotto", isFavourite: false},
    {dishName: "hamburger", isFavourite: false},
    {dishName: "fries", isFavourite: false},
    {dishName: "shake", isFavourite: false},
    {dishName: "pasta", isFavourite: false}
];


const foodsAdvanceUl = document.querySelector('#foods-advanced');

favouriteDishes.map(function (dish) {
    const li = document.createElement('li');
    li.textContent = dish.dishName;
    if (dish.isFavourite) {
        li.textContent = `${dish.dishName} - My favourite`;
    }
    foodsAdvanceUl.appendChild(li);
});

const foodsUl = document.querySelector('#foods');

for (let i = 0; i < favouriteDishes.length; i++) {
    const li = document.createElement('li');
    li.textContent = favouriteDishes[i].dishName;
    if (favouriteDishes[i].isFavourite) {
        li.textContent = `${favouriteDishes[i].dishName} - My favourite`;
    }
    foodsUl.appendChild(li);
}

