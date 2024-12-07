import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPortfolioComponent } from 'src/modules/MyPortfolio/my-portfolio.component';


const routes: Routes = [
{
  path:'',
  component: MyPortfolioComponent
},
  {
    path: 'my-portfolio',
    loadChildren: () =>
      import('./../modules/MyPortfolio/my-portfolio.module').then((m) => m.MyPortfolioModule)
  },
  {
    path: 'text-statistics',
    loadChildren: () =>
      import('./../modules/text-statistics/text-statistics.module').then((m) => m.TextStatisticsModule)
  },
  {
    path: 'currency-convertor',
    loadChildren: () =>
      import('./../modules/CurrencyConvertor/currency-convertor.module').then((m) => m.CurrencyConvertorModule)
  },
  {
    path: 'weather-city',
    loadChildren: () =>
      import('./../modules/weather/weather.module').then((m) => m.WeatherModule)
  },
  {
    path: 'ecommerce',
    loadChildren: () =>
      import('./../modules/Ecommerce/ecommerce.module').then((m) => m.EcommerceModule)
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./../modules/PictureGallery/picture-gallery.module').then((m) => m.PictureGalleryModule)
  },
  {
    path: 'quiz-builder',
    loadChildren: () =>
      import('./../modules/QuizBuilder/quiz-builder.module').then((m) => m.QuizBuilderModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
