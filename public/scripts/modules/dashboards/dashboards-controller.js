define(['angular', './dashboards-module'], function (angular, controllers) {
  'use strict';

  // Controller definition
  controllers.controller('DashboardsCtrl', ['$scope', function($scope) {

    var valueOfYellow = [31,32,33,34,35,36,37,38,39,40];
    var valueOfRed = [5,7,9,11,13,15,17,19,20,21];
    var data = [
      [Date.UTC(2013,7,1),0.7571],
      [Date.UTC(2013,7,2),0.7529],
      [Date.UTC(2013,7,3),0.7532],
      [Date.UTC(2013,7,4),0.7532],
      [Date.UTC(2013,7,5),0.7542],
      [Date.UTC(2013,7,6),0.7515],
      [Date.UTC(2013,7,7),0.7498],
      [Date.UTC(2013,7,8),0.7473],
      [Date.UTC(2013,7,9),0.7494],
      [Date.UTC(2013,7,10),0.7494],
      [Date.UTC(2013,7,11),0.7497],
      [Date.UTC(2013,7,12),0.7519],
      [Date.UTC(2013,7,13),0.7540],
      [Date.UTC(2013,7,14),0.7543],
      [Date.UTC(2013,7,15),0.7492],
      [Date.UTC(2013,7,16),0.7502],
      [Date.UTC(2013,7,17),0.7502],
      [Date.UTC(2013,7,18),0.7503],
      [Date.UTC(2013,7,19),0.7499],
      [Date.UTC(2013,7,20),0.7453],
      [Date.UTC(2013,7,21),0.7487],
      [Date.UTC(2013,7,22),0.7487],
      [Date.UTC(2013,7,23),0.7472],
      [Date.UTC(2013,7,24),0.7502],
      [Date.UTC(2013,7,25),0.7471],
      [Date.UTC(2013,7,26),0.7480],
      [Date.UTC(2013,7,27),0.7467],
      [Date.UTC(2013,7,28),0.7497],
      [Date.UTC(2013,7,29),0.7552],
      [Date.UTC(2013,7,30),0.7562],
      [Date.UTC(2013,7,31),0.7562],
      [Date.UTC(2013,8,1),0.7572],
      [Date.UTC(2013,8,2),0.7581],
      [Date.UTC(2013,8,3),0.7593],
      [Date.UTC(2013,8,4),0.7571],
      [Date.UTC(2013,8,5),0.7622],
      [Date.UTC(2013,8,6),0.7588],
      [Date.UTC(2013,8,7),0.7588],
      [Date.UTC(2013,8,8),0.7591],
      [Date.UTC(2013,8,9),0.7544],
      [Date.UTC(2013,8,10),0.7537],
      [Date.UTC(2013,8,11),0.7512],
      [Date.UTC(2013,8,12),0.7519],
      [Date.UTC(2013,8,13),0.7522],
      [Date.UTC(2013,8,14),0.7588],
      [Date.UTC(2013,8,15),0.7486],
      [Date.UTC(2013,8,16),0.7500],
      [Date.UTC(2013,8,17),0.7486],
      [Date.UTC(2013,8,18),0.7396],
      [Date.UTC(2013,8,19),0.7391],
      [Date.UTC(2013,8,20),0.7394],
      [Date.UTC(2013,8,21),0.7588],
      [Date.UTC(2013,8,22),0.7389],
      [Date.UTC(2013,8,23),0.7411],
      [Date.UTC(2013,8,24),0.7422],
      [Date.UTC(2013,8,25),0.7393],
      [Date.UTC(2013,8,26),0.7413],
      [Date.UTC(2013,8,27),0.7396],
      [Date.UTC(2013,8,28),0.7588],
      [Date.UTC(2013,8,29),0.7410],
      [Date.UTC(2013,8,30),0.7393],
      [Date.UTC(2013,9,1),0.7393],
      [Date.UTC(2013,9,2),0.7365],
      [Date.UTC(2013,9,3),0.7343],
      [Date.UTC(2013,9,4),0.7376],
      [Date.UTC(2013,9,5),0.7588],
      [Date.UTC(2013,9,6),0.7370],
      [Date.UTC(2013,9,7),0.7362],
      [Date.UTC(2013,9,8),0.7368],
      [Date.UTC(2013,9,9),0.7393],
      [Date.UTC(2013,9,10),0.7397],
      [Date.UTC(2013,9,11),0.7385],
      [Date.UTC(2013,9,12),0.7588],
      [Date.UTC(2013,9,13),0.7377],
      [Date.UTC(2013,9,14),0.7374],
      [Date.UTC(2013,9,15),0.7395],
      [Date.UTC(2013,9,16),0.7389],
      [Date.UTC(2013,9,17),0.7312],
      [Date.UTC(2013,9,18),0.7307],
      [Date.UTC(2013,9,19),0.7307],
      [Date.UTC(2013,9,20),0.7309],
      [Date.UTC(2013,9,21),0.7308],
      [Date.UTC(2013,9,22),0.7256],
      [Date.UTC(2013,9,23),0.7258],
      [Date.UTC(2013,9,24),0.7247],
      [Date.UTC(2013,9,25),0.7244],
      [Date.UTC(2013,9,26),0.7588],
      [Date.UTC(2013,9,27),0.7244],
      [Date.UTC(2013,9,28),0.7255],
      [Date.UTC(2013,9,29),0.7275],
      [Date.UTC(2013,9,30),0.7280]
    ];

    data.sort(function(a, b) {
      return a[0] - b[0];
    });

    var series =[];

    series.push(data.map(function(o) {
      return [o[0], valueOfYellow[Math.floor((Math.random() * 10))]];
    }));

    series.push(data.map(function(o) {
      return [o[0], valueOfRed[Math.floor((Math.random() * 10))]];
    }));

    series.push(data.map(function(o, i) {
      return [o[0], 70 - series[0][i][1] - series[1][i][1]];
    }));


    var chart = new Highcharts.Chart({
      chart: {
        type: 'column',
        zoomType: 'x',
        renderTo: 'container'
      },
      title: {
        text: 'COMM STATUS TREND'
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        min: 0,
        max: 70
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        },
        series: {
          groupPadding: 0,
          pointPadding: 0
        }
      },
      series: [{
        name: 'SEM OK',
        data: series[2],
        color: '#9fcd25'
      }, {
        name: 'No Communication',
        data: series[1],
        color: '#d82727'
      }, {
        name: 'Lost Redundancy',
        data: series[0],
        color: '#f8d80b'
      }]
    });
  }]);

});
