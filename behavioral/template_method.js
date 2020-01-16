class Builder {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
}

class TeslaBuilder extends Builder {
    addEngine() {
        console.log('tesla engine');
    }

    installChassis() {
        console.log('tesla chassis');
    }

    addElectronic() {
        console.log('tesla electronic');
    }

    collectAccessories() {
        console.log('tesla accessories');
    }
}

class AudiBuilder extends Builder {
    addEngine() {
        console.log('Audi engine');
    }

    installChassis() {
        console.log('Audi chassis');
    }

    addElectronic() {
        console.log('Audi electronic');
    }

    collectAccessories() {
        console.log('Audi accessories');
    }
}

const tesla = new TeslaBuilder();
const audi = new AudiBuilder();

tesla.build();
audi.build();