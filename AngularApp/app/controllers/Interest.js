(function () {
    'use strict';

    angular.module('app').controller('Interest', interest);

    function interest() {
        var controller = this;

        //show output
        controller.compOuput = false;
        
        //function to show compoun output
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

            return (starting * Math.pow((1 + rate / timesAnnually), (timesAnnually * years))) + (addition * ((Math.pow(1 + (rate / timesAnnually), (timesAnnually * years)) - 1) / (rate / timesAnnually)));
        }
    }

})();