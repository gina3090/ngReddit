import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl} from './default';
import {AwwState, AwwCtrl, AwwServiceName, AwwService} from './aww';
import {ProgHumorState, ProgHumorCtrl, ProgHumorServiceName, ProgHumorService} from './programmerhumor';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html')
  };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state(DefaultState.name, DefaultState)
      .state(AwwState.name, AwwState)
      .state(ProgHumorState.name, ProgHumorState);
  })
  .directive('app', app)
  .run(($state) => {
    $state.go('default');
  })
  .controller(DefaultState.controller, DefaultCtrl)
  .controller(AwwState.controller, AwwCtrl)
  .controller(ProgHumorState.controller, ProgHumorCtrl)
  .service(AwwServiceName, AwwService)
  .service(ProgHumorServiceName, ProgHumorService);

export default MODULE_NAME;