'use strict';

pokemonApp.controller('PokemonDetailCtrl', function($scope) {

    $scope.newPokemon = {};
    $scope.addPokemon = function(myPokemon) {
        console.log(myPokemon);
        $scope.newPokemon = {};
    };

});
