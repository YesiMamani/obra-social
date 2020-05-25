import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent }, 
  { path: 'footer', component: FooterComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'galeria', component: GaleriaComponent }, 
  { path: 'registro', component: RegistroComponent }, 
  { path: '**', pathMatch:'full',redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
