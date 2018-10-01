Ext.define('myApp.controller.MyController', {
   extend : 'Ext.app.Controller',

   init : function() {
    this.control({

     'container' : {
      render : this.onContainerRendered
     },
     'container button' : {
      click : this.onButtonClick
     }
    });
   },

   onContainerRendered : function() {
    //console.log('The container was rendered');
   },

   onButtonClick : function(button) {
    //console.log('Button Click');
    var myView = button.up('container');
    var myTextDisplay = myView.getComponent('whichButton');
    myTextDisplay.setValue('<b>' + button.getText() + '</b>');

   }

  });