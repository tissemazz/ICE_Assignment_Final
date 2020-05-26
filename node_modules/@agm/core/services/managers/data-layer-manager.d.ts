import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmDataLayer } from './../../directives/data-layer';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { Data, DataOptions, Feature } from './../google-maps-types';
/**
 * Manages all Data Layers for a Google Map instance.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataLayerManager {
    private _wrapper;
    private _zone;
    private _layers;
    constructor(_wrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    /**
     * Adds a new Data Layer to the map.
     */
    addDataLayer(layer: AgmDataLayer): void;
    deleteDataLayer(layer: AgmDataLayer): void;
    updateGeoJson(layer: AgmDataLayer, geoJson: Object | string): void;
    setDataOptions(layer: AgmDataLayer, options: DataOptions): void;
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    createEventObservable<T>(eventName: string, layer: AgmDataLayer): Observable<T>;
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    getDataFeatures(d: Data, geoJson: Object | string): Promise<Feature[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataLayerManager>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DataLayerManager>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1sYXllci1tYW5hZ2VyLmQudHMiLCJzb3VyY2VzIjpbImRhdGEtbGF5ZXItbWFuYWdlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBZ21EYXRhTGF5ZXIgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMvZGF0YS1sYXllcic7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0IHsgRGF0YSwgRGF0YU9wdGlvbnMsIEZlYXR1cmUgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcbi8qKlxuICogTWFuYWdlcyBhbGwgRGF0YSBMYXllcnMgZm9yIGEgR29vZ2xlIE1hcCBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGF0YUxheWVyTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBfd3JhcHBlcjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIHByaXZhdGUgX2xheWVycztcbiAgICBjb25zdHJ1Y3Rvcihfd3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIF96b25lOiBOZ1pvbmUpO1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBuZXcgRGF0YSBMYXllciB0byB0aGUgbWFwLlxuICAgICAqL1xuICAgIGFkZERhdGFMYXllcihsYXllcjogQWdtRGF0YUxheWVyKTogdm9pZDtcbiAgICBkZWxldGVEYXRhTGF5ZXIobGF5ZXI6IEFnbURhdGFMYXllcik6IHZvaWQ7XG4gICAgdXBkYXRlR2VvSnNvbihsYXllcjogQWdtRGF0YUxheWVyLCBnZW9Kc29uOiBPYmplY3QgfCBzdHJpbmcpOiB2b2lkO1xuICAgIHNldERhdGFPcHRpb25zKGxheWVyOiBBZ21EYXRhTGF5ZXIsIG9wdGlvbnM6IERhdGFPcHRpb25zKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBEYXRhTGF5ZXIgYXMgYW4gT2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgbGF5ZXI6IEFnbURhdGFMYXllcik6IE9ic2VydmFibGU8VD47XG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBmZWF0dXJlcyBmcm9tIGEgZ2VvSnNvbiB1c2luZyBnb29nbGUubWFwcyBEYXRhIENsYXNzXG4gICAgICogQHBhcmFtIGQgOiBnb29nbGUubWFwcy5EYXRhIGNsYXNzIGluc3RhbmNlXG4gICAgICogQHBhcmFtIGdlb0pzb24gOiB1cmwgb3IgZ2VvanNvbiBvYmplY3RcbiAgICAgKi9cbiAgICBnZXREYXRhRmVhdHVyZXMoZDogRGF0YSwgZ2VvSnNvbjogT2JqZWN0IHwgc3RyaW5nKTogUHJvbWlzZTxGZWF0dXJlW10+O1xufVxuIl19