import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textoAImprimir = 'A';
  title = 'app-angular';

  constructor() {
    this.imprimir();
  }

  private imprimir() {
    console.log('A')
  }

  private imprimir2() {
    console.log('A')
  }

  private imprimir3() {
    console.log('A')
  }
}

