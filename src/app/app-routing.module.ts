import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A32020Component } from './a32020/a32020.component';
import { A32021Component } from './a32021/a32021.component';
import { A42020Component } from './a42020/a42020.component';
import { A42021Component } from './a42021/a42021.component';
import { Acn2021Component } from './acn2021/acn2021.component';
import { Adbms2021Component } from './adbms2021/adbms2021.component';
import { Adiv2020Component } from './adiv2020/adiv2020.component';
import { Adiv2021Component } from './adiv2021/adiv2021.component';
import { Adiv2022Component } from './adiv2022/adiv2022.component';
import { Adsa2021Component } from './adsa2021/adsa2021.component';
import { Aeda2021Component } from './aeda2021/aeda2021.component';
import { Amcp2021Component } from './amcp2021/amcp2021.component';
import { Aml2021Component } from './aml2021/aml2021.component';
import { Aoops2021Component } from './aoops2021/aoops2021.component';
import { Aos2021Component } from './aos2021/aos2021.component';
import { Asnp2021Component } from './asnp2021/asnp2021.component';
import { Ass2021Component } from './ass2021/ass2021.component';
import { Awt2021Component } from './awt2021/awt2021.component';
import { Bcn2021Component } from './bcn2021/bcn2021.component';
import { Bsnp2021Component } from './bsnp2021/bsnp2021.component';
import { HomeComponent } from './home/home.component';
import { Sem8Component } from './sem8/sem8.component';
import { UploadComponent } from './upload/upload.component';
import { Upload5Component } from './upload5/upload5.component';
import { Upload7Component } from './upload7/upload7.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'adiv2021',component:Adiv2021Component},
  {path:'aml2021',component:Aml2021Component},
  {path:'ass2021',component:Ass2021Component},
  {path:'awt2021',component:Awt2021Component},
  {path:'adiv2020',component:Adiv2020Component},
  {path:'adiv2022',component:Adiv2022Component},
  {path:'upload',component:UploadComponent},
  {path:'a32021',component:A32021Component},
  {path:'adsa2021',component:Adsa2021Component},
  {path:'adbms2021',component:Adbms2021Component},
  {path:'asnp2021',component:Asnp2021Component},
  {path:'a32020',component:A32020Component},
  {path:'upload5',component:Upload5Component},
  {path:'upload7',component:Upload7Component},
  {path:'a42021',component:A42021Component},
  {path:'a42020',component:A42020Component},
  {path:'amcp2021',component:Amcp2021Component},
  {path:'aoops2021',component:Aoops2021Component},
  {path:'aeda2021',component:Aeda2021Component},
  {path:'aos2021',component:Aos2021Component},
  {path:'acn2021',component:Acn2021Component},
  {path:'bcn2021',component:Bcn2021Component},
  {path:'bsnp2021',component:Bsnp2021Component},
  {path:'sem8',component:Sem8Component},
  {path:'',redirectTo:'/home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
