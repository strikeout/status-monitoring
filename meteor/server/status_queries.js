Queries = {

    sql: [
        {
            name: 'some test query',
            sql: 'SELECT 1 + 9 AS solution'
        },
        {
            name: 'another test query',
            sql: 'SELECT 3 - 2 AS solution'
        },
    ],

    log: [
        {
            name: 'log test query',
            filepath: '/var/log/nginx/error.log'
        }
    ]
}

var every = 1000 * 30; // 30 sec


_.each(Queries.sql, function (query) {
    function run_query() {
        Status.querySQL(query.name, query.sql, query.transform)
    };

    // run on init
    run_query();

    // then, run every n seconds
    Meteor.setInterval(run_query, every);

    // and also add a method for manual trigger
    // eg. Meteor.call('test_query')
    var add_method = {};
    add_method[query.name] = run_query;
    Meteor.methods(add_method);
});


