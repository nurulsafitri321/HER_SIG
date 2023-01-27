<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="author" content="Siti Nurhaliza Yus_2101091013">
        <link rel="stylesheet" type="text/css" href="../leaflet/leaflet.css"/>
        <script type="text/javascript" src="../leaflet/leaflet.js"></script>
        <title>Tugas 2: Menampilkan 2 atau lebih Kawasan</title>
    </head>
<body>
    <div id="map" style="width: 100%; height: 600px;"></div>
</body>
    <script>
        var myMap = L.map('map').setView([-0.9138137,100.4657295],17);//politeknik negeri padang

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(myMap);

        var kordinatAreaPoliteknik = [
        [-0.914666, 100.465205],
        [-0.914667, 100.465194],
        [-0.915009, 100.468138],
        [-0.914627, 100.468936],
        [-0.913050, 100.469191],
        [-0.912885, 100.467826],
        [-0.912367, 100.465948],
        [-0.913139, 100.465775],
        [-0.914264, 100.465672],
        [-0.914508, 100.465216],
        ];
        var areaPoliteknik = L.polygon (kordinatAreaPoliteknik, {color: 'orange'}).addTo(myMap);

        var kordinatFakultasTeknik = [
        [-0.914685, 100.463145],
        [-0.914690, 100.464473],
        [-0.914679, 100.465199],
        [-0.914494, 100.465199],
        [-0.914242, 100.465652],
        [-0.913241, 100.465826],
        [-0.912848, 100.464430],
        [-0.912369, 100.463947],
        [-0.912213, 100.463559],
        [-0.912673, 100.463377],
        [-0.913710, 100.463282],
        ];

        var areaFakTeknik = L.polygon (kordinatFakultasTeknik, {color: 'green'}).addTo(myMap);
        
        myMap.fitBounds(areaPoliteknik.getBounds()); //membuat auto fokus
    
    </script>
</html>