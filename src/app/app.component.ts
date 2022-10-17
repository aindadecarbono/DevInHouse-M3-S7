import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing_page';
  
  comentario = new FormGroup({
  nome : new FormControl(),
  sobrenome : new FormControl(),
  email : new FormControl(),
  senha : new FormControl(),
  idade : new FormControl(),
  regiao : new FormControl(),
  tecnologias : new FormControl()
  });
  
}
