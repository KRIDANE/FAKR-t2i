'use strict';

/**
 * @ngdoc overview
 * @name myApp
 * @description
 * # myApp
 *
 * Main module of the application.
 */
var app = angular
  .module('myApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'authProvider',
    'angularAuthOIDC','angularAuthOIDCProvider','http-auth-interceptor','$httpProvider'
  ])
  .config(function ($routeProvider,authProvider,angularAuthOIDCProvider,$httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
      angularAuthOIDCProvider.configure({
        loginRoute: '/login', // Route vers la page de connexion
        logoutRoute: '/logout', // Route vers la page de déconnexion
        unauthorizedRoute: '/unauthorized', // Route vers la page d'accès non autorisé
        oidcClientSettings: {
          authority: 'http://127.0.0.1:9080/', // URL de l'émetteur Okta
          client_id: 'simple-webapp-id', // ID client Okta
          redirect_uri: window.location.origin + '/callback.html', // URL de redirection après l'authentification
          scope: 'openid profile email', // Portée OIDC
          response_type: 'id_token token', // Type de réponse OIDC
          post_logout_redirect_uri: window.location.origin + '/index.html' // URL de redirection après la déconnexion
        }
      });
      $httpProvider.interceptors.push(['$rootScope', 'httpBuffer', function ($rootScope, httpBuffer) {
        return {
          request: function (config) {
            // Modifier la requête si nécessaire
            return config;
          },
          responseError: function (rejection) {
            // Gérer les erreurs de réponse HTTP ici
            return $q.reject(rejection);
          }
        };
      }]);
  });
