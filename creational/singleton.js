/**
 * First realisation
 */
// let instance;

// class Counter {
//     constructor () {
//         if (!instance) instance = this;
//         instance.count = 0;
//         return instance;
//     }

//     getCount () {
//         return instance.count;
//     }

//     increaseCount() {
//         return instance.count++;
//     }
// }

class Counter {
    constructor () {
        if (typeof Counter.instance === 'object')  {
            return Counter.instance;
        }

        this.count = 0;
        Counter.instance = this;
        return this;
    }

    getCount () {
        return this.count;
    }

    increaseCount() {
        return this.count++;
    }
}

const myCount = new Counter();
const myCount2 = new Counter();

myCount.increaseCount();
myCount.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount2.getCount());
console.log(myCount.getCount());