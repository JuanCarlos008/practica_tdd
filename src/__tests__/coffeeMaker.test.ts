import { describe, it, expect } from 'vitest';

import { CoffeeMaker } from '../models/coffeeMaker';

describe('CoffeeMaker', () => {
  it("Debe devolver Verdadero si tiene la cantidad de café en existencia", () => {
    const coffeeMaker = new CoffeeMaker(10);
    expect(coffeeMaker.hasCoffee(5)).toBe(true);
  });

  it("Debe devolver Falso si la cantidad de café en existencia es menor a la solicitada", () => {
    const coffeeMaker = new CoffeeMaker(10);
    expect(coffeeMaker.hasCoffee(15)).toBe(false);
  });

  it("Debe restar la cantidad de café solicitada", () => {
    const coffeeMaker = new CoffeeMaker(10);
    coffeeMaker.giveCoffee(5);
    expect(coffeeMaker.getCoffeeAmount()).toBe(5);
  });
})