var confirmApp = angular.module('confirmApp', ['angular-intro', 'ui.router']);

confirmApp.config(function($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
    
	$uiViewScrollProvider.useAnchorScroll();
	
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            views: 
			{
				'':
				{
					templateUrl: '_home.html',
					controller: 'homeController'
				},
				'navigation':
				{
					templateUrl: '_navigation.html',
					controller: 'navigationController'
				}
			}
        })
        
		.state('getIt', {
            url: '/getIt',
            views: 
			{
				'':
				{
					templateUrl: '_getIt.html'
				},
				'navigation':
				{
					templateUrl: '_navigation.html',
					controller: 'navigationController'
				}
			}
        })
		
        .state('syntax', {
            url: '/syntax',
			views:
			{
				'':
				{
					templateUrl: '_syntax.html'
				},
				'navigation':
				{
					templateUrl: '_navigation.html',
					controller: 'navigationController'
				}
			}
        })
        
        .state('history', {
            url: '/history',
			views:
			{
				'':
				{
					templateUrl: '_history.html'
				},
				'navigation':
				{
					templateUrl: '_navigation.html',
					controller: 'navigationController'
				}
			}
        })
		
		.state('about', {
            url: '/about',
			views:
			{
				'':
				{
					templateUrl: '_about.html'
				},
				'navigation':
				{
					templateUrl: '_navigation.html',
					controller: 'navigationController'
				}
			}
        });
});

confirmApp.controller('navigationController', ['$scope', '$state', function ($scope, $state) {
	$scope.currentState = $state.current.name;
}]);

confirmApp.controller('homeController', function ($scope) {
    
	$scope.ExitEvent = function () {
        // window.location.href = document.URL.replace("#/guide", "#/home");
    };
	
	$scope.IntroOptions = {
        steps:[
			{
				element: document.querySelector('[data-step="1&2&3"]'),
				intro: "Hallo. Then following this guide, you'll be shown the different components step by step." +
					"The guide will tell you, which control to click to trigger a change of views. Please follow it's demands," + 
					"before taking the next step.<br><br>You start off seeing the button, which represents an action." +
					"<br><br><em>Please click it.</em>"
			},
			{
				element: document.querySelector('[data-step="1&2&3"]'),
				intro: "Now you are seeing two buttons to either confirm or abort the action and a dialogue between them." +
					"<br><br><em>Please press the button labelled with the word No.</em>"
			},
			{
				element: document.querySelector('[data-step="1&2&3"]'),
				intro: "Doing this, you aborted the action.<br><br><em>Please click the button again.</em>"
			},
			{
				element: document.querySelector('[data-step="4"]'),
				intro: "Normally you target the HTML code of this button to trigger the real action.<br><br>" +
					"<em>Now press the Yes-button to confirm the action.</em>"
			}
        ],
        showStepNumbers: false,
        exitOnOverlayClick: true,
        exitOnEsc: true,
        nextLabel: '<strong>NEXT!</strong>',
        prevLabel: '<span style="color:green">Previous</span>',
        skipLabel: 'Exit',
        doneLabel: 'Thanks'
    };
});