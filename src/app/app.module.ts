import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { EditorModule } from '@tinymce/tinymce-angular';

// Components
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ParksComponent } from './components/parks/parks.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { AnimalsComponent } from './components/animals/animals.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ParksComponent,
    HomeComponent,
    ContactComponent,
    KeepersComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    EditorModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
