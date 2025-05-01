import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileNavComponentComponent } from "./components/mobile-nav-component/mobile-nav-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MobileNavComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Apps';
}
