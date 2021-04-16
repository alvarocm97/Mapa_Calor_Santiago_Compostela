require(["esri/map", "esri/layers/FeatureLayer", "esri/dijit/BasemapGallery",

"dojo/ready",
// "dojo/parser",
"dojo/on",

"dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/domReady!"], function(Map, FeatureLayer, BasemapGallery) {
    

    var myMap = new Map("divMap", {
    basemap : "topo",
        center : [-8.5463, 42.8804],
        zoom: 14
           
    });      
      
    var featureLayer = new FeatureLayer ("https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1");

    var featureLayer1 = new FeatureLayer ("https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5");
      
    myMap.addLayer(featureLayer);    
    myMap.addLayer(featureLayer1);    

    // var basemapGallery = new BasemapGallery({
    //       map: myMap,
    //       basemapsGroup: { owner: "esri", title: "Community Basemaps" }
    //   }, "BasemapGallery")
    //   basemapGallery.add(basemapGallery);
    
})