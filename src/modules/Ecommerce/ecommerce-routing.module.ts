import { Routes } from "@angular/router";
import { EcommerceHomeComponent } from "./Home/ecommerce-home.component";

export const ECOMMERCE_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '', component: EcommerceHomeComponent },
  ]

}]
