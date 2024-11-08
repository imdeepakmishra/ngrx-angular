import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuheaderComponent } from "./menuheader/menuheader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-angular';
}
