import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 year:string="" 
 Sem:string=""
 Div:string=""

  ngOnInit(): void {
  }

  myFun(){

       if(this.year=="2021" && this.Sem=="5" && this.Div=="A"){
        this.pr.navigate(['/adiv2021'])
      }
      else if(this.year=="2020" && this.Sem=="5" && this.Div=="A")
       this.pr.navigate(['/adiv2020'])
       else if(this.year=="2022" )
       this.pr.navigate(['/upload'])
      else if(this.year=="2021" && this.Sem=="3" && this.Div=="A")
       this.pr.navigate(['/a32021'])
       else if(this.year=="2021" && this.Sem=="5" && this.Div=="B")
       this.pr.navigate(['/adiv2021'])
       else if(this.year=="2022" && this.Sem=="5" && this.Div=="A")
       this.pr.navigate(['/upload'])
       
       else {
        this.pr.navigate(['/ass2021'])
       }  
    }
    constructor(private pr:Router) { }
}