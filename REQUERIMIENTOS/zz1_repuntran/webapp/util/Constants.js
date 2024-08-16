sap.ui.define(
  [],
  function () {
    "use strict";

    let Constants = {
      paths: {
        UTS_PATH: "UTsModel",
        UT_DETAIL_PATH: "UTModel",
        DRIVERS_PATH: "DriversModel",
        DRIVER_DETAIL_PATH: "DriverModel",
        VEHICLES_PATH: "VehiclesModel",
        VEHICLE_DETAIL_PATH: "VehicleModel",
        ROOT: "ypf.zlog66freeld4",
        UTS_STATS: "UTsModelStats",
        VEHICLES_STATS: "VehiclesModelStats",
        DRIVERS_STATS: "DriversModelStats",
        persoContainer: "PersonalizationContainerREPLOG66",
        VehicleFilterModel: "vehicleFilters",
        UTFilterModel: "uTFilters",
        DriverFilterModel: "DriverFilters"
      },
      filterFields:{
        carrier: "TUCarrier",
        tuNumber: "TUNumber",
        tuStatus: "TUStatus",
        tuType: "TUType",
        segCent: "SegCent",
        opCif: "OpCif",
        euro5: "Euro5",
        escal: "Escal",
        prodType: "ProdType",
        usrAbm: "UsrAbm",
        vtoMas: "VtoMas",
        vtoItcRg20801: "VtoItcRg20801",
        vtoItcRg20802: "VtoItcRg20802",
        vtoItcRg20803: "VtoItcRg20803",
        Groupname1: "ComGroupName1",
        Groupname2: "ComGroupName2",
        Groupname3: "ComGroupName3",
        Groupname4: "ComGroupName4",
        Groupname5: "ComGroupName5",
        Groupname6: "ComGroupName6",
        Groupname7: "ComGroupName7"
      },
      ids:{
        VehicleTable: "idTableVehicle",
        variantManagment: "variantManagement",
        UTTable: "idTableUT",
        DriverTable: "idTableDriver",
        filterbar: "filterbar",
        filterBarCarrier: "slCarrier",
        filterBarTuNumber: "slTUNumber",
        filterBarTuStatus: "slTuStatus",
        filterBarTutype: "slTuType",
        filterBarGroupName : "slGrpName",
        filterBarSegCent : "slSegCent",
        filterBarOpCif : "slOpCif",
        filterBarEuro5 : "slEuro5",
        filterBarEscal : "slEscal",
        filterBarProdType : "slProdType",
        filterBarUsrAbm : "slUsrAbm",
        filterBarBTDateVtoMas : "dateRangeSelectorVtoMas",
        filterBarBTDateVtoItc1 : "dateRangeSelectorVtoItc1",
        filterBarBTDateVtoItc2 : "dateRangeSelectorVtoItc2",
        filterBarBTDateVtoItc3 : "dateRangeSelectorVtoItc3"
      },
      jsons: {
        UTS_JSON_PATH: "UnidadesTransporte.json",
        DRIVERS_JSON_PATH: "Conductores.json",
        VEHICLES_JSON_PATH: "Vehiculos.json",
        UTS_FILTERS: "filtersUT.json",
        VEHICLES_FILTERS: "filtersVehicles.json",
        DRIVERS_FILTERS: "filtersDrivers.json"
      },
      targets: {
        DRIVER_DETAIL: "driverDetail",
        UT_DETAIL: "uTDetail",
        VEHICLE_DETAIL: "vehicleDetail",
      },
      TableConfig: {   //objeto donde se guardan los indices de las columnas para cada configuracion de la tabla
        general: [
            'utNumber',,'utText','utType','VehTypeText','utClass','utMode','utStatus','utCreName','utCreDate','utModifName','utModifDate','utLenght','utWidth','utHeight',
            'utDimUom','utUnlwgt','utMaxWgt','utWgtUom','utMaxVol','utVolUom','utAxles','utCarrier','utNroComps'
        ],
        seguros:[
            'utNumber','utText','utSegCent','utCompMar','utCompMod','utCompCh','utCompMot','utProdType'
        ],
        atributos:[
            'utNumber','utText','utUsrAbm','utCargaVent','utOpCif','utEuro5','utEscal','utPot','utImag','utSistFren','utPrecFijo','utPrecElect','utBombTrans','utAudtanNr',
            'utCardNum','utCardNum2','utPropie','utConfig','utSistAda','utSatelit','utdetSat','utModelo','utSedr','utInv','utGjahr','utBol','utMotOp'
        ],
        habilitaciones: [
            'utNumber','utText','utCampo','utDescripcion','utFechaDesdeItc1','utVtoItcRg20801','utCampo2','utDescripcion2','utFechaDesdeItc2','utVtoItcRg20802',
            'utCampo3','utDescripcion3','utFechaDesdeItc3','utVtoItcRg20803','utCampo4','utDescripcion4','utVtoCargGral',
            'utCampo5','utDescripcion5','utVtoCargPel','utCampo6','utDescripcion6','utVtoMas','utCampo7','utDescripcion7','utVtoSeg',
            'utCampo8','utDescripcion8','utVtoSegCarg','utCampo9','utDescripcion9','utVtoRuta','utCampo10','utDescripcion10','utVtoPrqTq',
            'utCampo11','Descripcion11','utVtoValAliv','utCampo12','utDescripcion12','utVtoHidrMang','utCampo13','utDescripcion13','utVtoValExf',
            'utCampo14','utDescripcion14','utVtoEstEsp','utCampo15','utDescripcion15','utVtoInspInt','utCampo16','utDescripcion16','utVtoInspExt',
            'utCampo17','utDescripcion17','utVtoModUn'
        ],
        compartimentos: [
            'utNumber','utText','utComNumber1','utCmpMinVol1','utCmpMaxvol1','utComIdtext1','utGroupname1','utComNumber2','utCmpMinVol2','utCmpMaxvol2','utComIdtext2','utGroupname2',
            'utComNumber3','utCmpMinVol3','utCmpMaxvol3','utComIdtext3','utGroupname3','utComNumber4','utCmpMinVol4','utCmpMaxvol4','utComIdtext4','utGroupname4',
            'utComNumber5','utCmpMinVol5','utCmpMaxvol5','utComIdtext5','utGroupname5','utComNumber6','utCmpMinVol6','utCmpMaxvol6','utComIdtext6','utGroupname6',
            'utComNumber7','utCmpMinVol7','utCmpMaxvol7','utComIdtext7','utGroupname7',
        ]
    }
    };
    return Constants;
  },
  true
);