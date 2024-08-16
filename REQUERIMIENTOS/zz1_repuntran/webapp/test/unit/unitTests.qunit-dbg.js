/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ypf/z_log_66_free_ld4/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
