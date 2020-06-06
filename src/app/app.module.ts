import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { MyBarComponent } from './my-bar/my-bar.component';
import { MyPieComponent } from './my-pie/my-pie.component';
import { MyDoughnutComponent } from './my-doughnut/my-doughnut.component';
import { MyLineComponent } from './my-line/my-line.component';
import { MyRadarComponent } from './my-radar/my-radar.component';
import { AdddataComponent } from './adddata/adddata.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MyBarComponent,
    MyPieComponent,
    MyDoughnutComponent,
    MyLineComponent,
    MyRadarComponent,
    AdddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
