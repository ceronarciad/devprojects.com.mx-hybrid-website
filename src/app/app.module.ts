import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { LogoComponent } from './components/logo/logo.component';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ListMailComponent } from './components/list-mail/list-mail.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LandingPageComponent,
    ContactComponent,
    ProductDetailComponent,
    ProductListComponent,
    LogoComponent,
    BlogComponent,
    AboutUsComponent,
    ListMailComponent,
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
