import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './@features/weather-card/weather-card.component';
import { AboutUsComponent } from './@features/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: WeatherCardComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
