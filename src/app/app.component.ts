import { Component, OnInit } from '@angular/core';
import { currenciesInfo } from './model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 currencies: currenciesInfo[]=[];
 constructor(public apicaller:HttpClient){
  
 }
  ngOnInit():void{
    this.apicaller.get('https://api.fastforex.io/currencies?')
    .subscribe((data:any)=>
    {
    for (let key in data.currencies)
    { 
      let user=new currenciesInfo();
      
      user.name=data.currencies[key]
      user.Symbol= key;
      this.currencies.push(user)
    
  }
}
    );
  }

}
