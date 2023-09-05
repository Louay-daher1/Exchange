import { Component, Input } from '@angular/core';
import { currenciesInfo } from '../model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
@Input() name:any;
@Input() Symbol:string="";
@Input() array: currenciesInfo[]=[]
}
