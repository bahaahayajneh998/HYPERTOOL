import { Routes } from "@angular/router";
import { EcommerceHomeComponent } from "./Home/ecommerce-home.component";
import { EcommerceDetailsComponent } from "./details/ecommerce-details.component";

export const ECOMMERCE_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '', component: EcommerceHomeComponent },
    { path: 'details/:id', component: EcommerceDetailsComponent },
  ]

}]
