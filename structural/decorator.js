class Car {
    constructor() {
        this.price = 10000;
        this.model = 'Car';
    }

    getPrice() {
        return this.price;
    }

    getModel() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 25000;
        this.model = 'Tesla';
    }
}

class Audi extends Car {
    constructor() {
        super();
        this.price = 40000;
        this.model = 'Audi';
    }
}

class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 5000;
    }

    getModel() {
        return `${this.car.getModel()} with autopilot`;
    }
}

class Parktronic {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    getModel() {
        return `${this.car.getModel()} with parktronic`;
    }
}

// Version with Autopilot & Parktronic
let tesla = new Tesla();

tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);

console.log(tesla.getModel(), tesla.getPrice());

// Version with Autopilot only
tesla = new Tesla();
tesla = new Autopilot(tesla);

let audi = new Audi();
audi = new Autopilot(audi);

console.log(tesla.getModel(), tesla.getPrice());
console.log(audi.getModel(), audi.getPrice());
