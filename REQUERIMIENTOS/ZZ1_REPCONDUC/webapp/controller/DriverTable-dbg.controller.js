sap.ui.define([
    "ypf/zlog12freeld4/controller/BaseController",
    "ypf/zlog12freeld4/util/Constants",
    "ypf/zlog12freeld4/util/Formatter",
    "ypf/zlog12freeld4/util/Commons",
    "ypf/zlog12freeld4/util/Services",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/table/TablePersoController",
    "sap/ui/model/Sorter",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox",
    "sap/ui/export/Spreadsheet",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, Constants, Formatter, Commons, Services, JSONModel, MessageToast, Filter, FilterOperator, TablePersoController,
        Sorter, Fragment, MessageBox, Spreadsheet) {
		"use strict";

		return Controller.extend("ypf.zlog12freeld4.controller.DriverTable", {
			onInit: function () {
                this._mViewSettingsDialogs = {};
                this.getVariantService();
                this.oDataModel = this.getOwnerComponent().getModel("DriversModel");
                this.oDataModel.refresh();
            },
            onSortOpen: function () {
                let that = this;
                Commons.getViewSettingsDialog(
                    "ypf.zlog12freeld4.view.fragment.SortDialog",
                    this._mViewSettingsDialogs,
                    this)
                    .then(function (oViewSettingsDialog) {
                        that.getView().addDependent(oViewSettingsDialog);
                        oViewSettingsDialog.open();
                    });
            },
            onSortDriverTableConfirm: function (oEvent) {
                let sPath = oEvent.getParameters().sortItem.getKey(),
                    bDescending = oEvent.getParameters().sortDescending;
                this.currentSorter = new Sorter(sPath,bDescending);
                Commons.onSortChange(this.byId(Constants.ids.DriverTable), this.currentSorter,this);
            },
            onSelectChangeCarrier: function(oEvent){
                this.oFilterCarrier = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.carrier, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeDriverCode: function(oEvent){
                this.oFilterDriverCode = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.driverCode, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeDriverStatus: function(oEvent){
                this.oFilterDriverStatus = Commons.getFilterForMultiComboboxStatus(oEvent, Constants.filterFields.driverStatus, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterBTDatesSegVida: function(oEvent){
                let oFrom = oEvent.getParameter("from"),
                    oTo = oEvent.getParameter("to");
                oFrom = Formatter.DateToInt(oFrom);
                oTo = Formatter.DateToInt(oTo);
                if (oFrom && oTo) {
                    this.oFilterBTDateSegVida = new Filter(Constants.filterFields.SegVida, FilterOperator.BT, oFrom, oTo);
                } else {
                    this.oFilterBTDateSegVida = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterBTDatesART: function(oEvent){
                let oFrom = oEvent.getParameter("from"),
                    oTo = oEvent.getParameter("to");
                oFrom = Formatter.DateToInt(oFrom);
                oTo = Formatter.DateToInt(oTo);
                if (oFrom && oTo) {
                    this.oFilterBTDateART = new Filter(Constants.filterFields.ART, FilterOperator.BT, oFrom, oTo);
                } else {
                    this.oFilterBTDateART = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterBTDatesSRC: function(oEvent){
                let oFrom = oEvent.getParameter("from"),
                    oTo = oEvent.getParameter("to");
                oFrom = Formatter.DateToInt(oFrom);
                oTo = Formatter.DateToInt(oTo);
                if (oFrom && oTo) {
                    this.oFilterBTDateSRC = new Filter(Constants.filterFields.SRC, FilterOperator.BT, oFrom, oTo);
                } else {
                    this.oFilterBTDateSRC = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterBTDatesLintiGLP: function(oEvent){
                let oFrom = oEvent.getParameter("from"),
                    oTo = oEvent.getParameter("to");
                oFrom = Formatter.DateToInt(oFrom);
                oTo = Formatter.DateToInt(oTo);
                if (oFrom && oTo) {
                    this.oFilterBTDateLintiGLP = new Filter(Constants.filterFields.LintiGLP, FilterOperator.BT, oFrom, oTo);
                } else {
                    this.oFilterBTDateLintiGLP = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterBTDatesLintiLivianos: function(oEvent){
                let oFrom = oEvent.getParameter("from"),
                    oTo = oEvent.getParameter("to");
                oFrom = Formatter.DateToInt(oFrom);
                oTo = Formatter.DateToInt(oTo);
                if (oFrom && oTo) {
                    this.oFilterBTDateLintiLivianos = new Filter(Constants.filterFields.LintiLivianos, FilterOperator.BT, oFrom, oTo);
                } else {
                    this.oFilterBTDateLintiLivianos = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterBTDatesLintiGenerales: function(oEvent){
                let oFrom = oEvent.getParameter("from"),
                    oTo = oEvent.getParameter("to");
                oFrom = Formatter.DateToInt(oFrom);
                oTo = Formatter.DateToInt(oTo);
                if (oFrom && oTo) {
                    this.oFilterBTDateLintiGenerales = new Filter(Constants.filterFields.LintiGenerales, FilterOperator.BT, oFrom, oTo);
                } else {
                    this.oFilterBTDateLintiGenerales = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeLicenseType: function(oEvent){
                this.oFilterLicenseType = Commons.getFilterForMultiComboboxLicType(oEvent, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterFirstName: function(oEvent){
                let sFirstName = oEvent.getParameter("value");
                if (sFirstName) {
                    this.oFilterFirstName = new Filter(Constants.filterFields.firstName, FilterOperator.Contains, sFirstName);
                } else {
                    this.oFilterFirstName = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterLastName: function(oEvent){
                let sLastName = oEvent.getParameter("value");
                if (sLastName) {
                    this.oFilterLastName = new Filter(Constants.filterFields.lastName, FilterOperator.Contains, sLastName);
                } else {
                    this.oFilterLastName = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.DriverTable),
                    this.getFilters(),
                    this
                );
            },
            onDownloadExcelTable: async function(){
                let sMessageBoxType = "warning",
                    oTable = this.byId(Constants.ids.DriverTable),
                    sText = this.getTextFor("msgeWarningBeforeDownload"),
                    oSettings, oSheet,
                    aCols = Commons.columnConfigForExcelDownload(this),
                    aData = oTable.getBinding().aKeys,
                    sFileName = this.getTextFor("excelFileName"),
                    sItem = "/", oItem, aDownloadItems =[];
                MessageBox[sMessageBoxType](sText, {
                        actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                        onClose: function (oAction) {
                            if (oAction != 'NO') {
                                for (let i = 0; i < aData.length; i++) {
                                    sItem = sItem.concat(aData[i]);
                                    oItem = this.oDataModel.getProperty(sItem);
                                    oItem = this.formatter.formatItemForExcelDownload(oItem);
                                    aDownloadItems.push(oItem);
                                    sItem = "/";
                                }
                                oSettings = {
                                    workbook: {
                                        columns: aCols,
                                        context: {
                                            sheetName: this.getTextFor("titleDownloadedExcel")
                                        }
                                    },
                                    dataSource: aDownloadItems,
                                    fileName: sFileName
                                };

                                oSheet = new Spreadsheet(oSettings);
                                oSheet.build()
                                    .then(function () {
                                        MessageToast.show(this.getTextFor("msgeSuccessfullDownload"));
                                    }.bind(this));
                            }
                        }.bind(this)
                    });
            },
            /**
             * Event that fires when an item in the table is pressed
             * @param {*} oEvent 
             */
            onCellClick: function(oEvent){
                let oBindingContext = oEvent.getParameter("rowBindingContext"),
                    sPath = oBindingContext.sPath,
                    oItem = this.getModel(Constants.paths.DRIVERS_PATH).getProperty(oBindingContext.sPath);
                this.getRouter().navTo("driverDetail", { //Para la lista -> En este caso es una concatenación de los campos mestros pero depende de cada caso
                    DriverId: sPath.substring(1)
                }, true);
            },
            /**
             * Event that return the applied filters
             */
            getFilters: function () {
                try {
                    let aFilters = [];
                    if (this.oFilterCarrier) {
                        aFilters.push(this.oFilterCarrier);
                    }
                    if (this.oFilterDriverCode) {
                        aFilters.push(this.oFilterDriverCode);
                    }
                    if (this.oFilterDriverStatus) {
                        aFilters.push(this.oFilterDriverStatus);
                    }
                    if (this.oFilterLicenseType) {
                        aFilters.push(this.oFilterLicenseType);
                    }
                    if(this.oFilterFirstName){
                        aFilters.push(this.oFilterFirstName);
                    }
                    if(this.oFilterLastName){
                        aFilters.push(this.oFilterLastName);
                    }
                    if (this.oFilterBTDateSegVida) {
                        aFilters.push(this.oFilterBTDateSegVida);
                    }
                    if (this.oFilterBTDateART) {
                        aFilters.push(this.oFilterBTDateART);
                    }
                    if (this.oFilterBTDateSRC) {
                        aFilters.push(this.oFilterBTDateSRC);
                    }
                    if (this.oFilterBTDateLintiGLP) {
                        aFilters.push(this.oFilterBTDateLintiGLP);
                    }
                    if (this.oFilterBTDateLintiLivianos) {
                        aFilters.push(this.oFilterBTDateLintiLivianos);
                    }
                    if (this.oFilterBTDateLintiGenerales) {
                        aFilters.push(this.oFilterBTDateLintiGenerales);
                    }
                    return aFilters;
                } catch (oError) {
                    console.log(`${this.getTextFor("errGetFilters")}: ${oError}`);
                }
            },
            onResetFilterBar: function (oEvent) {
                if (!this.oFilterCarrier &&
                    !this.oFilterDriverCode &&
                    !this.oFilterDriverStatus && 
                    !this.oFilterLicenseType &&
                    !this.oFilterFirstName &&
                    !this.oFilterLastName &&
                    !this.oFilterBTDateSegVida &&
                    !this.oFilterBTDateART &&
                    !this.oFilterBTDateSRC &&
                    !this.oFilterBTDateLintiGLP &&
                    !this.oFilterBTDateLintiLivianos &&
                    !this.oFilterBTDateLintiGenerales 
                    ) {
                    MessageToast.show(this.getTextFor('msgeNonFiltersWarning'));
                    return;
                }

                this.byId(Constants.ids.filterBarCarrier).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarDriverCode).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarDriverStatus).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarLicenseType).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarVtoSegVida).setValue(null);
                this.byId(Constants.ids.filterBarVtoART).setValue(null);
                this.byId(Constants.ids.filterBarVtoSRC).setValue(null);
                this.byId(Constants.ids.filterBarVtoLintiGLP).setValue(null);
                this.byId(Constants.ids.filterBarVtoLintiLivianos).setValue(null);
                this.byId(Constants.ids.filterBarVtoLintiGenerales).setValue(null);
                this.byId(Constants.ids.filterBarFirstName).setValue("");
                this.byId(Constants.ids.filterBarLastName).setValue("");

                this.oFilterCarrier = null;
                this.oFilterDriverCode = null;
                this.oFilterDriverStatus = null;
                this.oFilterLicenseType = null;
                this.oFilterFirstName = null;
                this.oFilterLastName = null;
                this.oFilterBTDateSegVida = null;
                this.oFilterBTDateART = null;
                this.oFilterBTDateSRC = null;
                this.oFilterBTDateLintiGLP = null;
                this.oFilterBTDateLintiLivianos = null;
                this.oFilterBTDateLintiGenerales = null;

                Commons.onFilterChange(
                this.byId(Constants.ids.DriverTable),
                this.getFilters(),
                this);
            },
            /**
             * Event that handles the table perso controller dialog opening
             */
            onPersonalizationTableButtonPressed: function(){
                let that = this;
                //this._oTPC.openDialog();
                this.oTablepersoService.openDialog({
                    ok: "this.onPerscoDonePressed.bind(this)"
                });
                setTimeout(function () {
                    that.oTablepersoService._oDialog.attachConfirm(that, that.onPerscoDonePressed.bind(that));
                }, 1000);
            },
            onExitUTPC: function () {
                this.oTablepersoService.destroy();
            },
            /********************************************************************************************
             ************************** Controladores para Gestión de Variantes *************************
            ********************************************************************************************/
            getVariantService: function () {
                // Peronalisation from ushell service to persist the settings
                if (sap.ushell && sap.ushell.Container && sap.ushell.Container.getService) {
                    let oComponent = sap.ui.core.Component.getOwnerComponentFor(this.getView());
                    this.oPersonalizationService = sap.ushell.Container.getService("Personalization");
                    let oPersId = {
                        container: Constants.paths.persoContainer, //any
                        item: Constants.ids.DriverTable                //any- I have used the table name 
                    };
                    // define scope 
                    let oScope = {
                        keyCategory: this.oPersonalizationService.constants.keyCategory.FIXED_KEY,
                        writeFrequency: this.oPersonalizationService.constants.writeFrequency.LOW,
                        clientStorageAllowed: true
                    };
                    // Get a Personalizer
                    let oPersonalizer = this.oPersonalizationService.getPersonalizer(oPersId, oScope, oComponent);
                    this.oPersonalizationService.getContainer(Constants.paths.persoContainer, oScope, oComponent)
                        .fail(function () {
                            MessageToast.show("Error al intentar recuperar servicio de personalización");
                        })
                        .done(function (oContainer) {
                            this.oContainer = oContainer;
                            this.oVariantSetAdapter = new sap.ushell.services.Personalization.VariantSetAdapter(this.oContainer);
                            // get variant set which is stored in backend
                            this.oVariantSet = this.oVariantSetAdapter.getVariantSet(Constants.paths.persoContainer);
                            if (!this.oVariantSet) { //if not in backend, then create one
                                this.oVariantSet = this.oVariantSetAdapter.addVariantSet(Constants.paths.persoContainer);
                            }
                            // array to store the existing variants
                            let Variants = [];
                            // now get the existing variants from the backend to show as list
                            for (let key in this.oVariantSet.getVariantNamesAndKeys()) {
                                if (this.oVariantSet.getVariantNamesAndKeys().hasOwnProperty(key)) {
                                    let oVariantItemObject = {};
                                    oVariantItemObject.Key = this.oVariantSet.getVariantNamesAndKeys()[key];
                                    oVariantItemObject.Name = key;
                                    Variants.push(oVariantItemObject);
                                }
                            }
                            // create JSON model and attach to the variant management UI control
                            if( Variants.length != 0){
                                this.oVariantModel = new JSONModel();
                                this.oVariantModel.oData.Variants = Variants;
                                this.getView().byId(Constants.ids.variantManagment).setModel(this.oVariantModel);
                            } else {
                                Variants = [{
                                    User: "SAP",
                                    Key: "AGASGAGSG",
                                    Name: "Test1234567890",
                                    global: false,
                                    def: false,
                                    lifecyclePackage: "",
                                    lifecycleTransportId: "",
                                    author: "SAP",
                                    sFilterCarrier: "",
                                    sFilterDriverCode: "",
                                    sFilterDriverStatus: "",
                                    sFilterLicenseType: "",
                                    sFilterBTDateSegVidaTo: "",
                                    sFilterBTDateSegVidaFrom: "",
                                    sFilterBTDateVtoARTTo: "",
                                    sFilterBTDateVtoARTFrom: "",
                                    sFilterBTDateVtoSRCTo: "",
                                    sFilterBTDateVtoSRCFrom: "",
                                    sFilterBTDateVtoLintiGLPTo: "",
                                    sFilterBTDateVtoLintiGLPFrom: "",
                                    sFilterBTDateVtoLintiLivianosTo: "",
                                    sFilterBTDateVtoLintiLivianosFrom: "",
                                    sFilterBTDateVtoLintiGeneralesTo: "",
                                    sFilterBTDateVtoLintiGeneralesFrom: "",
                                    sFilterFirstName: "",
                                    sFilterLastName:"",
                                    aConfigFilterBar: [], //[{name: "", visible: bool},{name: "", visible: bool},{name: "", visible: bool}],
                                    oSorter: {},
                                    aColumns: []
                                }];
                                this.oVariantModel = new JSONModel();
                                this.oVariantModel.oData.Variants = Variants;
                                this.getView().byId(Constants.ids.variantManagment).setModel(this.oVariantModel);
                                this.getView().byId(Constants.ids.variantManagment).removeAllVariantItems()
                            }
                        }.bind(this));
                    // Creamos el tablePersoController
                    this.oTablepersoService = new TablePersoController({
                        table: this.byId(Constants.ids.DriverTable),
                        persoService: oPersonalizer
                    });
                }
            },
            onPerscoDonePressed: function (oEvent) {
                this.oTablepersoService.savePersonalizations();
                this.byId(Constants.ids.variantManagment).currentVariantSetModified(true);
            },
            onSaveAsVariant: function (oEvent) {
                let sUser = "",
                    that = this;
                if (sap.ushell && sap.ushell.Container.getService("UserInfo").getId()) {
                    sUser = sap.ushell.Container.getService("UserInfo").getId();
                }
                let VariantParam = oEvent.getParameters(),
                    aColumnsData = [],
                    oCurrentVariant = {
                        User: sUser,
                        Name: oEvent.getParameters().name,
                        Key: oEvent.getParameters().key,
                        global: oEvent.getParameters().global,
                        def: oEvent.getParameters().def,
                        lifecyclePackage: oEvent.getParameters().lifecyclePackage,
                        lifecycleTransportId: oEvent.getParameters().lifecycleTransportId,
                        author: sUser,
                        sFilterCarrier: "",
                        sFilterDriverCode: "",
                        sFilterDriverStatus: "",
                        sFilterLicenseType: "",
                        sFilterBTDateSegVidaTo: "",
                        sFilterBTDateSegVidaFrom: "",
                        sFilterBTDateVtoARTTo: "",
                        sFilterBTDateVtoARTFrom: "",
                        sFilterBTDateVtoSRCTo: "",
                        sFilterBTDateVtoSRCFrom: "",
                        sFilterBTDateVtoLintiGLPTo: "",
                        sFilterBTDateVtoLintiGLPFrom: "",
                        sFilterBTDateVtoLintiLivianosTo: "",
                        sFilterBTDateVtoLintiLivianosFrom: "",
                        sFilterBTDateVtoLintiGeneralesTo: "",
                        sFilterBTDateVtoLintiGeneralesFrom: "",
                        sFilterFirstName: "",
                        sFilterLastName: "",
                        aConfigFilterBar: [], //[{name: "", visible: bool},{name: "", visible: bool},{name: "", visible: bool}],
                        oSorter: {},
                        aColumns: []
                    };
                // Cargamos la configuracion de las columnas 
                this.getView().byId(Constants.ids.DriverTable).getColumns().forEach(function (oColumn, index) {
                    let aColumn = {};
                    aColumn.width = oColumn.getProperty("width");
                    aColumn.fieldName = oColumn.getProperty("name");
                    aColumn.Id = oColumn.getId().split("--").pop();
                    aColumn.index = index;
                    aColumn.Visible = oColumn.getVisible();
                    oCurrentVariant.aColumns.push(aColumn);
                });

                // Cargamos filtros y sorters
                oCurrentVariant.sFilterCarrier = this.byId(Constants.ids.filterBarCarrier).getSelectedKeys();
                oCurrentVariant.sFilterDriverCode = this.byId(Constants.ids.filterBarDriverCode).getSelectedKeys();
                oCurrentVariant.sFilterDriverStatus = this.byId(Constants.ids.filterBarDriverStatus).getSelectedKeys();
                oCurrentVariant.sFilterLicenseType = this.byId(Constants.ids.filterBarLicenseType).getSelectedKeys();
                oCurrentVariant.sFilterFirstName= this.byId(Constants.ids.filterBarFirstName).getValue();
                oCurrentVariant.sFilterLastName= this.byId(Constants.ids.filterBarLastName).getValue();
                if (this.byId(Constants.ids.filterBarVtoSegVida).getDateValue() != null && this.byId(Constants.ids.filterBarVtoSegVida).getSecondDateValue() != null) {
                    oCurrentVariant.sFilterBTDateSegVidaFrom = this.byId(Constants.ids.filterBarVtoSegVida).getDateValue();
                    oCurrentVariant.sFilterBTDateSegVidaTo = this.byId(Constants.ids.filterBarVtoSegVida).getSecondDateValue();
                }
                if (this.byId(Constants.ids.filterBarVtoART).getDateValue() != null && this.byId(Constants.ids.filterBarVtoART).getSecondDateValue() != null) {
                    oCurrentVariant.sFilterBTDateVtoARTFrom = this.byId(Constants.ids.filterBarVtoART).getDateValue();
                    oCurrentVariant.sFilterBTDateVtoARTTo = this.byId(Constants.ids.filterBarVtoART).getSecondDateValue();
                }
                if (this.byId(Constants.ids.filterBarVtoSRC).getDateValue() != null && this.byId(Constants.ids.filterBarVtoSRC).getSecondDateValue() != null) {
                    oCurrentVariant.sFilterBTDateVtoSRCFrom = this.byId(Constants.ids.filterBarVtoSRC).getDateValue();
                    oCurrentVariant.sFilterBTDateVtoSRCTo = this.byId(Constants.ids.filterBarVtoSRC).getSecondDateValue();
                }
                if (this.byId(Constants.ids.filterBarVtoLintiGLP).getDateValue() != null && this.byId(Constants.ids.filterBarVtoLintiGLP).getSecondDateValue() != null) {
                    oCurrentVariant.sFilterBTDateVtoLintiGLPFrom = this.byId(Constants.ids.filterBarVtoLintiGLP).getDateValue();
                    oCurrentVariant.sFilterBTDateVtoLintiGLPTo = this.byId(Constants.ids.filterBarVtoLintiGLP).getSecondDateValue();
                }
                if (this.byId(Constants.ids.filterBarVtoLintiLivianos).getDateValue() != null && this.byId(Constants.ids.filterBarVtoLintiLivianos).getSecondDateValue() != null) {
                    oCurrentVariant.sFilterBTDateVtoLintiLivianosFrom = this.byId(Constants.ids.filterBarVtoLintiLivianos).getDateValue();
                    oCurrentVariant.sFilterBTDateVtoLintiLivianosTo = this.byId(Constants.ids.filterBarVtoLintiLivianos).getSecondDateValue();
                }
                if (this.byId(Constants.ids.filterBarVtoLintiGenerales).getDateValue() != null && this.byId(Constants.ids.filterBarVtoLintiGenerales).getSecondDateValue() != null) {
                    oCurrentVariant.sFilterBTDateVtoLintiGeneralesFrom = this.byId(Constants.ids.filterBarVtoLintiGenerales).getDateValue();
                    oCurrentVariant.sFilterBTDateVtoLintiGeneralesTo = this.byId(Constants.ids.filterBarVtoLintiGenerales).getSecondDateValue();
                }
                oCurrentVariant.oSorter = this.currentSorter;

                // Cargamos la configuración de visibilidad de filtros
                let aFilterBarItems = this.byId(Constants.ids.filterbar).getAllFilterItems();
                for (const item of aFilterBarItems) {
                    oCurrentVariant.aConfigFilterBar.push({ name: item.getName(), isVisible: item.getVisibleInFilterBar() });
                }
                if (!VariantParam.overwrite) {
                    this.oVariant = this.oVariantSet.addVariant(VariantParam.name);
                } else {
                    this.oVariant = this.oVariantSet.getVariant(VariantParam.key);
                }
                if (this.oVariant) {
                    this.oVariant.setItemValue("VariantValues", JSON.stringify(oCurrentVariant));
                    if (VariantParam.def === true) {
                        this.oVariantSet.setCurrentVariantKey(this.oVariant.getVariantKey());
                    }
                    this.oContainer.save()
                        .fail(function () {
                            MessageToast.show("Error al registrar una nueva variante.");
                        })
                        .done(function () {
                            MessageToast.show("Se ha registrado una nueva variante correctamente.");
                            that.byId("variantManagement").currentVariantSetModified(false);
                        });
                }
            },
            onSelectVariant: function (oEvent) {
                var selectedKey = oEvent.getParameters().key;
                for (var i = 0; i < oEvent.getSource().getVariantItems().length; i++) {
                    if (oEvent.getSource().getVariantItems()[i].getProperty("key") === selectedKey) {
                        var selectedVariant = oEvent.getSource().getVariantItems()[i].getProperty("text");
                        break;
                    }
                }
                this._setSelectedVariantToTable(selectedVariant);
            },
            _setSelectedVariantToTable: function (oSelectedVariant) {
                let that = this;
                let currentFilterItems = this.byId(Constants.ids.filterbar).getAllFilterItems();
                if (oSelectedVariant) {
                    var sVariant = this.oVariantSet.getVariant(this.oVariantSet.getVariantKeyByName(oSelectedVariant));
                    var oDataVariant = JSON.parse(sVariant.getItemValue("VariantValues"));

                    // Primero escondemos todas las columnas
                    this.getView().byId(Constants.ids.DriverTable).getColumns().forEach(function (oColumn) {
                        oColumn.setVisible(false);
                    });
                    if (oDataVariant) {
                        for (const column of oDataVariant.aColumns) {
                            this.getView().byId(column.Id).setVisible(column.Visible);
                            this.getView().byId(column.Id).setProperty("width", column.width);
                        }
                        // Aplicamos los filtros y sorters que vienen del oVariant
                        this.setSelectedKeysOfAllFilters(oDataVariant);
                        this.currentSorter = oDataVariant.oSorter;

                        // Establecemos la configuración guardada de la barra de filtros
                        for (const config of oDataVariant.aConfigFilterBar) {
                            let index = currentFilterItems.findIndex(element => element.getName() === config.name);
                            if (index !== -1) {
                                this.byId(Constants.ids.filterbar).getAllFilterItems()[index].setVisibleInFilterBar(config.isVisible);
                            }
                        }

                        // Disparamos los eventos correspondientes
                        this.fireSelectionChangeOfAllFilters(oDataVariant.sFilterBTDateSegVidaFrom, oDataVariant.sFilterBTDateSegVidaTo,
                            oDataVariant.sFilterBTDateVtoARTFrom, oDataVariant.sFilterBTDateVtoARTTo,
                            oDataVariant.sFilterBTDateVtoSRCFrom, oDataVariant.sFilterBTDateVtoSRCTo,
                            oDataVariant.sFilterBTDateVtoLintiGLPFrom, oDataVariant.sFilterBTDateVtoLintiGLPTo,
                            oDataVariant.sFilterBTDateVtoLintiLivianosFrom, oDataVariant.sFilterBTDateVtoLintiLivianosTo,
                            oDataVariant.sFilterBTDateVtoLintiGeneralesFrom, oDataVariant.sFilterBTDateVtoLintiGeneralesTo);

                        this.currentSorter = oDataVariant.oSorter;
                        Commons.onSortChange(this.byId(Constants.ids.DriverTable), this.currentSorter,this);
                    }
                }
                // null significa que se selecionó la variante Estándar (o una variante no disponible), 
                // entonces establecemos la configuración estandar
                else {
                    this.setDefaultConfigOnFilterBar(currentFilterItems);
                    this.getView().byId(Constants.ids.DriverTable).getColumns().forEach(function (oColumn) {
                        oColumn.setVisible(true);
                    });
                    this.setSelectedKeysToNullOfAllFilters();
                    this.fireSelectionChangeOfAllFilters(null, null, null, null, null, null, null, null, null, null, null, null);
                    this.currentSorter = {};
                    Commons.onSortChange(this.byId(Constants.ids.DriverTable), this.currentSorter,this);
                }
                this.byId(Constants.ids.variantManagment).currentVariantSetModified(false);
            },
            onManageVariant: function (oEvent) {
                var aParameters = oEvent.getParameters();
                // Renombrar variantes
                if (aParameters.renamed.length > 0) {
                    aParameters.renamed.forEach(function (aRenamed) {
                        var sVariant = this.oVariantSet.getVariant(aRenamed.key),
                            sItemValue = sVariant.getItemValue("VariantValues");
                        // delete the variant 
                        this.oVariantSet.delVariant(aRenamed.key);
                        // after delete, add a new variant
                        var oNewVariant = this.oVariantSet.addVariant(aRenamed.name);
                        oNewVariant.setItemValue("VariantValues", sItemValue);
                    }.bind(this));
                }
                // Cambio a variante estandar
                if (aParameters.def !== "*standard*") {
                    this.oVariantSet.setCurrentVariantKey(aParameters.def);
                } else {
                    this.oVariantSet.setCurrentVariantKey(null);
                }
                // Borrar variantes
                if (aParameters.deleted.length > 0) {
                    aParameters.deleted.forEach(function (aDelete) {
                        this.oVariantSet.delVariant(aDelete);
                    }.bind(this));
                }
                // Guardar el contenedor de variantes
                this.oContainer.save().done(function () {
                    MessageToast.show("Los datos de la variante se han guardado correctamente.");
                });
            },
            setDefaultConfigOnFilterBar: function (currentFilterItems) {
                let aDefaultConfigInFilterBar = [
                    { name: 'LicenseType', isVisible: true },
                    { name: 'DriverStatus', isVisible: true },
                    { name: 'DriverCode', isVisible: true },
                    { name: 'Carrier', isVisible: true },
                    { name: 'FirstName', isVisible: true},
                    { name: 'VencimientoSegVida', isVisible: true},
                    { name: 'FechaVencimientoART', isVisible: true},
                    { name: 'VencimientoSRC', isVisible: true},
                    { name: 'VencimientoLintiGLP', isVisible: true},
                    { name: 'VencimientoLintiLivianos', isVisible: true},
                    { name: 'VencimientoLintiGenerales', isVisible: true}
                ];

                for (const config of aDefaultConfigInFilterBar) {
                    let index = currentFilterItems.findIndex(element => element.getName() === config.name);
                    if (index !== -1) {
                        this.byId(Constants.ids.filterbar).getAllFilterItems()[index].setVisibleInFilterBar(config.isVisible);
                    }
                }
            },
            setSelectedKeysOfAllFilters: function (oDataVariant) {
                this.byId(Constants.ids.filterBarCarrier).setSelectedKeys(oDataVariant.sFilterCarrier);
                this.byId(Constants.ids.filterBarDriverCode).setSelectedKeys(oDataVariant.sFilterDriverCode);
                this.byId(Constants.ids.filterBarDriverStatus).setSelectedKeys(oDataVariant.sFilterDriverStatus);
                this.byId(Constants.ids.filterBarLicenseType).setSelectedKeys(oDataVariant.sFilterLicenseType);
                this.byId(Constants.ids.filterBarFirstName).setValue(oDataVariant.sFilterFirstName);
                this.byId(Constants.ids.filterBarLastName).setValue(oDataVariant.sFilterLastName);
                if ( oDataVariant.sFilterBTDateSegVidaFrom != "" && oDataVariant.sFilterBTDateSegVidaTo != "" && oDataVariant.sFilterBTDateSegVidaFrom != null && oDataVariant.sFilterBTDateSegVidaTo != null) {
                    this.byId(Constants.ids.filterBarVtoSegVida).setDateValue(new Date(oDataVariant.sFilterBTDateSegVidaFrom));
                    this.byId(Constants.ids.filterBarVtoSegVida).setSecondDateValue(new Date(oDataVariant.sFilterBTDateSegVidaTo));
                } else{
                    this.byId(Constants.ids.filterBarVtoSegVida).setDateValue(null);
                    this.byId(Constants.ids.filterBarVtoSegVida).setSecondDateValue(null);
                    this.byId(Constants.ids.filterBarVtoSegVida).setValue(null);
                }
                if (oDataVariant.sFilterBTDateVtoARTFrom != "" && oDataVariant.sFilterBTDateVtoARTTo != "" && oDataVariant.sFilterBTDateVtoARTFrom != null && oDataVariant.sFilterBTDateVtoARTTo != null) {
                    this.byId(Constants.ids.filterBarVtoART).setDateValue(new Date(oDataVariant.sFilterBTDateVtoARTFrom));
                    this.byId(Constants.ids.filterBarVtoART).setSecondDateValue(new Date(oDataVariant.sFilterBTDateVtoARTTo));
                } else{
                    this.byId(Constants.ids.filterBarVtoART).setDateValue(null);
                    this.byId(Constants.ids.filterBarVtoART).setSecondDateValue(null);
                    this.byId(Constants.ids.filterBarVtoART).setValue(null);

                }
                if ( oDataVariant.sFilterBTDateVtoSRCFrom != "" && oDataVariant.sFilterBTDateVtoSRCTo != "" && oDataVariant.sFilterBTDateVtoSRCFrom != null && oDataVariant.sFilterBTDateVtoSRCTo != null) {
                    this.byId(Constants.ids.filterBarVtoSRC).setDateValue(new Date(oDataVariant.sFilterBTDateVtoSRCFrom));
                    this.byId(Constants.ids.filterBarVtoSRC).setSecondDateValue(new Date(oDataVariant.sFilterBTDateVtoSRCTo));
                } else{
                    this.byId(Constants.ids.filterBarVtoSRC).setDateValue(null);
                    this.byId(Constants.ids.filterBarVtoSRC).setSecondDateValue(null);
                    this.byId(Constants.ids.filterBarVtoSRC).setValue(null);

                }
                if (oDataVariant.sFilterBTDateVtoLintiGLPFrom != "" && oDataVariant.sFilterBTDateVtoLintiGLPTo != "" && oDataVariant.sFilterBTDateVtoLintiGLPFrom != null && oDataVariant.sFilterBTDateVtoLintiGLPTo != null) {
                    this.byId(Constants.ids.filterBarVtoLintiGLP).setDateValue(new Date(oDataVariant.sFilterBTDateVtoLintiGLPFrom));
                    this.byId(Constants.ids.filterBarVtoLintiGLP).setSecondDateValue(new Date(oDataVariant.sFilterBTDateVtoLintiGLPTo));
                } else{
                    this.byId(Constants.ids.filterBarVtoLintiGLP).setDateValue(null);
                    this.byId(Constants.ids.filterBarVtoLintiGLP).setSecondDateValue(null);
                    this.byId(Constants.ids.filterBarVtoLintiGLP).setValue(null);

                }
                if (oDataVariant.sFilterBTDateVtoLintiLivianosFrom != "" && oDataVariant.sFilterBTDateVtoLintiLivianosTo != "" && oDataVariant.sFilterBTDateVtoLintiLivianosFrom != null && oDataVariant.sFilterBTDateVtoLintiLivianosTo != null) {
                    this.byId(Constants.ids.filterBarVtoLintiLivianos).setDateValue(new Date(oDataVariant.sFilterBTDateVtoLintiLivianosFrom));
                    this.byId(Constants.ids.filterBarVtoLintiLivianos).setSecondDateValue(new Date(oDataVariant.sFilterBTDateVtoLintiLivianosTo));
                } else{
                    this.byId(Constants.ids.filterBarVtoLintiLivianos).setDateValue(null);
                    this.byId(Constants.ids.filterBarVtoLintiLivianos).setSecondDateValue(null);
                    this.byId(Constants.ids.filterBarVtoLintiLivianos).setValue(null);
                }
                if (oDataVariant.sFilterBTDateVtoLintiGeneralesFrom != "" && oDataVariant.sFilterBTDateVtoLintiGeneralesTo != "" && oDataVariant.sFilterBTDateVtoLintiGeneralesFrom != null && oDataVariant.sFilterBTDateVtoLintiGeneralesTo != null) {
                    this.byId(Constants.ids.filterBarVtoLintiGenerales).setDateValue(new Date(oDataVariant.sFilterBTDateVtoLintiGeneralesFrom));
                    this.byId(Constants.ids.filterBarVtoLintiGenerales).setSecondDateValue(new Date(oDataVariant.sFilterBTDateVtoLintiGeneralesTo));
                } else{
                    this.byId(Constants.ids.filterBarVtoLintiGenerales).setDateValue(null);
                    this.byId(Constants.ids.filterBarVtoLintiGenerales).setSecondDateValue(null);
                    this.byId(Constants.ids.filterBarVtoLintiGenerales).setValue(null);
                }
            },
            setSelectedKeysToNullOfAllFilters: function () {
                this.byId(Constants.ids.filterBarCarrier).setSelectedKeys(null);
                this.byId(Constants.ids.filterBarDriverCode).setSelectedKeys(null);
                this.byId(Constants.ids.filterBarDriverStatus).setSelectedKeys(null);
                this.byId(Constants.ids.filterBarLicenseType).setSelectedKeys(null);
                this.byId(Constants.ids.filterBarVtoSegVida).setDateValue(null);
                this.byId(Constants.ids.filterBarVtoART).setDateValue(null);
                this.byId(Constants.ids.filterBarVtoSRC).setDateValue(null);
                this.byId(Constants.ids.filterBarVtoLintiGLP).setDateValue(null);
                this.byId(Constants.ids.filterBarVtoLintiLivianos).setDateValue(null);
                this.byId(Constants.ids.filterBarVtoLintiGenerales).setDateValue(null);
                this.byId(Constants.ids.filterBarFirstName).setValue("");
                this.byId(Constants.ids.filterBarLastName).setValue("");
            },
            fireSelectionChangeOfAllFilters: function (filterBarVtoSegVidaFrom, filterBarVtoSegVidaTo, filterBarVtoARTFrom, filterBarVtoARTTo,
                filterBarVtoSRCFrom, filterBarVtoSRCTo, filterBarVtoLintiGLPFrom, filterBarVtoLintiGLPTo, filterBarVtoLintiLivianosFrom, filterBarVtoLintiLivianosTo,
                filterBarVtoLintiGeneralesFrom, filterBarVtoLintiGeneralesTo) {
                this.byId(Constants.ids.filterBarCarrier).fireSelectionChange();
                this.byId(Constants.ids.filterBarDriverCode).fireSelectionChange();
                this.byId(Constants.ids.filterBarDriverStatus).fireSelectionChange();
                this.byId(Constants.ids.filterBarLicenseType).fireSelectionChange();
                if(filterBarVtoSegVidaFrom != "" && filterBarVtoSegVidaTo != "" && filterBarVtoSegVidaFrom != null && filterBarVtoSegVidaTo != null){
                    this.byId(Constants.ids.filterBarVtoSegVida).fireChange({
                        from: new Date(filterBarVtoSegVidaFrom),
                        to: new Date(filterBarVtoSegVidaTo)
                    });
                } else{
                    this.byId(Constants.ids.filterBarVtoSegVida).fireChange({
                        from: null,
                        to: null
                    });
                }
                if(filterBarVtoARTFrom != "" && filterBarVtoARTTo != "" && filterBarVtoARTFrom != null && filterBarVtoARTTo != null){
                    this.byId(Constants.ids.filterBarVtoART).fireChange({
                        from: new Date(filterBarVtoARTFrom),
                        to: new Date(filterBarVtoARTTo)
                    });
                } else{
                    this.byId(Constants.ids.filterBarVtoART).fireChange({
                        from: null,
                        to: null
                    });
                }
                if(filterBarVtoSRCFrom != "" && filterBarVtoSRCTo != "" && filterBarVtoSRCFrom != null && filterBarVtoSRCTo != null){
                    this.byId(Constants.ids.filterBarVtoSRC).fireChange({
                        from: new Date(filterBarVtoSRCFrom),
                        to: new Date(filterBarVtoSRCTo)
                    });
                } else{
                    this.byId(Constants.ids.filterBarVtoSRC).fireChange({
                        from: null,
                        to: null
                    });
                }
                if(filterBarVtoLintiGLPFrom != "" && filterBarVtoLintiGLPTo != "" && filterBarVtoLintiGLPFrom != null && filterBarVtoLintiGLPTo != null){
                    this.byId(Constants.ids.filterBarVtoLintiGLP).fireChange({
                        from: new Date(filterBarVtoLintiGLPFrom),
                        to: new Date(filterBarVtoLintiGLPTo)
                    });
                } else{
                    this.byId(Constants.ids.filterBarVtoLintiGLP).fireChange({
                        from: null,
                        to: null
                    });
                }
                if(filterBarVtoLintiLivianosFrom != "" && filterBarVtoLintiLivianosTo != "" && filterBarVtoLintiLivianosFrom != null && filterBarVtoLintiLivianosTo != null){
                    this.byId(Constants.ids.filterBarVtoLintiLivianos).fireChange({
                        from: new Date(filterBarVtoLintiLivianosFrom),
                        to: new Date(filterBarVtoLintiLivianosTo)
                    });
                } else{
                    this.byId(Constants.ids.filterBarVtoLintiLivianos).fireChange({
                        from: null,
                        to: null
                    });
                }
                if(filterBarVtoLintiGeneralesFrom != "" && filterBarVtoLintiGeneralesTo != "" && filterBarVtoLintiGeneralesFrom != null && filterBarVtoLintiGeneralesTo != null){
                    this.byId(Constants.ids.filterBarVtoLintiGenerales).fireChange({
                        from: new Date(filterBarVtoLintiGeneralesFrom),
                        to: new Date(filterBarVtoLintiGeneralesTo)
                    });
                } else{
                    this.byId(Constants.ids.filterBarVtoLintiGenerales).fireChange({
                        from: null,
                        to: null
                    });
                }

                // this.byId(Constants.ids.filterBarFirstName).fireChange();
                this.byId(Constants.ids.filterBarFirstName).fireLiveChange({
                    value: this.byId(Constants.ids.filterBarFirstName).getValue()
                });
                // this.byId(Constants.ids.filterBarLastName).fireChange();
                this.byId(Constants.ids.filterBarLastName).fireLiveChange({
                    value: this.byId(Constants.ids.filterBarLastName).getValue()
                });
            }
		});
	});
