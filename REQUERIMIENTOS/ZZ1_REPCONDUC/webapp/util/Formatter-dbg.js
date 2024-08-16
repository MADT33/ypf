sap.ui.define(
  [],
  function () {
    "use strict";

    let Formatter = {
      isNavigated: function (sNavigatedItemId, sItemId) {
        return sNavigatedItemId === sItemId;
      },
      /**
       * formatter for vehicle status
       * @param {*} Status 
       */
      formatVehicleStatusToText: function (Status) {
        let returnStatus;
        if (Status == "0") {
          returnStatus = "Disponible";
        } else if (Status == "1") {
          returnStatus = "No disponible";
        } else {
          returnStatus = "A Borrar";
        }
        return returnStatus;
      },
      formatDriverStatusToText: function (Status) {
        let returnStatus;
        if (Status == "1") {
          returnStatus = "No disponible";
        } else {
          returnStatus = "Disponible";
        }
        return returnStatus;
      },
      formatDriverStatusToState: function (Status) {
        let returnStatus;
        if (Status == "1") {
          returnStatus = "Error";
        } else {
          returnStatus = "Success";
        }
        return returnStatus;
      },
      /** funcion que transforma los strings S y N en texto
       * 
       * @param {*} sState String with N/S values
       */
      formatStringBooleansToText: function(sState){
        let sReturnText;
        if (sState == "S") {
          sReturnText = "Si";
        } else {
          sReturnText = "No";
        }
        return sReturnText;
      },
      /** funcion que transforma los strings S y N
       * 
       * @param {*} sState String with N/S values
       */
      formatStringBooleansToState: function(sState){
        let sReturnState;
        if (sState == "S") {
          sReturnState = "Success";
        } else {
          sReturnState = "Error";
        }
        return sReturnState;
      },
      UT_setAvailabilityText: function (nStatus) {
        let sText;

        switch (nStatus) {
          case "0":
            sText = "Disponible";
            break;
          case "1":
            sText = "No Disponible";
            break;
          case "2":
            sText = "A Borrar";
            break;
          case "3":
            sText = "Preliminar";
            break;
          default:
            sText = "Desconocido";
        }

        return sText;
      },

      UT_setAvailabilityState: function (nStatus) {
        let sState;

        switch (nStatus) {
          case "0":
            sState = "Success";
            break;
          case "1":
            sState = "Warning";
            break;
          case "2":
            sState = "Error";
            break;
          case "3":
            sState = "Warning";
            break;
          default:
              sState = "Warning"
        }

        return sState;
      },
      /**
       * UT transport mode key to text
       */
      setTransportMode: function (nMode) {
        let sMode;

        switch (nMode) {
          case "1":
            sMode = "Carretera";
            break;
          case "2":
            sMode = "Ferrocarril";
            break;
          case "3":
            sMode = "Mar";
            break;
          case "4":
            sMode = "Gabarra";
            break;
          case "5":
            sMode = "Pipeline";
            break;
          case 1:
            sMode = "Carretera";
            break;
          case 2:
            sMode = "Ferrocarril";
            break;
          case 3:
            sMode = "Mar";
            break;
          case 4:
            sMode = "Gabarra";
            break;
          case 5:
            sMode = "Pipeline";
            break;
        }

        return sMode;
      },
      /**
       * UT Class key to text
       * @param {*} nClass 
       */
      UT_setClass: function (nClass) {
        let sClass;
        switch (nClass) {
          case "1":
            sClass = "Máquina motriz (sin capacidad de carga)";
            break;
          case "2":
            sClass = "Remolque (sin motor)";
            break;
          case "3":
            sClass = "Unidad individual con motor y capacidad de carga";
            break;
          case "4":
            sClass =
              "Otras unidades que sostienen peso (sin capacidad de carga)";
            break;
        }
        return sClass;
      },
      /**
       * driver status key to text value
       * @param {*} nStatus 
       */
      isAvailableDriverText: function (nStatus) {
        return nStatus == "1" ? "Disponible" : "No disponible";
      },
      /**
       * driver status key to state value
       * @param {*} nStatus 
       */
      isAvailableDriverState: function (nStatus) {
        return nStatus == "1" ? "Success" : "Error";
      },
      /**
       * vehicle status key to state value
       * @param {*} nStatus 
       */
      isAvailableVehicleState: function (nStatus) {
        let returnStatus;
        if (nStatus == "0") {
          returnStatus = "Success";
        } else if (nStatus == "1") {
          returnStatus = "Warning";
        } else if (nStatus == "2") {
          returnStatus = "Error";
        }
        return returnStatus;
      },
      DateToInt: function(oDate){
        if (oDate != "" && oDate != null) {
            let sReturnString;
            if( (oDate.getMonth() + 1) < 10 || oDate.getDate()< 10){
                if((oDate.getMonth() + 1) < 10 && oDate.getDate()< 10){
                    sReturnString = `${oDate.getFullYear()}0${oDate.getMonth() + 1}0${oDate.getDate()}`
                } else{
                    if(oDate.getDate()< 10){
                        sReturnString = `${oDate.getFullYear()}${oDate.getMonth() + 1}0${oDate.getDate()}`
                    } else{
                        sReturnString = `${oDate.getFullYear()}0${oDate.getMonth() + 1}${oDate.getDate()}`
                    }
                }
            } else{
                sReturnString = `${oDate.getFullYear()}${oDate.getMonth() + 1}${oDate.getDate()}`;
            }
            return sReturnString;
        } else {
            return null;
        }
      },
      isDateExpired: function (sDate) {
        // Esta función anclada al prototype de Date permite añadir días a un dato del tipo Date
        Date.prototype.addDays = function (days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };

        let actualDate = new Date();
        let paramDate = new Date(sDate);
        let sState;

        if (paramDate > actualDate && paramDate < actualDate.addDays(30)) {
          sState = "Warning";
        } else if (paramDate < actualDate) {
          sState = "Error";
        } else {
          sState = "Success";
        }
        return sState;
      },
      intDateToString: function(sIntDate){
        if(!isNaN(sIntDate) && sIntDate !=""){
            let aDigits = (""+sIntDate).split("");
            let sDate = `${aDigits[0]}${aDigits[1]}${aDigits[2]}${aDigits[3]}/${aDigits[4]}${aDigits[5]}/${aDigits[6]}${aDigits[7]}`
            return sDate;
        } else{
            return sIntDate;
        }
      },
      formatItemForExcelDownload(oItem){
          oItem.ValidFromZCO1 = this.intDateToString(oItem.ValidFromZCO1);
          oItem.ValidFromZCO2 = this.intDateToString(oItem.ValidFromZCO2);
          oItem.ValidFromZCO3 = this.intDateToString(oItem.ValidFromZCO3);
          oItem.ValidFromZCO4 = this.intDateToString(oItem.ValidFromZCO4);
          oItem.ValidFromZCO5 = this.intDateToString(oItem.ValidFromZCO5);
          oItem.ValidFromZCO6 = this.intDateToString(oItem.ValidFromZCO6);
          oItem.ValidFromZCO7 = this.intDateToString(oItem.ValidFromZCO7);
          oItem.ValidFromZCO8 = this.intDateToString(oItem.ValidFromZCO8);
          oItem.ValidFromZCO9 = this.intDateToString(oItem.ValidFromZCO9);
          oItem.ValidFromZAO1 = this.intDateToString(oItem.ValidFromZAO1);
          oItem.ValidFromZAO2 = this.intDateToString(oItem.ValidFromZAO2);
          oItem.ValidFromZAO3 = this.intDateToString(oItem.ValidFromZAO3);
          oItem.ValidFromZAO4 = this.intDateToString(oItem.ValidFromZAO4);
          oItem.ValidFromZAO5 = this.intDateToString(oItem.ValidFromZAO5);
          oItem.ValidFromZAO6 = this.intDateToString(oItem.ValidFromZAO6);
          oItem.ValidFromZAO7 = this.intDateToString(oItem.ValidFromZA76);
          oItem.ValidFromZAO8 = this.intDateToString(oItem.ValidFromZAO8);
          oItem.ValidFromZAO9 = this.intDateToString(oItem.ValidFromZAO9);
          oItem.ValidToZCO1 = this.intDateToString(oItem.ValidToZCO1);
          oItem.ValidToZCO2 = this.intDateToString(oItem.ValidToZCO2);
          oItem.ValidToZCO3 = this.intDateToString(oItem.ValidToZCO3);
          oItem.ValidToZCO4 = this.intDateToString(oItem.ValidToZCO4);
          oItem.ValidToZCO5 = this.intDateToString(oItem.ValidToZCO5);
          oItem.ValidToZCO6 = this.intDateToString(oItem.ValidToZCO6);
          oItem.ValidToZCO7 = this.intDateToString(oItem.ValidToZCO7);
          oItem.ValidToZCO8 = this.intDateToString(oItem.ValidToZCO8);
          oItem.ValidToZCO9 = this.intDateToString(oItem.ValidToZCO9);
          oItem.ValidToZAO1 = this.intDateToString(oItem.ValidToZAO1);
          oItem.ValidToZAO2 = this.intDateToString(oItem.ValidToZAO2);
          oItem.ValidToZAO3 = this.intDateToString(oItem.ValidToZAO3);
          oItem.ValidToZAO4 = this.intDateToString(oItem.ValidToZAO4);
          oItem.ValidToZAO5 = this.intDateToString(oItem.ValidToZAO5);
          oItem.ValidToZAO6 = this.intDateToString(oItem.ValidToZAO6);
          oItem.ValidToZAO7 = this.intDateToString(oItem.ValidToZA76);
          oItem.ValidToZAO8 = this.intDateToString(oItem.ValidToZAO8);
          oItem.ValidToZAO9 = this.intDateToString(oItem.ValidToZAO9);
        return oItem;
      },
      dateObjectToString(oDate){ 
            if(oDate){
                let sReturn = `${oDate.getDate()}/${oDate.getMonth()+1}/${oDate.getFullYear()}`;
                return sReturn;
            }
        },
    
    };
    return Formatter;
  },
  true
);
