angular.module('projectNameApp').controller('MyController', ['$scope', '$http', function($scope, $http) {
    // Exemple d'appel HTTP GET
    $http.get('/api/data')
      .then(function(response) {
        // Traitement de la réponse
        $scope.data = response.data;
      })
      .catch(function(error) {
        // Gestion des erreurs
        console.error('Erreur lors de la récupération des données :', error);
      });
  
    // Exemple d'appel HTTP POST
    $http.post('/api/save', { data: $scope.formData })
      .then(function(response) {
        // Traitement de la réponse
        console.log('Données enregistrées avec succès !');
      })
      .catch(function(error) {
        // Gestion des erreurs
        console.error('Erreur lors de l\'enregistrement des données :', error);
      });
  }]);
  