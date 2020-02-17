/*!
 * Mars2D (MarsGIS for Leaflet)地图平台  
 * 版本信息：v2.0.1, hash值: ff457677d0205df8efa3
 * 编译日期：2020-2-17 20:26:21     
 * 版权所有：Copyright by 火星科技 http://leaflet.marsgis.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["L"] = factory(require("jquery"));
	else
		root["L"] = factory(root["jQuery"]);
		
})(window,mars2dFactory);