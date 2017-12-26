$(function() {

    $('.btn_login').click(function(event){
        $('.modal, .overlay').show();
        $('body').addClass("fixed_overlay");
    });

    $(document).bind("click keydown", function(event) {
    closeModal = event.target;
    escapeClose = event.which;
    if ($(closeModal).hasClass("modal__close") || $(closeModal).hasClass("overlay") || escapeClose == 27) {
          $('.modal, .overlay').hide(); 
        $('body').removeClass("fixed_overlay"); 
      } 
    
 });

    //button up
    $(document).click(function (event) {
        btnUp = event.target;
        if ($(btnUp.parentNode).hasClass('btn-up') ) {
            $('body, html').animate({ 'scrollTop': 0 }, 1000);
        }
    });
    $(document).scroll(function (e) { 
        e.preventDefault;
        if ($(document).scrollTop() > 200) {
            $('.btn-up').addClass('btn-up--shown');
        } else {
            $('.btn-up').removeClass('btn-up--shown')
       }
    }); 
    

//navigation click======
    $('nav a').click(function(e){
        e.preventDefault();
        var getHref = $(this).attr('href');
        var jump = $(getHref).offset().top-80;
        $('html, body').animate({
            scrollTop:jump
        }, 1500);
    });

//dropdown header
    $(document).scroll(function(){
        console.log($(document).scrollTop()); 
        if (($(document).scrollTop() > 30)) {
            $('.nav-container').addClass('navigation_hidden');
            if (($(document).scrollTop() > 670)) {
                $('.nav-container').removeClass('navigation_hidden');
                $('.nav-container').addClass('nav-scrolled');

            } else {
                $('.nav-container').removeClass('navigation_hidden, nav-scrolled');
            }
            return;
        }     
        $('.nav-container').removeClass('navigation_hidden');
    }); 


    //testimonials slider ==========
    $(function () {
    $('.testimonials--slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
    });
})
});

//show more function AJAX imitation
$('a.show_more').click(function(event){
   event.preventDefault();
    showMore = event.target;
    postList = $(".post-list")[0];
    lastChild = postList.lastElementChild;
    if ($(this) || $(this).parentNode.hasClass('show_more--btn')) {
        $(lastChild).clone(true).appendTo(".post-list");
    } return;
});

//Google maps=========
;(function($){
    $(window).load(function(){
        var map;
        var mapContainer = $('#map')[0];
        var mapCenter = { lat: 40.7083405, lng: -74.0077114 };
        map = new google.maps.Map(mapContainer, {
            center: mapCenter,
            zoom: 17,
            disableDefaultUI: true,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fff"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#656562"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "poi.medical",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        });
        
        var marker = new google.maps.Marker({
            position: mapCenter,
            map: map,
            icon: "../i/map-pin.png"
        });

        var infowindow = new google.maps.InfoWindow({
            content: "100 William Street, New York 10038",
            maxWidth: 110
        }); 
        infowindow.open(map, marker);
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        google.maps.event.addDomListener(window, "resize", function(){
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
        });
})(jQuery);
    

