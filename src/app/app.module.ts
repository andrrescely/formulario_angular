import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';
import { FormularioInicioSesionComponent } from './formulario-inicio-sesion/formulario-inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPersonaComponent,
    FormularioInicioSesionComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
