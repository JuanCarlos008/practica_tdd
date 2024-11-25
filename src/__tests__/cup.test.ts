import { describe, it, expect } from 'vitest';

import { Cup } from '../models/cup';
import { CupSize } from '../models/cupsSize';

describe('Cup', () => {
  it("Debe devolver Verdadero si tiene la cantidad de vasos en existencia", () => {
    const cup = new Cup(10, CupSize.SMALL);
    expect(cup.hasCups(5)).toBe(true);
  });

  it("Debe devolver Falso si la cantidad de vasos en existencia es menor a la solicitada", () => {
    const cup = new Cup(10, CupSize.SMALL);
    expect(cup.hasCups(15)).toBe(false);
  });

  it("Debe restar la cantidad de vasos solicitada", () => {
    const cup = new Cup(10, CupSize.SMALL);
    cup.giveCups(5);
    expect(cup.getQuantity()).toBe(5);
  });
});