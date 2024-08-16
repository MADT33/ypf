sap.ui.define([
    "ypf/zlog66freeld4/controller/BaseController",
    "ypf/zlog66freeld4/util/Constants",
    "ypf/zlog66freeld4/util/Formatter",
    "ypf/zlog66freeld4/util/Commons",
    "ypf/zlog66freeld4/util/Services",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Constants, Formatter, Commons, Services, JSONModel) {
		"use strict";

		return Controller.extend("ypf.zlog66freeld4.controller.UTDetail", {
			onInit: function () {
                this.getRouter().getRoute(Constants.targets.UT_DETAIL).attachPatternMatched(this._onObjectMatched, this);
            },
            /**
             * Binds the view to the object path and expands the aggregated line items.
             * @function
             * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
             * @private
             */
            _onObjectMatched: function (oEvent) {
                this.sCurrentObjectId = oEvent.getParameter("arguments").UTId;
                
                let oItem = this.getModel(Constants.paths.UTS_PATH).getProperty("/"+ this.sCurrentObjectId);
                oItem.CreDate= this.formatter.dateObjectToString(oItem.CreDate);
                oItem.Compartimentos = [];
                if(oItem.CmpMinvol1 != 0 || oItem.CmpMaxvol1 != 0 || oItem.ComIdtext1 != "" || oItem.Groupname1 != ""){
                    oItem.Compartimentos.push({
                        COM_NUMBER: oItem.ComNumber1,
                        CmpMinvol: oItem.CmpMinvol1,
                        CmpMaxvol: oItem.CmpMaxvol1,
                        ComIdtext: oItem.ComIdtext1,
                        Groupname: oItem.Groupname1,
                        labelComNumber: this.getTextFor("labelUTComNumber1"),
                        labelCmpMinVol: this.getTextFor("labelUTCmpMinVol1"),
                        labelCmpMaxvol: this.getTextFor("labelUTCmpMaxVol1"),
                        labelComIdtext: this.getTextFor("labelUTComIdText1"),
                        labelGroupname: this.getTextFor("labelUTGroupname1"),
                    })
                }
                if(oItem.CmpMinvol2 != 0 || oItem.CmpMaxvol2 != 0 || oItem.ComIdtext2 != "" || oItem.Groupname2 != ""){
                    oItem.Compartimentos.push({
                        COM_NUMBER: oItem.ComNumber2,
                        CmpMinvol: oItem.CmpMinvol2,
                        CmpMaxvol: oItem.CmpMaxvol2,
                        ComIdtext: oItem.ComIdtext2,
                        Groupname: oItem.Groupname2,
                        labelComNumber: this.getTextFor("labelUTComNumber2"),
                        labelCmpMinVol: this.getTextFor("labelUTCmpMinVol2"),
                        labelCmpMaxvol: this.getTextFor("labelUTCmpMaxVol2"),
                        labelComIdtext: this.getTextFor("labelUTComIdText2"),
                        labelGroupname: this.getTextFor("labelUTGroupname2"),
                    })
                }
                if(oItem.CmpMinvol3 != 0 || oItem.CmpMaxvol3 != 0 || oItem.ComIdtext3 != "" || oItem.Groupname3 != ""){
                    oItem.Compartimentos.push({
                        COM_NUMBER: oItem.ComNumber3,
                        CmpMinvol: oItem.CmpMinvol3,
                        CmpMaxvol: oItem.CmpMaxvol3,
                        ComIdtext: oItem.ComIdtext3,
                        Groupname: oItem.Groupname3,
                        labelComNumber: this.getTextFor("labelUTComNumber3"),
                        labelCmpMinVol: this.getTextFor("labelUTCmpMinVol3"),
                        labelCmpMaxvol: this.getTextFor("labelUTCmpMaxVol3"),
                        labelComIdtext: this.getTextFor("labelUTComIdText3"),
                        labelGroupname: this.getTextFor("labelUTGroupname3"),
                    })
                }
                if(oItem.CmpMinvol4 != 0 || oItem.CmpMaxvol4 != 0 || oItem.ComIdtext4 != "" || oItem.Groupname4 != ""){
                    oItem.Compartimentos.push({
                        COM_NUMBER: oItem.ComNumber4,
                        CmpMinvol: oItem.CmpMinvol4,
                        CmpMaxvol: oItem.CmpMaxvol4,
                        ComIdtext: oItem.ComIdtext4,
                        Groupname: oItem.Groupname4,
                        labelComNumber: this.getTextFor("labelUTComNumber4"),
                        labelCmpMinVol: this.getTextFor("labelUTCmpMinVol4"),
                        labelCmpMaxvol: this.getTextFor("labelUTCmpMaxVol4"),
                        labelComIdtext: this.getTextFor("labelUTComIdText4"),
                        labelGroupname: this.getTextFor("labelUTGroupname4"),
                    })
                }
                if(oItem.CmpMinvol5 != 0 || oItem.CmpMaxvol5 != 0 || oItem.ComIdtext5 != "" || oItem.Groupname5 != ""){
                    oItem.Compartimentos.push({
                        COM_NUMBER: oItem.ComNumber5,
                        CmpMinvol: oItem.CmpMinvol5,
                        CmpMaxvol: oItem.CmpMaxvol5,
                        ComIdtext: oItem.ComIdtext5,
                        Groupname: oItem.Groupname5,
                        labelComNumber: this.getTextFor("labelUTComNumber5"),
                        labelCmpMinVol: this.getTextFor("labelUTCmpMinVol5"),
                        labelCmpMaxvol: this.getTextFor("labelUTCmpMaxVol5"),
                        labelComIdtext: this.getTextFor("labelUTComIdText5"),
                        labelGroupname: this.getTextFor("labelUTGroupname5"),
                    })
                }
                if(oItem.CmpMinvol6 != 0 || oItem.CmpMaxvol6 != 0 || oItem.ComIdtext6 != "" || oItem.Groupname6 != ""){
                    oItem.Compartimentos.push({
                        COM_NUMBER: oItem.ComNumber6,
                        CmpMinvol: oItem.CmpMinvol6,
                        CmpMaxvol: oItem.CmpMaxvol6,
                        ComIdtext: oItem.ComIdtext6,
                        Groupname: oItem.Groupname6,
                        labelComNumber: this.getTextFor("labelUTComNumber6"),
                        labelCmpMinVol: this.getTextFor("labelUTCmpMinVol6"),
                        labelCmpMaxvol: this.getTextFor("labelUTCmpMaxVol6"),
                        labelComIdtext: this.getTextFor("labelUTComIdText6"),
                        labelGroupname: this.getTextFor("labelUTGroupname6"),
                    })
                }
                if(oItem.CmpMinvol7 != 0 || oItem.CmpMaxvol7 != 0 || oItem.ComIdtext7 != "" || oItem.Groupname7 != ""){
                    oItem.Compartimentos.push({
                        COM_NUMBER: oItem.ComNumber7,
                        CmpMinvol: oItem.CmpMinvol7,
                        CmpMaxvol: oItem.CmpMaxvol7,
                        ComIdtext: oItem.ComIdtext7,
                        Groupname: oItem.Groupname7,
                        labelComNumber: this.getTextFor("labelUTComNumber7"),
                        labelCmpMinVol: this.getTextFor("labelUTCmpMinVol7"),
                        labelCmpMaxvol: this.getTextFor("labelUTCmpMaxVol7"),
                        labelComIdtext: this.getTextFor("labelUTComIdText7"),
                        labelGroupname: this.getTextFor("labelUTGroupname7"),
                    })
                }
                oItem.Habilitaciones = [];

                if(oItem.Campo1 != "" || oItem.Descripcion1 != "" || (oItem.FechaDesdeItc1 != "0000-00-00" && oItem.FechaDesdeItc1 != "") ||  (oItem.VtoItcRg20801 != "0000-00-00" && oItem.VtoItcRg20801 != "")){
                   oItem.Habilitaciones.push(
                    {
                        Campo: oItem.Campo1,
                        Descripcion: oItem.Descripcion1,
                        FechaDesde: oItem.FechaDesdeItc1,
                        Vencimiento: this.formatter.intDateToString(oItem.VtoItcRg20801),
                        labelCampo: this.getTextFor("labelUTCampo1"),
                        labelDescripcion: this.getTextFor("labelUTDescripcion1"),
                        labelFechaDesde: this.getTextFor("labelUTFechaDesdeItc1"),
                        labelVencimiento: this.getTextFor("labelUTVtoItcRg20801")
                    }
                   ); 
                }
                if(oItem.Campo2 != "" || oItem.Descripcion2 != "" || (oItem.FechaDesdeItc2 != "0000-00-00" && oItem.FechaDesdeItc2 != "") ||  (oItem.VtoItcRg20802 != "0000-00-00" && oItem.VtoItcRg20802 != "")){
                    oItem.Habilitaciones.push(
                     {
                         Campo: oItem.Campo2,
                         Descripcion: oItem.Descripcion2,
                         FechaDesde: oItem.FechaDesdeItc2,
                         Vencimiento: this.formatter.intDateToString(oItem.VtoItcRg20802),
                         labelCampo: this.getTextFor("labelUTCampo2"),
                         labelDescripcion: this.getTextFor("labelUTDescripcion2"),
                         labelFechaDesde: this.getTextFor("labelUTFechaDesdeItc2"),
                         labelVencimiento: this.getTextFor("labelUTVtoItcRg20802")
                     }
                    ); 
                 }
                if(oItem.Campo3 != "" || oItem.Descripcion3 != "" || (oItem.FechaDesdeItc3 != "0000-00-00" && oItem.FechaDesdeItc3 != "") ||  (oItem.VtoItcRg20803 != "0000-00-00" && oItem.VtoItcRg20803 != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo3,
                            Descripcion: oItem.Descripcion3,
                            FechaDesde: oItem.FechaDesdeItc3,
                            Vencimiento: this.formatter.intDateToString(oItem.VtoItcRg20803),
                            labelCampo: this.getTextFor("labelUTCampo3"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion3"),
                            labelFechaDesde: this.getTextFor("labelUTFechaDesdeItc3"),
                            labelVencimiento: this.getTextFor("labelUTVtoItcRg20803")
                        }
                    ); 
                }
                if(oItem.Campo4 != "" || oItem.Descripcion4 != "" || (oItem.VtoCargGral != "0000-00-00" && oItem.VtoCargGral != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo4,
                            Descripcion: oItem.Descripcion4,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoCargGral),
                            labelCampo: this.getTextFor("labelUTCampo4"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion4"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoCargGral")
                        }
                    ); 
                }
                if(oItem.Campo5 != "" || oItem.Descripcion5 != "" || (oItem.VtoCargPel != "0000-00-00" && oItem.VtoCargPel != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo5,
                            Descripcion: oItem.Descripcion5,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoCargPel),
                            labelCampo: this.getTextFor("labelUTCampo5"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion5"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoCargPel")
                        }
                    ); 
                }
                if(oItem.Campo6 != "" || oItem.Descripcion6 != "" || (oItem.VtoMas != "0000-00-00" && oItem.VtoMas != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo6,
                            Descripcion: oItem.Descripcion6,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoMas),
                            labelCampo: this.getTextFor("labelUTCampo6"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion6"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoMas")
                        }
                    ); 
                }
                if(oItem.Campo7 != "" || oItem.Descripcion7 != "" || (oItem.VtoSeg != "0000-00-00" &&  oItem.VtoSeg != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo7,
                            Descripcion: oItem.Descripcion7,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoSeg),
                            labelCampo: this.getTextFor("labelUTCampo7"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion7"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoSeg")
                        }
                    ); 
                }
                if(oItem.Campo8 != "" || oItem.Descripcion8 != "" || (oItem.VtoSegCarg != "0000-00-00" &&  oItem.VtoSegCarg != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo8,
                            Descripcion: oItem.Descripcion8,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoSegCarg),
                            labelCampo: this.getTextFor("labelUTCampo8"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion8"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoSegCarg")
                        }
                    ); 
                }
                if(oItem.Campo9 != "" || oItem.Descripcion9 != "" || (oItem.VtoRuta != "0000-00-00" &&  oItem.VtoRuta != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo9,
                            Descripcion: oItem.Descripcion9,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoRuta),
                            labelCampo: this.getTextFor("labelUTCampo9"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion9"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoRuta")
                        }
                    ); 
                }
                if(oItem.Campo10 != "" || oItem.Descripcion10 != "" || (oItem.VtoPrqTq != "0000-00-00" &&  oItem.VtoPrqTq != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo10,
                            Descripcion: oItem.Descripcion10,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoPrqTq),
                            labelCampo: this.getTextFor("labelUTCampo10"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion10"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoPrqTq")
                        }
                    ); 
                }
                if(oItem.Campo11 != "" || oItem.Descripcion11 != "" || (oItem.VtoValAliv != "0000-00-00" &&  oItem.VtoValAliv != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo11,
                            Descripcion: oItem.Descripcion11,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoValAliv),
                            labelCampo: this.getTextFor("labelUTCampo11"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion11"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoValAliv")
                        }
                    ); 
                }
                if(oItem.Campo12 != "" || oItem.Descripcion12 != "" || (oItem.VtoHidrMang != "0000-00-00" &&  oItem.VtoHidrMang != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo12,
                            Descripcion: oItem.Descripcion12,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoHidrMang),
                            labelCampo: this.getTextFor("labelUTCampo12"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion12"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoHidrMang")
                        }
                    ); 
                }
                if(oItem.Campo13 != "" || oItem.Descripcion13 != "" || (oItem.VtoValExf != "0000-00-00" &&  oItem.VtoValExf != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo13,
                            Descripcion: oItem.Descripcion13,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoValExf),
                            labelCampo: this.getTextFor("labelUTCampo13"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion13"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoValExf")
                        }
                    ); 
                }
                if(oItem.Campo14 != "" || oItem.Descripcion14 != "" || (oItem.VtoEstEsp != "0000-00-00" &&  oItem.VtoEstEsp != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo14,
                            Descripcion: oItem.Descripcion14,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoEstEsp),
                            labelCampo: this.getTextFor("labelUTCampo14"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion14"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoEstEsp")
                        }
                    ); 
                }
                if(oItem.Campo15 != "" || oItem.Descripcion15 != "" ||  (oItem.VtoInspInt != "0000-00-00" &&  oItem.VtoInspInt != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo15,
                            Descripcion: oItem.Descripcion15,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoInspInt),
                            labelCampo: this.getTextFor("labelUTCampo15"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion15"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoInspInt")
                        }
                    ); 
                }
                if(oItem.Campo16 != "" || oItem.Descripcion16 != "" || (oItem.VtoInspExt != "0000-00-00" &&  oItem.VtoInspExt != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo16,
                            Descripcion: oItem.Descripcion16,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoInspExt),
                            labelCampo: this.getTextFor("labelUTCampo16"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion16"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoInspExt")
                        }
                    ); 
                }
                if(oItem.Campo17 != "" || oItem.Descripcion17 != "" || (oItem.VtoModUn != "0000-00-00" &&  oItem.VtoModUn != "")){
                    oItem.Habilitaciones.push(
                        {
                            Campo: oItem.Campo17,
                            Descripcion: oItem.Descripcion17,
                            FechaDesde: "",
                            Vencimiento: this.formatter.intDateToString(oItem.VtoModUn),
                            labelCampo: this.getTextFor("labelUTCampo17"),
                            labelDescripcion: this.getTextFor("labelUTDescripcion17"),
                            labelFechaDesde: "",
                            labelVencimiento: this.getTextFor("labelVtoModUn")
                        }
                    ); 
                }
                
                let oDetailModel = new JSONModel(oItem);
                this.setModel(oDetailModel,Constants.paths.UT_DETAIL_PATH);
            },
            onNavToTablesView: function(oEvent){
                this.getRouter().navTo("uTTable",{},true);
            }
		});
	});
