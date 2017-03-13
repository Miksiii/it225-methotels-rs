import { Component } from '@angular/core';

@Component({
  moduleId: module.id.replace('/dist/', '/'),
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  { name = 'Angular'; }
