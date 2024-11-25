import { CupSize } from './cupsSize';

export class Cup{
  constructor(
    private quantity: number,
    private readonly size: CupSize
  ){}

  hasCups(amount: number): boolean{
    return this.quantity >= amount
  }

  giveCups(amount: number): void{
    if(this.hasCups(amount)){
      this.quantity -= amount
    }
  }

  getQuantity(): number{
    return this.quantity
  }

  getSize(): CupSize{
    return this.size
  }
}