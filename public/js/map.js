function initMap() {
    const position = {
        lat: 12.9716,
        lng: 77.5946
    };

    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            center: position,
            zoom: 12
        }
    );

    new google.maps.Marker({
        position,
        map
    });
}