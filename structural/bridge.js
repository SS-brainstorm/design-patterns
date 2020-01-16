class Model {
    constructor(color) {
        this.color = color;
    }
}

class Color {
    constructor(type) {
        this.type = type;
    }

    get() {
        return this.type;
    }
}

class BlackColor extends Color {
    constructor() {
        super('Black Color');
    }
}

class GreyColor extends Color {
    constructor() {
        super('Grey Color');
    }
}

class Audi extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Audi, Color: ${this.color.get()}`;
    }
}

class Bmw extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: BMW, Color: ${this.color.get()}`;
    }
}

// We avoided creation of very specific class:
// const blackBMW = new BlackColorBmw();

const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint());