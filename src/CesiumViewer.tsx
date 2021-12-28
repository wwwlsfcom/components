import React from "react";
import "cesium/Widgets/widgets.css";
import "./CesiumViewer.scss";

const Cesium = require('cesium/Cesium');


export default class CesiumViewer extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const viewer = new Cesium.Viewer('cesiumContainer');
// Fly the camera to San Francisco at the given longitude, latitude, and height.
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-15.0),
            }
        });
    }

    render() {
        return (
            <div id='cesiumContainer' className='cesium-container'></div>
        );
    }

}


