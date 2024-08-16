sap.ui.define([
    'jquery.sap.global',
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment",
    "sap/ui/Device",
    "ypf/zlog66freeld4/util/Constants",
], function (jQuery, Filter, FilterOperator, Fragment, Device, Constants) {
    "use strict";

    let Commons = {

        /**
         * Method for reading data from one model and loading it into another model for filters
         * @public
         * @param sfilterKey the filter key name
         * @param fGetKeyNames a callback used for store the key-names objects.
         * @param sTableModelPath path to the model that has the table data,
         * @param sFilterModelPath path to the model that has the filters data,
         */
        readFilter: function (sfilterKey, fGetKeyNames, sTableModelPath, sFilterModelPath, oScope) {
            try {
                let aReportData = oScope.getView().getModel(sTableModelPath).getData(),
                    aFilters = [];
                for (const oData of aReportData) {
                    let oNewFilter = fGetKeyNames(oData);
                    let aExist = aFilters.find(x => x.valueKey === oNewFilter.valueKey);
                    if (aExist === undefined) {
                        aFilters.push(oNewFilter);
                    }
                }

                let aFilterModelData = oScope.getView().getModel(sFilterModelPath).getData(),
                    oCurrentFilter = aFilterModelData.find(x => x.key === sfilterKey);

                if (oCurrentFilter) {
                    oCurrentFilter.values = aFilters;
                }

                oScope.getView().getModel(sFilterModelPath).setData(aFilterModelData);
            } catch (oError) {
                console.log(`${oScope.getTextFor("errDataFilters")}: ${oError}`);
            }
        },
        columnConfigForExcelDownload: function(oScope){
            let oTable = oScope.byId(Constants.ids.UTTable),
                aExcelColumns = [],
                sWidht="25";
            //oTable.getColumns()[1].getLabel().getText()
            //oTable.getColumns()[1].getTemplate().getBindingPath("text")
            for (let i = 0; i < oTable.getColumns().length; i++) {
                let oExcelColumn = {
                    label: oTable.getColumns()[i].getLabel().getText(),
                    property: oTable.getColumns()[i].getTemplate().getBindingPath("text"),
                    width: sWidht
                };
                if( oTable.getColumns()[i].getVisible()){
                    aExcelColumns.push(oExcelColumn);
                }
            }
            return aExcelColumns;
        },
        getFilterForCombobox: function (oEventParameter, sPath, oFilterOperator) {
            try {
                let sKey = oEventParameter.getSource().getSelectedKey(),
                    oNewFilter;
                if (sKey ) {
                    oNewFilter = new Filter(sPath, oFilterOperator, sKey);
                } else {
                    oNewFilter = null;
                }
                return oNewFilter;
            } catch (oError) {

            }
        },
        getFilterForComboboxGroup: function (oEventParameter, oFilterOperator) {
            try {
                let sKey = oEventParameter.getSource().getSelectedKey(),
                    aFilters = [],
                    oFilters;
                if (sKey ) {
                    aFilters.push(new Filter(Constants.filterFields.Groupname1, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.Groupname2, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.Groupname3, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.Groupname4, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.Groupname5, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.Groupname6, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.Groupname7, oFilterOperator, sKey));
                    oFilters = new Filter(aFilters,false);
                } else {
                    oFilters = null;
                }
                
                return oFilters;
            } catch (oError) {

            }
        },
        getFilterForMultiCombobox: function (oEventParameter, sPath, oFilterOperator) {
            try {
                let aKeys = oEventParameter.getSource().getSelectedKeys(),
                    aSource,
                    oNewFilter;
                if (aKeys.length <= 0) {
                    if (oEventParameter.getSource().getSelectedItems()) {
                        aSource = oEventParameter.getSource().getSelectedItems();
                        aSource.map(element => { aKeys.push(element.mProperties.text) });
                        oEventParameter.getSource().setSelectedKeys(aKeys);
                        oEventParameter.getSource().setSelectedItems(aKeys);
                    }
                }
                if (aKeys.length > 0) {
                    oNewFilter = new Filter(aKeys.map(function (sItem) {
                        return new Filter(sPath, oFilterOperator, sItem)
                    }), false);
                } else {
                    oNewFilter = null;
                }
                return oNewFilter;
            } catch (oError) {
                console.log(`${this.getTextFor("errGenerateFilter")}: ${oError}`);
            }
        },
        getFilterForMultiComboboxStatus: function (oEventParameter, sPath, oFilterOperator) {
            try {
                let aKeys = oEventParameter.getSource().getSelectedKeys(),
                    aSource,
                    oNewFilter;
                if (aKeys.length <= 0) {
                    if (oEventParameter.getSource().getSelectedItems()) {
                        aSource = oEventParameter.getSource().getSelectedItems();
                        aSource.map(element => { aKeys.push(element.mProperties.text) });
                        oEventParameter.getSource().setSelectedKeys(aKeys);
                        oEventParameter.getSource().setSelectedItems(aKeys);
                    }
                }
                if (aKeys.length > 0) {
                    oNewFilter = new Filter(aKeys.map(function (sItem) {
                        let oFilter;
                        if(sItem == ""){
                            oFilter = new Filter(sPath, oFilterOperator, 0)
                        } else{
                            oFilter = new Filter(sPath, oFilterOperator, sItem)
                        }
                        return oFilter
                    }), false);
                } else {
                    oNewFilter = null;
                }
                return oNewFilter;
            } catch (oError) {
                console.log(`${this.getTextFor("errGenerateFilter")}: ${oError}`);
            }
        },
        getFilterForMultiComboboxGroup: function (oEventParameter, oFilterOperator) {
            try {
                let aKeys = oEventParameter.getSource().getSelectedKeys(),
                    aSource,
                    oNewFilter;
                if (aKeys.length <= 0) {
                    if (oEventParameter.getSource().getSelectedItems()) {
                        aSource = oEventParameter.getSource().getSelectedItems();
                        aSource.map(element => { aKeys.push(element.mProperties.text) });
                        oEventParameter.getSource().setSelectedKeys(aKeys);
                        oEventParameter.getSource().setSelectedItems(aKeys);
                    }
                }
                if (aKeys.length > 0) {
                    oNewFilter = new Filter(aKeys.map(function (sItem) {
                        let aFilters = [];
                        aFilters.push(new Filter(Constants.filterFields.Groupname1, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.Groupname2, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.Groupname3, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.Groupname4, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.Groupname5, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.Groupname6, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.Groupname7, oFilterOperator, sItem));
                        oNewFilter = new Filter(aFilters,false);
                        return oNewFilter;
                    }), false);
                } else {
                    oNewFilter = null;
                }
                return oNewFilter;
            } catch (oError) {
                console.log(`${this.getTextFor("errGenerateFilter")}: ${oError}`);
            }
        },
        getViewSettingsDialog: function (sDialogFragmentName, _mViewSettingsDialogs, oScope) {
            let pDialog = _mViewSettingsDialogs[sDialogFragmentName];

            if (!pDialog) {
                pDialog = Fragment.load({
                    id: oScope.getView().getId(),
                    name: sDialogFragmentName,
                    controller: oScope
                }).then(function (oDialog) {
                    if (Device.system.desktop) {
                        oDialog.addStyleClass("sapUiSizeCompact");
                    }
                    return oDialog;
                });
                _mViewSettingsDialogs[sDialogFragmentName] = pDialog;
            }
            return pDialog;
        },
        onSortChange: function (oTable, aCurrentSorter, oScope) {
            let aSorters = Commons.getSorters(aCurrentSorter),
                oBinding = oTable.getBinding();
            // Aplica el sorter seleccionado
            oBinding.sort(aSorters);
        },
        getSorters: function (aCurrentSorter) {
            let aSorters = [];
            if (
                aCurrentSorter
                && Object.keys(aCurrentSorter).length !== 0
                && Object.getPrototypeOf(aCurrentSorter) !== Object.prototype
            ) {
                aSorters.push(aCurrentSorter);
            }
            return aSorters;
        },
        /**
         * Function that applies the filters to a table
         * @param {*} oTable table object where the changes will be applied
         * @param {*} aFilters array of filters
         * @param {*} oScope scope of the controller
         */
        onFilterChange: function (oTable, aFilters, oScope) {
            try {
                let oBinding = oTable.getBinding(),
                    oFilter = new Filter(aFilters, true);
                oBinding.filter(oFilter, "Application");
                // oScope.oDataModel.refresh(true);
                // oScope.byId("variantManagement").currentVariantSetModified(true);
                oScope.byId(Constants.ids.variantManagment).currentVariantSetModified(true);
            } catch (oError) {
                console.log(`${oScope.getTextFor("errCommonsOnFilterChange")}: ${oError}`);
            }
        },
        /**
         * method that returns the data to filter
         * @param {*} oFacetFilter facet filter object
         * @param {*} oScope 
         */
        getFacetFilterModel: function (oFacetFilter, oScope) {
            try {
                let mFacetFilterLists = oFacetFilter.getLists().filter(function (oList) {
                    return oList.getSelectedItems().length;
                }),
                    oNewFilter;

                if (mFacetFilterLists.length) {
                    oNewFilter = new Filter(mFacetFilterLists.map(function (oList) {
                        return new Filter(oList.getSelectedItems().map(function (oItem) {
                            return new Filter(oList.getKey(), "EQ", oItem.getKey());
                        }), false);
                    }), true);

                } else {
                    oNewFilter = null;
                }

                return oNewFilter;
            } catch (oError) {
                console.log(`${oScope.getTextFor("errCommonsGetFacetFilter")}: ${oError}`);
            }
        },
        /**
         * Perso controller service (Local) for UT entity
         * @param {*} oScope 
         */
        UTColumnService: function (oScope) {
            let sLabelUTNumber=oScope.getTextFor("labelUTNumber"),
                sLabelUTType=oScope.getTextFor("labelUTType"),
                sLabelUTText=oScope.getTextFor("labelUTText"),
                sLabelUTStatus=oScope.getTextFor("labelUTStatus"),
                sLabelUTClass=oScope.getTextFor("labelUTClass"),
                sLabelUTMode=oScope.getTextFor("labelUTMode"),
                sLabelUTCreName=oScope.getTextFor("labelUTCreName"),
                sLabelUTCreDate=oScope.getTextFor("labelUTCreDate"),
                sLabelUTLenght=oScope.getTextFor("labelUTLenght"),
                sLabelUTWidth=oScope.getTextFor("labelUTWidth"),
                sLabelUTHeight=oScope.getTextFor("labelUTHeight"),
                sLabelUTDimUom=oScope.getTextFor("labelUTDimUom"),
                sLabelUTUnlwgt=oScope.getTextFor("labelUTUnlwgt"),
                sLabelUTMaxWgt=oScope.getTextFor("labelUTMaxWgt"),
                sLabelUTWgtUom=oScope.getTextFor("labelUTWgtUom"),
                sLabelUTMaxVol=oScope.getTextFor("labelUTMaxVol"),
                sLabelUTVolUom=oScope.getTextFor("labelUTVolUom"),
                sLabelUTAxles=oScope.getTextFor("labelUTAxles"),
                sLabelUTCarrier=oScope.getTextFor("labelUTCarrier"),
                sLabelUTNroComps=oScope.getTextFor("labelUTNroComps"),
                sLabelUTComNumber=oScope.getTextFor("labelUTComNumber"),
                sLabelUTCmpMinVol=oScope.getTextFor("labelUTCmpMinVol"),
                sLabelUTCmpMaxVol=oScope.getTextFor("labelUTCmpMaxVol"),
                sLabelUTComIdText=oScope.getTextFor("labelUTComIdText"),
                sLabelUTGroupname1=oScope.getTextFor("labelUTGroupname1"),
                sLabelUTSegCent=oScope.getTextFor("labelUTSegCent"),
                sLabelUTCompMar=oScope.getTextFor("labelUTCompMar"),
                sLabelUTCompMod=oScope.getTextFor("labelUTCompMod"),
                sLabelUTCompCh=oScope.getTextFor("labelUTCompCh"),
                sLabelUTCompMot=oScope.getTextFor("labelUTCompMot"),
                sLabelUTCargaVent=oScope.getTextFor("labelUTCargaVent"),
                sLabelUTEuro5=oScope.getTextFor("labelUTEuro5"),
                sLabelUTPot=oScope.getTextFor("labelUTPot"),
                sLabelUTImag=oScope.getTextFor("labelUTImag"),
                sLabelUTSistFren=oScope.getTextFor("labelUTSistFren"),
                sLabelUTPrecFijo=oScope.getTextFor("labelUTPrecFijo"),
                sLabelUTPrecElect=oScope.getTextFor("labelUTPrecElect"),
                sLabelUTBombTrans=oScope.getTextFor("labelUTBombTrans"),
                sLabelUTAudtanNr=oScope.getTextFor("labelUTAudtanNr"),
                sLabelUTCampo=oScope.getTextFor("labelUTCampo"),
                sLabelUTDescripcion=oScope.getTextFor("labelUTDescripcion"),
                sLabelUTFechaDesdeItc1=oScope.getTextFor("labelUTFechaDesdeItc1"),
                sLabelUTVtpItcRg2080=oScope.getTextFor("labelUTVtpItcRg2080");
            let columnservice = {
                oData: {
                    _persoSchemaVersion: "1.0",
                    aColumns: [
                        {
                            id: "Lists-UTsTable-utNumber",
                            order: 0,
                            text: sLabelUTNumber,
                            visible: true
                        },
                        {
                            id: "Lists-UTsTable-utType",
                            order: 1,
                            text: sLabelUTType,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utText",
                            order: 2,
                            text: sLabelUTText,
                            visible: true
                        },
                        {
                            id: "Lists-UTsTable-utStatus",
                            order: 3,
                            text: sLabelUTStatus,
                            visible: true
                        },
                        {
                            id: "Lists-UTsTable-utClass",
                            order: 4,
                            text: sLabelUTClass,
                            visible: true
                        },
                        {
                            id: "Lists-UTsTable-utMode",
                            order: 5,
                            text: sLabelUTMode,
                            visible: true
                        },
                        {
                            id: "Lists-UTsTable-utCreName",
                            order: 6,
                            text: sLabelUTCreName,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCreDate",
                            order: 7,
                            text: sLabelUTCreDate,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utLenght",
                            order: 8,
                            text: sLabelUTLenght,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utWidth",
                            order: 9,
                            text: sLabelUTWidth,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utHeight",
                            order: 9,
                            text: sLabelUTHeight,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utDimUom",
                            order: 10,
                            text: sLabelUTDimUom,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utUnlwgt",
                            order: 11,
                            text: sLabelUTUnlwgt,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utMaxWgt",
                            order: 12,
                            text: sLabelUTMaxWgt,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utWgtUom",
                            order: 13,
                            text: sLabelUTWgtUom,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utMaxVol",
                            order: 14,
                            text: sLabelUTMaxVol,
                            visible: false
                            
                        },
                        {
                            id: "Lists-UTsTable-utVolUom",
                            order: 15,
                            text: sLabelUTVolUom,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utAxles",
                            order: 16,
                            text: sLabelUTAxles,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCarrier",
                            order: 17,
                            text: sLabelUTCarrier,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utNroComps",
                            order: 18,
                            text: sLabelUTNroComps,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utComNumber",
                            order: 19,
                            text: sLabelUTComNumber,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCmpMinVol",
                            order: 20,
                            text: sLabelUTCmpMinVol,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCmpMaxVol",
                            order: 21,
                            text: sLabelUTCmpMaxVol,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utComIdText",
                            order: 22,
                            text: sLabelUTComIdText,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utGroupname1",
                            order: 23,
                            text: sLabelUTGroupname1,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utSegCent",
                            order: 24,
                            text: sLabelUTSegCent,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCompMar",
                            order: 25,
                            text: sLabelUTCompMar,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCompMod",
                            order: 26,
                            text: sLabelUTCompMod,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCompCh",
                            order: 27,
                            text: sLabelUTCompCh,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCompMot",
                            order: 28,
                            text: sLabelUTCompMot,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCargaVent",
                            order: 29,
                            text: sLabelUTCargaVent,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utEuro5",
                            order: 30,
                            text: sLabelUTEuro5,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utPot",
                            order: 31,
                            text: sLabelUTPot,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utImag",
                            order: 32,
                            text: sLabelUTImag,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utSistFren",
                            order: 33,
                            text: sLabelUTSistFren,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utPrecFijo",
                            order: 34,
                            text: sLabelUTPrecFijo,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utPrecElect",
                            order: 35,
                            text: sLabelUTPrecElect,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utBombTrans",
                            order: 36,
                            text: sLabelUTBombTrans,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utAudtanNr",
                            order: 37,
                            text: sLabelUTAudtanNr,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCampo",
                            order: 38,
                            text: sLabelUTCampo,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utDescripcion",
                            order: 39,
                            text: sLabelUTDescripcion,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utFechaDesdeItc1",
                            order: 40,
                            text: sLabelUTFechaDesdeItc1,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utVtpItcRg2080",
                            order: 41,
                            text: sLabelUTVtpItcRg2080,
                            visible: false
                        }
                    ]
                },
                oResetData: {
                    _persoSchemaVersion: "1.0",
                    aColumns: [
                        {
                            id: "Lists-UTsTable-utNumber",
                            order: 0,
                            text: sLabelUTNumber,
                            visible: true
                        },
                        {
                            id: "Lists-UTsTable-utType",
                            order: 1,
                            text: sLabelUTType,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utText",
                            order: 2,
                            text: sLabelUTText,
                            visible: true
                        },
                        {
                            id: "Lists-UTsTable-utStatus",
                            order: 3,
                            text: sLabelUTStatus,
                            visible: true
                        },
                        {
                            id: "Lists-UTsTable-utClass",
                            order: 4,
                            text: sLabelUTClass,
                            visible: true
                        },
                        {
                            id: "Lists-UTsTable-utMode",
                            order: 5,
                            text: sLabelUTMode,
                            visible: true
                        },
                        {
                            id: "Lists-UTsTable-utCreName",
                            order: 6,
                            text: sLabelUTCreName,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCreDate",
                            order: 7,
                            text: sLabelUTCreDate,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utLenght",
                            order: 8,
                            text: sLabelUTLenght,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utWidth",
                            order: 9,
                            text: sLabelUTWidth,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utHeight",
                            order: 9,
                            text: sLabelUTHeight,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utDimUom",
                            order: 10,
                            text: sLabelUTDimUom,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utUnlwgt",
                            order: 11,
                            text: sLabelUTUnlwgt,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utMaxWgt",
                            order: 12,
                            text: sLabelUTMaxWgt,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utWgtUom",
                            order: 13,
                            text: sLabelUTWgtUom,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utMaxVol",
                            order: 14,
                            text: sLabelUTMaxVol,
                            visible: false
                            
                        },
                        {
                            id: "Lists-UTsTable-utVolUom",
                            order: 15,
                            text: sLabelUTVolUom,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utAxles",
                            order: 16,
                            text: sLabelUTAxles,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCarrier",
                            order: 17,
                            text: sLabelUTCarrier,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utNroComps",
                            order: 18,
                            text: sLabelUTNroComps,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utComNumber",
                            order: 19,
                            text: sLabelUTComNumber,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCmpMinVol",
                            order: 20,
                            text: sLabelUTCmpMinVol,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCmpMaxVol",
                            order: 21,
                            text: sLabelUTCmpMaxVol,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utComIdText",
                            order: 22,
                            text: sLabelUTComIdText,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utGroupname1",
                            order: 23,
                            text: sLabelUTGroupname1,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utSegCent",
                            order: 24,
                            text: sLabelUTSegCent,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCompMar",
                            order: 25,
                            text: sLabelUTCompMar,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCompMod",
                            order: 26,
                            text: sLabelUTCompMod,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCompCh",
                            order: 27,
                            text: sLabelUTCompCh,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCompMot",
                            order: 28,
                            text: sLabelUTCompMot,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCargaVent",
                            order: 29,
                            text: sLabelUTCargaVent,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utEuro5",
                            order: 30,
                            text: sLabelUTEuro5,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utPot",
                            order: 31,
                            text: sLabelUTPot,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utImag",
                            order: 32,
                            text: sLabelUTImag,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utSistFren",
                            order: 33,
                            text: sLabelUTSistFren,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utPrecFijo",
                            order: 34,
                            text: sLabelUTPrecFijo,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utPrecElect",
                            order: 35,
                            text: sLabelUTPrecElect,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utBombTrans",
                            order: 36,
                            text: sLabelUTBombTrans,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utAudtanNr",
                            order: 37,
                            text: sLabelUTAudtanNr,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utCampo",
                            order: 38,
                            text: sLabelUTCampo,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utDescripcion",
                            order: 39,
                            text: sLabelUTDescripcion,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utFechaDesdeItc1",
                            order: 40,
                            text: sLabelUTFechaDesdeItc1,
                            visible: false
                        },
                        {
                            id: "Lists-UTsTable-utVtpItcRg2080",
                            order: 41,
                            text: sLabelUTVtpItcRg2080,
                            visible: false
                        }
                    ]
                },

                getPersData: function () {
                    
                    var oDeferred = new jQuery.Deferred();
                    if (!this._oBundle) {
                        this._oBundle = this.oData;
                    }
                    oDeferred.resolve(this._oBundle);
                    // setTimeout(function() {
                    // 	oDeferred.resolve(this._oBundle);
                    // }.bind(this), 2000);
                    return oDeferred.promise();
                },
                delPersData: function () {
                    var oDeferred = new jQuery.Deferred();
                    oDeferred.resolve();
                    return oDeferred.promise();
                },
                setPersData: function (oBundle) {
                    var oDeferred = new jQuery.Deferred();
                    this._oBundle = oBundle;
                    oDeferred.resolve();
                    return oDeferred.promise();
                },

                getResetPersData: function () {
                    var oDeferred = new jQuery.Deferred();

                    // oDeferred.resolve(this.oResetData);

                    setTimeout(function () {
                        oDeferred.resolve(this.oResetData);
                    }.bind(this), 2000);

                    return oDeferred.promise();
                },

                resetPersData: function () {
                    var oDeferred = new jQuery.Deferred();

                    //set personalization
                    this._oBundle = this.oResetData;

                    //reset personalization, i.e. display table as defined
                    //this._oBundle = null;
                    oDeferred.resolve();

                    // setTimeout(function() {
                    // 	this._oBundle = this.oResetData;
                    // 	oDeferred.resolve();
                    // }.bind(this), 2000);
                    return oDeferred.promise();
                },

                // getGroup: function (oColumn) {
                //     if (oColumn.getId().indexOf('productCol') != -1 ||
                //         oColumn.getId().indexOf('supplierCol') != -1) {
                //         return "Primary Group";
                //     }
                //     return "Secondary Group";
                // }
            };

            return columnservice;
        }
    };
    return Commons;
}, true)