exports.createNew = function (req, res) {
    var cards = req.models.cards,
        newCard = {
            word: req.body.word,
            taboowords: JSON.stringify(req.body.taboowords)
        };
    
    cards.create(newCard, function (err, items) {
        res.send(items);
        // err - description of the error or null 
        // items - array of inserted items 
    });
};

exports.getAll = function (req, res) {
    var cards = req.models.cards;
    
    cards.find(function (err, items) {
        res.send(items);
        // err - description of the error or null 
        // items - array of all items 
    });
};

//exports.remove = function (req, res) {
//    var cards = req.models.cards;
//
//    cards.find(req.body.id).remove(function (err) {
//        console.log(err);
//    });
//
//};