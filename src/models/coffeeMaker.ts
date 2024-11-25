export class CoffeeMaker{
  constructor(private coffeeAmount: number){}

  hasCoffee(amount: number): boolean{
    return this.coffeeAmount >= amount
  }

  giveCoffee(amount: number): void{
    if(this.hasCoffee(amount)){
      this.coffeeAmount -= amount
    }
  }

  getCoffeeAmount(): number{
    return this.coffeeAmount
  }
}