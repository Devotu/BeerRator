var app = angular.module('beerApp', []);
app.controller('contentC', function($scope) {
    $scope.items = [
        {'name':'Rignes','country':'Norway', 'ratings':[
            {'rating':3, 'comment':"This taste rather plain."}, {'rating':3}, {'rating':2}]},
        {'name':'Pripps','country':'Sweden', 'ratings':[
            {'rating':2}, {'rating':3}, {'rating':5}]},
        {'name':'Tuborg','country':'Denmark', 'ratings':[
            {'rating':5}, {'rating':4}, {'rating':3}]}
    ];
    $scope.currentItem = {name:'Nothing'};
    $scope.average = function (data) {
        var sum = 0; 
        var ratings = 0;
        try {
            for (var d in data){
                sum += parseInt(data[d].rating);
                ratings++;
            }
        } catch (error) {
            sum = 0;
        }
        var avg = sum/ratings;
        return avg;
    };
});