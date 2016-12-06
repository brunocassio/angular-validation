/**
 * Created by bru9isk on 05/12/16.
 */
(function () {
    'use strict';

    angular
        .module('validationApp')
        .controller('IndexController', IndexController);

    function IndexController() {
        var vm = this;
        vm.title = 'IndexController';

        vm.submitForm = submitForm;

        function submitForm(isValid) {
            if (isValid) {
                alert('our form is amazing');
            }
        }
    }

})();

