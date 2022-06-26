var datasrc = [
    {
      label: "Alabama",
      value: "AL"
    },
    {
      label: "Alaska",
      value: "AK"
    },
    {
      label: "Arizona",
      value: "AZ"
    },
    {
      label: "Arkansas",
      value: "AR"
    },
    {
      label: "California",
      value: "CA"
    },
    {
      label: "Colorado",
      value: "CO"
    },
    {
      label: "Connecticut",
      value: "CT"
    },
    {
      label: "Delaware",
      value: "DE"
    },
    {
      label: "Florida",
      value: "FL"
    },
    {
      label: "Georgia",
      value: "GA"
    },
    {
      label: "Hawaii",
      value: "HI"
    },
    {
      label: "Idaho",
      value: "ID"
    },
    {
      label: "Illinois",
      value: "IL"
    },
    {
      label: "Indiana",
      value: "IN"
    },
    {
      label: "Iowa",
      value: "IA"
    },
    {
      label: "Kansas",
      value: "KS"
    },
    {
      label: "Kentucky",
      value: "KY"
    },
    {
      label: "Louisiana",
      value: "LA"
    },
    {
      label: "Maine",
      value: "ME"
    },
    {
      label: "Maryland",
      value: "MD"
    },
    {
      label: "Massachusetts",
      value: "MA"
    },
    {
      label: "Michigan",
      value: "MI"
    },
    {
      label: "Minnesota",
      value: "MN"
    },
    {
      label: "Mississippi",
      value: "MS"
    },
    {
      label: "Missouri",
      value: "MO"
    },
    {
      label: "Montana",
      value: "MT"
    },
    {
      label: "Nebraska",
      value: "NE"
    },
    {
      label: "Nevada",
      value: "NV"
    },
    {
      label: "New Hampshire",
      value: "NH"
    },
    {
      label: "New Jersey",
      value: "NJ"
    },
    {
      label: "New Mexico",
      value: "NM"
    },
    {
      label: "New York",
      value: "NY"
    },
    {
      label: "North Carolina",
      value: "NC"
    },
    {
      label: "North Dakota",
      value: "ND"
    },
    {
      label: "Ohio",
      value: "OH"
    },
    {
      label: "Oklahoma",
      value: "OK"
    },
    {
      label: "Oregon",
      value: "OR"
    },
    {
      label: "Pennsylvania",
      value: "PA"
    },
    {
      label: "Rhode Island",
      value: "RI"
    },
    {
      label: "South Carolina",
      value: "SC"
    },
    {
      label: "South Dakota",
      value: "SD"
    },
    {
      label: "Tennessee",
      value: "TN"
    },
    {
      label: "Texas",
      value: "TX"
    },
    {
      label: "Utah",
      value: "UT"
    },
    {
      label: "Vermont",
      value: "VT"
    },
    {
      label: "Virginia",
      value: "VA"
    },
    {
      label: "Washington",
      value: "WA"
    },
    {
      label: "West Virginia",
      value: "WV"
    },
    {
      label: "Wisconsin",
      value: "WI"
    },
    {
      label: "Wyoming",
      value: "WY"
    }
  ]

var gmap;
var service;
var marker;

function initMap() {
    gmap = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.8097343, lng: -98.5556199 },
        zoom: 4,
    });
    service = new google.maps.places.PlacesService(gmap);
}

window.initMap = initMap;

function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
    // Clean up the marker if exist
    if (marker) {
        marker.setMap(null);
    }
    marker = new google.maps.Marker({
        map: gmap,
        position: place.geometry.location,
    });
  }

function searchMap(state) {
    request = {
        query: state,
        fields: ["name", "geometry"],
    };
    service.findPlaceFromQuery(
        request,
        (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                for (let i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
                gmap.setCenter(results[0].geometry.location);
            }
        }
    );
}

function init() {
    const ac = new Autocomplete(document.getElementById('state'), {
        data: datasrc,
        threshold: 1,
        maximumItems: 8,
        onSelectItem: ({label, value}) => {
            console.log("user selected:", label, value);
            searchMap(label);
        }
    });
}