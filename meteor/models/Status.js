Status = new Mongo.Collection('status');


Status.querySQL = function (name, sql, transform_function) {

    // default transform function
    transform_function = transform_function || function (rows, fields) {
        var result = rows[0];
        console.log(result);
        return result;
    };

    var result = SQL.queryEx(sql);
    if (result) {
        var where = {name: name};
        var data = {
            name: name,
            status: transform_function(result)
        }
        Status.upsert(where, data);
    }
}

// @TODO
Status.queryLOG = function (name, logfile_path, look_for, transform_function) {


    // default transform function
    transform_function = transform_function || function (rows, fields) {
        var result = rows[0];
        console.log(result);
        return result;
    };

    //var result = SQL.queryEx(sql);
    //if (result) {
    //    var where = {name: name};
    //    var data = {
    //        name: name,
    //        status: transform_function(result)
    //    }
    //    Status.upsert(where, data);
    //}
}