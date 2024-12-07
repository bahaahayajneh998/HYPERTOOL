import { Routes } from "@angular/router";
import { CurrencyConvertorComponent } from "./currency-convertor.component";

export const CURRENCY_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '', component: CurrencyConvertorComponent },
  ]

}]
