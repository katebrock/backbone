//////////////////////////
//////////////////////////
//      directions      //
//////////////////////////
//////////////////////////

// a) Create a form that saves a blog post to
// http://tiny-starburst.herokuapp.com/collections/posts.
// The post should have a title and a body.
// It does not need to display blog posts, just save them.

//sudo-code

//make a view for the form and template
//create your form- html
//create you template- html
////give three inputs (title body submit)
//give an event handle to the submit button
////give the view an events object where the click info will be processed
//give the data a model so it can be saved
//give the model the url
//save the model

///////////////////////////
///////////////////////////
//        model          //
///////////////////////////
///////////////////////////

var blogPost = Backbone.Model.extend({
  url: 'http://tiny-starburst.herokuapp.com/collections/posts'
});

///////////////////////////
///////////////////////////
//        Views          //
///////////////////////////
///////////////////////////

var Form = Backbone.View.extend ({
  className: 'form'.
  template: _.template($('#formTemplate').html()),

  events: {
    'click .submit': 'handleSubmitClick'
  },


handleSubmitClick: function(event){
  .submit();
},
});


//////////////////////////////
//////////////////////////////
//        rendering         //
//////////////////////////////
//////////////////////////////
$('document').ready(function(){
var formBox = new Form();
formBox.render();
$('main').append(forBox.el);
})
