class Car {
    engineName: number;
    gears: number;
    private speed: number;

    constructor(speed: number) {
      this.speed = speed || 0;
    }

    accelerate(): void {
      this.speed++;
    }

    throttle(): void {
      this.speed--;
    }

    getSpeed(): void {
      console.log(this.speed);
    }

    static numberOfWheels(): number {
      return 4;
    }
}

let car = new Car(5);
car.accelerate();
car.throttle();

console.log(Car.numberOfWheels());
