app.config(function ($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "views/home.html" 
    })
    .when("/about", {
        templateUrl: "views/about.html" 
    })
    .when("/contact", {
        templateUrl: "views/contact.html" 
    })
});