var app = angular.module('beerApp', []);
app.controller('contentC', function($scope) {
    $scope.setTemplate = function (type) {
        if (type == "item") {
            
            console.log("item!");
        } else {
            console.log("some other thing");
        };
    };
    $scope.items = {'type':'list', 'name':'Beer List', 'items':[
        {'type':'item','name':'Rignes', 'bits':[
            {'type':'text', 'name':'Comment', 'text':'Norways pride.'},
            {'type':'stars', 'name':'Average Rating', 'number':4},
            {'type':'list', 'name':'Ratings', 'items':[
                {'type':'item','name':'Rating 1', 'bits':[
                    {'type':'stars', 'name':'Rating', 'number':3},
                    {'type':'text', 'name':'Comment', 'text':'A bit dull.'}
                ]},
                {'type':'item','name':'Rating 2', 'bits':[
                    {'type':'stars', 'name':'Rating', 'number':5},
                    {'type':'text', 'name':'Comment', 'text':'Nice brew!.'}
                ]},
                {'type':'item','name':'Rating 3', 'bits':[
                    {'type':'stars', 'name':'Rating', 'number':4},
                    {'type':'text', 'name':'Comment', 'text':'Better than average.'}
                ]}
            ]},
            {'type':'text', 'name':'Country', 'text':'Norway'}
        ]},
        {'type':'item','name':'Pripps', 'bits':[
            {'type':'text', 'name':'Comment', 'text':'Aldrig fel.'},
            {'type':'stars', 'name':'Average Rating', 'number':3},
            {'type':'list', 'name':'Ratings', 'items':[
                {'type':'item','name':'Rating 1', 'bits':[
                    {'type':'stars', 'name':'Rating', 'number':3},
                    {'type':'text', 'name':'Comment', 'text':'A bit dull.'}
                ]},
                {'type':'item','name':'Rating 2', 'bits':[
                    {'type':'stars', 'name':'Rating', 'number':3},
                    {'type':'text', 'name':'Comment', 'text':'Ok stuff.'}
                ]},
                {'type':'item','name':'Rating 3', 'bits':[
                    {'type':'stars', 'name':'Rating', 'number':4},
                    {'type':'text', 'name':'Comment', 'text':'A bit better than usual, probably the weather.'}
                ]}
            ]},
            {'type':'text', 'name':'Country', 'text':'Sweden'}
        ]}
    ]};
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