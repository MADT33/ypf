sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","ypf/zlog12freeld4/util/Formatter"],function(e,t,o,n){"use strict";return e.extend("com.SAP.YPF.controller.BaseController",{formatter:n,getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},getTextFor:function(e){return this.getView().getModel("i18n").getResourceBundle().getText(e)},navTo:function(e,t,o){this.getRouter().navTo(e,t,o)},getRouter:function(){return o.getRouterFor(this)},onNavToLists:function(){this.getRouter().navTo("lists",{},true)},onNavBack:function(){var e=t.getInstance().getPreviousHash();if(e!==undefined){window.history.back()}else{this.getRouter().navTo("lists",{},true)}}})});