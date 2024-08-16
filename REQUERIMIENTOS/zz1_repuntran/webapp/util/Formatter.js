sap.ui.define(
  [],
  function () {
    "use strict";

    let Formatter = {
      isNavigated: function (sNavigatedItemId, sItemId) {
        return sNavigatedItemId === sItemId;
      },
      detailFechaDesde: function(si18nLabel, sLabel,sValue){
        if(sLabel && sLabel != ""){
            if(!isNaN(sValue) && sValue !=""){
                let aDigits = (""+sValue).split("");
                let sDate = `${aDigits[0]}${aDigits[1]}${aDigits[2]}${aDigits[3]}/${aDigits[4]}${aDigits[5]}/${aDigits[6]}${aDigits[7]}`
                return  si18nLabel +": " + sDate;
            } else{
                return si18nLabel +": " + sValue;
            }
        }else{
            return "";
        }
      },
      formatItemForExcelDownload: function(oItem){
        oItem.CreDate = this.dateObjectToString(oItem.CreDate);
        oItem.FechaDesdeItc1= this.intDateToString(oItem.FechaDesdeItc1);
        oItem.FechaDesdeItc2=this.intDateToString(oItem.FechaDesdeItc2);
        oItem.FechaDesdeItc3=this.intDateToString(oItem.FechaDesdeItc3);
        oItem.VtoCargGral=this.intDateToString(oItem.VtoCargGral);
        oItem.VtoCargPel=this.intDateToString(oItem.VtoCargPel);
        oItem.VtoEstEsp=this.intDateToString(oItem.VtoEstEsp);
        oItem.VtoHidrMang=this.intDateToString(oItem.VtoHidrMang);
        oItem.VtoInspExt=this.intDateToString(oItem.VtoInspExt);
        oItem.VtoInspInt=this.intDateToString(oItem.VtoInspInt);
        oItem.VtoItcRg20801=this.intDateToString(oItem.VtoItcRg20801);
        oItem.VtoItcRg20802=this.intDateToString(oItem.VtoItcRg20802);
        oItem.VtoItcRg20803=this.intDateToString(oItem.VtoItcRg20803);
        oItem.VtoMas=this.intDateToString(oItem.VtoMas);
        oItem.VtoModUn=this.intDateToString(oItem.VtoModUn);
        oItem.VtoPrqTq=this.intDateToString(oItem.VtoPrqTq);
        oItem.VtoRuta=this.intDateToString(oItem.VtoRuta);
        oItem.VtoSeg=this.intDateToString(oItem.VtoSeg);
        oItem.VtoSegCarg=this.intDateToString(oItem.VtoSegCarg);
        oItem.VtoValAliv=this.intDateToString(oItem.VtoValAliv);
        oItem.VtoValExf=this.intDateToString(oItem.VtoValExf);
        return oItem;
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
      DateToInt: function(oDate){
        if (oDate != "" && oDate != null) {
            let sReturnString;
            if( (oDate.getUTCMonth() + 1) <=10 || oDate.getUTCDate()<=10){
                if((oDate.getUTCMonth() + 1) <=10 && oDate.getUTCDate()<=10){
                    sReturnString = `${oDate.getUTCFullYear()}0${oDate.getUTCMonth() + 1}0${oDate.getUTCDate()}`
                } else{
                    if(oDate.getUTCDate()<=10){
                        sReturnString = `${oDate.getUTCFullYear()}${oDate.getUTCMonth() + 1}0${oDate.getUTCDate()}`
                    } else{
                        sReturnString = `${oDate.getUTCFullYear()}0${oDate.getUTCMonth() + 1}${oDate.getUTCDate()}`
                    }
                }
            } else{
                sReturnString = `${oDate.getUTCFullYear()}${oDate.getUTCMonth() + 1}${oDate.getUTCDate()}`;
            }
            return sReturnString;
        } else {
            return null;
        }
      },
      dateObjectToString: function(oDate){ 
            if(oDate && oDate.getDate){
                let sReturn = `${oDate.getDate()}/${oDate.getMonth()+1}/${oDate.getFullYear()}`;
                return sReturn;
            }else{
                return oDate
            }
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
          returnStatus = "Deshabilitado";
        } else {
          returnStatus = "Habilitado";
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
        if (sState == "S" || sState == "Y") {
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
        if (sState == "S" || sState == "Y") {
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
          case 0:
          case "":
          case null:
            sText = "Disponible";
            break;
          case "1":
          case 1:
            sText = "No Disponible";
            break;
          case "2":
          case 2:
            sText = "A Borrar";
            break;
          case "3":
          case 3:
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
          case 0:
          case "":
          case null:
            sState = "Success";
            break;
          case "1":
          case 1:
            sState = "Warning";
            break;
          case "2":
          case 2:
            sState = "Error";
            break;
          case "3":
          case 3:
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
          case 1:
            sClass = "Máquina motriz (sin capacidad de carga)";
            break;
          case "2":
          case 2:
            sClass = "Remolque (sin motor)";
            break;
          case "3":
          case 3:
            sClass = "Unidad individual con motor y capacidad de carga";
            break;
          case "4":
          case 4:
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
    };
    return Formatter;
  },
  true
);
