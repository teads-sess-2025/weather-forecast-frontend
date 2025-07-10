import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Weather Forecast App';
  public location = '';

  submitLocation() {
    console.log('Location entered:', this.location);
    // Here, you could call a weather API or other service
  }
}
