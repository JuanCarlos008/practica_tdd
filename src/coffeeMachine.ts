import { Cup } from './models/cup';
import { CoffeeMaker } from './models/coffeeMaker';
import { SugarDispenser } from './models/sugarDispenser';
import { CupSize } from './models/cupsSize';

export class CoffeeMachine {
  private coffeeMaker?: CoffeeMaker;
  private smallCups?: Cup;
  private mediumCups?: Cup;
  private largeCups?: Cup;
  private sugarDispenser?: SugarDispenser;

  setCoffeeMaker(coffeeMaker: CoffeeMaker): void {
    this.coffeeMaker = coffeeMaker;
  }

  setSmallCups(smallCups: Cup): void {
    this.smallCups = smallCups;
  }

  setMediumCups(mediumCups: Cup): void {
    this.mediumCups = mediumCups;
  }

  setLargeCups(largeCups: Cup): void {
    this.largeCups = largeCups;
  }

  setSugarDispenser(sugarDispenser: SugarDispenser): void {
    this.sugarDispenser = sugarDispenser;
  }

  getCoffeeMaker(): CoffeeMaker | undefined {
    return this.coffeeMaker;
  }

  getSmallCups(): Cup | undefined {
    return this.smallCups;
  }

  getMediumCups(): Cup | undefined {
    return this.mediumCups;
  }

  getLargeCups(): Cup | undefined {
    return this.largeCups;
  }

  getSugarDispenser(): SugarDispenser | undefined {
    return this.sugarDispenser;
  }


  getCupSize(size: CupSize): Cup | undefined {
    switch (size) {
      case CupSize.SMALL:
        return this.getSmallCups();
      case CupSize.MEDIUM:
        return this.getMediumCups();
      case CupSize.LARGE:
        return this.getLargeCups();
      default:
        return undefined;
    }
  }

  getCoffeeCups(cup: Cup, cupsAmount: number, sugarAmount: number): string {
    if (!cup || !this.coffeeMaker || !this.sugarDispenser) {
      return "Error: Machine not configured";
    }

    if (!cup.hasCups(cupsAmount)) {
      return "No hay Vasos";
    }

    if (!this.coffeeMaker.hasCoffee(cup.getSize() * cupsAmount)) {
      return "No hay Cafe";
    }

    if (!this.sugarDispenser.hasSugar(sugarAmount)) {
      return "No hay Azucar";
    }

    cup.giveCups(cupsAmount);
    this.coffeeMaker.giveCoffee(cup.getSize() * cupsAmount);
    this.sugarDispenser.giveSugar(sugarAmount);

    return "Buen provecho";
  }
}