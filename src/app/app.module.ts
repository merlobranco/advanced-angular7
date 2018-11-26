import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ParksComponent } from './components/parks/parks.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ParksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
