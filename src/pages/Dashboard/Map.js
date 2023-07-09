import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Directions from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2hyZWUtIiwiYSI6ImNsanVqOXhydTB3bDYzcXFnN3Q4ZHZ4bzYifQ.xm8anocjRA0FP4g3MctKfA";

    let map;

    function successLocation(position) {
      const { longitude, latitude } = position.coords;
      setupMap([longitude, latitude]);
    }

    function setupMap(center) {
      map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: center,
        zoom: 13,
      });

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);

      const directions = new Directions({
        accessToken: mapboxgl.accessToken,
      });

      map.addControl(directions, "top-left");
    }

    function errorLocation() {
      setupMap([-123.116, 49.246]);
    }

    const getCurrentPositionOptions = {
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(
      successLocation,
      errorLocation,
      getCurrentPositionOptions
    );

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return <div id="map" />;
};

export default Map;
