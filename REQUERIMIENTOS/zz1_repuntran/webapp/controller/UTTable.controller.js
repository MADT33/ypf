sap.ui.define([
    "ypf/zlog66freeld4/controller/BaseController",
    "ypf/zlog66freeld4/util/Constants",
    "ypf/zlog66freeld4/util/Formatter",
    "ypf/zlog66freeld4/util/Commons",
    "ypf/zlog66freeld4/util/Services",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/table/TablePersoController",
    "sap/ui/model/Sorter",
    "sap/m/MessageBox",
    "sap/ui/export/Spreadsheet",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, Constants, Formatter, Commons, Services, JSONModel, MessageToast, Filter, FilterOperator, TablePersoController,
        Sorter, MessageBox, Spreadsheet) {
		"use strict";

		return Controller.extend("ypf.zlog66freeld4.controller.UTTable", {
			onInit: function () {
                this._mViewSettingsDialogs = {};
                this.oDataModel = this.getOwnerComponent().getModel(Constants.paths.UTS_PATH);
                this.oDataModel.refresh();
                this.getVariantService();
            },
            onTabBarSelect: function(oEvent){
                let oTable = this.getView().byId(Constants.ids.UTTable),
                    aColumns = oTable.getColumns(),
                    sSelectedKey = oEvent.getParameters().key,
                    aTableConfigIndices;
                switch (sSelectedKey) {
                    case "G":
                        aTableConfigIndices = Constants.TableConfig.general;
                        for( let oColumn of aColumns){
                            let indexMatches = aTableConfigIndices.indexOf(oColumn.getId().split("--").pop());
                            if(indexMatches != -1){
                                oColumn.setVisible(true);
                            } else{
                                oColumn.setVisible(false);
                            }
                        }
                        break;
                    case "C":
                        aTableConfigIndices = Constants.TableConfig.compartimentos;
                        for( let oColumn of aColumns){
                            let indexMatches = aTableConfigIndices.indexOf(oColumn.getId().split("--").pop());
                            if(indexMatches != -1){
                                oColumn.setVisible(true);
                            } else{
                                oColumn.setVisible(false);
                            }
                        }
                        break;
                    case "S":
                        aTableConfigIndices = Constants.TableConfig.seguros;
                        for( let oColumn of aColumns){
                            let indexMatches = aTableConfigIndices.indexOf(oColumn.getId().split("--").pop());
                            if(indexMatches != -1){
                                oColumn.setVisible(true);
                            } else{
                                oColumn.setVisible(false);
                            }
                        }
                        break;
                    case "A":
                        aTableConfigIndices = Constants.TableConfig.atributos;
                        for( let oColumn of aColumns){
                            let indexMatches = aTableConfigIndices.indexOf(oColumn.getId().split("--").pop());
                            if(indexMatches != -1){
                                oColumn.setVisible(true);
                            } else{
                                oColumn.setVisible(false);
                            }
                        }
                        break;
                    case "H":
                        aTableConfigIndices = Constants.TableConfig.habilitaciones;
                        for( let oColumn of aColumns){
                            let indexMatches = aTableConfigIndices.indexOf(oColumn.getId().split("--").pop());
                            if(indexMatches != -1){
                                oColumn.setVisible(true);
                            } else{
                                oColumn.setVisible(false);
                            }
                        }
                        break;
                    default:
                        for( let oColumn of aColumns){
                            oColumn.setVisible(true);
                        }
                        break;
                    }
                
            },
            onSortOpen: function () {
                let that = this;
                Commons.getViewSettingsDialog(
                    "ypf.zlog66freeld4.view.fragment.SortDialog",
                    this._mViewSettingsDialogs,
                    this)
                    .then(function (oViewSettingsDialog) {
                        that.getView().addDependent(oViewSettingsDialog);
                        oViewSettingsDialog.open();
                    });
            },
            onSortUtTableConfirm: function (oEvent) {
                let sPath = oEvent.getParameters().sortItem.getKey(),
                    bDescending = oEvent.getParameters().sortDescending;
                this.currentSorter = new Sorter(sPath,bDescending);
                Commons.onSortChange(this.byId(Constants.ids.UTTable), this.currentSorter,this);
            },
            onSelectChangeCarrier: function(oEvent){
                this.oFilterCarrier = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.carrier, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeTUNumber: function(oEvent){
                this.oFilterTuNumber = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.tuNumber, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeTuStatus: function(oEvent){
                this.oFilterTuStatus = Commons.getFilterForMultiComboboxStatus(oEvent, Constants.filterFields.tuStatus, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeTuType: function(oEvent){
                this.oFilterTuType = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.tuType, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeSegCent: function(oEvent){
                this.oFilterSegCent = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.segCent, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeGroup: function(oEvent){
                this.oFilterGroup = Commons.getFilterForMultiComboboxGroup(oEvent, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeOpCif: function(oEvent){
                this.oFilterOpCif = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.opCif, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeEuro5: function(oEvent){
                this.oFilterEuro5 = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.euro5, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeEscal: function(oEvent){
                this.oFilterEscal = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.escal, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeProdType: function(oEvent){
                this.oFilterProdType = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.prodType, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onSelectChangeUsrAbm: function(oEvent){
                this.oFilterUsrAbm = Commons.getFilterForMultiCombobox(oEvent, Constants.filterFields.usrAbm, FilterOperator.EQ);
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterBTDatesVtoMas: function(oEvent){
                let oFrom = oEvent.getParameter("from"),
                    oTo = oEvent.getParameter("to");
                oFrom = Formatter.DateToInt(oFrom);
                oTo = Formatter.DateToInt(oTo);
                if (oFrom && oTo) {
                    this.oFilterBTDateVtoMas = new Filter(Constants.filterFields.vtoMas, FilterOperator.BT, oFrom, oTo);
                } else {
                    this.oFilterBTDateVtoMas = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterBTDatesVtoItc1: function(oEvent){
                let oFrom = oEvent.getParameter("from"),
                    oTo = oEvent.getParameter("to");
                oFrom = Formatter.DateToInt(oFrom);
                oTo = Formatter.DateToInt(oTo);
                if (oFrom && oTo) {
                    this.oFilterBTDateVtoItc1 = new Filter(Constants.filterFields.vtoItcRg20801, FilterOperator.BT, oFrom, oTo);
                } else {
                    this.oFilterBTDateVtoItc1 = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterBTDatesVtoItc2: function(oEvent){
                let oFrom = oEvent.getParameter("from"),
                    oTo = oEvent.getParameter("to");
                oFrom = Formatter.DateToInt(oFrom);
                oTo = Formatter.DateToInt(oTo);
                if (oFrom && oTo) {
                    this.oFilterBTDateVtoItc2 = new Filter(Constants.filterFields.vtoItcRg20802, FilterOperator.BT, oFrom, oTo);
                } else {
                    this.oFilterBTDateVtoItc2 = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
            },
            onFilterBTDatesVtoItc3: function(oEvent){
                let oFrom = oEvent.getParameter("from"),
                    oTo = oEvent.getParameter("to");
                oFrom = Formatter.DateToInt(oFrom);
                oTo = Formatter.DateToInt(oTo);
                if (oFrom && oTo) {
                    this.oFilterBTDateVtoItc3 = new Filter(Constants.filterFields.vtoItcRg20803, FilterOperator.BT, oFrom, oTo);
                } else {
                    this.oFilterBTDateVtoItc3 = null;
                }
                Commons.onFilterChange(
                    this.byId(Constants.ids.UTTable),
                    this.getFilters(),
                    this
                );
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
                    if (this.oFilterTuNumber) {
                        aFilters.push(this.oFilterTuNumber);
                    }
                    if (this.oFilterTuStatus) {
                        aFilters.push(this.oFilterTuStatus);
                    }
                    if (this.oFilterTuType) {
                        aFilters.push(this.oFilterTuType);
                    }
                    if(this.oFilterGroup){
                        aFilters.push(this.oFilterGroup);
                    }
                    if (this.oFilterSegCent) {
                        aFilters.push(this.oFilterSegCent);
                    }
                    if (this.oFilterOpCif) {
                        aFilters.push(this.oFilterOpCif);
                    }
                    if (this.oFilterEuro5) {
                        aFilters.push(this.oFilterEuro5);
                    }
                    if (this.oFilterEscal) {
                        aFilters.push(this.oFilterEscal);
                    }
                    if (this.oFilterBTDateVtoMas) {
                        aFilters.push(this.oFilterBTDateVtoMas);
                    }
                    if (this.oFilterBTDateVtoItc1) {
                        aFilters.push(this.oFilterBTDateVtoItc1);
                    }
                    if (this.oFilterBTDateVtoItc2) {
                        aFilters.push(this.oFilterBTDateVtoItc2);
                    }
                    if (this.oFilterBTDateVtoItc3) {
                        aFilters.push(this.oFilterBTDateVtoItc3);
                    }
                    return aFilters;
                } catch (oError) {
                    console.log(`${this.getTextFor("errGetFilters")}: ${oError}`);
                }
            },
            onResetFilterBar: function (oEvent) {
                if (!this.oFilterCarrier &&
                    !this.oFilterTuNumber &&
                    !this.oFilterTuStatus &&
                    !this.oFilterTuType &&
                    !this.oFilterSegCent &&
                    !this.oFilterGroup &&
                    !this.oFilterOpCif &&
                    !this.oFilterEuro5 &&
                    !this.oFilterEscal &&
                    !this.oFilterBTDateVtoMas &&
                    !this.oFilterBTDateVtoItc1 &&
                    !this.oFilterBTDateVtoItc2 &&
                    !this.oFilterBTDateVtoItc3
                    ) {
                    MessageToast.show(this.getTextFor('msgeNonFiltersWarning'));
                    return;
                }

                this.byId(Constants.ids.filterBarCarrier).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarTuNumber).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarTuStatus).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarTutype).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarGroupName).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarSegCent).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarOpCif).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarEuro5).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarEscal).setSelectedKeys([]);
                this.byId(Constants.ids.filterBarBTDateVtoMas).setValue(null);
                this.byId(Constants.ids.filterBarBTDateVtoItc1).setValue(null);
                this.byId(Constants.ids.filterBarBTDateVtoItc2).setValue(null);
                this.byId(Constants.ids.filterBarBTDateVtoItc3).setValue(null);

                this.oFilterCarrier = null;
                this.oFilterTuNumber = null;
                this.oFilterTuStatus = null;
                this.oFilterTuType = null;
                this.oFilterSegCent = null;
                this.oFilterGroup = null;
                this.oFilterOpCif = null;
                this.oFilterEuro5 = null;
                this.oFilterEscal = null;
                this.oFilterBTDateVtoMas = null;
                this.oFilterBTDateVtoItc1 = null;
                this.oFilterBTDateVtoItc2 = null;
                this.oFilterBTDateVtoItc3 = null;

                Commons.onFilterChange(
                this.byId(Constants.ids.UTTable),
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
            /**
             * Event that fires when an item in the table is pressed
             * @param {*} oEvent
             */
            onCellClick: function(oEvent){
                let oBindingContext = oEvent.getParameter("rowBindingContext"),
                    sPath = oBindingContext.sPath,
                    oItem = this.getModel(Constants.paths.UTS_PATH).getProperty(oBindingContext.sPath);
                    this.getRouter().navTo("uTDetail", { //Para la lista -> En este caso es una concatenación de los campos mestros pero depende de cada caso
                        UTId: sPath.substring(1)
                    }, true);
            },
            /**
             * Event for handling the filters confirm button
             */
            handleFacetFilterConfirm: function(oEvent){
                try{
                    let oFacetFilter = oEvent.getSource();
                    this.oFacetFilter = Commons.getFacetFilterModel(oFacetFilter, this);
                    Commons.onFilterChange(this.byId(Constants.ids.UTTable), this.getFilters(), this);
                } catch (oError){
                    console.log(oError);
                }
            },
             /**
             * Event for handling the filters reset button
             */
            handleFacetFilterReset: function (oEvent) {
                try {
                    let aFacetFilterLists = oEvent.getSource().getLists();
                    for (var i = 0; i < aFacetFilterLists.length; i++) {
                        aFacetFilterLists[i].setSelectedKeys();
                    }
                    this.oFacetFilter = null;
                    Commons.onFilterChange(this.byId(Constants.ids.UTTable), this.getFilters(), this);
                } catch (oError) {
                    console.log(`${this.getTextFor("errconfirmFacetFilterReset")}: ${oError}`);
                }
            },
            onDownloadExcelTable: function(){
                let sMessageBoxType = "warning",
                oTable = this.byId(Constants.ids.UTTable),
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
                                        sheetName: sFileName
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
                    item: Constants.ids.UTTable                //any- I have used the table name 
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
                                sFilterTUNumber: "",
                                sFilterTUStatus: "",
                                sFilterTUtype: "",
                                sFilterSegCent: "",
                                sFilterGroup: "",
                                sFilterOpCif: "",
                                sFilterEuro5: "",
                                sFilterEscal: "",
                                sFilterBTDateVtoMasTo: "",
                                sFilterBTDateVtoMasFrom: "",
                                sFilterBTDateVtoItc1To: "",
                                sFilterBTDateVtoItc1From: "",
                                sFilterBTDateVtoItc2To: "",
                                sFilterBTDateVtoItc2From: "",
                                sFilterBTDateVtoItc3To: "",
                                sFilterBTDateVtoItc3From: "",
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
                    table: this.byId(Constants.ids.UTTable),
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
                    sFilterTUNumber: "",
                    sFilterTUStatus: "",
                    sFilterTUtype: "",
                    sFilterSegCent: "",
                    sFilterGroup: "",
                    sFilterOpCif: "",
                    sFilterEuro5: "",
                    sFilterEscal: "",
                    sFilterBTDateVtoMasTo: "",
                    sFilterBTDateVtoMasFrom: "",
                    sFilterBTDateVtoItc1To: "",
                    sFilterBTDateVtoItc1From: "",
                    sFilterBTDateVtoItc2To: "",
                    sFilterBTDateVtoItc2From: "",
                    sFilterBTDateVtoItc3To: "",
                    sFilterBTDateVtoItc3From: "",
                    aConfigFilterBar: [], //[{name: "", visible: bool},{name: "", visible: bool},{name: "", visible: bool}],
                    oSorter: {},
                    aColumns: []
                };
            // Cargamos la configuracion de las columnas 
            this.getView().byId(Constants.ids.UTTable).getColumns().forEach(function (oColumn, index) {
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
            oCurrentVariant.sFilterTUNumber = this.byId(Constants.ids.filterBarTuNumber).getSelectedKeys();
            oCurrentVariant.sFilterTUStatus = this.byId(Constants.ids.filterBarTuStatus).getSelectedKeys();
            oCurrentVariant.sFilterTUtype = this.byId(Constants.ids.filterBarTutype).getSelectedKeys();
            oCurrentVariant.sFilterSegCent = this.byId(Constants.ids.filterBarSegCent).getSelectedKeys();
            oCurrentVariant.sFilterGroup = this.byId(Constants.ids.filterBarGroupName).getSelectedKeys();
            oCurrentVariant.sFilterOpCif = this.byId(Constants.ids.filterBarOpCif).getSelectedKeys();
            oCurrentVariant.sFilterEuro5 = this.byId(Constants.ids.filterBarEuro5).getSelectedKeys();
            oCurrentVariant.sFilterEscal = this.byId(Constants.ids.filterBarEscal).getSelectedKeys();
            if (this.byId(Constants.ids.filterBarBTDateVtoMas).getDateValue() != null && this.byId(Constants.ids.filterBarBTDateVtoMas).getSecondDateValue() != null) {
                oCurrentVariant.sFilterBTDateVtoMasFrom = this.byId(Constants.ids.filterBarBTDateVtoMas).getDateValue();
                oCurrentVariant.sFilterBTDateVtoMasTo = this.byId(Constants.ids.filterBarBTDateVtoMas).getSecondDateValue();
            }
            if (this.byId(Constants.ids.filterBarBTDateVtoItc1).getDateValue() != null && this.byId(Constants.ids.filterBarBTDateVtoItc1).getSecondDateValue() != null) {
                oCurrentVariant.sFilterBTDateVtoItc1From = this.byId(Constants.ids.filterBarBTDateVtoItc1).getDateValue();
                oCurrentVariant.sFilterBTDateVtoItc1To = this.byId(Constants.ids.filterBarBTDateVtoItc1).getSecondDateValue();
            }
            if (this.byId(Constants.ids.filterBarBTDateVtoItc2).getDateValue() != null && this.byId(Constants.ids.filterBarBTDateVtoItc2).getSecondDateValue() != null) {
                oCurrentVariant.sFilterBTDateVtoItc2From = this.byId(Constants.ids.filterBarBTDateVtoItc2).getDateValue();
                oCurrentVariant.sFilterBTDateVtoItc2To = this.byId(Constants.ids.filterBarBTDateVtoItc2).getSecondDateValue();
            }
            if (this.byId(Constants.ids.filterBarBTDateVtoItc3).getDateValue() != null && this.byId(Constants.ids.filterBarBTDateVtoItc3).getSecondDateValue() != null) {
                oCurrentVariant.sFilterBTDateVtoItc3From = this.byId(Constants.ids.filterBarBTDateVtoItc3).getDateValue();
                oCurrentVariant.sFilterBTDateVtoItc3To = this.byId(Constants.ids.filterBarBTDateVtoItc3).getSecondDateValue();
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
                this.getView().byId(Constants.ids.UTTable).getColumns().forEach(function (oColumn) {
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
                    this.fireSelectionChangeOfAllFilters(oDataVariant.sFilterBTDateVtoMasFrom, oDataVariant.sFilterBTDateVtoMasTo, 
                        oDataVariant.sFilterBTDateVtoItc1From, oDataVariant.sFilterBTDateVtoItc1To, oDataVariant.sFilterBTDateVtoItc2From,
                        oDataVariant.sFilterBTDateVtoItc2To, oDataVariant.sFilterBTDateVtoItc3From, oDataVariant.sFilterBTDateVtoItc3To);

                    this.currentSorter = oDataVariant.oSorter;
                    Commons.onSortChange(this.byId(Constants.ids.UTTable), this.currentSorter,this);
                }
            }
            // null significa que se selecionó la variante Estándar (o una variante no disponible), 
            // entonces establecemos la configuración estandar
            else {
                this.setDefaultConfigOnFilterBar(currentFilterItems);
                this.getView().byId(Constants.ids.UTTable).getColumns().forEach(function (oColumn) {
                    oColumn.setVisible(true);
                });
                this.setSelectedKeysToNullOfAllFilters();
                this.fireSelectionChangeOfAllFilters(null,null,null,null,null,null,null,null);
                this.currentSorter = {};
                Commons.onSortChange(this.byId(Constants.ids.UTTable), this.currentSorter,this);
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
                { name: 'Carrier', isVisible: true },
                { name: 'TUNumber', isVisible: true },
                { name: 'TuStatus', isVisible: true },
                { name: 'TuType', isVisible: true },
                { name: 'GrpName', isVisible: false },
                { name: 'SegCent', isVisible: false },
                { name: 'OpCif', isVisible: false },
                { name: 'Euro5', isVisible: false },
                { name: 'Escal', isVisible: false },
                { name: 'VtoMas', isVisible: false },
                { name: 'VtoItc1', isVisible: false },
                { name: 'VtoItc2', isVisible: false },
                { name: 'VtoItc3', isVisible: false }
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
            this.byId(Constants.ids.filterBarTuNumber).setSelectedKeys(oDataVariant.sFilterTUNumber);
            this.byId(Constants.ids.filterBarTuStatus).setSelectedKeys(oDataVariant.sFilterTUStatus);
            this.byId(Constants.ids.filterBarTutype).setSelectedKeys(oDataVariant.sFilterTUtype);
            this.byId(Constants.ids.filterBarSegCent).setSelectedKeys(oDataVariant.sFilterSegCent);
            this.byId(Constants.ids.filterBarGroupName).setSelectedKeys(oDataVariant.sFilterGroup);
            this.byId(Constants.ids.filterBarOpCif).setSelectedKeys(oDataVariant.sFilterOpCif);
            this.byId(Constants.ids.filterBarEuro5).setSelectedKeys(oDataVariant.sFilterEuro5);
            this.byId(Constants.ids.filterBarEscal).setSelectedKeys(oDataVariant.sFilterEscal);
            if (oDataVariant.sFilterBTDateVtoMasTo != "" && oDataVariant.sFilterBTDateVtoMasFrom != "" && oDataVariant.sFilterBTDateVtoMasFrom != null && oDataVariant.sFilterBTDateVtoMasTo != null) {
                this.byId(Constants.ids.filterBarBTDateVtoMas).setDateValue(new Date(oDataVariant.sFilterBTDateVtoMasFrom));
                this.byId(Constants.ids.filterBarBTDateVtoMas).setSecondDateValue(new Date(oDataVariant.sFilterBTDateVtoMasTo));
            } else{
                this.byId(Constants.ids.filterBarBTDateVtoMas).setDateValue(null);
                this.byId(Constants.ids.filterBarBTDateVtoMas).setSecondDateValue(null);
            }
            if (oDataVariant.sFilterBTDateVtoItc1From != "" && oDataVariant.sFilterBTDateVtoItc1To != "" && oDataVariant.sFilterBTDateVtoItc1From != null && oDataVariant.sFilterBTDateVtoItc1To != null) {
                this.byId(Constants.ids.filterBarBTDateVtoItc1).setDateValue(new Date(oDataVariant.sFilterBTDateVtoItc1From));
                this.byId(Constants.ids.filterBarBTDateVtoItc1).setSecondDateValue(new Date(oDataVariant.sFilterBTDateVtoItc1To));
            } else{
                this.byId(Constants.ids.filterBarBTDateVtoItc1).setDateValue(null);
                this.byId(Constants.ids.filterBarBTDateVtoItc1).setSecondDateValue(null);
            }
            if (oDataVariant.sFilterBTDateVtoItc2From != "" && oDataVariant.sFilterBTDateVtoItc2To != "" && oDataVariant.sFilterBTDateVtoItc2From != null && oDataVariant.sFilterBTDateVtoItc2To != null) {
                this.byId(Constants.ids.filterBarBTDateVtoItc2).setDateValue(new Date(oDataVariant.sFilterBTDateVtoItc2From));
                this.byId(Constants.ids.filterBarBTDateVtoItc2).setSecondDateValue(new Date(oDataVariant.sFilterBTDateVtoItc2To));
            } else{
                this.byId(Constants.ids.filterBarBTDateVtoItc2).setDateValue(null);
                this.byId(Constants.ids.filterBarBTDateVtoItc2).setSecondDateValue(null);
            }
            if (oDataVariant.sFilterBTDateVtoItc3From != "" && oDataVariant.sFilterBTDateVtoItc3To != "" && oDataVariant.sFilterBTDateVtoItc3From != null && oDataVariant.sFilterBTDateVtoItc3To != null) {
                this.byId(Constants.ids.filterBarBTDateVtoItc3).setDateValue(new Date(oDataVariant.sFilterBTDateVtoItc3From));
                this.byId(Constants.ids.filterBarBTDateVtoItc3).setSecondDateValue(new Date(oDataVariant.sFilterBTDateVtoItc3To));
            } else{
                this.byId(Constants.ids.filterBarBTDateVtoItc3).setDateValue(null);
                this.byId(Constants.ids.filterBarBTDateVtoItc3).setSecondDateValue(null);
            }
        },
        setSelectedKeysToNullOfAllFilters: function () {
            this.byId(Constants.ids.filterBarCarrier).setSelectedKeys(null);
            this.byId(Constants.ids.filterBarTuNumber).setSelectedKeys(null);
            this.byId(Constants.ids.filterBarTuStatus).setSelectedKeys(null);
            this.byId(Constants.ids.filterBarTutype).setSelectedKeys(null);
            this.byId(Constants.ids.filterBarSegCent).setSelectedKeys(null);
            this.byId(Constants.ids.filterBarGroupName).setSelectedKeys(null);
            this.byId(Constants.ids.filterBarOpCif).setSelectedKeys(null);
            this.byId(Constants.ids.filterBarEuro5).setSelectedKeys(null);
            this.byId(Constants.ids.filterBarEscal).setSelectedKeys(null);
            this.byId(Constants.ids.filterBarBTDateVtoMas).setDateValue(null);
            this.byId(Constants.ids.filterBarBTDateVtoItc1).setDateValue(null);
            this.byId(Constants.ids.filterBarBTDateVtoItc2).setDateValue(null);
            this.byId(Constants.ids.filterBarBTDateVtoItc3).setDateValue(null);
        },
        fireSelectionChangeOfAllFilters: function (oFromVtoMas, oToVtoMas, oFromVtoItc1, oToVtoItc1,oFromVtoItc2, oToVtoItc2,oFromVtoItc3, oToVtoItc3) {
            this.byId(Constants.ids.filterBarCarrier).fireSelectionChange();
            this.byId(Constants.ids.filterBarTuNumber).fireSelectionChange();
            this.byId(Constants.ids.filterBarTuStatus).fireSelectionChange();
            this.byId(Constants.ids.filterBarTutype).fireSelectionChange();
            this.byId(Constants.ids.filterBarSegCent).fireSelectionChange();
            this.byId(Constants.ids.filterBarGroupName).fireSelectionChange();
            this.byId(Constants.ids.filterBarOpCif).fireSelectionChange();
            this.byId(Constants.ids.filterBarEuro5).fireSelectionChange();
            this.byId(Constants.ids.filterBarEscal).fireSelectionChange();
            if(oFromVtoMas != "" && oToVtoMas != "" && oFromVtoMas != null && oToVtoMas != null){
                this.byId(Constants.ids.filterBarBTDateVtoMas).fireChange({
                    from: new Date(oFromVtoMas),
                    to: new Date(oToVtoMas)
                });
            } else{
                this.byId(Constants.ids.filterBarBTDateVtoMas).fireChange({
                    from: null,
                    to: null
                });
            }
            if(oFromVtoItc1 != "" && oToVtoItc1 != "" && oFromVtoItc1 != null && oToVtoItc1 != null){
                this.byId(Constants.ids.filterBarBTDateVtoItc1).fireChange({
                    from: new Date (oFromVtoItc1),
                    to: new Date(oToVtoItc1)
                });
            } else{
                this.byId(Constants.ids.filterBarBTDateVtoItc1).fireChange({
                    from: null,
                    to: null
                });
            }
            if(oFromVtoItc2 != "" && oToVtoItc2 != "" && oFromVtoItc2 != null && oToVtoItc2 != null){
                this.byId(Constants.ids.filterBarBTDateVtoItc2).fireChange({
                    from: new Date(oFromVtoItc2),
                    to: new Date(oToVtoItc2)
                });
            } else{
                this.byId(Constants.ids.filterBarBTDateVtoItc2).fireChange({
                    from: null,
                    to: null
                });
            }
            if(oFromVtoItc3 != "" && oToVtoItc3 != "" && oFromVtoItc3 != null && oToVtoItc3 != null){
                this.byId(Constants.ids.filterBarBTDateVtoItc3).fireChange({
                    from: new Date(oFromVtoItc3),
                    to: new Date(oToVtoItc3)
                });
            } else{
                this.byId(Constants.ids.filterBarBTDateVtoItc3).fireChange({
                    from: null,
                    to: null
                });
            }
        }
		});
	});
