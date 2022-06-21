import { FunctionComponent } from "react";
import GoogleMapReact from "google-map-react";

type propsNew = {
  text: string;
  lat: Number;
  lng: Number;
};

const AnyReactComponent: FunctionComponent<propsNew> = ({ text }) => (
  <div>Mice</div>
);

export const Map: FunctionComponent = () => {
  const data = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAaFLYbxYmKFt_FipKOg27d6c-jjH2tScc" }}
        defaultCenter={data.center}
        defaultZoom={data.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
