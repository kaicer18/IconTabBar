sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageToast'
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("wvega.myapp.controller.App", {

		onShowHello : function () {
			// show a native JavaScript alert
			// alert("Hello World Win ");
			// var msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\r\n eirmod.';
			// MessageToast.show(msg);
			
		// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);

		}
	});
});