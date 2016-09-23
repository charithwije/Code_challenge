// Router map defines all the url mappings
App.Router.map(function() {
    this.resource('home', { path: 'home' });
});

// Index route is the default route for ember application. App is redirected to the home route as my preference (I could have done everything in this index route but it is more clear to use our own route)
App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo("home");
    }
});

// Route handler for the defined home route. Sets the model for the route.
App.HomeRoute = Ember.Route.extend({
    model: function() {
        var playersArray = null, self = this;
          return $.ajax({
                type: "GET",
                url: "http://qa.badgeville.com/cairo/v1/877f63d3590e6ac4bf3e540ab2f02afc/sites/54ffa4b35979db3ea400009d/players?callback=JSON_CALLBACK",
                dataType: 'jsonp',
                success: function(data) {

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // error logs here
                }
            });
    }
});