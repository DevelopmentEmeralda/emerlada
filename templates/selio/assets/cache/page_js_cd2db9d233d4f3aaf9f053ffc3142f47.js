;$('document').ready(function(){$('form#popup_form_login').submit(function(o){o.preventDefault();var r=$('form#popup_form_login').serializeArray();$('form#popup_form_login .ajax-indicator').removeClass('hidden');$.post('http://localhost:6060/perumahan/index.php/api/login_form/en',r,function(o){if(o.success){$('form#popup_form_login .alerts-box').html('');if(o.message){ShowStatus.show(o.message)};if(o.redirect){};location.reload()}else{if(o.message){ShowStatus.show(o.message)};$('form#popup_form_login .alerts-box').html(o.errors)}}).success(function(){$('form#popup_form_login .ajax-indicator').addClass('hidden')});return!1})});var timerMap,ad_galleries,firstSet=!1,mapRefresh=!0,loadOnTab=!0,zoomOnMapSearch=9,clusterConfig=null,markerOptions=null,mapDisableAutoPan=!1,rent_inc_id='55',scrollWheelEnabled=!1,myLocationEnabled=!0,rectangleSearchEnabled=!0,mapSearchbox=!0,mapRefresh=!0,map_main,styles,mapStyle=[{'featureType':'landscape','elementType':'geometry.fill','stylers':[{'color':'#fcf4dc'}]},{'featureType':'landscape','elementType':'geometry.stroke','stylers':[{'color':'#c0c0c0'},{'visibility':'on'}]}];var timerMap,firstSet=!1,selectorResults='#results_conteiner',clusters='';clusters=L.markerClusterGroup({spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,zoomToBoundsOnClick:!0});var jpopup_customOptions={'maxWidth':'initial','width':'initial','className':'popupCustom'};$(document).ready(function(){$('search_showroom_form').submit(function(){if($('#search_showroom').val().length>2||$('#search_showroom').val().length==0){$.post('http://localhost:6060/perumahan/index.php/showroom/ajax/en/145',{search:$('#search_showroom').val()},function(e){$('.property_content_position').html(e.print);reloadElements()},'json')}});$('#search_news_form').submit(function(e){e.preventDefault();if($('#search_news').val().length>2||$('#search_news').val().length==0){$.post('http://localhost:6060/perumahan/index.php/news/ajax/en/145',{search:$('#search_news').val()},function(e){$('.list-result').html(e.print);reloadElements()},'json')}});$('#search_expert').keyup(function(){if($(this).val().length>2||$(this).val().length==0){$.post('http://localhost:6060/perumahan/index.php/expert/ajax/en/145',{search:$('#search_expert').val()},function(e){$('.property_content_position').html(e.print);reloadElements()},'json')}});var n=$('.data_table').DataTable({'responsive':!0,'oLanguage':{'sPrevious':'Search','sNext':'Search','sSearch':'Search','sLengthMenu':'Show _MENU_ entries','sInfoEmpty':'Showing 0 to 0 of 0 entries','sInfo':'Showing _START_ to _END_ of _TOTAL_ entries','sEmptyTable':'No data available in table',},});$('button.refresh_filters').click(function(){manualSearch(0);return!1});manualSearch(0,!1,!1,!0);$('#search-save').click(function(){manualSearch(0,'#content-block',!0);return!1});$('#search_option_smart').typeahead({minLength:1,source:function(e,t){$.post('http://localhost:6060/perumahan/index.php/frontend/typeahead/en/145/smart',{q:e,limit:8},function(e){t(JSON.parse(e))})}});$('.twitter-typeahead input:first-child').attr('style','position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1');$('#search_option_smart').attr('style','position: relative; vertical-align: top;');$('.menu-onmap li a').click(function(){if(!$(this).parent().hasClass('list-property-button')){$(this).parent().parent().find('li').removeClass('active');$(this).parent().addClass('active');if(loadOnTab)manualSearch(0,!1);return!1}});if($('.menu-onmap li.active').length==0){$('.menu-onmap li.all-button').addClass('active')};if($('.menu-onmap').length){$('.menu-onmap li label').click(function(){$('.menu-onmap li').removeClass('active');$(this).parent().addClass('active')})};$('.sw-search-start').click(function(e){e.preventDefault();manualSearch(0);return!1});var t={days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],daysShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun'],daysMin:['Su','Mo','Tu','We','Th','Fr','Sa','Su'],months:['January','February','March','April','May','June','July','August','September','October','November','December'],monthsShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']};if(typeof(DPGlobal)!='undefined'){DPGlobal.dates=t};var e=new Date(),a=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0);$('.datetimepicker_standard').datepicker().on('changeDate',function(e){$(this).datepicker('hide')});reloadElements()});function manualSearch(e,t,o,i){if(typeof t==='undefined')t='#results_conteiner';if(typeof o==='undefined')o=!1;if(typeof i==='undefined')i=!1;var r=$('#search_order').val(),l=$('.view-type.active').attr('data-ref'),a={order:r,view:l,page_num:e};if($('#booking_date_from').length>0){if($('#booking_date_from').val()!='')a['v_booking_date_from']=$('#booking_date_from').val()};if($('#booking_date_to').length>0){if($('#booking_date_to').val()!='')a['v_booking_date_to']=$('#booking_date_to').val()};$('.search-form  input:not(.skip), .search-form  select:not(.skip)').each(function(e){if($(this).attr('type')=='checkbox'){if($(this).prop('checked')){a['v_'+$(this).attr('id')]=$(this).val()}}else if($(this).attr('type')=='radio'){if($(this).attr('id')!='undefined')if($(this).prop('checked')){a['v_'+$(this).attr('name')]=$(this).val()}}else if($(this).hasClass('tree-input')){if($(this).val()!=''){var t=$(this).attr('id').split('_');if(a['v_search_option_'+t[2]]==undefined)a['v_search_option_'+t[2]]='';a['v_search_option_'+t[2]]+=$(this).find('option:selected').text()+' - '}}else{if(typeof $(this).attr('id')!='undefined'&&$(this).attr('id')!='undefined'){a['v_'+$(this).attr('id')]=$(this).val()}}});if($('#tags-filters').length>0){var n='';$('.search-form input, .search-form select').each(function(e){if($(this).attr('type')=='checkbox'){if($(this).attr('checked')&&typeof $(this).attr('id')!='undefined'&&$(this).attr('id')!='undefined'){a['v_'+$(this).attr('id')]=$(this).val();var o='',t=$(this).attr('value').substring(4);if(typeof t!=='undefined'&&t!==!1){o=t};if($(this).val()!='')n+='<button class="btn btn-small btn-warning filter-tag ck" rel="'+$(this).attr('id')+'" type="button"><span class="fa fa-remove"></span> '+o+'</button>&nbsp;'}}else if($(this).hasClass('tree-input')){}else if(typeof $(this).attr('id')!='undefined'&&$(this).attr('id')!='undefined'){a['v_'+$(this).attr('id')]=$(this).val();var o='',t=$(this).attr('placeholder');if(typeof t!=='undefined'&&t!==!1){o=t+': '};if($(this).val()!='')n+='<button class="btn btn-small btn-primary filter-tag" rel="'+$(this).attr('id')+'" type="button"><span class="fa fa-remove"></span> '+o+$(this).val()+'</button>&nbsp;'}});if(typeof a['v_search_option_4']!='undefined')if(a['v_search_option_4'].length>0)n+='<button class="btn btn-small btn-danger filter-tag" rel="4" type="button"><span class="fa fa-remove"></span> '+a['v_search_option_4']+'</button>&nbsp;';if(n!=''){$('#tags-filters').css('display','block');$('#tags-filters').html(n);$('.filter-tag').click(function(){var e=$(this).attr('rel').substring(14);if($(this).hasClass('ck')){$('#'+$(this).attr('rel')).prop('checked',!1)}else{$('input.id_'+e).val('');$('input#'+$(this).attr('rel')).val('');$('select#'+$(this).attr('rel')).val('');$('select.id_'+e).val('');$('select#'+$(this).attr('rel')+'.selectpicker').selectpicker('render');$('select.id_'+e+'.selectpicker').selectpicker('render')};$(this).remove();if($(this).attr('rel')=='4'){$('#search_option_4 .active').removeClass('active')};if($(this).hasClass('ck')){$('input.checkbox_am[option_id=\''+e+'\']').prop('checked',!1)};manualSearch(0)})}else{$('#tags-filters').css('display','none')}};showCounters(a);if($('.counter_by_id_enabled').length)showCountersBy_id(a,79);if(i){return!1};$('#ajax-indicator-1').show();if(o==!0){$.post('http://localhost:6060/perumahan/index.php/privateapi/save_search/en',a,function(e){ShowStatus.show(e.message);if(!e.success){$('#sign-popup').toggleClass('active');$('body').addClass('overlay-bgg')};$('#ajax-indicator-1').hide()});return};$('.result_preload_indic').show();$('.sw-search-start').find('.fa-ajax-indicator').removeClass('hidden').parent().addClass('loading');var s=a;$.post('http://localhost:6060/perumahan/index.php/frontend/ajax/en/145/'+e,a,function(e){if($('#main-map').length){if(map=='init'){map=L.map('wrap-map',{center:[45.8642778,15.985132953442],zoom:8-2,scrollWheelZoom:scrollWheelEnabled,dragging:!L.Browser.mobile,tap:!L.Browser.mobile});L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);var c=L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png').addTo(map);map.addLayer(clusters)};for(var n=0;n<markers.length;n++){clusters.removeLayer(markers[n])};markers=[]};if(mapRefresh&&$('#main-map').length>0){if(e.results.length>0){var i=[],a=[];a['Apartment']='fa fa-building';a['House']='fa fa-home';a['Commercial']='fa fa-usd';a['Restaurant']='fa fa-cutlery';a['Land']='fa fa-pagelines';$.each(e.results,function(e,t){if(typeof t.latLng!=='undefined'){var n=t.data.match(/Widget-preview-category-path:(.*)/)||'';n=$.trim(n[1]);if(typeof a[n]!='undefined'){var s='<div class="marker-container"><div class="marker-card"><div class="front face"><i class="'+a[n]+'"></i></div><div class="back face"> <i class="'+a[n]+'"></i></div><div class="marker-arrow"></div></div></div>'}else if(typeof i[n]!='undefined'){var r=i[n],s='<div class="marker-container marker-container-image"><div class="marker-card"><div class="front face"><img src='+r+'></img></div></div><div class="marker-arrow"></div></div></div>'}else{var s='<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'};var o=L.marker([t.latLng[0],t.latLng[1]],{icon:L.divIcon({html:s,className:'open_steet_map_marker google_marker',iconSize:[50,46],popupAnchor:[0,-18],iconAnchor:[25,46],})});o.bindPopup(t.data,jpopup_customOptions);clusters.addLayer(o);markers.push(o)}});if(markers.length){var o=[];for(var n in markers){if(typeof markers[n]['_latlng']=='undefined')continue;var l=[markers[n].getLatLng()];o.push(l)};var r=L.latLngBounds(o);map.fitBounds(r)}}else{if(!markers.length){if(typeof s['v_search_option_64']!='undefined'){$.get('https://nominatim.openstreetmap.org/search?format=json&q='+s['v_search_option_64'],function(e){if(e.length&&typeof e[0]){map.setView([e[0].lat,e[0].lon])}else{}})}}}};$(selectorResults).html(e.print);$('.total_rows').html(e.total_rows);$('.options .selectpicker').selectpicker({style:'selectpicker-primary',});reloadElements();$('#ajax-indicator-1').hide();if($(t).length)if(t&&$('.fullscreen-inner-md').length){$(document).scrollTop($(t).offset().top-450)}else if(t&&!$('.fullscreen-inner-md').length){$(document).scrollTop($(t).offset().top-150)}},'json').success(function(){add_to_favorite();remove_from_favorites();$('.sw-search-start').find('.fa-ajax-indicator').addClass('hidden').parent().removeClass('loading')});return!1};$.fn.startLoading=function(e){};$.fn.endLoading=function(e){};function reloadElements(){$('#search_order').off().change(function(){manualSearch(0);return!1});$('.view-type').off().click(function(){$(this).parent().parent().find('.view-type').removeClass('active');$(this).addClass('active');manualSearch(0);return!1});$('.pagination.properties a').click(function(){var e=$(this).attr('href'),t=e.lastIndexOf('/');e=e.substr(t+1);manualSearch(e);return!1});$('.pagination.news a').click(function(){var e=$(this).attr('href'),t=e.lastIndexOf('/');e=e.substr(t+1);$.post($(this).attr('href'),{search:$('#search_showroom').val()},function(e){$('.property_content_position').html(e.print);reloadElements()},'json').success(function(){});return!1})};$(function(){$('input.DECIMAL').number(!0,2);$('input.INTEGER').number(!0,0)});$(function(){$('form.form-estate').h5Validate({});$('form.form-estate').on('formValidated',function(){if($('form.form-estate .ui-state-error').length){var e=$('form.form-estate .ui-state-error').first().offset().top-150;$(window).scrollTop(e)}})});$('document').ready(function(){reloadPaginationUniversal()});function reloadPaginationUniversal(){$('.pagination-ajax-results a').click(function(){var e=$(this).attr('href'),a=e.lastIndexOf('/');e=e.substr(a+1);var t='#ajax_results';$.post($(this).attr('href'),{'page_num':e},function(e){$(t).html(e.print);reloadPaginationUniversal()},'json').success(function(){});return!1})};if(typeof $.fn.fileupload==='function'){function loadjQueryUpload(){$('form.fileupload').each(function(){$(this).fileupload({autoUpload:!0,previewMaxWidth:160,previewMaxHeight:120,uploadTemplateId:null,downloadTemplateId:null,uploadTemplate:function(e){var t=$();$.each(e.files,function(e,a){var n=$('<div> </div>');t=t.add(n)});return t},downloadTemplate:function(e){var t=$();$.each(e.files,function(e,a){var n=$('<li class="img-rounded template-download fade"><div class="preview"><span class="fade"></span></div><div class="filename"><code>'+a.short_name+'</code></div><div class="options-container">'+(a.zoom_enabled?'<a data-gallery="gallery" class="zoom-button btn btn-mini btn-success" download="'+a.name+'"><i class="icon-search icon-white"></i></a>':'<a target="_blank" class="btn btn-mini btn-success" download="'+a.name+'"><i class="icon-search icon-white"></i></a>')+' <span class="delete"><button class="btn btn-mini btn-danger" data-type="'+a.delete_type+'" data-url="'+a.delete_url+'"><i class="icon-trash icon-white"></i></button> <input type="checkbox" value="1" name="delete"></span></div>'+(a.error?'<div class="error"></div>':'')+'</li>'),o=!1;if(a.error){ShowStatus.show(a.error)}else{o=!0;n.find('.name a').text(a.name);if(a.thumbnail_url){n.find('.preview').html('<img class="img-rounded" alt="'+a.name+'" data-src="'+a.thumbnail_url+'" src="'+a.thumbnail_url+'">')};n.find('a').prop('href',a.url);n.find('a').prop('title',a.name);n.find('.delete button').attr('data-type',a.delete_type).attr('data-url',a.delete_url)};if(o)t=t.add(n)});return t},destroyed:function(e,t){$.fn.endLoading();if(t.success){}else{ShowStatus.show('Unsuccessful, possible permission problems or file not exists')};return!1},finished:function(e,t){$('.zoom-button').unbind('click touchstart');$('.zoom-button').bind('click touchstart',function(){var e=[],a=$(this).attr('href'),t=0;$('.files-list-u .zoom-button').each(function(n){var o=$(this).attr('href');e[n]=o;if(a==o)t=n});options={index:t};blueimp.Gallery(e,options);return!1})},dropZone:$(this)})});$('ul.files').each(function(e){$(this).sortable({update:saveFilesOrder});$(this).disableSelection()})};function filesOrderToArray(e){var t={};e.find('li').each(function(e){var a=$(this).find('.options-container a:first').attr('download');t[e+1]=a});return t};function saveFilesOrder(e,t){var n=filesOrderToArray($(this)),a=$(this).parent().parent().parent().attr('id').substring(11),o=$(this).parent().parent().parent().attr('rel');$.fn.startLoading();$.post('http://localhost:6060/perumahan/index.php/files/order/'+a+'/'+o,{'page_id':a,'order':n},function(e){$.fn.endLoading()},'json')}};function showCounters(e){$.post('http://localhost:6060/perumahan/index.php/api/get_all_counters/1',e,function(e){$('[name*="search_option_"]').parent().find('b').html('');$.each(e.counters,function(e,t){var a=t.option_id;if(!$('[name="search_option_'+a+'"]').is(':checked'))$('[name="search_option_'+a+'"]').parent().find('b').html('&nbsp('+t.count+')')})},'json')};function showCountersBy_id(e,t){var a=e;$.post('http://localhost:6060/perumahan/index.php/api/get_all_counters_by_id/1/'+t,a,function(e){$('.counter_by_id_enabled .live').find('b').html('&nbsp(0)');$.each(e.counters,function(e,t){var a=t.value;if(!$('.counter_by_id_enabled .live[data-value=\''+a+'\']').hasClass('active'))$('.counter_by_id_enabled .live[data-value=\''+a+'\']').find('b').html('&nbsp('+t.count+')');else $('.counter_by_id_enabled .live[data-value=\''+a+'\']').find('b').html('&nbsp('+t.count+')')})},'json')};var rectangle,infoWindow_rectangle,map_rectangle;function RectangleControl(e,t){map_rectangle=t;e.style.padding='5px';var a=document.createElement('div');a.id='my_location';a.style.backgroundColor='white';a.style.borderStyle='solid';a.style.borderWidth='2px';a.style.marginRight='5px';a.style.cursor='pointer';a.style.textAlign='center';a.title='Draw Rectangle';e.appendChild(a);var n=document.createElement('div');n.style.fontFamily='Arial,sans-serif';n.style.fontSize='12px';n.style.paddingLeft='4px';n.style.paddingRight='4px';n.innerHTML='<strong>Draw Rectangle</strong>';a.appendChild(n);google.maps.event.addDomListener(a,'click',function(){if(rectangle!=null)return;var s=t.getZoom(),e=t.getCenter(),a=0.4;if(s>11)a=0.02;var i=new google.maps.LatLngBounds(e,new google.maps.LatLng(e.lat()+a,e.lng()+a*2));rectangle=new google.maps.Rectangle({bounds:i,editable:!0,draggable:!0});rectangle.setMap(t);google.maps.event.addListener(rectangle,'bounds_changed',showNewRect);infoWindow_rectangle=new google.maps.InfoWindow();var n=rectangle.getBounds().getNorthEast(),o=rectangle.getBounds().getSouthWest();$('#rectangle_ne').val(n.lat()+', '+n.lng());$('#rectangle_sw').val(o.lat()+', '+o.lng())})};function showNewRect(e){var t=rectangle.getBounds().getNorthEast(),a=rectangle.getBounds().getSouthWest(),n='<b>Rectangle moved:</b><br>New north-east corner: '+t.lat().toFixed(3).slice(0,-1)+', '+t.lng().toFixed(3).slice(0,-1)+'<br>New south-west corner: '+a.lat().toFixed(3).slice(0,-1)+', '+a.lng().toFixed(3).slice(0,-1);$('#rectangle_ne').val(t.lat()+', '+t.lng());$('#rectangle_sw').val(a.lat()+', '+a.lng());infoWindow_rectangle.setContent(n);infoWindow_rectangle.setPosition(t);infoWindow_rectangle.open(map_rectangle)};function init_map_searchbox(e){if(!$('#pac-input').length)return!1;var o=(document.getElementById('pac-input')),i=document.getElementById('type-selector');e.controls[google.maps.ControlPosition.TOP_LEFT].push(o);var n=new google.maps.places.Autocomplete(o);n.bindTo('bounds',e);var a=new google.maps.InfoWindow(),t=new google.maps.Marker({map:e,anchorPoint:new google.maps.Point(0,-29)});n.addListener('place_changed',function(){a.close();t.setVisible(!1);var o=n.getPlace();if(!o.geometry){return};if(o.geometry.viewport){e.fitBounds(o.geometry.viewport)}else{e.setCenter(o.geometry.location);e.setZoom(17)};t.setIcon(({url:o.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(35,35)}));t.setPosition(o.geometry.location);t.setVisible(!0);var i='';if(o.address_components){i=[(o.address_components[0]&&o.address_components[0].short_name||''),(o.address_components[1]&&o.address_components[1].short_name||''),(o.address_components[2]&&o.address_components[2].short_name||'')].join(' ')};a.setContent('<div><strong>'+o.name+'</strong><br>'+i);a.open(e,t)})};function HomeControl(e,t){e.style.padding='5px';var a=document.createElement('div');a.style.backgroundColor='white';a.style.borderStyle='solid';a.style.borderWidth='2px';a.style.cursor='pointer';a.style.marginTop='5px';a.style.marginRight='5px';a.style.textAlign='center';a.title='My Location';a.id='google_my_location';e.appendChild(a);var n=document.createElement('div');n.style.fontFamily='Arial,sans-serif';n.style.fontSize='12px';n.style.paddingLeft='4px';n.style.paddingRight='4px';n.innerHTML='<strong>My Location</strong>';a.appendChild(n);google.maps.event.addDomListener(a,'click',function(){var e=new google.maps.Marker({clickable:!1,icon:new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',new google.maps.Size(22,22),new google.maps.Point(0,18),new google.maps.Point(11,11)),shadow:null,zIndex:999,map:t});if(navigator.geolocation)navigator.geolocation.getCurrentPosition(function(a){var c=new google.maps.LatLng(a.coords.latitude,a.coords.longitude);e.setPosition(c);var o=new google.maps.LatLngBounds();o.extend(c);t.fitBounds(o);var l=t.getZoom();t.setZoom(l>zoomOnMapSearch?zoomOnMapSearch:l);if(!0){map_rectangle=t;if(rectangle!=null){$('#rectangle_ne').val('');$('#rectangle_sw').val('');infoWindow_rectangle.setMap(null);rectangle.setMap(null);rectangle=null};var d=t.getZoom(),i=t.getCenter(),n=0.4;if(d>11)n=0.02;var o=new google.maps.LatLngBounds(new google.maps.LatLng(i.lat()-(n/2),i.lng()-n),new google.maps.LatLng(i.lat()+(n/2),i.lng()+n));rectangle=new google.maps.Rectangle({bounds:o,editable:!0,draggable:!0});rectangle.setMap(t);google.maps.event.addListener(rectangle,'bounds_changed',showNewRect);infoWindow_rectangle=new google.maps.InfoWindow();var s=rectangle.getBounds().getNorthEast(),r=rectangle.getBounds().getSouthWest();$('#rectangle_ne').val(s.lat()+', '+s.lng());$('#rectangle_sw').val(r.lat()+', '+r.lng())}},function(e){console.log(e)})})};function setAllMap(e){$.each(markers,function(t,a){a.infobox.close();a.infobox.isOpen=!1;a.marker.setMap(e);a.setMap(e)})};function add_to_favorite(){$('.add-to-favorites').on('click',function(e){e.preventDefault();var t=$(this),n=t.parent(),o=$(this).attr('data-id'),i={property_id:o};var a=$(this).find('.load-indicator');a.css('display','inline-block');n.addClass('loading');$.post('http://localhost:6060/perumahan/index.php/privateapi/add_to_favorites/en',i,function(e){a.css('display','none');ShowStatus.show(e.message);if(e.success){t.parent().find('.add-to-favorites').css('display','none');t.parent().find('.remove-from-favorites').css('display','block')}else{$('#sign-popup').toggleClass('active');$('body').addClass('overlay-bgg')}}).success(function(){n.removeClass('loading')});return!1})};function remove_from_favorites(){$('.remove-from-favorites').on('click',function(e){e.preventDefault();var t=$(this),n=t.parent(),o=$(this).attr('data-id'),i={property_id:o};var a=$(this).find('.load-indicator');n.addClass('loading');a.css('display','inline-block');$.post('http://localhost:6060/perumahan/index.php/privateapi/remove_from_favorites/en',i,function(e){ShowStatus.show(e.message);a.css('display','none');if(e.success){t.parent().find('.add-to-favorites').css('display','block');t.parent().find('.remove-from-favorites').css('display','none')}}).success(function(){n.removeClass('loading')});return!1})};;var translated_cal={days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],daysShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun'],daysMin:['Su','Mo','Tu','We','Th','Fr','Sa','Su'],months:['January','February','March','April','May','June','July','August','September','October','November','December'],monthsShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']};if(typeof(DPGlobal)!='undefined'){DPGlobal.dates=translated_cal};var nowTemp=new Date(),now=new Date(nowTemp.getFullYear(),nowTemp.getMonth(),nowTemp.getDate(),0,0,0,0);$('.datetimepicker_standard').datepicker().on('changeDate',function(e){$(this).datepicker('hide')});var checkin=$('#datetimepicker1').datepicker({onRender:function(e){var t=e.getDate(),a=e.getMonth()+1,r=e.getFullYear();if(t<10){t='0'+t};if(a<10){a='0'+a};var n=r+'-'+a+'-'+t;if(e.valueOf()<now.valueOf()){return'disabled'};return''}}).on('changeDate',function(e){if(e.date.valueOf()>checkout.date.valueOf()){var t=new Date(e.date);t.setDate(t.getDate()+7);checkout.setValue(t)};checkin.hide();$('#datetimepicker2')[0].focus()}).data('datetimepicker');var checkout=$('#datetimepicker2').datepicker({onRender:function(e){var t=e.getDate(),a=e.getMonth()+1,r=e.getFullYear();if(t<10){t='0'+t};if(a<10){a='0'+a};var n=r+'-'+a+'-'+t;if(e.valueOf()<=now.valueOf()){return'disabled'};return''}}).on('changeDate',function(e){checkout.hide()}).data('datepicker');$('a.available.selectable').click(function(){$('#datetimepicker1').val($(this).attr('ref'));$('#datetimepicker2').val($(this).attr('ref_to'));$('div.property-form form input:first').focus();var t=new Date($(this).attr('ref')),e=new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0);$('#datetimepicker1').datepicker('setValue',e);e.setDate(e.getDate()+7);checkout.setValue(e)});