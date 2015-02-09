var tmpl = "query";

/**
 * Data Bindings
 */
Template[tmpl].helpers({
    query: function () {
        return Status.findOne({name: this.name})
    }
});


/**
 * UI Events
 */
Template[tmpl].events({

    'click .segment': function (event, template) {
        var $e = $(event.currentTarget); // dom element
        var name = $e.data('name'); // get data-name

        // trigger refresh, add loader until result is here
        $e.addClass('loading');
        Meteor.call(name, function (err, result) {
            Meteor.setTimeout(function(){
                $e.removeClass('loading');
            }, 2000)
        });
    }

})
