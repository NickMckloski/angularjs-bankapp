(function () {
    'use strict';

    angular.module('app').controller('Main', main);

    function main() {
        var controller = this;
        //controller.entries = [{ name: 'Rent', date: '11/22/2015', type: 'Expense', cost: 500 },
        //                      { name: 'Food', date: '11/22/2015', type: 'Expense', cost: 200 }];
        controller.entries = [];

        //function to add a new entry
        controller.addEntry = function () {
            controller.entries.push({ name: controller.formEntryName, date: controller.formEntryDate, type: controller.formEntryType, cost: controller.formEntryCost });
        }

    }

})();