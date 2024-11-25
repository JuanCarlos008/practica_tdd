import { SugarDispenser } from '../models/sugarDispenser';

describe('SugarDispenser', () =>{
  test('Debe devolver Verdadero si la cantidad de azucar en exitencua', ()=>{
    const sugarDispenser = new SugarDispenser(10)
    expect(sugarDispenser.hasSugar(5)).toBe(true)
  })

  test('Debe devolver Falso si la cantidad de azucar en existencia es menor a la solicitada', ()=>{
    const sugarDispenser = new SugarDispenser(10)
    expect(sugarDispenser.hasSugar(15)).toBe(false)
  })

  test('Debe restar la cantidad de azucar solicitada', ()=>{
    const sugarDispenser = new SugarDispenser(10)
    sugarDispenser.giveSugar(5)
    expect(sugarDispenser.getSugarAmount()).toBe(5)
  })
})