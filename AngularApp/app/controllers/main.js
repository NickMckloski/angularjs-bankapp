(function () {
    'use strict';

    angular.module('app', ['ngCookies']).controller('Main', ['$cookies', main]);

    function main($cookies) {
        var controller = this;

        controller.entries = [];
        //load entries from cookies or set it to blank array
        if (typeof $cookies.get('entries') == 'string') {
            var json = (JSON.parse($cookies.get('entries')));
            controller.entries = json;
        }

        //function to add a new entry
        controller.addEntry = function () {
            controller.entries.push({ name: controller.formEntryName, date: controller.formEntryDate, type: controller.formEntryType, cost: controller.formEntryCost });
            //save entries into cookies
            $cookies.put('entries', JSON.stringify(controller.entries));
        }

        //function to remove an entry
        controller.removeEntry = function (entry) {
            for (var i = 0; i < controller.entries.length; i++) {
                if (controller.entries[i] == entry) {
                    controller.entries.splice(i, 1);
                }
            }
            $cookies.put('entries', JSON.stringify(controller.entries));
        }

        //function to get balance of all entries
        controller.balance = function () {
            var total = 0;
            for (var i = 0; i < controller.entries.length; i++) {
                var entry = controller.entries[i];
                if(entry.type == "Income")
                    total += entry.cost;
                else
                    total -= entry.cost;
            }
            return total;
        }
    }

})();