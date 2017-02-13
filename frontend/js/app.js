// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "frontend/views/template.html",
            controller: 'HomeCtrl'
        })
        .state('categories', {
            url: "/categories",
            templateUrl: "frontend/views/template.html",
            controller: 'CategoriesCtrl'
        })
        .state('photographer', {
            url: "/photographer",
            templateUrl: "frontend/views/template.html",
            controller: 'PhotographerCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: "frontend/views/template.html",
            controller: 'FormCtrl'
        })
        .state('feature-photographer', {
            url: "/feature-photographer",
            templateUrl: "frontend/views/template.html",
            controller: 'FeaturPCtrl'
        })
        .state('users', {
            url: "/users",
            templateUrl: "frontend/views/template.html",
            controller: 'UsersCtrl'
        })
        .state('user-profile', {
            url: "/user-profile",
            templateUrl: "frontend/views/template.html",
            controller: 'UserProfileCtrl'
        }).state('wild-photographer', {
            url: "/wild-photographer",
            templateUrl: "frontend/views/template.html",
            controller: 'WildPhotoCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

firstapp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
firstapp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='frontend/img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancybox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                padding: 0,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.directive('autoHeight', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            $element.css("min-height", windowHeight);
        }
    };
});

firstapp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});

firstapp.service('anchorSmoothScroll', function () {

    this.scrollTo = function (eID) {
        // this is scrolling function
        var startY = currentYPosition();
        var stopY = elemPosition(eID);
        //   alert(startY + '\n' + stopY);
        var distance = stopY > startY ? stopY - startY : startY - stopY;

        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
        }

        function currentYPosition() {
            if (self.pageYOffset) return self.pageYOffset;

            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;

            // for ie 6, 7, 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elemPosition(eID) {
            var elem = document.getElementById(eID);
            var y = elem.offsetTop;
            // console.log(y);
            var node = elem;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }
    };


});
