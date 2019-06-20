import angular from 'angular';
import 'angular-material';

// Create the module where our functionality can attach to
let homeModule = angular.module('home', ['ngMaterial']);

// Include our UI-Router config settings
import HomeConfig from './home.config';
homeModule.config(HomeConfig);

// Controllers
import HomeCtrl from './home.controller';
homeModule.controller('HomeCtrl', HomeCtrl);

export default homeModule;