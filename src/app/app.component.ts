import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-testRailway';

  text: string = '';

  constructor(private myService: MyService){};

  save(){
    this.myService.saveText(this.text).subscribe({
      next: () => console.log('Text Saved!'),
      error: err => console.log('Error to save text',err)
    });
  }
}
