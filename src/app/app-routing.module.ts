import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarComponent } from './my-bar/my-bar.component';
import { MyPieComponent } from './my-pie/my-pie.component';
import { MyDoughnutComponent } from './my-doughnut/my-doughnut.component';
import { MyLineComponent } from './my-line/my-line.component';
import { MyRadarComponent } from './my-radar/my-radar.component';
import { AdddataComponent } from './adddata/adddata.component';


const routes: Routes = [
  {
    path : "bar",
    component : MyBarComponent,
  },
  {
    path : "pie",
    component : MyPieComponent
  },
  {
    path : "doughnut",
    component : MyDoughnutComponent
  },
  {
    path : "line",
    component : MyLineComponent
  },
  {
    path : "radar",
    component : MyRadarComponent
  },
  {
    path : "add",
    component : AdddataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
