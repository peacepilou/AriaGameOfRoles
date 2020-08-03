import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PjComponent } from './pages/pj/pj.component';

@NgModule({
  declarations: [
    AppComponent,
    PjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
