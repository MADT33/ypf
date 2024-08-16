sap.ui.define([],function(){"use strict";let t={isNavigated:function(t,i){return t===i},formatVehicleStatusToText:function(t){let i;if(t=="0"){i="Disponible"}else if(t=="1"){i="No disponible"}else{i="A Borrar"}return i},formatDriverStatusToText:function(t){let i;if(t=="1"){i="No disponible"}else{i="Disponible"}return i},formatDriverStatusToState:function(t){let i;if(t=="1"){i="Error"}else{i="Success"}return i},formatStringBooleansToText:function(t){let i;if(t=="S"){i="Si"}else{i="No"}return i},formatStringBooleansToState:function(t){let i;if(t=="S"){i="Success"}else{i="Error"}return i},UT_setAvailabilityText:function(t){let i;switch(t){case"0":i="Disponible";break;case"1":i="No Disponible";break;case"2":i="A Borrar";break;case"3":i="Preliminar";break;default:i="Desconocido"}return i},UT_setAvailabilityState:function(t){let i;switch(t){case"0":i="Success";break;case"1":i="Warning";break;case"2":i="Error";break;case"3":i="Warning";break;default:i="Warning"}return i},setTransportMode:function(t){let i;switch(t){case"1":i="Carretera";break;case"2":i="Ferrocarril";break;case"3":i="Mar";break;case"4":i="Gabarra";break;case"5":i="Pipeline";break;case 1:i="Carretera";break;case 2:i="Ferrocarril";break;case 3:i="Mar";break;case 4:i="Gabarra";break;case 5:i="Pipeline";break}return i},UT_setClass:function(t){let i;switch(t){case"1":i="Máquina motriz (sin capacidad de carga)";break;case"2":i="Remolque (sin motor)";break;case"3":i="Unidad individual con motor y capacidad de carga";break;case"4":i="Otras unidades que sostienen peso (sin capacidad de carga)";break}return i},isAvailableDriverText:function(t){return t=="1"?"Disponible":"No disponible"},isAvailableDriverState:function(t){return t=="1"?"Success":"Error"},isAvailableVehicleState:function(t){let i;if(t=="0"){i="Success"}else if(t=="1"){i="Warning"}else if(t=="2"){i="Error"}return i},DateToInt:function(t){if(t!=""&&t!=null){let i;if(t.getMonth()+1<10||t.getDate()<10){if(t.getMonth()+1<10&&t.getDate()<10){i=`${t.getFullYear()}0${t.getMonth()+1}0${t.getDate()}`}else{if(t.getDate()<10){i=`${t.getFullYear()}${t.getMonth()+1}0${t.getDate()}`}else{i=`${t.getFullYear()}0${t.getMonth()+1}${t.getDate()}`}}}else{i=`${t.getFullYear()}${t.getMonth()+1}${t.getDate()}`}return i}else{return null}},isDateExpired:function(t){Date.prototype.addDays=function(t){var i=new Date(this.valueOf());i.setDate(i.getDate()+t);return i};let i=new Date;let e=new Date(t);let a;if(e>i&&e<i.addDays(30)){a="Warning"}else if(e<i){a="Error"}else{a="Success"}return a},intDateToString:function(t){if(!isNaN(t)&&t!=""){let i=(""+t).split("");let e=`${i[0]}${i[1]}${i[2]}${i[3]}/${i[4]}${i[5]}/${i[6]}${i[7]}`;return e}else{return t}},formatItemForExcelDownload(t){t.ValidFromZCO1=this.intDateToString(t.ValidFromZCO1);t.ValidFromZCO2=this.intDateToString(t.ValidFromZCO2);t.ValidFromZCO3=this.intDateToString(t.ValidFromZCO3);t.ValidFromZCO4=this.intDateToString(t.ValidFromZCO4);t.ValidFromZCO5=this.intDateToString(t.ValidFromZCO5);t.ValidFromZCO6=this.intDateToString(t.ValidFromZCO6);t.ValidFromZCO7=this.intDateToString(t.ValidFromZCO7);t.ValidFromZCO8=this.intDateToString(t.ValidFromZCO8);t.ValidFromZCO9=this.intDateToString(t.ValidFromZCO9);t.ValidFromZAO1=this.intDateToString(t.ValidFromZAO1);t.ValidFromZAO2=this.intDateToString(t.ValidFromZAO2);t.ValidFromZAO3=this.intDateToString(t.ValidFromZAO3);t.ValidFromZAO4=this.intDateToString(t.ValidFromZAO4);t.ValidFromZAO5=this.intDateToString(t.ValidFromZAO5);t.ValidFromZAO6=this.intDateToString(t.ValidFromZAO6);t.ValidFromZAO7=this.intDateToString(t.ValidFromZA76);t.ValidFromZAO8=this.intDateToString(t.ValidFromZAO8);t.ValidFromZAO9=this.intDateToString(t.ValidFromZAO9);t.ValidToZCO1=this.intDateToString(t.ValidToZCO1);t.ValidToZCO2=this.intDateToString(t.ValidToZCO2);t.ValidToZCO3=this.intDateToString(t.ValidToZCO3);t.ValidToZCO4=this.intDateToString(t.ValidToZCO4);t.ValidToZCO5=this.intDateToString(t.ValidToZCO5);t.ValidToZCO6=this.intDateToString(t.ValidToZCO6);t.ValidToZCO7=this.intDateToString(t.ValidToZCO7);t.ValidToZCO8=this.intDateToString(t.ValidToZCO8);t.ValidToZCO9=this.intDateToString(t.ValidToZCO9);t.ValidToZAO1=this.intDateToString(t.ValidToZAO1);t.ValidToZAO2=this.intDateToString(t.ValidToZAO2);t.ValidToZAO3=this.intDateToString(t.ValidToZAO3);t.ValidToZAO4=this.intDateToString(t.ValidToZAO4);t.ValidToZAO5=this.intDateToString(t.ValidToZAO5);t.ValidToZAO6=this.intDateToString(t.ValidToZAO6);t.ValidToZAO7=this.intDateToString(t.ValidToZA76);t.ValidToZAO8=this.intDateToString(t.ValidToZAO8);t.ValidToZAO9=this.intDateToString(t.ValidToZAO9);return t},dateObjectToString(t){if(t){let i=`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`;return i}}};return t},true);