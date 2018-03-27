(function () {
    angular.module('app')
        .controller("EmployeeCtrl", ["$scope", "$log", "$filter", EmployeeCtrl]);

    function EmployeeCtrl($scope, $log, $filter) {
        $scope.employers = [];
        $scope.AddEmployer = function () {
            employer = {
                Id: $scope.employers.length + 1,
                NameOfCompany: $scope.NameOfCompany,
                FromMonth: $scope.FromMonth,
                FromYear: $scope.FromYear,
                ToMonth: $scope.ToMonth,
                ToYear: $scope.ToYear,
                EmployerJobTitle: $scope.EmployerJobTitle,
                EmployerStreet: $scope.EmployerStreet,
                EmployerCity: $scope.EmployerCity,
                EmployerPhone: $scope.EmployerPhone,
                EmployerSupervisor: $scope.EmployerSupervisor,
                EmployerDuties: $scope.EmployerDuties,
                ReasonForLeaving: $scope.ReasonForLeaving,
                Explanation: $scope.Explanation,
                contactemployer: $scope.contactemployer
            }
            $scope.employers.push(employer);
        }
        
    }

}())