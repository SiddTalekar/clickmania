angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.swiper'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("ClickMania"); //This is the Title of the Website
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

    $scope.fpUser = [{
        profile: "frontend/img/pic1.png",
        background: "frontend/img/fp_bg1.png",
        title: "Zaroon Jaffrani | Pune",
        speciality: "wild life"
    }, {
        profile: "frontend/img/pic2.png",
        background: "frontend/img/fp_bg1.png",
        title: "Asmara Khan | Banglore",
        speciality: "wedding"
    }, {
        profile: "frontend/img/pic3.png",
        background: "frontend/img/fp_bg1.png",
        title: "Fatema | Delhi",
        speciality: "wild life"
    }, {
        profile: "frontend/img/clickm/pic1.png",
        background: "frontend/img/fp_bg1.png",
        title: "Zaroon Jaffrani | Pune",
        speciality: "wild life"
    }, {
        profile: "frontend/img/clickm/pic2.png",
        background: "frontend/img/fp_bg1.png",
        title: "Asmara Khan | Banglore",
        speciality: "Wedding"
    }, {
        profile: "frontend/img/pic3.png",
        background: "frontend/img/fp_bg1.png",
        title: "Fatema | Delhi",
        speciality: "wild life"
    }];
})

.controller('PhotographerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $http) {
    $scope.template = TemplateService.changecontent("photographer"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Photographer"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.tab = 1;
<<<<<<< HEAD
    $scope.enquiry = function () {
=======
    $scope.showForm=true;
    $scope.noEdit=true;
    $scope.hideAboutDesc=false;
    $scope.profileSelect=false;
    $scope.showForm=function() {
        $scope.noEdit=false;
      $scope.showForm=false;
      $scope.hideAboutDesc=true;
      $scope.profileSelect=true;
    }
    $scope.showMembership=false;
    $scope.goldenMember=true;
    $scope.silverMember=true;
    $scope.silverMember=function() {
          $scope.profileSelect=true;
          $scope.noEdit=false;
      $scope.showMembership=true;
      $scope.silverMember=false;
        $scope.goldenMember=true;
        $scope.showForm=false;
        $scope.hideAboutDesc=true;
    }
    $scope.goldMember=function() {
      $scope.noEdit=false;
          $scope.profileSelect=true;
      $scope.showMembership=true;
      $scope.goldenMember=false;
      $scope.silverMember=true;
      $scope.showForm=false;
      $scope.hideAboutDesc=true;
    }
    $scope.enquiry = function() {
>>>>>>> fdb27bd584ba2beacf7b71b1207fcf06b6469296
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
        $scope.toggleTab = function (val) {
            $scope.activeTab = val;
        };
    })
    .controller('UsersCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("users"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Users"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.tileList = {
            "titleOne": "Featured",
            "titleTwo": "Time freezers",

        };

        $scope.usersList = [{
            "profile": "frontend/img/clickm/pic1.png",
            "background": "frontend/img/clickm/9.jpg",
            "title": "Zaroon Jaffrani | Pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }, {
            "profile": "frontend/img/clickm/pic2.png",
            "background": "frontend/img/clickm/9.jpg",
            "title": "Zaroon Jaffrani | Pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."

        }, {
            "profile": "frontend/img/clickm/pic3.png",
            "background": "frontend/img/clickm/9.jpg",
            "title": "Zaroon Jaffrani | Pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }, {
            "profile": "frontend/img/clickm/pic4.png",
            "background": "frontend/img/clickm/9.jpg",
            "title": "Zaroon Jaffrani | Pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }, {
            "profile": "frontend/img/clickm/pic5.png",
            "background": "frontend/img/clickm/9.jpg",
            "title": "Zaroon Jaffrani | Pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }, {
            "profile": "frontend/img/clickm/pic1.png",
            "background": "frontend/img/clickm/9.jpg",
            "title": "Zaroon Jaffrani | Pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }];
        $scope.subclick = {
            "background": "frontend/img/clickm/25.jpg",
            "titleOne": "If you wish to join as a",
            "titleTwo": "featured photographer"
        };

    })
    .controller('UserProfileCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("user-profile"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("User Profile"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

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
