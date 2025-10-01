import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
  button{
    padding: 5px;
    margin: 5px 10px;
    width: 75px;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush //Hace que no se redibuje el componente a menos que cambie una @Input
})

export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

constructor() {
  setInterval(() => {
    // this.counter += 1;
    // this.counterSignal.update( v => v + 1 );
    this.increaseBy(1);
    console.log('Tick');
  }, 2000);
}

  increaseBy(value: number): void {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update( current => current + value );
  }


  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
