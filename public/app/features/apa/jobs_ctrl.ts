import angular from 'angular';

export class APAJobsCtrl {
  /** @ngInject */
  constructor($scope, navModelSrv) {
    $scope.init = () => {
      $scope.navModel = navModelSrv.getNav('apa', 'jobs', 0);
    };

    $scope.init();
  }
}

angular.module('grafana.controllers').controller('APAJobsCtrl', APAJobsCtrl);
