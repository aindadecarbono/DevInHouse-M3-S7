import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { group } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing_page';

  formulario: FormGroup;
  nome: FormControl;
  carga: FormControl;
  escola: FormControl;
  professor: FormControl;

  constructor(private formBuilder: FormBuilder) {


    this.formulario = formBuilder.group({
      nome: formBuilder.control("", [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-Z]+$/)]),
      carga: formBuilder.control("", [Validators.required, Validators.min(30), Validators.max(100)]),
      escola: formBuilder.control("", [Validators.required, Validators.minLength(3),Validators.pattern(/^([^0-9]*)$/)]),
      professor: formBuilder.control("", [Validators.required])
    });
  }

  
  ngOnInit(): void {
    console.log(this.formulario.controls.nome.valid) //false
    console.log(this.formulario);
    
  }


  onSubmit() {
    
     if (this.formulario.valid) {
      console.log(this.formulario.controls.nome.valid)
      console.log("Form Submitted!");
      this.formulario.reset();
     }

     else {
      console.log("Form invalid")
      console.log(this.formulario);
     }
  }


}
