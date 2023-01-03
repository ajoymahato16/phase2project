import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsertestComponent } from './usertest/usertest.component';
import { UserResultComponent } from './user-result/user-result.component';
import { UserViewComponent } from './user-view/user-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormatTimePipe } from './usertest/usertest.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormatTimePipe,
    LoginComponent,
    UsertestComponent,
    UserResultComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
