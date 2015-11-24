(function () {
    'use strict';

    angular.module('app').controller('Interest', interest);

    function interest() {
        var controller = this;

        controller.interest = "interest calc";
    }

})();