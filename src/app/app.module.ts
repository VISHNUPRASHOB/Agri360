import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { WebapiService } from './webapi.service';
import { HttpClientModule } from '@angular/common/http';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { AgroinvestComponent } from './agroinvest/agroinvest.component';
import { GridModule } from '@progress/kendo-angular-grid';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {BadgeModule} from 'primeng/badge';
import {DockModule} from 'primeng/dock';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoandetailComponent } from './loandetail/loandetail.component';
import { MasterComponent } from './master/master.component';
import { SensorinfoComponent } from './sensorinfo/sensorinfo.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {TabMenuModule} from 'primeng/tabmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {ChartModule} from 'primeng/chart';
import {CarouselModule} from 'primeng/carousel';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    SnackbarComponent,
    AgroinvestComponent,
    DashboardComponent,
    LoandetailComponent,
    MasterComponent,
    SensorinfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotificationModule,
    BrowserAnimationsModule,
    ButtonModule,
    GridModule,
    MenubarModule,
    ProgressSpinnerModule,
    TagModule,
    InputTextModule,
    CardModule,
    PasswordModule,
    ReactiveFormsModule,
    CalendarModule,
    BadgeModule,
    DockModule,
    DialogModule,
    DropdownModule,
    SlideMenuModule,
    TabMenuModule,
    MegaMenuModule,
    ChartModule,
    CarouselModule,
    MenuModule,
    TableModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
