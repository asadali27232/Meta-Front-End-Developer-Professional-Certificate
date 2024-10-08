// Task 1
var dairy = [
    'cheese',
    'sour cream',
    'milk',
    'yogurt',
    'ice cream',
    'milkshake',
];

function logDairy() {
    for (dairyItem of dairy) {
        console.log(dairyItem);
    }
}

logDairy();

// Task 2
const animal = {
    canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (key of Object.keys(bird)) {
        console.log(key + ': ' + bird[key]);
    }
}

birdCan();

// Task 3
function animalCan() {
    for (let key in bird) {
        console.log(key + ': ' + bird[key]);
    }
}

animalCan();
