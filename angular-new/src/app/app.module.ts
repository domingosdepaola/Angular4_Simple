import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import {UserComponent } from './Components/user/user.component';
import {UserService} from './Service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    HttpModule, 
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
