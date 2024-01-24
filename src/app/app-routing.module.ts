import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioInicioSesionComponent } from './formulario-inicio-sesion/formulario-inicio-sesion.component';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';

const routes: Routes = [
  {path: 'formulario-inicio-sesion',component: FormularioInicioSesionComponent,},
  { path: 'formulario-persona', component: FormularioPersonaComponent },
  { path: '', redirectTo: '/formulario-inicio-sesion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
