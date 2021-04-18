require(["esri/map", "esri/layers/FeatureLayer", "esri/dijit/BasemapGallery", "esri/renderers/HeatmapRenderer", "esri/dijit/TimeSlider", "esri/tasks/Date",

"dojo/ready",
// "dojo/parser",
"dojo/on",


"dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/domReady!"], function(Map, FeatureLayer, BasemapGallery, HeatmapRenderer, TimeSlider, Date, ready, on) {
    

    var myMap = new Map("divMap", {
    basemap : "topo",
        center : [-8.5463, 42.8804],
        zoom: 14
           
    });      
      
    var featureLayer = new FeatureLayer ("https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1");

    var featureLayer1 = new FeatureLayer ("https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5");
      
    myMap.addLayer(featureLayer);    
    myMap.addLayer(featureLayer1);

    var mostrar = document.getElementById('junio');
    mostrar.addEventListener('click', mapaCalor);

    var mostrar1 = document.getElementById('julio');
    mostrar1.addEventListener('click', mapaCalor1);

    var mostrar2 = document.getElementById('agosto');
    mostrar2.addEventListener('click', mapaCalor2);

    var mostrar3 = document.getElementById('septiembre');
    mostrar3.addEventListener('click', mapaCalor3);

    var mostrar4 = document.getElementById('octubre');
    mostrar4.addEventListener('click', mapaCalor4);

    var mostrar5 = document.getElementById('noviembre');
    mostrar5.addEventListener('click', mapaCalor5);

    var mostrar6 = document.getElementById('diciembre');
    mostrar6.addEventListener('click', mapaCalor6);    

    function mapaCalor(){      
        
         console.log("Ejecuta")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";

    console.log(serviceURL)
        var heatmapFeatureLayerOptions = {
        
        colorStops: [
            { ratio: 0, color: "rgba(133, 193, 200, 0)" },
            { ratio: 0.08, color: "rgb(133, 193, 200)" },
            { ratio: 0.15, color: "rgb(144, 161, 190)"},
            { ratio: 0.23, color: "rgba(156, 129, 132)" },
            { ratio: 0.31, color: "rgb(167, 97, 170)" },
            { ratio: 0.38, color: "rgb(175, 73, 128)"},
            { ratio: 0.46, color: "rgba(184, 48, 85)" },
            { ratio: 0.54, color: "rgb(192, 24, 42)" },
            { ratio: 0.62, color: "rgb(200, 0, 0)"},
            { ratio: 0.69, color: "rgba(211, 51, 0)" },
            { ratio: 0.77, color: "rgb(222, 102, 0)" },
            { ratio: 0.85, color: "rgb(233, 153, 0)"},
            { ratio: 0.92, color: "rgb(244, 204, 0)"},
            { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 10,          
        outFields:"flujo_2019_06"
            // "flujo_2019_07",
            // "flujo_2019_08",
            // "flujo_2019_09",
            // "flujo_2019_10",
            // "flujo_2019_11",
            // "flujo_2019_12"
          
        };
        console.log(heatmapFeatureLayerOptions)
        var heatmapFeatureLayer = new FeatureLayer(serviceURL);
        var heatmapRenderer = new HeatmapRenderer(heatmapFeatureLayerOptions);
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
        
        colorStops: [
            { ratio: 0, color: "rgba(133, 193, 200, 0)" },
            { ratio: 0.08, color: "rgb(133, 193, 200)" },
            { ratio: 0.15, color: "rgb(144, 161, 190)"},
            { ratio: 0.23, color: "rgba(156, 129, 132)" },
            { ratio: 0.31, color: "rgb(167, 97, 170)" },
            { ratio: 0.38, color: "rgb(175, 73, 128)"},
            { ratio: 0.46, color: "rgba(184, 48, 85)" },
            { ratio: 0.54, color: "rgb(192, 24, 42)" },
            { ratio: 0.62, color: "rgb(200, 0, 0)"},
            { ratio: 0.69, color: "rgba(211, 51, 0)" },
            { ratio: 0.77, color: "rgb(222, 102, 0)" },
            { ratio: 0.85, color: "rgb(233, 153, 0)"},
            { ratio: 0.92, color: "rgb(244, 204, 0)"},
            { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 50,
        minPixelIntensity: 10,          
        outFields: "no_2019_06"
            // "no_2019_07",
            // "no_2019_08",
            // "no_2019_09",
            // "no_2019_10",
            // "no_2019_11",
            // "no_2019_12"
          
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1);
        var heatmapRenderer1 = new HeatmapRenderer(heatmapFeatureLayerOptions1);
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor1(){

   
         console.log("Ejecuta1")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 10,          
        field: [
            // "flujo_2019_06"
            "flujo_2019_07"
            // "flujo_2019_08",
            // "flujo_2019_09",
            // "flujo_2019_10",
            // "flujo_2019_11",
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL);
        var heatmapRenderer = new HeatmapRenderer(heatmapFeatureLayerOptions);
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 50,
        minPixelIntensity: 10,          
        field: [
            // "no_2019_06"
            "no_2019_07"
            // "no_2019_08",
            // "no_2019_09",
            // "no_2019_10",
            // "no_2019_11",
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1);
        var heatmapRenderer1 = new HeatmapRenderer(heatmapFeatureLayerOptions1);
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor2(){

    
         console.log("Ejecuta2")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 10,          
        field: [
            // "flujo_2019_06"
            // "flujo_2019_07",
            "flujo_2019_08"
            // "flujo_2019_09",
            // "flujo_2019_10",
            // "flujo_2019_11",
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL);
        var heatmapRenderer = new HeatmapRenderer(heatmapFeatureLayerOptions);
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 50,
        minPixelIntensity: 10,          
        field: [
            // "no_2019_06"
            // "no_2019_07",
            "no_2019_08"
            // "no_2019_09",
            // "no_2019_10",
            // "no_2019_11",
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1);
        var heatmapRenderer1 = new HeatmapRenderer(heatmapFeatureLayerOptions1);
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor3(){

    
         console.log("Ejecuta3")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 10,          
        field: [
            // "flujo_2019_06"
            // "flujo_2019_07",
            // "flujo_2019_08",
            "flujo_2019_09"
            // "flujo_2019_10",
            // "flujo_2019_11",
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL);
        var heatmapRenderer = new HeatmapRenderer(heatmapFeatureLayerOptions);
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 50,
        minPixelIntensity: 10,          
        field: [
            // "no_2019_06"
            // "no_2019_07",
            // "no_2019_08",
            "no_2019_09"
            // "no_2019_10",
            // "no_2019_11",
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1);
        var heatmapRenderer1 = new HeatmapRenderer(heatmapFeatureLayerOptions1);
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor4(){

    
         console.log("Ejecuta4")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 10,          
        field: [
            // "flujo_2019_06"
            // "flujo_2019_07",
            // "flujo_2019_08",
            // "flujo_2019_09",
            "flujo_2019_10"
            // "flujo_2019_11",
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL);
        var heatmapRenderer = new HeatmapRenderer(heatmapFeatureLayerOptions);
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 50,
        minPixelIntensity: 10,          
        field: [
            // "no_2019_06"
            // "no_2019_07",
            // "no_2019_08",
            // "no_2019_09",
            "no_2019_10"
            // "no_2019_11",
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1);
        var heatmapRenderer1 = new HeatmapRenderer(heatmapFeatureLayerOptions1);
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor5(){

    
         console.log("Ejecuta5")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 10,          
        field: [
            // "flujo_2019_06"
            // "flujo_2019_07",
            // "flujo_2019_08",
            // "flujo_2019_09",
            // "flujo_2019_10",
            "flujo_2019_11"
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL);
        var heatmapRenderer = new HeatmapRenderer(heatmapFeatureLayerOptions);
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 50,
        minPixelIntensity: 10,          
        field: [
            // "no_2019_06"
            // "no_2019_07",
            // "no_2019_08",
            // "no_2019_09",
            // "no_2019_10",
            "no_2019_11"
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1);
        var heatmapRenderer1 = new HeatmapRenderer(heatmapFeatureLayerOptions1);
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor6(){

    
         console.log("Ejecuta6")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 10,          
        field: [
            // "flujo_2019_06"
            // "flujo_2019_07",
            // "flujo_2019_08",
            // "flujo_2019_09",
            // "flujo_2019_10",
            // "flujo_2019_11",
            "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL);
        var heatmapRenderer = new HeatmapRenderer(heatmapFeatureLayerOptions);
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
            colorStops: [
                { ratio: 0, color: "rgba(133, 193, 200, 0)" },
                { ratio: 0.08, color: "rgb(133, 193, 200)" },
                { ratio: 0.15, color: "rgb(144, 161, 190)"},
                { ratio: 0.23, color: "rgba(156, 129, 132)" },
                { ratio: 0.31, color: "rgb(167, 97, 170)" },
                { ratio: 0.38, color: "rgb(175, 73, 128)"},
                { ratio: 0.46, color: "rgba(184, 48, 85)" },
                { ratio: 0.54, color: "rgb(192, 24, 42)" },
                { ratio: 0.62, color: "rgb(200, 0, 0)"},
                { ratio: 0.69, color: "rgba(211, 51, 0)" },
                { ratio: 0.77, color: "rgb(222, 102, 0)" },
                { ratio: 0.85, color: "rgb(233, 153, 0)"},
                { ratio: 0.92, color: "rgb(244, 204, 0)"},
                { ratio: 1, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 50,
        minPixelIntensity: 10,          
        field: [
            // "no_2019_06"
            // "no_2019_07",
            // "no_2019_08",
            // "no_2019_09",
            // "no_2019_10",
            // "no_2019_11",
            "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1);
        var heatmapRenderer1 = new HeatmapRenderer(heatmapFeatureLayerOptions1);
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

        

    // var basemapGallery = new BasemapGallery({
    //       map: myMap,
    //       basemapsGroup: { owner: "esri", title: "Community Basemaps" }
    //   }, "BasemapGallery")
    //   basemapGallery.add(basemapGallery);
    
})