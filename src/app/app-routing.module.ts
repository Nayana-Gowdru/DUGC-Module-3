import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A32021Component } from './a32021/a32021.component';
import { Adiv2020Component } from './adiv2020/adiv2020.component';
import { Adiv2021Component } from './adiv2021/adiv2021.component';
import { Adiv2022Component } from './adiv2022/adiv2022.component';
import { Aml2021Component } from './aml2021/aml2021.component';
import { Ass2021Component } from './ass2021/ass2021.component';
import { Awt2021Component } from './awt2021/awt2021.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';

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
  {path:'',redirectTo:'/home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
