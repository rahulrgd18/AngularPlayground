import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MobileNavComponentComponent } from "./components/mobile-nav-component/mobile-nav-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, MobileNavComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Apps';
}
