import { BannerComponent } from './banner/banner.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioComponent } from './inicio/inicio.component';

export const appRoutes: Routes = [
  { path: 'servicios', component: ServiciosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'inicio', component: InicioComponent }

];
