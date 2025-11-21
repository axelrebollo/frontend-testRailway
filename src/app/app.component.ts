import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyService } from './my-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend-testRailway';

  text: string = '';
  textos: any[] = [];  // 👈 aquí guardamos la lista que viene del backend

  constructor(private myService: MyService) {}

  ngOnInit(): void {
    this.loadTexts();  // 👈 cargamos al arrancar
  }

  save(): void {
    this.myService.saveText(this.text).subscribe({
      next: () => {
        console.log('Text Saved!');
        this.text = '';   // limpia el input
        this.loadTexts(); // refresca la lista
      },
      error: err => console.log('Error to save text', err)
    });
  }

  loadTexts(): void {
    this.myService.getTexts().subscribe({
      next: (data) => {
        this.textos = data;
      },
      error: err => console.log('Error loading texts', err)
    });
  }
}

