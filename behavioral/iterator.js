class Iterator {
    constructor(el) {
        this.index = 0;
        this.keys = Object.keys(el);
        this.elements = el;
    }

    next() {
        return this.elements[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
}

const collection = new Iterator(['Audi', 'BMW', 'Tesla', 'Mercedes']);

while (collection.hasNext()) {
    console.log(collection.next());
}