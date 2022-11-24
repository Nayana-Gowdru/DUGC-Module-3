import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Adiv2021Component } from './adiv2021/adiv2021.component';
import { Aml2021Component } from './aml2021/aml2021.component';
import { Ass2021Component } from './ass2021/ass2021.component';
import { Awt2021Component } from './awt2021/awt2021.component';
import { Adiv2020Component } from './adiv2020/adiv2020.component';
import { Adiv2022Component } from './adiv2022/adiv2022.component';
import { UploadComponent } from './upload/upload.component';
import { A32021Component } from './a32021/a32021.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Adiv2021Component,
    Aml2021Component,
    Ass2021Component,
    Awt2021Component,
    Adiv2020Component,
    Adiv2022Component,
    UploadComponent,
    A32021Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
