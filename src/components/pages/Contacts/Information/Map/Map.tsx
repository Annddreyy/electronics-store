import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import React from 'react';
import classes from './Map.module.scss';

export const MapComponent: React.FC = () => {
    return (
        <div className={classes.map}>
            <Map
                defaultCenter={{ lat: 59.944193, lng: 30.474088 }}
                defaultZoom={10}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                colorScheme="DARK"
            >
                <Marker position={{ lat: 59.904193, lng: 30.474088 }}></Marker>
                <Marker position={{ lat: 60.037643, lng: 30.326585 }}></Marker>
                <Marker position={{ lat: 59.837797, lng: 30.33926 }}></Marker>
                <Marker position={{ lat: 59.949767, lng: 30.413183 }}></Marker>
            </Map>
        </div>
    );
};
