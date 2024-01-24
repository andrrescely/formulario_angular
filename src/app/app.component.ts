import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prueba-formulario';
  formGroup: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.formGroup = this._builder.group({
      usuario: ['', [Validators.email, Validators.required]],
      contrasena: ['', Validators.required],
    });
  }
}
