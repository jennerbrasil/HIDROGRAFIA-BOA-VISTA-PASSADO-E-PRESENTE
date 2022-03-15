var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DIVISOBAIRROS_1 = new ol.format.GeoJSON();
var features_DIVISOBAIRROS_1 = format_DIVISOBAIRROS_1.readFeatures(json_DIVISOBAIRROS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIVISOBAIRROS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIVISOBAIRROS_1.addFeatures(features_DIVISOBAIRROS_1);
var lyr_DIVISOBAIRROS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIVISOBAIRROS_1, 
                style: style_DIVISOBAIRROS_1,
                interactive: true,
                title: '<img src="styles/legend/DIVISOBAIRROS_1.png" /> DIVISÃO BAIRROS'
            });
var format_MICROBACIASBOAVISTA_2 = new ol.format.GeoJSON();
var features_MICROBACIASBOAVISTA_2 = format_MICROBACIASBOAVISTA_2.readFeatures(json_MICROBACIASBOAVISTA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MICROBACIASBOAVISTA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MICROBACIASBOAVISTA_2.addFeatures(features_MICROBACIASBOAVISTA_2);
var lyr_MICROBACIASBOAVISTA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MICROBACIASBOAVISTA_2, 
                style: style_MICROBACIASBOAVISTA_2,
                interactive: true,
    title: 'MICROBACIAS BOA VISTA<br />\
    <img src="styles/legend/MICROBACIASBOAVISTA_2_0.png" /> MicroBacia_Caranã<br />\
    <img src="styles/legend/MICROBACIASBOAVISTA_2_1.png" /> MicroBacia_Caxangá<br />\
    <img src="styles/legend/MICROBACIASBOAVISTA_2_2.png" /> MicroBacia_Frasco<br />\
    <img src="styles/legend/MICROBACIASBOAVISTA_2_3.png" /> MicroBacia_Grande<br />\
    <img src="styles/legend/MICROBACIASBOAVISTA_2_4.png" /> MicroBacia_Mirandinha<br />\
    <img src="styles/legend/MICROBACIASBOAVISTA_2_5.png" /> MicroBacia_Pricumã<br />'
        });
var format_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3 = new ol.format.GeoJSON();
var features_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3 = format_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3.readFeatures(json_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3.addFeatures(features_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3);
var lyr_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3, 
                style: style_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3,
                interactive: true,
                title: '<img src="styles/legend/LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3.png" /> LAGOS QUE DESAPARECERAM AO LONGO DOS ANOS - 76'
            });
var format_LAGOSQUEESTODESAPARECENDOEM202237_4 = new ol.format.GeoJSON();
var features_LAGOSQUEESTODESAPARECENDOEM202237_4 = format_LAGOSQUEESTODESAPARECENDOEM202237_4.readFeatures(json_LAGOSQUEESTODESAPARECENDOEM202237_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAGOSQUEESTODESAPARECENDOEM202237_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAGOSQUEESTODESAPARECENDOEM202237_4.addFeatures(features_LAGOSQUEESTODESAPARECENDOEM202237_4);
var lyr_LAGOSQUEESTODESAPARECENDOEM202237_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAGOSQUEESTODESAPARECENDOEM202237_4, 
                style: style_LAGOSQUEESTODESAPARECENDOEM202237_4,
                interactive: true,
                title: '<img src="styles/legend/LAGOSQUEESTODESAPARECENDOEM202237_4.png" /> LAGOS QUE ESTÃO DESAPARECENDO EM 2022 - 37'
            });
var format_LAGOSEXISTENTESEM202245_5 = new ol.format.GeoJSON();
var features_LAGOSEXISTENTESEM202245_5 = format_LAGOSEXISTENTESEM202245_5.readFeatures(json_LAGOSEXISTENTESEM202245_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAGOSEXISTENTESEM202245_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAGOSEXISTENTESEM202245_5.addFeatures(features_LAGOSEXISTENTESEM202245_5);
var lyr_LAGOSEXISTENTESEM202245_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAGOSEXISTENTESEM202245_5, 
                style: style_LAGOSEXISTENTESEM202245_5,
                interactive: true,
                title: '<img src="styles/legend/LAGOSEXISTENTESEM202245_5.png" /> LAGOS EXISTENTES EM 2022 - 45'
            });
