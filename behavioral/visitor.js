class Tesla {
    info() {
        return 'Tesla car';
    }

    accept(visitor) {
        visitor(this);
    }
}

class Bmw {
    info() {
        return 'Bmw car';
    }

    accept(visitor) {
        visitor(this);
    }
}

class Audi {
    info() {
        return 'Audi car';
    }

    accept(visitor) {
        visitor(this);
    }
}

function exportVisitor(auto) {
    if (auto instanceof Tesla) auto.export = console.log(`Exported data: ${auto.info()}`);
    if (auto instanceof Bmw) auto.export = console.log(`Exported data2: ${auto.info()}`);
    if (auto instanceof Audi) auto.export = console.log(`Exported data3: ${auto.info()}`);
}

const tesla = new Tesla();
const audi = new Audi();

console.log(tesla.accept(exportVisitor));
console.log(audi.accept(exportVisitor));