/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'testSencha.Application',

    name: 'testSencha',

    requires: [
        // This will automatically load all classes in the testSencha namespace
        // so that application classes do not need to require each other.
        'testSencha.*'
    ],

    // The name of the initial view to create.
    mainView: 'testSencha.view.main.Main'
});
