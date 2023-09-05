import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptor } from './Interceptor/Interceptor';
import { CurrencyComponent } from './currency/currency.component';


@NgModule({
  declarations: [
    AppComponent,

    CurrencyComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
