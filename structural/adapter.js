class EngineV2 {
    simpleIterface() {
        console.log('Engine 2.0');
    }
}

class EngineV8 {
    complicatedInterface() {
        console.log('Engine V8');
    }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleIterface() {
        this.engine.complicatedInterface();
    }
}

class Auto {
    startEngine(engine) {
        engine.simpleIterface();
    }
}

let myCar;

// Engine 2.0
myCar = new Auto();
const oldEngine = new EngineV2();

myCar.startEngine(oldEngine);

// Engine V8 with adapter
myCar = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());
myCar.startEngine(engineAdapter);

