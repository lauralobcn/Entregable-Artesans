import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCervezeriaComponent } from './components/lista-cervezeria/lista-cervezeria.component';
import { BuscadorCerveceriaComponent } from './components/buscador-cerveceria/buscador-cerveceria.component';
import { VistaLocalComponent } from './components/vista-local/vista-local.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  { path: 'blog', component: ListaCervezeriaComponent },
  { path: 'blog/:tipoCerveza', component: VistaLocalComponent },
  { path: 'new', component: BuscadorCerveceriaComponent },
  { path: '**', redirectTo: 'blog' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
