angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.swiper'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
        // 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        // 'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        // 'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        // 'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        "frontend/img/bg1.jpg",
        "frontend/img/bg1.jpg",
        "frontend/img/bg1.jpg"

    ];
})

.controller('PhotographerCtrl', function($scope, TemplateService, NavigationService, $timeout,$uibModal,$http) {
    $scope.template = TemplateService.changecontent("photographer"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Photographer"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.tab = 1;
    $scope.enquiry = function() {
     $uibModal.open({
         animation: true,
         templateUrl: "views/modal/profile-info.html",
         scope: $scope,
         windowClass: "mod-fix"
     });
   };

})


.controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
    };
})
.controller('LoginCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("login"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Login"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.activeTab = 1;
    $scope.toggleTab = function(val) {
        $scope.activeTab = val;
    };


})

.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
})

.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;
