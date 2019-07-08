"use strict";

// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);
// console.log(Highcharts);
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'bar',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    // data: {
    //     googleSpreadsheetKey: '1teXNkm3M4yRQDFvRak26RLfTJakN95gB8LhEumUG3_I',
    //     googleSpreadsheetWorksheet: 2
    // },
    series: [{
      name: 'Median early career salary',
      // color: 'rgba(126,86,134,.9)',
      data: [68800, 66600, 64200, 50900, 47000, 46500, 43860, 41800, 41000],
      pointPadding: -.4,
      pointPlacement: -.15
    }, {
      name: 'Average early career expectations',
      // color: 'rgba(165,170,217,1)',
      data: [59303, 62417, 64615, 64428, 57964, 61085, 43843, 51730, 46616],
      pointPadding: 0.2,
      pointPlacement: .2
    }],
    title: {
      text: null
    },
    legend: {
      align: 'right',
      symbolRadius: 0,
      verticalAlign: 'top',
      x: 10,
      itemMarginTop: -10
    },
    plotOptions: {
      series: {
        clip: false,
        groupPadding: .15
      },
      column: {
        grouping: false,
        borderWidth: 0
      }
    },
    xAxis: {
      labels: {
        style: {
          whiteSpace: 'nowrap'
        }
      },
      categories: ['Computer science', 'Nursing', 'Engineering', 'Sciences', 'Business', 'All majors', 'Humanities', 'Communications', 'Education']
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow'
      },
      max: 70000,
      ticks: 6
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      shared: true,
      valuePrefix: '$'
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 15
          },
          tooltip: {
            enabled: false
          },
          yAxis: {},
          legend: {
            align: 'left',
            x: -18,
            itemMarginTop: 0
          }
        }
      }]
    }
  });
});