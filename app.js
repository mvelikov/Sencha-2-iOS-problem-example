/*global Ext */
Ext.application({
    launch: function() {

        var view = Ext.create('Ext.NavigationView', {
			fullscreen: true,

			items: [{
				title: 'First',
				items: [{
					xtype: 'button',
					text: 'Push a new view!',
					handler: function() {
						view.push({
							title: 'Second Second Second Second Second Second Second Second',
							html: 'Second view!'
						});
					}
				}]
			}]
		});
    }
});