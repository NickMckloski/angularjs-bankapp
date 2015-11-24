(function () {
    'use strict';

    angular.module('app', ['ngCookies']).controller('Account', ['$cookies', account]);

    function account($cookies) {
        var controller = this;

        controller.entries = [];
        //load entries from cookies or set it to blank array
        if (typeof $cookies.get('entries') == 'string') {
            var json = (JSON.parse($cookies.get('entries')));
            controller.entries = json;
        }

        //function to add a new entry
        controller.addEntry = function () {

            //nested function to format date object to string
            function formatDate (date) {
                return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
            }

            controller.entries.push({ name: controller.formEntryName, date: controller.formEntryDate == null ? formatDate(new Date()) : formatDate(controller.formEntryDate), type: controller.formEntryType, cost: (controller.formEntryCost).formatMoney(2) });
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
                    total += parseFloat(entry.cost.replace('$', '').replace(/,/g, ''));
                else
                    total -= parseFloat(entry.cost.replace('$', '').replace(/,/g, ''));
            }

            return Number(total).formatMoney(2);
        }

        //variable to detect if browser supports date input
        controller.cantInputDate = function () {
            var input = document.createElement('input');
            input.setAttribute('type', 'date');

            var notADateValue = 'not-a-date';
            input.setAttribute('value', notADateValue);

            return (input.value === notADateValue);
        }
    }

})();