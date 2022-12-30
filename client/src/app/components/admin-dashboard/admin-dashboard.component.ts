import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartEvent,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        grid: {
          //forces vertical lines to hide
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          // forces step size to be 50 units
          stepSize: 25,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        display: false,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        data: [100, 75, 50, 75, 50, 75, 100],
        label: 'Total Income',
        borderColor: 'rgb(255, 155, 68)',
        backgroundColor: 'rgb(255, 155, 68)',
      },
      {
        data: [90, 65, 40, 65, 40, 65, 90],
        label: 'Total Outcome',
        borderColor: 'rgb(252, 96, 117)',
        backgroundColor: 'rgb(252, 96, 117)',
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.25,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {
        grid: {
          //forces vertical lines to hide
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          // forces step size to be 50 units
          stepSize: 25,
        },
      },
    },

    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        display: false,
      },
    },
  };

  public lineChartType: ChartType = 'line';

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [50, 75, 50, 75, 50, 75, 100],
        label: 'Total Sales',
        borderColor: 'rgb(255, 155, 68)',
        backgroundColor: 'rgb(255, 155, 68)',
        pointBorderColor: 'rgb(255, 155, 68)',
        pointBackgroundColor: 'rgb(255, 155, 68)',
      },
      {
        data: [90, 65, 40, 65, 40, 65, 50],
        label: 'Total Revenue',
        borderColor: 'rgb(252, 96, 117)',
        backgroundColor: 'rgb(252, 96, 117)',
        pointBorderColor: 'rgb(252, 96, 117)',
        pointBackgroundColor: 'rgb(252, 96, 117)',
      },
    ],
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  constructor() {}

  ngOnInit(): void {}
}
