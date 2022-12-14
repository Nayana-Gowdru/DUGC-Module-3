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

       if(this.year=="2021" && this.Sem=="5" ){
        this.pr.navigate(['/adiv2021'])}
      else if(this.year=="2020" && this.Sem=="5" )
       this.pr.navigate(['/adiv2020'])
      else if(this.year=="2021" && this.Sem=="3" )
       this.pr.navigate(['/a32021'])
       else if(this.year=="2020" && this.Sem=="3" )
       this.pr.navigate(['/a32020'])
       else if(this.year=="2021" && this.Sem=="4" )
       this.pr.navigate(['/a42021'])
       else if(this.year=="2020" && this.Sem=="4" )
       this.pr.navigate(['/a42020'])
       else if(this.Sem=="6" && this.year=="2021" || this.year=="2020")
       this.pr.navigate(['/acn2021'])
       else if(this.Sem=="7" && this.year=="2021" || this.year=="2020")
       this.pr.navigate(['/asnp2021'])
       else if(this.year=="2022" && this.Sem=="7"  )
       this.pr.navigate(['/upload'])
       else if(this.Sem=="8"  )
       this.pr.navigate(['/sem8'])
       else if(this.year=="2022")
       this.pr.navigate(['/upload'])
       else {
        this.pr.navigate(['/home'])
       }  
    }
    constructor(private pr:Router) { }
}
