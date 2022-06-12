import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PaginasComponent } from './paginas/paginas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { OlvidacontraComponent } from './olvidacontra/olvidacontra.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomePageComponent,
    PaginasComponent,
    LoginComponent,
    RegisterComponent,
    BusquedaComponent,
    OlvidacontraComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule

  ],
  exports: [
    HomePageComponent,
    PaginasComponent

  ]
})
export class HomeModule { }
