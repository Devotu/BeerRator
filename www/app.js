var app = angular.module('beerApp', []);
app.controller('contentC', function($scope, $http) { 
    
    $scope.init = function () {
        console.log("init");
        console.log(getData());
        $scope.trace = [];
    }
    
    $scope.changeCurrentItem = function ($event, clickItem) {
       addToTrace($scope.currentItem);
       $scope.currentItem = clickItem;
    }
    
    $scope.selectTemplate = function (itemType) {
        if (itemType == "list") {
            return "ListTemplate.html";
        } else if (itemType == "text") {
            return "TextTemplate.html";
        } else {
            return "ItemTemplate.html";
        }
    }
    
    $scope.goBack = function (){
        $scope.currentItem = $scope.trace.pop();        
    }
        
    function addToTrace(passedItem) {
        $scope.trace.push(passedItem);
    }
    
    function getData() {
        console.log("fetching data");
        $http.get("http://localhost:1880/getJSON").then(function(response){
            $scope.currentItem = response.data;
            console.log($scope.currentItem);
        });
    }
    
    function fakeData() {
       return {'type':'list', 'name':'BeerList', 'items':[
        {'type':'item','name':'Tuborg', 'items':[
            {'type':'text', 'name':'Comment', 'text':'Never really wrong.'},
            {'type':'stars', 'name':'Average Rating', 'number':4},
            {'type':'list', 'name':'Ratings', 'items':[
                {'type':'item','name':'Rating 1', 'items':[
                    {'type':'stars', 'name':'Rating', 'number':3},
                    {'type':'text', 'name':'Comment', 'text':'A bit dull.'}
                ]},
                {'type':'item','name':'Rating 2', 'items':[
                    {'type':'stars', 'name':'Rating', 'number':5},
                    {'type':'text', 'name':'Comment', 'text':'Nice brew!.'}
                ]},
                {'type':'item','name':'Rating 3', 'items':[
                    {'type':'stars', 'name':'Rating', 'number':4},
                    {'type':'text', 'name':'Comment', 'text':'Better than average.'}
                ]}
            ]},
            {'type':'text', 'name':'Country', 'text':'Norway'}
        ]},
        {'type':'item','name':'Pripps', 'items':[
            {'type':'text', 'name':'Comment', 'text':'Aldrig fel.'},
            {'type':'stars', 'name':'Average Rating', 'number':3},
            {'type':'list', 'name':'Ratings', 'items':[
                {'type':'item','name':'Rating 1', 'items':[
                    {'type':'stars', 'name':'Rating', 'number':3},
                    {'type':'text', 'name':'Comment', 'text':'A bit dull.'}
                ]},
                {'type':'item','name':'Rating 2', 'items':[
                    {'type':'stars', 'name':'Rating', 'number':3},
                    {'type':'text', 'name':'Comment', 'text':'Ok stuff.'}
                ]},
                {'type':'item','name':'Rating 3', 'items':[
                    {'type':'stars', 'name':'Rating', 'number':4},
                    {'type':'text', 'name':'Comment', 'text':'A bit better than usual, probably the weather.'}
                ]}
            ]},
            {'type':'text', 'name':'Country', 'text':'Sweden'}
        ]}
    ]};
    }
});