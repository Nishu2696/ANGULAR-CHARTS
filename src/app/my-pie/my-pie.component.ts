import { Component, OnInit } from '@angular/core';
import { monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-my-pie',
  templateUrl: './my-pie.component.html',
  styleUrls: ['./my-pie.component.css']
})
export class MyPieComponent implements OnInit {

  public pieChartOptions = {
    responsive: true,
  };
  public pieChartLabels = [['Download Sales'], ['In Store Sales'], 'Mail Sales'];
  public pieChartData = [300, 500, 100];
  public pieChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }


  ngOnInit(): void {
  }

}
