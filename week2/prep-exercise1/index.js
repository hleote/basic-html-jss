// lets first create an array of three cars

const cars = [
    {
        make: 'Volvo',
        speed: 45,
        color: 'lightYellow',
    },
    {
        make: 'BMW',
        speed: 87,
        color: 'lightBlue',
    },
    {
        make: 'Fiat',
        speed: 78,
        color: 'lightCyan',
    }
];

// lets use the same cars array

// Lets transfrom it from an array of car objects to an array of car colors
const carColors = cars.map(car => car.color);

console.log(carColors); // ['lightYellow', 'lightBlue', 'lightCyan']

const carSpeeds = cars.map(car => car.speed);

const fiat = cars.find(car => car.make === 'Fiat');

console.log(carSpeeds); // [45, 87, 78]

console.log(fiat); // {make: 'Fiat', speed: 78, color: 'lightCyan'}
