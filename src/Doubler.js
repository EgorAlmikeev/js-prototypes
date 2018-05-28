class Doubler {
    constructor(n = 3) { this.n = n; }
    double() { this.n *= 2; return this; }
    get result() { return this.n; }
}

let doubler = new Doubler(2);
doubler.double().double().double();
console.log(doubler.result);