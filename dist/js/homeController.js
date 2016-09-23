// Controller for the home route. handles all the controlling parts. I chose to define only one Route, controller and a template since it is not much complicated
App.HomeController  = Ember.ObjectController.extend({
    controllerName :'HomeController',
    selectedPlayer : null,
    editedPlayer : {name:'', display_name: '',first_name:'',last_name: ''},
    dataAvailable : false,
    edited : false,
    editEnabled : false,

    saveValues : function(){
        var data = {};
        for (var property in this.get('editedPlayer')) {
            if (this.get('editedPlayer').hasOwnProperty(property)) {
                if(this.get('editedPlayer.'+property) !== this.get('selectedPlayer.'+property)){
                    data[property] = this.get('editedPlayer.'+property);
                    this.set('edited',true);
                }
            }
        }
        if(!jQuery.isEmptyObject(data)){
            this.sendSaveRequest(JSON.stringify(data));
        }
    },
    sendSaveRequest : function (data) {
        if(this.get('edited')){
            $.ajax({
                type: "POST",
                url: "http://qa.badgeville.com/cairo/v1/877f63d3590e6ac4bf3e540ab2f02afc/sites/54ffa4b35979db3ea400009d/players/"+this.get('selectedPlayer.id')+"?fields=all&includes=teams,rewards:currentlevels&data="+data+"&do=update&callback=JSON_CALLBACK",
                dataType: "jsonp",
                success: function(resultData) {
                }
            });
        }
        else{
            // handle with nothing is edited message
        }
    },
    actions: {
        onClickPlayer : function (player) {
            this.set('selectedPlayer',player);
            for (var property in this.get('editedPlayer')) {
                if (this.get('editedPlayer').hasOwnProperty(property)) {
                    this.set('editedPlayer.'+property, player[property])
                }
            }
            this.set('dataAvailable',true);
        },
        closePlayerProfile : function () {
            this.set('dataAvailable',false);
        },
        onSavePlayer : function(){
            this.saveValues();
        },
        editPlayer : function () {
            this.set('editEnabled',true);
        },
        closeEditView : function () {
            this.set('editEnabled',false);
        }
    }
});
