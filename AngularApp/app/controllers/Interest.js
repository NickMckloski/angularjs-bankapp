(function () {
    'use strict';

    angular.module('app').controller('Interest', interest);

    function interest() {
        var controller = this;

        controller.simpleOuput = false;
        //function to show simple output
        controller.showSimpleOutput = function () {
            controller.simpleOuput = true;
        }
        
        //function to calculate simple interest
        controller.calSimple = function () {
            var starting = controller.simpleStarting;
            var years = controller.simpleYears;
            var rate = controller.simpleRate / 100;

            var output = starting + (starting * rate * years);
            return (output).formatMoney(2);
        }

        controller.compOuput = false;
        //function to show compound output
        controller.showCompOutput = function () {
            controller.compOuput = true;
        }

        //function to calculate compound interest
        controller.calCompound = function () {
            var starting = controller.compStarting;
            var addition = controller.compAddition;
            var timesAnnually = controller.compTimes;
            var years = controller.compYears;
            var rate = controller.compRate/100;

            //unit test
            //var a = starting * Math.pow((1 + rate / timesAnnually), (timesAnnually * years));
            //var b = Math.pow(1 + (rate / timesAnnually), (timesAnnually * years)) - 1;
            //var c = (rate / timesAnnually);
            //var d = (addition * ( b / c))
            //var out = a + d;
            //console.log(a + " " + b + " " + c + " " + d + " " + out);

            var output = (starting * Math.pow((1 + rate / timesAnnually), (timesAnnually * years))) + (addition * ((Math.pow(1 + (rate / timesAnnually), (timesAnnually * years)) - 1) / (rate / timesAnnually)));
            return (output).formatMoney(2);

        }

    }

})();