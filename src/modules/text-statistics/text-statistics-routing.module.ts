import { Routes } from "@angular/router";
import { TextStatisticsComponent } from "./Index/text-statistics.component";

export const TEXTSTATISTICS_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '', component: TextStatisticsComponent },
  ]

}]