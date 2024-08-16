sap.ui.define([
    "ypf/zlog12freeld4/controller/BaseController",
    "ypf/zlog12freeld4/util/Constants",
    "ypf/zlog12freeld4/util/Formatter",
    "ypf/zlog12freeld4/util/Commons",
    "ypf/zlog12freeld4/util/Services",
    "sap/ui/model/json/JSONModel"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function (Controller, Constants, Formatter, Commons, Services, JSONModel) {
    "use strict";

    return Controller.extend("ypf.zlog12freeld4.controller.DriverDetail", {
        onInit: function () {
            this.getRouter().getRoute(Constants.targets.DRIVER_DETAIL).attachPatternMatched(this._onObjectMatched, this);
        },
        /**
         * Binds the view to the object path and expands the aggregated line items.
         * @function
         * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
         * @private
         */
        _onObjectMatched: function (oEvent) {
            this.sCurrentObjectId = oEvent.getParameter("arguments").DriverId;
            let oItem = this.getModel(Constants.paths.DRIVERS_PATH).getProperty("/"+ this.sCurrentObjectId);
            oItem.Licencias = [];
            if(oItem.LicenseTypeZCO1 != "" && oItem.LicenseTxtZCO1 != "" && oItem.ValidFromZCO1 != "00-00-00" && oItem.ValidToZCO1 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZCO1,
                    LicenseTxt: oItem.LicenseTxtZCO1,
                    ValidFrom: oItem.ValidFromZCO1,
                    ValidTo: oItem.ValidToZCO1,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZCO1"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZCO1"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZCO1"),
                    labelValidTo: this.getTextFor("labelDriverValidToZCO1")
                });
            }
            if(oItem.LicenseTypeZCO2 != "" && oItem.LicenseTxtZCO2 != "" && oItem.ValidFromZCO2 != "00-00-00" && oItem.ValidToZCO2 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZCO2,
                    LicenseTxt: oItem.LicenseTxtZCO2,
                    ValidFrom: oItem.ValidFromZCO2,
                    ValidTo: oItem.ValidToZCO2,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZCO2"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZCO2"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZCO2"),
                    labelValidTo: this.getTextFor("labelDriverValidToZCO2")
                });
            }
            if(oItem.LicenseTypeZCO3 != "" && oItem.LicenseTxtZCO3 != "" && oItem.ValidFromZCO3 != "00-00-00" && oItem.ValidToZCO3 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZCO3,
                    LicenseTxt: oItem.LicenseTxtZCO3,
                    ValidFrom: oItem.ValidFromZCO3,
                    ValidTo: oItem.ValidToZCO3,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZCO3"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZCO3"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZCO3"),
                    labelValidTo: this.getTextFor("labelDriverValidToZCO3")
                });
            }
            if(oItem.LicenseTypeZCO4 != "" && oItem.LicenseTxtZCO4 != "" && oItem.ValidFromZCO4 != "00-00-00" && oItem.ValidToZCO4 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZCO4,
                    LicenseTxt: oItem.LicenseTxtZCO4,
                    ValidFrom: oItem.ValidFromZCO4,
                    ValidTo: oItem.ValidToZCO4,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZCO4"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZCO4"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZCO4"),
                    labelValidTo: this.getTextFor("labelDriverValidToZCO4")
                });
            }
            if(oItem.LicenseTypeZCO5 != "" && oItem.LicenseTxtZCO5 != "" && oItem.ValidFromZCO5 != "00-00-00" && oItem.ValidToZCO5 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZCO5,
                    LicenseTxt: oItem.LicenseTxtZCO5,
                    ValidFrom: oItem.ValidFromZCO5,
                    ValidTo: oItem.ValidToZCO5,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZCO5"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZCO5"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZCO5"),
                    labelValidTo: this.getTextFor("labelDriverValidToZCO5")
                });
            }
            if(oItem.LicenseTypeZCO6 != "" && oItem.LicenseTxtZCO6 != "" && oItem.ValidFromZCO6 != "00-00-00" && oItem.ValidToZCO6 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZCO6,
                    LicenseTxt: oItem.LicenseTxtZCO6,
                    ValidFrom: oItem.ValidFromZCO6,
                    ValidTo: oItem.ValidToZCO6,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZCO6"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZCO6"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZCO6"),
                    labelValidTo: this.getTextFor("labelDriverValidToZCO6")
                });
            }
            if(oItem.LicenseTypeZCO7 != "" && oItem.LicenseTxtZCO7 != "" && oItem.ValidFromZCO7 != "00-00-00" && oItem.ValidToZCO7 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZCO7,
                    LicenseTxt: oItem.LicenseTxtZCO7,
                    ValidFrom: oItem.ValidFromZCO7,
                    ValidTo: oItem.ValidToZCO7,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZCO7"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZCO7"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZCO7"),
                    labelValidTo: this.getTextFor("labelDriverValidToZCO7")
                });
            }
            if(oItem.LicenseTypeZCO8 != "" && oItem.LicenseTxtZCO8 != "" && oItem.ValidFromZCO8 != "00-00-00" && oItem.ValidToZCO8 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZCO8,
                    LicenseTxt: oItem.LicenseTxtZCO8,
                    ValidFrom: oItem.ValidFromZCO8,
                    ValidTo: oItem.ValidToZCO8,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZCO8"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZCO8"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZCO8"),
                    labelValidTo: this.getTextFor("labelDriverValidToZCO8")
                });
            }
            if(oItem.LicenseTypeZCO9 != "" && oItem.LicenseTxtZCO9 != "" && oItem.ValidFromZCO9 != "00-00-00" && oItem.ValidToZCO9 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZCO9,
                    LicenseTxt: oItem.LicenseTxtZCO9,
                    ValidFrom: oItem.ValidFromZCO9,
                    ValidTo: oItem.ValidToZCO9,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZCO9"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZCO9"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZCO9"),
                    labelValidTo: this.getTextFor("labelDriverValidToZCO9")
                });
            }
            if(oItem.LicenseTypeZAO1 != "" && oItem.LicenseTxtZAO1 != "" && oItem.ValidFromZAO1 != "00-00-00" && oItem.ValidToZAO1 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZAO1,
                    LicenseTxt: oItem.LicenseTxtZAO1,
                    ValidFrom: oItem.ValidFromZAO1,
                    ValidTo: oItem.ValidToZAO1,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZAO1"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZAO1"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZAO1"),
                    labelValidTo: this.getTextFor("labelDriverValidToZAO1")
                });
            }
            if(oItem.LicenseTypeZAO2 != "" && oItem.LicenseTxtZAO2 != "" && oItem.ValidFromZAO2 != "00-00-00" && oItem.ValidToZAO2 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZAO2,
                    LicenseTxt: oItem.LicenseTxtZAO2,
                    ValidFrom: oItem.ValidFromZAO2,
                    ValidTo: oItem.ValidToZAO2,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZAO2"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZAO2"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZAO2"),
                    labelValidTo: this.getTextFor("labelDriverValidToZAO2")
                });
            }
            if(oItem.LicenseTypeZAO3 != "" && oItem.LicenseTxtZAO3 != "" && oItem.ValidFromZAO3 != "00-00-00" && oItem.ValidToZAO3 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZAO3,
                    LicenseTxt: oItem.LicenseTxtZAO3,
                    ValidFrom: oItem.ValidFromZAO3,
                    ValidTo: oItem.ValidToZAO3,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZAO3"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZAO3"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZAO3"),
                    labelValidTo: this.getTextFor("labelDriverValidToZAO3")
                });
            }
            if(oItem.LicenseTypeZAO4 != "" && oItem.LicenseTxtZAO4 != "" && oItem.ValidFromZAO4 != "00-00-00" && oItem.ValidToZAO4 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZAO4,
                    LicenseTxt: oItem.LicenseTxtZAO4,
                    ValidFrom: oItem.ValidFromZAO4,
                    ValidTo: oItem.ValidToZAO4,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZAO4"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZAO4"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZAO4"),
                    labelValidTo: this.getTextFor("labelDriverValidToZAO4")
                });
            }
            if(oItem.LicenseTypeZAO5 != "" && oItem.LicenseTxtZAO5 != "" && oItem.ValidFromZAO5 != "00-00-00" && oItem.ValidToZAO5 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZAO5,
                    LicenseTxt: oItem.LicenseTxtZAO5,
                    ValidFrom: oItem.ValidFromZAO5,
                    ValidTo: oItem.ValidToZAO5,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZAO5"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZAO5"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZAO5"),
                    labelValidTo: this.getTextFor("labelDriverValidToZAO5")
                });
            }
            if(oItem.LicenseTypeZAO6 != "" && oItem.LicenseTxtZAO6 != "" && oItem.ValidFromZAO6 != "00-00-00" && oItem.ValidToZAO6 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZAO6,
                    LicenseTxt: oItem.LicenseTxtZAO6,
                    ValidFrom: oItem.ValidFromZAO6,
                    ValidTo: oItem.ValidToZAO6,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZAO6"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZAO6"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZAO6"),
                    labelValidTo: this.getTextFor("labelDriverValidToZAO6")
                });
            }
            if(oItem.LicenseTypeZAO7 != "" && oItem.LicenseTxtZAO7 != "" && oItem.ValidFromZAO7 != "00-00-00" && oItem.ValidToZAO7 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZAO7,
                    LicenseTxt: oItem.LicenseTxtZAO7,
                    ValidFrom: oItem.ValidFromZAO7,
                    ValidTo: oItem.ValidToZAO7,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZAO7"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZAO7"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZAO7"),
                    labelValidTo: this.getTextFor("labelDriverValidToZAO7")
                });
            }
            if(oItem.LicenseTypeZAO8 != "" && oItem.LicenseTxtZAO8 != "" && oItem.ValidFromZAO8 != "00-00-00" && oItem.ValidToZAO8 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZAO8,
                    LicenseTxt: oItem.LicenseTxtZAO8,
                    ValidFrom: oItem.ValidFromZAO8,
                    ValidTo: oItem.ValidToZAO8,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZAO8"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZAO8"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZAO8"),
                    labelValidTo: this.getTextFor("labelDriverValidToZAO8")
                });
            }
            if(oItem.LicenseTypeZAO9 != "" && oItem.LicenseTxtZAO9 != "" && oItem.ValidFromZAO9 != "00-00-00" && oItem.ValidToZAO9 != "00-00-00"){
                oItem.Licencias.push({
                    LicenseType: oItem.LicenseTypeZAO9,
                    LicenseTxt: oItem.LicenseTxtZAO9,
                    ValidFrom: oItem.ValidFromZAO9,
                    ValidTo: oItem.ValidToZAO9,
                    labelLicenseType: this.getTextFor("labelDriverLicenseTypeZAO9"),
                    labelLicenseTxt: this.getTextFor("labelDriverLicenseTxtZAO9"),
                    labelValidFrom: this.getTextFor("labelDriverValidFromZAO9"),
                    labelValidTo: this.getTextFor("labelDriverValidToZAO9")
                });
            }
            let oDetailModel = new JSONModel(oItem);
            this.setModel(oDetailModel,Constants.paths.DRIVER_DETAIL_PATH);
        },
        onNavToTablesView: function(oEvent){
            this.getRouter().navTo("driverTable");
        }
    });
});