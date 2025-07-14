function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    this.displayInfo = function() {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    };
}

const myCar = new Car("Toyota", "fortuner", 2022);
myCar.displayInfo();