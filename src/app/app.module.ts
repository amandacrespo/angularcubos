import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { FormsModule } from '@angular/forms';
import { CubosService } from './services/cubos.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CuboComponent,
    CubosmarcaComponent,
    LoginComponent,
    PerfilComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CubosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
