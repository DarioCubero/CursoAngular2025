import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  // title = signal('Darío Cubero'); // Signal porque es reactiva
  title = 'Dario Cubero'; // title es una propiedad de la clase App
}
