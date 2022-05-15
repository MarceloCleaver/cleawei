import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './home/login/login.component';
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

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
