export class SugarDispenser {
  constructor(private sugarAmount: number) {}

  hasSugar(amount: number): boolean {
    return this.sugarAmount >= amount;
  }

  giveSugar(amount: number): void {
    if (this.hasSugar(amount)) {
      this.sugarAmount -= amount;
    }
  }

  getSugarAmount(): number {
    return this.sugarAmount;
  }
}