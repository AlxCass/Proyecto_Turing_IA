import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './componentes/app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ModalDetalleServiciosComponent } from './componentes/servicios/modal-detalle-servicios/modal-detalle-servicios.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CarrucelComponent } from './componentes/carrucel/carrucel.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ServiciosComponent,
    NosotrosComponent,
    FooterComponent,
    ModalDetalleServiciosComponent,
    ContactoComponent,
    InicioComponent,
    CarrucelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
