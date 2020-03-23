/*!
 * Mars2D (MarsGIS for Leaflet)地图平台  
 * 版本信息：v2.0.2, hash值: 9f8a8da6b8194d425a97
 * 编译日期：2020-3-23 17:15:30     
 * 版权所有：Copyright by 火星科技 http://leaflet.marsgis.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["leaflet"], factory);
	else if(typeof exports === 'object')
		exports["L"] = factory(require("leaflet"));
	else
		root["L"] = factory(root["L"]);
})(window, mars2d_init);