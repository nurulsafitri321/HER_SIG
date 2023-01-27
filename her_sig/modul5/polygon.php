<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="author" content="Siti Nurhaliza Yus_2101091013">
        <link rel="stylesheet" type="text/css" href="../leaflet/leaflet.css"/>
        <script type="text/javascript" src="../leaflet/leaflet.js"></script>
        <title>Tugas 1 : Kawasan Politeknik Negeri Padang</title>
    </head>
<body>
    <div id="map" style="width: 100%; height: 600px;"></div>
</body>
    <script>
        var myMap = L.map('map').setView([-0.9138137,100.4657295],17);//politeknik negeri padang

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(myMap);

        var kordinatAreaPoliteknik = [
        [-0.914666, 100.465205],
        [-0.914667, 100.465194],
        [-0.915009, 100.468138],
        [-0.914627, 100.468936],
        [-0.913050, 100.469191],
        [-0.913050, 100.469191],
        [-0.912885, 100.467826],
        [-0.912367, 100.465948],
        [-0.913139, 100.465775],
        [-0.914264, 100.465672],
        [-0.914508, 100.465216],
    ];
    var areaPoliteknik = L.polygon (kordinatAreaPoliteknik, {color: 'orange'}).addTo(myMap);

    </script>
</html>