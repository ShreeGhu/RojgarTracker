import { useEffect } from "react";

const GOOGLE_MAPS_API_URL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB0-LuBnYvaJbYF7ZIVIB9dD00EMPmlutw&libraries=places&callback=initAutocomplete`;

const ProfileAutocomplete = ({ name, value, labelText, handleChange }) => {
  useEffect(() => {
    // Initialize the autocomplete object
    function initAutocomplete() {
      var autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById("autocomplete"),
        {
          types: ["(cities)"], // Restrict results to cities
        }
      );

      // When a place is selected, obtain the details
      autocomplete.addListener("place_changed", function () {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          console.log("No location details available for input: " + place.name);
          return;
        }

        const addressComponents = place.address_components;
        const city = getComponentValue(addressComponents, "locality");

        const country = getComponentValue(addressComponents, "country");
        const formattedAddress = [city, country].filter(Boolean).join(", ");

        handleChange({ target: { name, value: formattedAddress } });
      });
    }

    // Check if Google Maps API is already loaded
    if (!window.google || !window.google.maps) {
      // Load Google Maps Places API
      const script = document.createElement("script");
      script.src = GOOGLE_MAPS_API_URL;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // Google Maps API is already loaded, directly initialize the autocomplete
      initAutocomplete();
    }
  }, [handleChange, name]);

  const getComponentValue = (addressComponents, type) => {
    const component = addressComponents.find((component) =>
      component.types.includes(type)
    );
    return component ? component.long_name : "";
  };

  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {labelText || name}
      </label>
      <input
        id="autocomplete"
        type="text"
        className="form-input"
        placeholder="Enter the location..."
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProfileAutocomplete;
