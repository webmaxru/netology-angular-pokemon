'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope) {

    $scope.pokemons = [{
        "abilities": [
            "Overgrow"
        ],
        "detailPageURL": "/us/pokedex/bulbasaur",
        "weight": 15.2,
        "weakness": [
            "Fire",
            "Flying",
            "Ice",
            "Psychic"
        ],
        "height": 28,
        "collectibles_slug": "bulbasaur",
        "featured": "true",
        "id": "001",
        "name": "Bulbasaur",
        "ThumbnailAltText": "Bulbasaur",
        "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        "slug": "bulbasaur",
        "type": [
            "grass",
            "poison"
        ]
    }, {
        "abilities": [
            "Blaze"
        ],
        "detailPageURL": "/us/pokedex/charmander",
        "weight": 18.7,
        "weakness": [
            "Ground",
            "Rock",
            "Water"
        ],
        "height": 24,
        "collectibles_slug": "charmander",
        "featured": "true",
        "id": "004",
        "name": "Charmander",
        "ThumbnailAltText": "Charmander",
        "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        "slug": "charmander",
        "type": [
            "fire"
        ]
    }, {
        "abilities": [
            "Torrent"
        ],
        "detailPageURL": "/us/pokedex/squirtle",
        "weight": 19.8,
        "weakness": [
            "Electric",
            "Grass"
        ],
        "height": 20,
        "collectibles_slug": "squirtle",
        "featured": "true",
        "id": "007",
        "name": "Squirtle",
        "ThumbnailAltText": "Squirtle",
        "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        "slug": "squirtle",
        "type": [
            "water"
        ]
    }];

    $scope.myOrderProperty = 'id';

});
