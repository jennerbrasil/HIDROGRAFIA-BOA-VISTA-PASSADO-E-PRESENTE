var size = 0;
var placement = 'point';
function categories_IGARAPSEXISTENTESEM202276985Km_11(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Igarapé Caranã':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,158,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Igarapé Caxangá':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,158,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Igarapé do Frasco':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,158,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Igarapé Grande':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,158,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Igarapé Mirandinha':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,158,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Igarapé Pricumã':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,158,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Igarapé sem nome':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,158,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_IGARAPSEXISTENTESEM202276985Km_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NOME");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_IGARAPSEXISTENTESEM202276985Km_11(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
