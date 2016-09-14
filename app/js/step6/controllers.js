'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, $http) {

    $http.get('data/pokemons.json').success(function(data) {
        $scope.pokemons = data;
    });

    $scope.myOrderProperty = 'weight';

});
