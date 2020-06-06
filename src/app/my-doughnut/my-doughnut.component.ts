import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-doughnut',
  templateUrl: './my-doughnut.component.html',
  styleUrls: ['./my-doughnut.component.css']
})
export class MyDoughnutComponent implements OnInit {

  public doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
