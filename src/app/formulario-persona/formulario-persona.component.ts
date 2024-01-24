// formulario-persona.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css'],
})
export class FormularioPersonaComponent implements OnInit {
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    edad: ['', [Validators.required, Validators.min(18)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.miFormulario.valid) {
      console.log('Formulario válido. Datos:', this.miFormulario.value);
      // Puedes realizar acciones adicionales aquí, como enviar datos al servidor.
    } else {
      console.log('Formulario no válido. Realiza alguna acción aquí.');
    }
  }
}
