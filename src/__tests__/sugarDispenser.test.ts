

import { describe, expect, it } from 'vitest';
import { SugarDispenser } from '../models/sugarDispenser';

describe('SugarDispenser', () =>{
  it('Debe devolver Verdadero si la cantidad de azucar en exitencua', ()=>{
    const sugarDispenser = new SugarDispenser(10)
    expect(sugarDispenser.hasSugar(5)).toBe(true)
  })

  it('Debe devolver Falso si la cantidad de azucar en existencia es menor a la solicitada', ()=>{
    const sugarDispenser = new SugarDispenser(10)
    expect(sugarDispenser.hasSugar(15)).toBe(false)
  })

  it('Debe restar la cantidad de azucar solicitada', ()=>{
    const sugarDispenser = new SugarDispenser(10)
    sugarDispenser.giveSugar(5)
    expect(sugarDispenser.getSugarAmount()).toBe(5)
  })
})