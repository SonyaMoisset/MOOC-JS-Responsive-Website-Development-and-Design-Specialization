if (Meteor.isClient) {
    var img_data = [
    {
        img_src:"laptop.jpeg",
        img_alt:"laptop"
    },
    {
        img_src:"sky.jpe",
        img_alt:"sky"
    },
    {
        img_src:"shop.jpe",
        img_alt:"shop"
    }
                    
    ];
    
    Template.images.helpers({images:img_data});
    
    Template.images.events({
     'click .js-image':function(event){
        $(event.target).css("width", "50px");
     }
    });
}

if (Meteor.isServer) {

}
