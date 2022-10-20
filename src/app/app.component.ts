import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { group } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing_page';

  comentario: FormGroup;
  nome: FormControl;
  email: FormControl;

  constructor(private formBuilder: FormBuilder) {

    this.comentario = formBuilder.group({
      nome: formBuilder.control(""),
      email: formBuilder.control("")
    });
  }

}
