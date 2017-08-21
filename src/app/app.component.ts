import { Component } from '@angular/core';

@Component({
  selector: 'racing-app',
  templateUrl: `
    <header class="container>
        <h1>{{heading}}</h1>
    </header>"
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Ultra Racing Schedule';
}
