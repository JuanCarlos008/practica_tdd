import { CoffeeMaker } from '../models/coffeeMaker';

describe('CoffeeMaker', () => {
  test("Debe devolver Verdadero si tiene la cantidad de café en existencia", () => {
    const coffeeMaker = new CoffeeMaker(10);
    expect(coffeeMaker.hasCoffee(5)).toBe(true);
  });

  test("Debe devolver Falso si la cantidad de café en existencia es menor a la solicitada", () => {
    const coffeeMaker = new CoffeeMaker(10);
    expect(coffeeMaker.hasCoffee(15)).toBe(false);
  });

  test("Debe restar la cantidad de café solicitada", () => {
    const coffeeMaker = new CoffeeMaker(10);
    coffeeMaker.giveCoffee(5);
    expect(coffeeMaker.getCoffeeAmount()).toBe(5);
  });
})