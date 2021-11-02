import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { HomeComponent } from './home/home.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ObservableComponent } from './observable/observable.component';
import  {SharedService} from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    HomeComponent,
    EdituserComponent,
    AdduserComponent,
    FooterComponent,
    HeaderComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
