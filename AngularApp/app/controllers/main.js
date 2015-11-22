(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var controller = this;
        controller.entries = [{ name: 'Rent', date: '11/22/2015', type: 'Expense', cost: 500 },
                              { name: 'Food', date: '11/22/2015', type: 'Expense', cost: 200 }]
    }

})();