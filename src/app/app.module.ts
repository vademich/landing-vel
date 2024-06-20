import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './views/main/main.component';
import { AboutComponent } from './views/about/about.component';
import { BikesComponent } from './views/bikes/bikes.component';
import { PrepareForYourTripComponent } from './views/prepare-for-your-trip/prepare-for-your-trip.component';
import { ServicesComponent } from './views/services/services.component';
import { ButtonType1Component } from './components/button-type-1/button-type-1.component';
import { ButtonType2Component } from './components/button-type-2/button-type-2.component';
import { DetailsArrowComponent } from './components/details-arrow/details-arrow.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        AboutComponent,
        BikesComponent,
        PrepareForYourTripComponent,
        ServicesComponent,
        ButtonType1Component,
        ButtonType2Component,
        DetailsArrowComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
