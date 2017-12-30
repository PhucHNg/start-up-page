import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";
 
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styles: [] 
})
export class CurrencyComponent implements OnInit {
  
  id_currency: string = "";
  currency: Array<string> = [];
  rate: Array<string> = [];
  constructor(private _sharedService: SharedService) {
  }
 
  ngOnInit() { 
  }
 
  callCurrencyService() {  
    this._sharedService.getCurrencyExchRate(this.id_currency.toUpperCase())
      .subscribe(
      lstresult => { 
        this.currency = Object.keys(lstresult["rates"]); 
        this.rate = Object.keys(lstresult["rates"]).map(key=>lstresult["rates"][key])
      },
      error => {
        console.log("Error. The callCurrencyService result JSON value is as follows:");
        console.log(error);
      }
      ); 
  }
}