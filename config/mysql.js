module.exports = function (app) {
    var orm = require('orm'),
        connections = {},
        opts = {
            host:     'localhost',
            database: 'english',
            protocol: 'mysql',
            user:     'valera',
            password: 'Iddqd17',
            port:     '3306'
        };
    
    app.use(orm.express("mysql://valera:Iddqd17@localhost/english", {
        define: function (db, models, next) {
            models.cards = db.define("cards", {
                id      : Number,
                word    : String,
                taboowords : String
            },{
                methods: {
                    getTaboo: function () {
                        return JSON.parse(this.taboowords);
                    }
                },
                validations: {
                    //age: orm.enforce.ranges.number(18, undefined, "under-age")
                }
            });
            next();
        }
    }));
};