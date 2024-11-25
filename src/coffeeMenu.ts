import * as readline from 'readline';
import { CoffeeMachine } from './coffeeMachine';
import { CoffeeMaker } from './models/coffeeMaker';
import { Cup } from './models/cup';
import { SugarDispenser } from './models/sugarDispenser';
import { CupSize } from './models/cupsSize';


export class CoffeeMenu {
  private rl: readline.Interface;
  private coffeeMachine: CoffeeMachine;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // Inicializar la máquina
    this.coffeeMachine = new CoffeeMachine();
    this.initializeMachine();
  }

  private initializeMachine(): void {
    this.coffeeMachine.setCoffeeMaker(new CoffeeMaker(50)); // 50 oz de café
    this.coffeeMachine.setSmallCups(new Cup(10, CupSize.SMALL));  // 10 vasos pequeños de 3 oz
    this.coffeeMachine.setMediumCups(new Cup(10, CupSize.MEDIUM)); // 10 vasos medianos de 5 oz
    this.coffeeMachine.setLargeCups(new Cup(10, CupSize.LARGE));  // 10 vasos grandes de 7 oz
    this.coffeeMachine.setSugarDispenser(new SugarDispenser(50)); // 50 cucharadas de azúcar
  }

  private async askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  private showStatus(): void {
    console.log('\n=== Estado de la Máquina ===');
    console.log(`Café disponible: ${this.coffeeMachine.getCoffeeMaker()?.getCoffeeAmount()} oz`);
    console.log(`Vasos pequeños: ${this.coffeeMachine.getSmallCups()?.getQuantity()}`);
    console.log(`Vasos medianos: ${this.coffeeMachine.getMediumCups()?.getQuantity()}`);
    console.log(`Vasos grandes: ${this.coffeeMachine.getLargeCups()?.getQuantity()}`);
    console.log(`Azúcar disponible: ${this.coffeeMachine.getSugarDispenser()?.getSugarAmount()} cucharadas`);
    console.log('===========================\n');
  }

  private async showMenu(): Promise<void> {
    console.log('\n=== Máquina de Café ===');
    console.log('1. Servir café');
    console.log('2. Ver estado de la máquina');
    console.log('3. Salir');
    
    const option = await this.askQuestion('Seleccione una opción: ');
    
    switch(option) {
      case '1':
        await this.serveCoffee();
        break;
      case '2':
        this.showStatus();
        break;
      case '3':
        this.rl.close();
        return;
      default:
        console.log('Opción no válida');
    }

    await this.showMenu();
  }

  private async serveCoffee(): Promise<void> {
    console.log('\n=== Servir Café ===');
    console.log('Seleccione el tamaño del vaso:');
    console.log('1. Pequeño (3 oz)');
    console.log('2. Mediano (5 oz)');
    console.log('3. Grande  (7 oz)');

    const sizeOption = await this.askQuestion('Opción: ');
    let cupSize: CupSize;
    
    switch(sizeOption) {
      case '1':
        cupSize = CupSize.SMALL;
        break;
      case '2':
        cupSize = CupSize.MEDIUM;
        break;
      case '3':
        cupSize = CupSize.LARGE;
        break;
      default:
        console.log('Opción no válida');
        return;
    }

    const sugarAmount = parseInt(await this.askQuestion('Canidad de azúcar (0-5): '));
    if (isNaN(sugarAmount) || sugarAmount < 0 || sugarAmount > 5) {
      console.log('Cantidad de azúcar no válida');
      return;
    }

    const cup = this.coffeeMachine.getCupSize(cupSize);
    if (!cup) {
      console.log('Error al seleccionar el vaso');
      return;
    }

    const result = this.coffeeMachine.getCoffeeCups(cup, 1, sugarAmount);
    console.log(`\nResultado: ${result}`);
  }

  public start(): void {
    console.log('¡Bienvenido a la Máquina de Café!');
    this.showMenu();
  }
}