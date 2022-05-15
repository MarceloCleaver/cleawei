import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './home/busqueda/busqueda.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './home/login/login.component';
import { OlvidacontraComponent } from './home/olvidacontra/olvidacontra.component';
import { PaginasComponent } from './home/paginas/paginas.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
 {
   path: "home",
   component: HomePageComponent
  
 },
 {
  path: "perfil",
  component: PaginasComponent

},
{
  path: "",
  component: LoginComponent

},
{
  path: "register",
  component: RegisterComponent

},
{
 path: "olvidapass",
 component: OlvidacontraComponent

},
{
 path: "busqueda",
 component: BusquedaComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
