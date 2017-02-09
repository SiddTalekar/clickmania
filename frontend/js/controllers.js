angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.swiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
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

.controller('PhotographerCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $http) {
    $scope.template = TemplateService.changecontent("photographer"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Photographer"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.tab = 1;
    $scope.showForm = true;
    $scope.noEdit = true;
    $scope.hideAboutDesc = false;
    $scope.profileSelect = false;
    $scope.freeMember = false;
    $scope.silverSub = true;
    $scope.chooseSilver = function() {
        $scope.freeMember = true;
        $scope.silverSub = false;
    }
    $scope.showForm = function() {
        $scope.noEdit = false;
        $scope.showForm = false;
        $scope.hideAboutDesc = true;
        $scope.profileSelect = true;
    }
    $scope.showMembership = false;
    $scope.goldenMember = true;
    $scope.silverMember = true;
    $scope.silverMember = function() {
        $scope.profileSelect = true;
        $scope.noEdit = false;
        $scope.showMembership = true;
        $scope.silverMember = false;
        $scope.goldenMember = true;
        $scope.showForm = false;
        $scope.hideAboutDesc = true;
    }
    $scope.goldMember = function() {
        $scope.noEdit = false;
        $scope.profileSelect = true;
        $scope.showMembership = true;
        $scope.goldenMember = false;
        $scope.silverMember = true;
        $scope.showForm = false;
        $scope.hideAboutDesc = true;
    }
    $scope.uploadImg = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "frontend/views/modal/upload-photo.html",
            scope: $scope,
            windowClass: 'upload-pic'
        });
    };

    $scope.uploadList = [
        'frontend/img/photographer/img.jpg',
        'frontend/img/photographer/img.jpg',
        'frontend/img/photographer/img.jpg',
        'frontend/img/photographer/img.jpg',
        'frontend/img/photographer/img.jpg',
        'frontend/img/photographer/img.jpg'
    ];
    $scope.subclick = {
        "background": "frontend/img/user-back.png",
        "titleOne": "Upgrade to",
        "titleTwo": "Gold"
    };

})