var format_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6 = new ol.format.GeoJSON();
var features_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6 = format_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6.readFeatures(json_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6.addFeatures(features_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6);
var lyr_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6, 
                style: style_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6,
                interactive: true,
                title: '<img src="styles/legend/READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6.png" /> ÁREA DE PRESERVAÇÃO DOS IGARAPÉS QUE DESAPARECERAM'
            });
var format_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7 = new ol.format.GeoJSON();
var features_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7 = format_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7.readFeatures(json_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7.addFeatures(features_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7);
var lyr_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7, 
                style: style_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7,
                interactive: true,
    title: 'IGARAPÉS QUE DESAPARECERAM AO LONGO DOS ANOS - 36,247 Km<br />\
    <img src="styles/legend/IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7_0.png" /> Igarapé Caranã - 12,279 Km<br />\
    <img src="styles/legend/IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7_1.png" /> Igrapé Caxangá - 3,077 Km<br />\
    <img src="styles/legend/IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7_2.png" /> Igarapé do Frasco - 1,459 Km<br />\
    <img src="styles/legend/IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7_3.png" /> Igarapé Grande - 11,666 Km<br />\
    <img src="styles/legend/IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7_4.png" /> Igarapé Mirandinha - 2,138 Km<br />\
    <img src="styles/legend/IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7_5.png" /> Igarapé Pricumã - 1,079 Km<br />\
    <img src="styles/legend/IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7_6.png" /> Igarapé sem nome - 4,550 Km<br />'
        });
var format_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8 = new ol.format.GeoJSON();
var features_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8 = format_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8.readFeatures(json_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8.addFeatures(features_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8);
var lyr_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8, 
                style: style_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8,
                interactive: true,
                title: '<img src="styles/legend/READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8.png" /> ÁREA DE PRESERVAÇÃO DOS IGARAPÉS QUE ESTÃO DESAPARECENDO'
            });
var format_IGARAPSQUEESTODESAPARECENDO_202210734Km_9 = new ol.format.GeoJSON();
var features_IGARAPSQUEESTODESAPARECENDO_202210734Km_9 = format_IGARAPSQUEESTODESAPARECENDO_202210734Km_9.readFeatures(json_IGARAPSQUEESTODESAPARECENDO_202210734Km_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IGARAPSQUEESTODESAPARECENDO_202210734Km_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IGARAPSQUEESTODESAPARECENDO_202210734Km_9.addFeatures(features_IGARAPSQUEESTODESAPARECENDO_202210734Km_9);
var lyr_IGARAPSQUEESTODESAPARECENDO_202210734Km_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IGARAPSQUEESTODESAPARECENDO_202210734Km_9, 
                style: style_IGARAPSQUEESTODESAPARECENDO_202210734Km_9,
                interactive: true,
    title: 'IGARAPÉS QUE ESTÃO DESAPARECENDO_2022 - 10,734 Km<br />\
    <img src="styles/legend/IGARAPSQUEESTODESAPARECENDO_202210734Km_9_0.png" /> Igarapé Caranã- 2,949 Km<br />\
    <img src="styles/legend/IGARAPSQUEESTODESAPARECENDO_202210734Km_9_1.png" /> Igarapé Caxangá - 1,006 Km<br />\
    <img src="styles/legend/IGARAPSQUEESTODESAPARECENDO_202210734Km_9_2.png" /> Igarapé do Frasco - 0,667 Km<br />\
    <img src="styles/legend/IGARAPSQUEESTODESAPARECENDO_202210734Km_9_3.png" /> Igarapé Grande - 2,738 Km<br />\
    <img src="styles/legend/IGARAPSQUEESTODESAPARECENDO_202210734Km_9_4.png" /> Igarapé Mirandinha - 0, 480 Km<br />\
    <img src="styles/legend/IGARAPSQUEESTODESAPARECENDO_202210734Km_9_5.png" /> Igarapé sem nome - 2,893 Km<br />'
        });
