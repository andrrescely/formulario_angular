import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-inicio-sesion',
  templateUrl: './formulario-inicio-sesion.component.html',
  styleUrls: ['./formulario-inicio-sesion.component.scss'],
})
export class FormularioInicioSesionComponent implements OnInit {
  inicioSesionForm: FormGroup = this.fb.group({
    correo: ['', [Validators.email, Validators.required]],
    contrasena: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Código de inicialización, si es necesario
  }

  onSubmit() {
    if (this.inicioSesionForm.valid) {
      const correo = this.inicioSesionForm.get('correo')!.value;
      const contrasena = this.inicioSesionForm.get('contrasena')!.value;

      // Puedes realizar acciones adicionales, como enviar datos a un servidor
      alert(`
        Correo Electrónico: ${correo}
        Contraseña: ${contrasena}
      `);
    }
  }
}
