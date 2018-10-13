angular.module('WordsCardsService', [])
    .factory('WordsCards', ['$http', '$rootScope', '$location', function($http, $rootScope, $location) {
        function parseTaboo(data) {
            var i = 0;
            for (i; i < data.length; i++) {
                data[i].taboowords = JSON.parse(data[i].taboowords);
            }
            return data;
        }

        function getCards () {
            return $rootScope.cards
        }
        
        $http.get('/cards')
            .success(function (data, status, headers, config) {
                console.log(arguments, '   -->     getCards().success()');
                $rootScope.cards = parseTaboo(data);
            })
            .error(function (data, status, headers, config) {
                console.log('   -->     getCards().error()');
            });
        
        function saveCard (card) {
            console.log(card, '-->    saveCard (card)');
            $http.post('/saveNewCard', card)
                .success(function (data, status, headers, config) {
                    console.log(arguments, '<----- arguments WordsCards.saveCard(card).success()');
                })
                .error(function (data, status, headers, config) {
                    console.log(arguments, '<----- arguments WordsCards.saveCard(card).error()');
                });
        }
        
    return {
        saveCard: saveCard,
        getCards: getCards
    }
}]);