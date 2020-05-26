import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as mapTypes from './google-maps-types';
import { Polyline, PolylineOptions } from './google-maps-types';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
import * as ɵngcc0 from '@angular/core';
export declare class GoogleMapsAPIWrapper {
    private _loader;
    private _zone;
    private _map;
    private _mapResolver;
    constructor(_loader: MapsAPILoader, _zone: NgZone);
    createMap(el: HTMLElement, mapOptions: mapTypes.MapOptions): Promise<void>;
    setMapOptions(options: mapTypes.MapOptions): void;
    /**
     * Creates a google map marker with the map context
     */
    createMarker(options?: mapTypes.MarkerOptions, addToMap?: boolean): Promise<mapTypes.Marker>;
    createInfoWindow(options?: mapTypes.InfoWindowOptions): Promise<mapTypes.InfoWindow>;
    /**
     * Creates a google.map.Circle for the current map.
     */
    createCircle(options: mapTypes.CircleOptions): Promise<mapTypes.Circle>;
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    createRectangle(options: mapTypes.RectangleOptions): Promise<mapTypes.Rectangle>;
    createPolyline(options: PolylineOptions): Promise<Polyline>;
    createPolygon(options: mapTypes.PolygonOptions): Promise<mapTypes.Polygon>;
    /**
     * Creates a new google.map.Data layer for the current map
     */
    createDataLayer(options?: mapTypes.DataOptions): Promise<mapTypes.Data>;
    /**
     * Creates a TransitLayer instance for a map
     * @param {TransitLayerOptions} options - used for setting layer options
     * @returns {Promise<TransitLayer>} a new transit layer object
     */
    createTransitLayer(options: mapTypes.TransitLayerOptions): Promise<mapTypes.TransitLayer>;
    /**
     * Creates a BicyclingLayer instance for a map
     * @param {BicyclingLayerOptions} options - used for setting layer options
     * @returns {Promise<BicyclingLayer>} a new bicycling layer object
     */
    createBicyclingLayer(options: mapTypes.BicyclingLayerOptions): Promise<mapTypes.BicyclingLayer>;
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    containsLocation(latLng: mapTypes.LatLngLiteral, polygon: mapTypes.Polygon): Promise<boolean>;
    subscribeToMapEvent<E>(eventName: string): Observable<E>;
    clearInstanceListeners(): void;
    setCenter(latLng: mapTypes.LatLngLiteral): Promise<void>;
    getZoom(): Promise<number>;
    getBounds(): Promise<mapTypes.LatLngBounds>;
    getMapTypeId(): Promise<mapTypes.MapTypeId>;
    setZoom(zoom: number): Promise<void>;
    getCenter(): Promise<mapTypes.LatLng>;
    panTo(latLng: mapTypes.LatLng | mapTypes.LatLngLiteral): Promise<void>;
    panBy(x: number, y: number): Promise<void>;
    fitBounds(latLng: mapTypes.LatLngBounds | mapTypes.LatLngBoundsLiteral, padding?: number | mapTypes.Padding): Promise<void>;
    panToBounds(latLng: mapTypes.LatLngBounds | mapTypes.LatLngBoundsLiteral, padding?: number | mapTypes.Padding): Promise<void>;
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    getNativeMap(): Promise<mapTypes.GoogleMap>;
    /**
     * Triggers the given event name on the map instance.
     */
    triggerMapEvent(eventName: string): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleMapsAPIWrapper>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GoogleMapsAPIWrapper>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXIuZC50cyIsInNvdXJjZXMiOlsiZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgbWFwVHlwZXMgZnJvbSAnLi9nb29nbGUtbWFwcy10eXBlcyc7XG5pbXBvcnQgeyBQb2x5bGluZSwgUG9seWxpbmVPcHRpb25zIH0gZnJvbSAnLi9nb29nbGUtbWFwcy10eXBlcyc7XG5pbXBvcnQgeyBNYXBzQVBJTG9hZGVyIH0gZnJvbSAnLi9tYXBzLWFwaS1sb2FkZXIvbWFwcy1hcGktbG9hZGVyJztcbi8qKlxuICogV3JhcHBlciBjbGFzcyB0aGF0IGhhbmRsZXMgdGhlIGNvbW11bmljYXRpb24gd2l0aCB0aGUgR29vZ2xlIE1hcHMgSmF2YXNjcmlwdFxuICogQVBJIHYzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdvb2dsZU1hcHNBUElXcmFwcGVyIHtcbiAgICBwcml2YXRlIF9sb2FkZXI7XG4gICAgcHJpdmF0ZSBfem9uZTtcbiAgICBwcml2YXRlIF9tYXA7XG4gICAgcHJpdmF0ZSBfbWFwUmVzb2x2ZXI7XG4gICAgY29uc3RydWN0b3IoX2xvYWRlcjogTWFwc0FQSUxvYWRlciwgX3pvbmU6IE5nWm9uZSk7XG4gICAgY3JlYXRlTWFwKGVsOiBIVE1MRWxlbWVudCwgbWFwT3B0aW9uczogbWFwVHlwZXMuTWFwT3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0TWFwT3B0aW9ucyhvcHRpb25zOiBtYXBUeXBlcy5NYXBPcHRpb25zKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZ29vZ2xlIG1hcCBtYXJrZXIgd2l0aCB0aGUgbWFwIGNvbnRleHRcbiAgICAgKi9cbiAgICBjcmVhdGVNYXJrZXIob3B0aW9ucz86IG1hcFR5cGVzLk1hcmtlck9wdGlvbnMsIGFkZFRvTWFwPzogYm9vbGVhbik6IFByb21pc2U8bWFwVHlwZXMuTWFya2VyPjtcbiAgICBjcmVhdGVJbmZvV2luZG93KG9wdGlvbnM/OiBtYXBUeXBlcy5JbmZvV2luZG93T3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuSW5mb1dpbmRvdz47XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdvb2dsZS5tYXAuQ2lyY2xlIGZvciB0aGUgY3VycmVudCBtYXAuXG4gICAgICovXG4gICAgY3JlYXRlQ2lyY2xlKG9wdGlvbnM6IG1hcFR5cGVzLkNpcmNsZU9wdGlvbnMpOiBQcm9taXNlPG1hcFR5cGVzLkNpcmNsZT47XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdvb2dsZS5tYXAuUmVjdGFuZ2xlIGZvciB0aGUgY3VycmVudCBtYXAuXG4gICAgICovXG4gICAgY3JlYXRlUmVjdGFuZ2xlKG9wdGlvbnM6IG1hcFR5cGVzLlJlY3RhbmdsZU9wdGlvbnMpOiBQcm9taXNlPG1hcFR5cGVzLlJlY3RhbmdsZT47XG4gICAgY3JlYXRlUG9seWxpbmUob3B0aW9uczogUG9seWxpbmVPcHRpb25zKTogUHJvbWlzZTxQb2x5bGluZT47XG4gICAgY3JlYXRlUG9seWdvbihvcHRpb25zOiBtYXBUeXBlcy5Qb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuUG9seWdvbj47XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBnb29nbGUubWFwLkRhdGEgbGF5ZXIgZm9yIHRoZSBjdXJyZW50IG1hcFxuICAgICAqL1xuICAgIGNyZWF0ZURhdGFMYXllcihvcHRpb25zPzogbWFwVHlwZXMuRGF0YU9wdGlvbnMpOiBQcm9taXNlPG1hcFR5cGVzLkRhdGE+O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBUcmFuc2l0TGF5ZXIgaW5zdGFuY2UgZm9yIGEgbWFwXG4gICAgICogQHBhcmFtIHtUcmFuc2l0TGF5ZXJPcHRpb25zfSBvcHRpb25zIC0gdXNlZCBmb3Igc2V0dGluZyBsYXllciBvcHRpb25zXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VHJhbnNpdExheWVyPn0gYSBuZXcgdHJhbnNpdCBsYXllciBvYmplY3RcbiAgICAgKi9cbiAgICBjcmVhdGVUcmFuc2l0TGF5ZXIob3B0aW9uczogbWFwVHlwZXMuVHJhbnNpdExheWVyT3B0aW9ucyk6IFByb21pc2U8bWFwVHlwZXMuVHJhbnNpdExheWVyPjtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgQmljeWNsaW5nTGF5ZXIgaW5zdGFuY2UgZm9yIGEgbWFwXG4gICAgICogQHBhcmFtIHtCaWN5Y2xpbmdMYXllck9wdGlvbnN9IG9wdGlvbnMgLSB1c2VkIGZvciBzZXR0aW5nIGxheWVyIG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxCaWN5Y2xpbmdMYXllcj59IGEgbmV3IGJpY3ljbGluZyBsYXllciBvYmplY3RcbiAgICAgKi9cbiAgICBjcmVhdGVCaWN5Y2xpbmdMYXllcihvcHRpb25zOiBtYXBUeXBlcy5CaWN5Y2xpbmdMYXllck9wdGlvbnMpOiBQcm9taXNlPG1hcFR5cGVzLkJpY3ljbGluZ0xheWVyPjtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGdpdmVuIGNvb3JkaW5hdGVzIGFyZSBpbnNpdGUgYSBQb2x5Z29uIHBhdGguXG4gICAgICovXG4gICAgY29udGFpbnNMb2NhdGlvbihsYXRMbmc6IG1hcFR5cGVzLkxhdExuZ0xpdGVyYWwsIHBvbHlnb246IG1hcFR5cGVzLlBvbHlnb24pOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIHN1YnNjcmliZVRvTWFwRXZlbnQ8RT4oZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEU+O1xuICAgIGNsZWFySW5zdGFuY2VMaXN0ZW5lcnMoKTogdm9pZDtcbiAgICBzZXRDZW50ZXIobGF0TG5nOiBtYXBUeXBlcy5MYXRMbmdMaXRlcmFsKTogUHJvbWlzZTx2b2lkPjtcbiAgICBnZXRab29tKCk6IFByb21pc2U8bnVtYmVyPjtcbiAgICBnZXRCb3VuZHMoKTogUHJvbWlzZTxtYXBUeXBlcy5MYXRMbmdCb3VuZHM+O1xuICAgIGdldE1hcFR5cGVJZCgpOiBQcm9taXNlPG1hcFR5cGVzLk1hcFR5cGVJZD47XG4gICAgc2V0Wm9vbSh6b29tOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGdldENlbnRlcigpOiBQcm9taXNlPG1hcFR5cGVzLkxhdExuZz47XG4gICAgcGFuVG8obGF0TG5nOiBtYXBUeXBlcy5MYXRMbmcgfCBtYXBUeXBlcy5MYXRMbmdMaXRlcmFsKTogUHJvbWlzZTx2b2lkPjtcbiAgICBwYW5CeSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgZml0Qm91bmRzKGxhdExuZzogbWFwVHlwZXMuTGF0TG5nQm91bmRzIHwgbWFwVHlwZXMuTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IG1hcFR5cGVzLlBhZGRpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHBhblRvQm91bmRzKGxhdExuZzogbWFwVHlwZXMuTGF0TG5nQm91bmRzIHwgbWFwVHlwZXMuTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IG1hcFR5cGVzLlBhZGRpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hdGl2ZSBHb29nbGUgTWFwcyBNYXAgaW5zdGFuY2UuIEJlIGNhcmVmdWwgd2hlbiB1c2luZyB0aGlzIGluc3RhbmNlIGRpcmVjdGx5LlxuICAgICAqL1xuICAgIGdldE5hdGl2ZU1hcCgpOiBQcm9taXNlPG1hcFR5cGVzLkdvb2dsZU1hcD47XG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGdpdmVuIGV2ZW50IG5hbWUgb24gdGhlIG1hcCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICB0cmlnZ2VyTWFwRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xufVxuIl19