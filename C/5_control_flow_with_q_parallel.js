var createList = require('./1_create_wishlist'),
       addItem = require('./2_add_to_wishlist'),
       getList = require('./3_get_wishlist'),
             Q = require('q');

var id;

createList().then(function (data) {
    id = data.id;
    return Q.all([
        addItem(id, "A bike which works against the wind"),
        addItem(id, "An anti-slouching chair"),
        addItem(id, "An anti-slouching couch"),
        addItem(id, "A pair of flip flops I can walk miles with")
    ]);
}).then(function () {
    return getList(id);
}).then(function (data) {
    console.log(data.wishlist);
});
