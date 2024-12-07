import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CurrencyService } from 'src/services/currency.service';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.scss'],
  host: {
  '(document:click)': 'onClick($event)',
},
})
export class CurrencyConvertorComponent implements OnInit {
  // amount = 1;
  // from = 'EUR';
  // to = 'USD';
  // rates: { [key: string]: number };
  isLoadCompleted = false;
  currencies: { code: string; flag: string }[] = [];
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  amount: number = 1;
  convertedAmount: number = 0;
  selectFromCode:string;
  selectToCode:string;
  isSelectFromCode:boolean = false;
  isSelectToCode:boolean = false;
  constructor(private currencyService: CurrencyService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
   // this.loadRates();
   this.currencyService.getCurrencyAndFlags().subscribe((data) => {
    this.selectFromCode = data[0].code;
    this.selectToCode = data[1].code;
    this.currencies = data.map((currency) => ({
      ...currency,
     flag: currency.flags.png, // Flag PNG URL

    }));
    this.convertCurrency();
    this.isLoadCompleted = true;
    console.log(this.currencies,'currency');
  });

   
  }
  // GetAllCurrencies(): string[] {
  //   return Object.keys(this.rates);
  // }
  // loadRates() {
  //   this.service.getRates(this.from).subscribe((res) => {
  //     console.log('i was here ', res);
  //     this.rates = res.rates;
  //     this.isLoadCompleted = true;
  //   });
  // }

  // isShowDiv = false;
  // isShow = false;
  // function() {
  //   if (this.from === this.to) {
  //     this.isShowDiv = true;
  //   } else {
  //     this.isShow = true;
  //   }
  // }
  // convert(): number {
  //   return this.amount * this.rates[this.to];
  // }

  convertCurrency() {
    this.currencyService.convert(this.fromCurrency, this.toCurrency, this.amount).subscribe((result: number) => {
      this.convertedAmount = parseFloat(result.toPrecision(8));
      console.log(result);
    });
  }

  getFlagUrl(currencyCode: string): string | undefined {
    const currency = this.currencies.find((c) => c.code === currencyCode);
    return currency ? currency.flag : 'assets/placeholder-flag.png';
  }

  onSelectCurrency(code: string, type: string) {
  if (type === 'from') {
    this.fromCurrency = code;
  } else if (type === 'to') {
    this.toCurrency = code;

  }
  this.selectCodeEvent(type);
  this.selectToCode = code;
  this.convertCurrency();
}

selectCodeEvent(type:string) {
  if(type === 'from') {
  this.isSelectFromCode = !this.isSelectFromCode;
  }
  else{
    this.isSelectToCode = !this.isSelectToCode;

  }
}

onClick(event) {
  debugger;
  if(event?.target?.className !== 'currency-convertor__flag-code-selected'){
  this.isSelectFromCode = false;
  this.isSelectToCode = false;
  }
}

changeAmountValue() {
  this.convertCurrency();
}

}
