import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menuheader',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menuheader.component.html',
  styleUrl: './menuheader.component.scss',
})
export class MenuheaderComponent {}
