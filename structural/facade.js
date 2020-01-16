class Conveyor {
    setBody() { 
        console.log('Body set!'); 
    }

    getEngine() { 
        console.log('Dismantle Engine!'); 
    }

    setEngine() { 
        console.log('Dismantle Engine!'); 
    }

    setInterior() { 
        console.log('Interior added!'); 
    }

    getInterior() { 
        console.log('Update interior!'); 
    }

    setExterior() { 
        console.log('Exterior added!'); 
    }

    setWheels() { 
        console.log('Wheels added!'); 
    }

    addElectronics() {
        console.log('Added electronics!'); 
    }

    paint() {
        console.log('CAR painted!');
    }
}

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }

    assembleCar() {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint();
    }

    changeEngine() {
        this.car.getEngine();
        this.car.setEngine();
    }

    changeInterior() {
        this.car.getInterior();
        this.car.setInterior();
    }
}

const conveyor = new ConveyorFacade(new Conveyor());

let car = conveyor.assembleCar();
car = conveyor.changeEngine();
car = conveyor.changeInterior();

console.log(car);
