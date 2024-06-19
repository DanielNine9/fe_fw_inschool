const app = angular.module("spaApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
    })
    .when("/about", {
      templateUrl: "views/about.html",
    })
    .when("/products", {
      templateUrl: "views/products.html",
      controller: "SpaController",
    })
    .when("/product/:id", {
      templateUrl: "views/product-detail.html",
      controller: "ProductDetailController",
    });
});

app
  .controller("SpaController", SpaController)
  .controller("ProductDetailController", ProductDetailController);

function SpaController($scope) {
  let _products = [
    {
      id: 1,
      image:
        "https://pyloherb.com/wp-content/uploads/2021/10/giam-tao-rung-03-247x296.jpg",
      name: "Giấm Táo Hữu Cơ PyLo",
      price: 300000,
    },
    {
      id: 2,
      image:
        "https://pyloherb.com/wp-content/uploads/2022/08/1d08aaba9ea85bf602b97-247x296.jpg",
      name: "Khô Bò Dược Liệu PyLo",
      price: 300000,
    },
    {
      id: 3,
      image:
        "https://pyloherb.com/wp-content/uploads/2021/10/giam-tao-rung-03-247x296.jpg",
      name: "Giấm Táo Hữu Cơ PyLo",
      price: 300000,
    },
    {
      id: 4,
      image:
        "https://pyloherb.com/wp-content/uploads/2021/10/giam-tao-rung-03-247x296.jpg",
      name: "Giấm Táo Hữu Cơ PyLo",
      price: 300000,
    },
    {
      id: 5,
      image:
        "https://pyloherb.com/wp-content/uploads/2021/10/giam-tao-rung-03-247x296.jpg",
      name: "Giấm Táo Hữu Cơ PyLo",
      price: 300000,
    },
    {
      id: 6,
      image:
        "https://pyloherb.com/wp-content/uploads/2021/10/giam-tao-rung-03-247x296.jpg",
      name: "Giấm Táo Hữu Cơ PyLo",
      price: 300000,
    },
  ];

  $scope.products = _products;
}

function ProductDetailController($scope, $routeParams, $http) {
  console.log($routeParams.id);
  let URL_API = "http://localhost:3000/student?username=teonv";
  let student = {
    username: "teonv",
    password: "iloveyou",
    fullname: "Phan Văn Tính",
    email: "teonv@fpt.edu.vn",
    gender: "true",
    birthday: "1995-12-21",
    schoolfee: "1500000",
    marks: "0",
  };

  $http.put(URL_API, JSON.stringify(student)).then(
    function (response) {
      $scope.msg = "Put Data Method Executed Successfully!";
      console.log('thành công!');
    },
    function (response) {
      $scope.msg = "Service not Exists";
      console.log('thất bại!');
    }
  );
}
