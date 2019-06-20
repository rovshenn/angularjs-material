class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "AngularJS";

      this.items = [];
        for (var i = 0; i < 1000; i++) {
          this.items.push(i);
        }
  }
}

export default HomeCtrl;