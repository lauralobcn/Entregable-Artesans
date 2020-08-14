import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCervezeriaComponent } from './components/lista-cervezeria/lista-cervezeria.component';
import { BuscadorCerveceriaComponent } from './components/buscador-cerveceria/buscador-cerveceria.component';
import { VistaLocalComponent } from './components/vista-local/vista-local.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCervezeriaComponent,
    BuscadorCerveceriaComponent,
    VistaLocalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
