import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './views/main/main.component';
import { AboutComponent } from './views/about/about.component';
import { BikesComponent } from './views/bikes/bikes.component';
import { Bike3dComponent } from './views/bike3d/bike3d.component';
import { ServicesComponent } from './views/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    BikesComponent,
    Bike3dComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
