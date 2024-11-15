import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '/',
    component: HomeComponent
  },
  // {
  //     path: '/cubo/:id',
  //     component: CuboComponent
  // },
  // {
  //     path: '/cubos/:marca',
  //     component: CubosMarca
  // },
// {
//     path: '/login',
//     component: LoginComponent
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
