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
        var heatmapFeatureLayerOptions = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        // colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        colorStops: [
            { ratio: 0, color: "rgba(250, 0, 0, 0)" },
            { ratio: 0.6, color: "rgb(250, 0, 0)" },
            { ratio: 0.85, color: "rgb(250, 150, 0)"},
            { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            "flujo_2019_06"
            // "flujo_2019_07",
            // "flujo_2019_08",
            // "flujo_2019_09",
            // "flujo_2019_10",
            // "flujo_2019_11",
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL, heatmapFeatureLayerOptions);
        var heatmapRenderer = new HeatmapRenderer();
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        // colorStops: [
        //             { ratio: 0, color: "rgba(250, 0, 0, 0)" },
        //             { ratio: 0.6, color: "rgb(250, 0, 0)" },
        //             { ratio: 0.85, color: "rgb(250, 150, 0)"},
        //             { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 200,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            "no_2019_06"
            // "no_2019_07",
            // "no_2019_08",
            // "no_2019_09",
            // "no_2019_10",
            // "no_2019_11",
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1, heatmapFeatureLayerOptions1);
        var heatmapRenderer1 = new HeatmapRenderer();
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor1(){

   
         console.log("Ejecuta1")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        // colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        colorStops: [
            { ratio: 0, color: "rgba(250, 0, 0, 0)" },
            { ratio: 0.6, color: "rgb(250, 0, 0)" },
            { ratio: 0.85, color: "rgb(250, 150, 0)"},
            { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "flujo_2019_06"
            "flujo_2019_07"
            // "flujo_2019_08",
            // "flujo_2019_09",
            // "flujo_2019_10",
            // "flujo_2019_11",
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL, heatmapFeatureLayerOptions);
        var heatmapRenderer = new HeatmapRenderer();
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        // colorStops: [
        //             { ratio: 0, color: "rgba(250, 0, 0, 0)" },
        //             { ratio: 0.6, color: "rgb(250, 0, 0)" },
        //             { ratio: 0.85, color: "rgb(250, 150, 0)"},
        //             { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 200,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "no_2019_06"
            "no_2019_07"
            // "no_2019_08",
            // "no_2019_09",
            // "no_2019_10",
            // "no_2019_11",
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1, heatmapFeatureLayerOptions1);
        var heatmapRenderer1 = new HeatmapRenderer();
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor2(){

    
         console.log("Ejecuta2")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        // colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        colorStops: [
            { ratio: 0, color: "rgba(250, 0, 0, 0)" },
            { ratio: 0.6, color: "rgb(250, 0, 0)" },
            { ratio: 0.85, color: "rgb(250, 150, 0)"},
            { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "flujo_2019_06"
            // "flujo_2019_07",
            "flujo_2019_08"
            // "flujo_2019_09",
            // "flujo_2019_10",
            // "flujo_2019_11",
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL, heatmapFeatureLayerOptions);
        var heatmapRenderer = new HeatmapRenderer();
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        // colorStops: [
        //             { ratio: 0, color: "rgba(250, 0, 0, 0)" },
        //             { ratio: 0.6, color: "rgb(250, 0, 0)" },
        //             { ratio: 0.85, color: "rgb(250, 150, 0)"},
        //             { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 200,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "no_2019_06"
            // "no_2019_07",
            "no_2019_08"
            // "no_2019_09",
            // "no_2019_10",
            // "no_2019_11",
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1, heatmapFeatureLayerOptions1);
        var heatmapRenderer1 = new HeatmapRenderer();
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor3(){

    
         console.log("Ejecuta3")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        // colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        colorStops: [
            { ratio: 0, color: "rgba(250, 0, 0, 0)" },
            { ratio: 0.6, color: "rgb(250, 0, 0)" },
            { ratio: 0.85, color: "rgb(250, 150, 0)"},
            { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "flujo_2019_06"
            // "flujo_2019_07",
            // "flujo_2019_08",
            "flujo_2019_09"
            // "flujo_2019_10",
            // "flujo_2019_11",
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL, heatmapFeatureLayerOptions);
        var heatmapRenderer = new HeatmapRenderer();
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        // colorStops: [
        //             { ratio: 0, color: "rgba(250, 0, 0, 0)" },
        //             { ratio: 0.6, color: "rgb(250, 0, 0)" },
        //             { ratio: 0.85, color: "rgb(250, 150, 0)"},
        //             { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 200,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "no_2019_06"
            // "no_2019_07",
            // "no_2019_08",
            "no_2019_09"
            // "no_2019_10",
            // "no_2019_11",
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1, heatmapFeatureLayerOptions1);
        var heatmapRenderer1 = new HeatmapRenderer();
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor4(){

    
         console.log("Ejecuta4")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        // colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        colorStops: [
            { ratio: 0, color: "rgba(250, 0, 0, 0)" },
            { ratio: 0.6, color: "rgb(250, 0, 0)" },
            { ratio: 0.85, color: "rgb(250, 150, 0)"},
            { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "flujo_2019_06"
            // "flujo_2019_07",
            // "flujo_2019_08",
            // "flujo_2019_09",
            "flujo_2019_10"
            // "flujo_2019_11",
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL, heatmapFeatureLayerOptions);
        var heatmapRenderer = new HeatmapRenderer();
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        // colorStops: [
        //             { ratio: 0, color: "rgba(250, 0, 0, 0)" },
        //             { ratio: 0.6, color: "rgb(250, 0, 0)" },
        //             { ratio: 0.85, color: "rgb(250, 150, 0)"},
        //             { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 200,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "no_2019_06"
            // "no_2019_07",
            // "no_2019_08",
            // "no_2019_09",
            "no_2019_10"
            // "no_2019_11",
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1, heatmapFeatureLayerOptions1);
        var heatmapRenderer1 = new HeatmapRenderer();
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor5(){

    
         console.log("Ejecuta5")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        // colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        colorStops: [
            { ratio: 0, color: "rgba(250, 0, 0, 0)" },
            { ratio: 0.6, color: "rgb(250, 0, 0)" },
            { ratio: 0.85, color: "rgb(250, 150, 0)"},
            { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "flujo_2019_06"
            // "flujo_2019_07",
            // "flujo_2019_08",
            // "flujo_2019_09",
            // "flujo_2019_10",
            "flujo_2019_11"
            // "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL, heatmapFeatureLayerOptions);
        var heatmapRenderer = new HeatmapRenderer();
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        // colorStops: [
        //             { ratio: 0, color: "rgba(250, 0, 0, 0)" },
        //             { ratio: 0.6, color: "rgb(250, 0, 0)" },
        //             { ratio: 0.85, color: "rgb(250, 150, 0)"},
        //             { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 200,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "no_2019_06"
            // "no_2019_07",
            // "no_2019_08",
            // "no_2019_09",
            // "no_2019_10",
            "no_2019_11"
            // "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1, heatmapFeatureLayerOptions1);
        var heatmapRenderer1 = new HeatmapRenderer();
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

    function mapaCalor6(){

    
         console.log("Ejecuta6")
    
    var serviceURL = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/1";
        var heatmapFeatureLayerOptions = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        // colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        colorStops: [
            { ratio: 0, color: "rgba(250, 0, 0, 0)" },
            { ratio: 0.6, color: "rgb(250, 0, 0)" },
            { ratio: 0.85, color: "rgb(250, 150, 0)"},
            { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 25,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "flujo_2019_06"
            // "flujo_2019_07",
            // "flujo_2019_08",
            // "flujo_2019_09",
            // "flujo_2019_10",
            // "flujo_2019_11",
            "flujo_2019_12"
          ]
        };
        var heatmapFeatureLayer = new FeatureLayer(serviceURL, heatmapFeatureLayerOptions);
        var heatmapRenderer = new HeatmapRenderer();
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        myMap.addLayer(heatmapFeatureLayer);

    var serviceURL1 = "https://desktop-smcdlo2/server/rest/services/PFM/Servicios_Ayuntamiento/MapServer/5";
        var heatmapFeatureLayerOptions1 = {
        //   mode: FeatureLayer.MODE_SNAPSHOT,
        colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        // colorStops: [
        //             { ratio: 0, color: "rgba(250, 0, 0, 0)" },
        //             { ratio: 0.6, color: "rgb(250, 0, 0)" },
        //             { ratio: 0.85, color: "rgb(250, 150, 0)"},
        //             { ratio: 0.95, color: "rgb(255, 255, 0)"}],
        blurRadius: 200,
        maxPixelIntensity: 250,
        minPixelIntensity: 100,          
        outFields: [
            // "no_2019_06"
            // "no_2019_07",
            // "no_2019_08",
            // "no_2019_09",
            // "no_2019_10",
            // "no_2019_11",
            "no_2019_12"
          ]
        };
        var heatmapFeatureLayer1 = new FeatureLayer(serviceURL1, heatmapFeatureLayerOptions1);
        var heatmapRenderer1 = new HeatmapRenderer();
        heatmapFeatureLayer1.setRenderer(heatmapRenderer1);
        myMap.addLayer(heatmapFeatureLayer1);
    };

        

    // var basemapGallery = new BasemapGallery({
    //       map: myMap,
    //       basemapsGroup: { owner: "esri", title: "Community Basemaps" }
    //   }, "BasemapGallery")
    //   basemapGallery.add(basemapGallery);
    
})