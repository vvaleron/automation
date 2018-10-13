angular.module('WordsCards', [
    'WordsCardsService'
]).controller('WordsCardsController', ['$scope', '$rootScope', 'WordsCards',
    function ($scope, $rootScope, WordsCards) {

        $scope.saveNewCard = function () {
            var card = {
                word: $scope.word,
                taboowords: $scope.taboowords
                
            };

            WordsCards.saveCard(card);
        };
        
        $scope.initSlider = function () {
            var slider = $('[cards-slider]'),
                sly = new Sly(slider.find('.frame'), {
                    horizontal: 1,
                    smart: true,
                    itemNav: 'centered',
                    scrollBar: '[cards-slider] .scrollbar',
                    pagesBar: '[cards-slider] .pages',
                    keyboardNavBy: 'pages',
                    activateOn: 'click',
                    activatePageOn: 'click',
                    mouseDragging: 1,
                    touchDragging : 1,
                    releaseSwing  : 1,
                    scrollBy      : 1,
                    startAt       : 0,
                    speed         : 300,
                    elasticBounds : 1,
                    dragHandle    : 1,
                    dynamicHandle : 1,
                    clickBar      : 1,
                    activeClass: 'active'
                }, {
                    active: function (eventName, activatedItemIndex) {
                        sly.toStart(activatedItemIndex)
                    }
                    //moveEnd: function () {
                    //    var activeItem = this.rel.activeItem;
                    //
                    //    this.toCenter(activeItem);
                    //}
                });

            sly.init();
        };
    }]).directive('previewCard', function () {
    return {
        restrict: 'A',
        templateUrl: 'views/previewCard.html'
    }
}).directive('cardsSlider', ['WordsCards', function () {
    return {
        restrict: 'A',
        templateUrl: 'views/cardsSlider.html'
    }

}]);