.controller('FormCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.formSubmitted = false;

        $scope.submitForm = function(data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })
    .controller('FeaturPCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("feature-photographer"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Feature Photographer"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.activeTab = 1;
        $scope.toggleTab = function(val) {
            $scope.activeTab = val;
        };
        $scope.data = {
            "intro": "You could be a featured photographer on Clickmania and come under the lens of those who would love to harness your services. For as low as Rs. 1000 you could shoecase your work for a month.",
            "name": "Manan",
        };
        $scope.benefits = [{
            "list": "100 photos",
        }, {
            "list": "3mb per photo",
        }, {
            "list": "Photos can be edited by you.",
        }, {
            "list": "Valid till 1 year.",
        }];
    })
    .controller('UsersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("users"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Users"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.tileList = {
            "titleOne": "Featured",
            "titleTwo": "Time freezers",

        };

        $scope.usersList = [{
            "profile": "frontend/img/pic/pic1.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "sagar",
            "surName": "roy",
            "place": "pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }, {
            "profile": "frontend/img/pic/pic3.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "zaroon",
            "surName": "jaffrani",
            "place": "pune",
            "content": " You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."

        }, {
            "profile": "frontend/img/pic/pic2.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "rayeesh",
            "surName": "khan",
            "place": "pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? "
        }, {
            "profile": "frontend/img/pic/pic5.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "sagar",
            "surName": "roy",
            "place": "pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }, {
            "profile": "frontend/img/pic/pic6.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "dipesh",
            "surName": "yask",
            "place": "pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }, {
            "profile": "frontend/img/pic/pic4.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }];
        $scope.subclick = {
            "background": "frontend/img/user-back.png",
            "titleOne": "If you wish to join as a",
            "titleTwo": "featured photographer"
        };

    })
    .controller('UserProfileCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("user-profile"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("User Profile"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.activeTab = 1;
        $scope.toggleTab = function(val) {
            $scope.activeTab = val;
        };
        $scope.userHead = {
            profile: "frontend/img/pic/pic1.jpg",
            background: "frontend/img/clickm/5.jpg",
            name: "zohn",
            surName: "carter",
            location: ['mumbai | ', 'pune | ', 'delhi'],
            speciality: ['wedding', 'wildlife', 'travel']
        };
        $scope.reviewList = [{
            "profile": "frontend/img/pic/pic1.jpg",
            "name": "sagar",
            "surName": "roy",
            "days": "1",
            "content": "Clickmania is an online mobile photo-sharing site that allows its users to share pictures and videos either publicly or privately on the app, as well as through a variety of other social networking platforms, such as Facebook,Twitter, Tumblr, and Flickr. "
        }, {
            "profile": "frontend/img/pic/pic3.jpg",
            "name": "zaroon",
            "surName": "jaffrani",
            "days": "3",
            "content": "Clickmania is an online mobile photo-sharing site that allows its users to share pictures and videos either publicly or privately on the app, as well as through a variety of other social networking platforms, such as Facebook, Twitter, Tumblr, and Flickr."
        }, {
            "profile": "frontend/img/pic/pic2.jpg",
            "name": "rayeesh",
            "surName": "khan",
            "days": "4",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? "
        }];

        $scope.fpUser = [{
            "profile": "frontend/img/pic/pic1.jpg",
            "background": "frontend/img/fp_bg1.png",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "speciality": "wild life"
        }, {
            "profile": "frontend/img/pic/pic2.jpg",
            "background": "frontend/img/fp_bg1.png",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "speciality": "wedding"
        }, {
            "profile": "frontend/img/pic/pic3.jpg",
            "background": "frontend/img/fp_bg1.png",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "speciality": "wild life"
        }, {
            "profile": "frontend/img/pic/pic4.jpg",
            "background": "frontend/img/fp_bg1.png",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "speciality": "wild life"
        }, {
            "profile": "frontend/img/pic/pic5.jpg",
            "background": "frontend/img/fp_bg1.png",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "speciality": "Wedding"
        }, {
            "profile": "frontend/img/pic/pic6.jpg",
            "background": "frontend/img/fp_bg1.png",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "speciality": "wild life"
        }];

    })
    .controller('WildPhotoCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("wild-photographer"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Wild Photographer"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.fpUser = [{
            "profile": "frontend/img/pic/pic1.jpg",
            "background": "frontend/img/fp_bg1.png",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "speciality": "wild life"
        }, {
            "profile": "frontend/img/pic/pic2.jpg",
            "background": "frontend/img/fp_bg1.png",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "speciality": "wedding"
        }, {
            "profile": "frontend/img/pic/pic3.jpg",
            "background": "frontend/img/fp_bg1.png",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "speciality": "wild life"
        }, {
            "profile": "frontend/img/pic/pic4.jpg",
            "background": "frontend/img/fp_bg1.png",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "speciality": "wild life"
        }];

        //uib controller
        $scope.totalItems = 64;
        $scope.currentPage = 1;

        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            $log.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.maxSize = 1;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
        $scope.usersList = [{
            "profile": "frontend/img/pic/pic1.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "sagar",
            "surName": "roy",
            "place": "pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }, {
            "profile": "frontend/img/pic/pic3.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "zaroon",
            "surName": "jaffrani",
            "place": "pune",
            "content": " You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."

        }, {
            "profile": "frontend/img/pic/pic2.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "rayeesh",
            "surName": "khan",
            "place": "pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? "
        }, {
            "profile": "frontend/img/pic/pic5.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "sagar",
            "surName": "roy",
            "place": "pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }, {
            "profile": "frontend/img/pic/pic6.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "dipesh",
            "surName": "yask",
            "place": "pune",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }, {
            "profile": "frontend/img/pic/pic4.jpg",
            "background": "frontend/img/clickm/9.jpg",
            "name": "prachi",
            "surName": "ronsk",
            "place": "new mumbai",
            "content": "Would you like to insert and display separate images for intro text and full article in your blog? ... You can also specify placement for images, take a look at Intro Image Float and Full Text Image Float settings."
        }];
        $scope.categories = [{
            "background": "frontend/img/cat3.jpg"
        }, {
            "background": "frontend/img/cat4.jpg"
        }, {
            "background": "frontend/img/cat3.jpg"
        }, {
            "background": "frontend/img/cat4.jpg"
        }];


    })
    .controller('headerctrl', function($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $.fancybox.close(true);
    })

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
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
