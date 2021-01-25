import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectrodomesticosComponent } from './pages/electrodomesticos/electrodomesticos.component';
import { TotalComponent } from './pages/total/total.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent, canActivate: [ AuthGuard ],
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'electrodomesticos' },
      { path:'total', component: TotalComponent },
      { path:'electrodomesticos', component: ElectrodomesticosComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'total' }
  ] },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }