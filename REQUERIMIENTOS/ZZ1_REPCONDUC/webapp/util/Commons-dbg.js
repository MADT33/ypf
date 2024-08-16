sap.ui.define([
    'jquery.sap.global',
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment",
    "sap/ui/Device",
    "ypf/zlog12freeld4/util/Constants",
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
        getFilterForMultiComboboxLicType: function(oEventParameter, oFilterOperator){
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
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO1, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO2, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO3, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO4, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO5, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO6, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO7, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO8, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO9, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO1, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO2, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO3, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO4, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO5, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO6, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO7, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO8, oFilterOperator, sItem));
                        aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO9, oFilterOperator, sItem));
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
        columnConfigForExcelDownload: function(oScope){
            let oTable = oScope.byId(Constants.ids.DriverTable),
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
                aExcelColumns.push(oExcelColumn);
            }
            return aExcelColumns;
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
        getFilterForCombobox: function (oEventParameter, sPath, oFilterOperator) {
            try {
                let sKey = oEventParameter.getSource().getSelectedKey(),
                    oNewFilter;
                if (sKey) {
                    oNewFilter = new Filter(sPath, oFilterOperator, sKey);
                } else {
                    oNewFilter = null;
                }
                return oNewFilter;
            } catch (oError) {

            }
        },
        getFilterForComboboxLicType: function (oEventParameter, oFilterOperator) {
            try {
                let sKey = oEventParameter.getSource().getSelectedKey(),
                    aFilters = [],
                    oFilters;
                if (sKey ) {
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO1, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO2, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO3, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO4, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO5, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO6, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO7, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO8, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZCO9, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO1, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO2, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO3, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO4, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO5, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO6, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO7, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO8, oFilterOperator, sKey));
                    aFilters.push(new Filter(Constants.filterFields.LicenseTypeZAO9, oFilterOperator, sKey));
                    oFilters = new Filter(aFilters,false);
                } else {
                    oFilters = null;
                }
                
                return oFilters;
            } catch (oError) {

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
    };
    return Commons;
}, true)