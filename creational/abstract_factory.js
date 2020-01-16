// Abstract factory
function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

// Factories
function sportCarFactory() {
    return new Z4();
}

function familyCarFactory() {
    return new x5();
}

class Z4 {
    info () {
        return 'Z4 is a SPORT CAR!';
    }
}

class X5 {
    info () {
        return 'X5 is a FAMILY CAR!';
    }
}

// Initializing Abstract factory of sport cars
const produce = bmwProducer('sport');

// Car producing (Factory)
const myCar = new produce();

console.log(myCar.info());