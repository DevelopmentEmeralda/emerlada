


var markers = new Array();
var map;
var marker_clusterer ;
$(document).ready(function(){
    var myLocationEnabled = true;
    var style_map = mapStyle;
    var scrollwheelEnabled = true;

    
    if($('#main-map').length){    
        map = L.map('main-map', {
                        center: [45.950990106638, 16.318566655469],
                        zoom: 8-2,
            scrollWheelZoom: scrollwheelEnabled,
            dragging: !L.Browser.mobile,
            tap: !L.Browser.mobile
        });     
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png').addTo(map);

                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [46.1689005, 16.3342306],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"http://localhost:6060/perumahan/index.php/property/18/en/small_beauty\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"http://localhost:6060/perumahan/files/strict_cache/575x500no_image.webp\" alt=\"Small beauty\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Small beauty</h3>            <span><i class=\"la la-map-marker\"></i>Remetinec 23, Novi Marof, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.733079713277, 16.302902710937],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"http://localhost:6060/perumahan/index.php/property/17/en/classic_american\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"http://localhost:6060/perumahan/files/strict_cache/575x500no_image.webp\" alt=\"Classic American\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Classic American</h3>            <span><i class=\"la la-map-marker\"></i>JeÅ¾evo 32, IvaniÄ‡ Grad, Croatia</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                map.addLayer(clusters);   
        
                /* set center */
        if(markers.length){
            var limits_center = [];
            for (var i in markers) {
                if(typeof markers[i]['_latlng'] == 'undefined') continue;
                var latLngs = [ markers[i].getLatLng() ];
                limits_center.push(latLngs)
            };
            var bounds = L.latLngBounds(limits_center);
                            map.fitBounds(bounds);
                   }
                
        if(!markers.length){
                    }
    } 
    })

