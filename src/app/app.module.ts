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
import { Adsa2021Component } from './adsa2021/adsa2021.component';
import { Adbms2021Component } from './adbms2021/adbms2021.component';
import { Asnp2021Component } from './asnp2021/asnp2021.component';
import { A32020Component } from './a32020/a32020.component';
import { Upload5Component } from './upload5/upload5.component';
import { Upload7Component } from './upload7/upload7.component';
import {HttpClientModule} from '@angular/common/http';
import { DxChartModule } from 'devextreme-angular';
import { A42021Component } from './a42021/a42021.component';
import { Amcp2021Component } from './amcp2021/amcp2021.component';
import { A42020Component } from './a42020/a42020.component';
import { Aoops2021Component } from './aoops2021/aoops2021.component';
import { Aeda2021Component } from './aeda2021/aeda2021.component';
import { Aos2021Component } from './aos2021/aos2021.component';
import { Acn2021Component } from './acn2021/acn2021.component';
import { Bsnp2021Component } from './bsnp2021/bsnp2021.component';
import { Bcn2021Component } from './bcn2021/bcn2021.component';
import { Sem8Component } from './sem8/sem8.component';

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
    Adsa2021Component,
    Adbms2021Component,
    Asnp2021Component,
    A32020Component,
    Upload5Component,
    Upload7Component,
    A42021Component,
    Amcp2021Component,
    A42020Component,
    Aoops2021Component,
    Aeda2021Component,
    Aos2021Component,
    Acn2021Component,
    Bsnp2021Component,
    Bcn2021Component,
    Sem8Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DxChartModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