var format_READEPRESERVAODOSIGARAPSEXISTENTES2022_10 = new ol.format.GeoJSON();
var features_READEPRESERVAODOSIGARAPSEXISTENTES2022_10 = format_READEPRESERVAODOSIGARAPSEXISTENTES2022_10.readFeatures(json_READEPRESERVAODOSIGARAPSEXISTENTES2022_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_READEPRESERVAODOSIGARAPSEXISTENTES2022_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_READEPRESERVAODOSIGARAPSEXISTENTES2022_10.addFeatures(features_READEPRESERVAODOSIGARAPSEXISTENTES2022_10);
var lyr_READEPRESERVAODOSIGARAPSEXISTENTES2022_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_READEPRESERVAODOSIGARAPSEXISTENTES2022_10, 
                style: style_READEPRESERVAODOSIGARAPSEXISTENTES2022_10,
                interactive: true,
                title: '<img src="styles/legend/READEPRESERVAODOSIGARAPSEXISTENTES2022_10.png" /> ÁREA DE PRESERVAÇÃO DOS IGARAPÉS EXISTENTES 2022'
            });
var format_IGARAPSEXISTENTESEM202276985Km_11 = new ol.format.GeoJSON();
var features_IGARAPSEXISTENTESEM202276985Km_11 = format_IGARAPSEXISTENTESEM202276985Km_11.readFeatures(json_IGARAPSEXISTENTESEM202276985Km_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IGARAPSEXISTENTESEM202276985Km_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IGARAPSEXISTENTESEM202276985Km_11.addFeatures(features_IGARAPSEXISTENTESEM202276985Km_11);
var lyr_IGARAPSEXISTENTESEM202276985Km_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IGARAPSEXISTENTESEM202276985Km_11, 
                style: style_IGARAPSEXISTENTESEM202276985Km_11,
                interactive: true,
    title: 'IGARAPÉS EXISTENTES EM 2022 - 76,985 Km<br />\
    <img src="styles/legend/IGARAPSEXISTENTESEM202276985Km_11_0.png" /> Igarapé Caranã - 20,700 Km<br />\
    <img src="styles/legend/IGARAPSEXISTENTESEM202276985Km_11_1.png" /> Igarapé Caxangá - 52,254 Km<br />\
    <img src="styles/legend/IGARAPSEXISTENTESEM202276985Km_11_2.png" /> Igarapé do Frasco - 3, 797 Km<br />\
    <img src="styles/legend/IGARAPSEXISTENTESEM202276985Km_11_3.png" /> Igarapé Grande - 23,245  Km<br />\
    <img src="styles/legend/IGARAPSEXISTENTESEM202276985Km_11_4.png" /> Igarapé Mirandinha  4,029 Km<br />\
    <img src="styles/legend/IGARAPSEXISTENTESEM202276985Km_11_5.png" /> Igarapé Pricumã - 6,297 Km<br />\
    <img src="styles/legend/IGARAPSEXISTENTESEM202276985Km_11_6.png" /> Igarapé sem nome - 13,692 Km<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_DIVISOBAIRROS_1.setVisible(true);lyr_MICROBACIASBOAVISTA_2.setVisible(true);lyr_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3.setVisible(true);lyr_LAGOSQUEESTODESAPARECENDOEM202237_4.setVisible(true);lyr_LAGOSEXISTENTESEM202245_5.setVisible(true);lyr_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6.setVisible(true);lyr_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7.setVisible(true);lyr_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8.setVisible(true);lyr_IGARAPSQUEESTODESAPARECENDO_202210734Km_9.setVisible(true);lyr_READEPRESERVAODOSIGARAPSEXISTENTES2022_10.setVisible(true);lyr_IGARAPSEXISTENTESEM202276985Km_11.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_DIVISOBAIRROS_1,lyr_MICROBACIASBOAVISTA_2,lyr_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3,lyr_LAGOSQUEESTODESAPARECENDOEM202237_4,lyr_LAGOSEXISTENTESEM202245_5,lyr_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6,lyr_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7,lyr_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8,lyr_IGARAPSQUEESTODESAPARECENDO_202210734Km_9,lyr_READEPRESERVAODOSIGARAPSEXISTENTES2022_10,lyr_IGARAPSEXISTENTESEM202276985Km_11];
lyr_DIVISOBAIRROS_1.set('fieldAliases', {'Bairro': 'Bairro', });
lyr_MICROBACIASBOAVISTA_2.set('fieldAliases', {'SPRAREA': 'SPRAREA', 'SPRPERIMET': 'SPRPERIMET', 'SPRCLASSE': 'SPRCLASSE', 'layer': 'layer', });
lyr_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3.set('fieldAliases', {'id': 'id', 'NOME': 'NOME', 'area 1': 'area 1', });
lyr_LAGOSQUEESTODESAPARECENDOEM202237_4.set('fieldAliases', {'id': 'id', 'NOME': 'NOME', 'AREA 1': 'AREA 1', });
lyr_LAGOSEXISTENTESEM202245_5.set('fieldAliases', {'id': 'id', 'NOME': 'NOME', 'Área': 'Área', });
lyr_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', });
lyr_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7.set('fieldAliases', {'Nome': 'Nome', 'COMPRI': 'COMPRI', });
lyr_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', });
lyr_IGARAPSQUEESTODESAPARECENDO_202210734Km_9.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'COMPR': 'COMPR', });
lyr_READEPRESERVAODOSIGARAPSEXISTENTES2022_10.set('fieldAliases', {'dESCRIÇÃ': 'dESCRIÇÃ', });
lyr_IGARAPSEXISTENTESEM202276985Km_11.set('fieldAliases', {'NOME': 'NOME', 'CARACTERIS': 'CARACTERIS', 'COMPR': 'COMPR', });
lyr_DIVISOBAIRROS_1.set('fieldImages', {'Bairro': 'TextEdit', });
lyr_MICROBACIASBOAVISTA_2.set('fieldImages', {'SPRAREA': 'TextEdit', 'SPRPERIMET': 'TextEdit', 'SPRCLASSE': 'TextEdit', 'layer': 'TextEdit', });
lyr_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3.set('fieldImages', {'id': 'TextEdit', 'NOME': 'TextEdit', 'area 1': 'TextEdit', });
lyr_LAGOSQUEESTODESAPARECENDOEM202237_4.set('fieldImages', {'id': 'TextEdit', 'NOME': 'TextEdit', 'AREA 1': 'TextEdit', });
lyr_LAGOSEXISTENTESEM202245_5.set('fieldImages', {'id': 'TextEdit', 'NOME': 'TextEdit', 'Área': 'TextEdit', });
lyr_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7.set('fieldImages', {'Nome': 'TextEdit', 'COMPRI': 'TextEdit', });
lyr_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_IGARAPSQUEESTODESAPARECENDO_202210734Km_9.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'COMPR': 'TextEdit', });
lyr_READEPRESERVAODOSIGARAPSEXISTENTES2022_10.set('fieldImages', {'dESCRIÇÃ': 'TextEdit', });
lyr_IGARAPSEXISTENTESEM202276985Km_11.set('fieldImages', {'NOME': 'TextEdit', 'CARACTERIS': 'TextEdit', 'COMPR': 'TextEdit', });
lyr_DIVISOBAIRROS_1.set('fieldLabels', {'Bairro': 'no label', });
lyr_MICROBACIASBOAVISTA_2.set('fieldLabels', {'SPRAREA': 'no label', 'SPRPERIMET': 'no label', 'SPRCLASSE': 'no label', 'layer': 'no label', });
lyr_LAGOSQUEDESAPARECERAMAOLONGODOSANOS76_3.set('fieldLabels', {'id': 'no label', 'NOME': 'no label', 'area 1': 'no label', });
lyr_LAGOSQUEESTODESAPARECENDOEM202237_4.set('fieldLabels', {'id': 'no label', 'NOME': 'no label', 'AREA 1': 'no label', });
lyr_LAGOSEXISTENTESEM202245_5.set('fieldLabels', {'id': 'no label', 'NOME': 'no label', 'Área': 'no label', });
lyr_READEPRESERVAODOSIGARAPSQUEDESAPARECERAM_6.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', });
lyr_IGARAPSQUEDESAPARECERAMAOLONGODOSANOS36247Km_7.set('fieldLabels', {'Nome': 'no label', 'COMPRI': 'no label', });
lyr_READEPRESERVAODOSIGARAPSQUEESTODESAPARECENDO_8.set('fieldLabels', {'id': 'header label', 'Nome': 'header label', });
lyr_IGARAPSQUEESTODESAPARECENDO_202210734Km_9.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'COMPR': 'no label', });
lyr_READEPRESERVAODOSIGARAPSEXISTENTES2022_10.set('fieldLabels', {'dESCRIÇÃ': 'no label', });
lyr_IGARAPSEXISTENTESEM202276985Km_11.set('fieldLabels', {'NOME': 'no label', 'CARACTERIS': 'no label', 'COMPR': 'no label', });
lyr_IGARAPSEXISTENTESEM202276985Km_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});