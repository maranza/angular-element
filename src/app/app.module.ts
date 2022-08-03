import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent] // comment this out when sharing this app as a web component. only use during dev
  entryComponents: [AppComponent] // use this when sharing
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, {injector: this.injector}); // create element
    customElements.define('app-micro-front-end', element); // create a tag for the element
  }
}
