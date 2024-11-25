import { CoffeeMachine } from '../coffeeMachine';
import { CoffeeMaker } from '../models/coffeeMaker';
import { Cup } from '../models/cup';
import { CupSize } from '../models/cupsSize';
import { SugarDispenser } from '../models/sugarDispenser';

describe('CoffeeMachine', () => {
  let coffeeMachine: CoffeeMachine;
  let coffeeMaker: CoffeeMaker;
  let smallCups: Cup;
  let mediumCups: Cup;
  let largeCups: Cup;
  let sugarDispenser: SugarDispenser;

  beforeEach(()=>{
    coffeeMachine = new CoffeeMachine()
    coffeeMaker = new CoffeeMaker(50)
    smallCups = new Cup(5, CupSize.SMALL)
    mediumCups = new Cup(5, CupSize.MEDIUM)
    largeCups = new Cup(5, CupSize.LARGE)
    sugarDispenser = new SugarDispenser(20)

    coffeeMachine.setCoffeeMaker(coffeeMaker)
    coffeeMachine.setSmallCups(smallCups)
    coffeeMachine.setMediumCups(mediumCups)
    coffeeMachine.setLargeCups(largeCups)
    coffeeMachine.setSugarDispenser(sugarDispenser)
  })


  test("Debe devolver un vaso SMALL", ()=>{
    const cup = coffeeMachine.getCupSize(CupSize.SMALL)
    expect(cup).toBe(coffeeMachine.getSmallCups())
  })

  test("Debe devolver un vaso MEDIUM", ()=>{
    const cup = coffeeMachine.getCupSize(CupSize.MEDIUM)
    expect(cup).toBe(coffeeMachine.getMediumCups())
  })

  test("Debe devolver un vaso LARGE", ()=>{
    const cup = coffeeMachine.getCupSize(CupSize.LARGE)
    expect(cup).toBe(coffeeMachine.getLargeCups())
  })

  test("Debe devolver no hay vasos disponibles", ()=>{
    const cup = coffeeMachine.getCupSize(CupSize.SMALL)
    const result = coffeeMachine.getCoffeeCups(cup!, 10, 2)
    expect(result).toBe("No hay Vasos")
  })

  test("Debe devolver no hay café disponible", ()=>{
    coffeeMachine.setCoffeeMaker(new CoffeeMaker(5))
    const cup = coffeeMachine.getCupSize(CupSize.SMALL)
    const result = coffeeMachine.getCoffeeCups(cup!, 2, 3)
    console.log(result)
    expect(result).toBe("No hay Cafe")
  })

  test("Debe devolver no hay azucar disponible", ()=>{
    coffeeMachine.setSugarDispenser(new SugarDispenser(2))
    const cup = coffeeMachine.getCupSize(CupSize.SMALL)
    const result = coffeeMachine.getCoffeeCups(cup!, 2, 3)
    expect(result).toBe("No hay Azucar")
  })

  test("Debe restar cafe",()=>{
    const cup = coffeeMachine.getCupSize(CupSize.SMALL)
    coffeeMachine.getCoffeeCups(cup!, 3, 3)
    expect(coffeeMachine.getCoffeeMaker()?.getCoffeeAmount()).toBe(41)
  })

  test("Debe restar vaso", ()=>{
    const cup = coffeeMachine.getCupSize(CupSize.SMALL)
    coffeeMachine.getCoffeeCups(cup!, 1, 3)
    expect(coffeeMachine.getSmallCups()?.getQuantity()).toBe(4)
  })

  test("Debe restar azucar", ()=>{
    const cup = coffeeMachine.getCupSize(CupSize.SMALL)
    coffeeMachine.getCoffeeCups(cup!, 1, 3)
    expect(coffeeMachine.getSugarDispenser()?.getSugarAmount()).toBe(17)
  })

  test("Debe devolver Buen prevecho", ()=>{
    const cup = coffeeMachine.getCupSize(CupSize.LARGE)
    const result = coffeeMachine.getCoffeeCups(cup!, 1, 3)
    expect(result).toBe("Buen provecho")
  })
})