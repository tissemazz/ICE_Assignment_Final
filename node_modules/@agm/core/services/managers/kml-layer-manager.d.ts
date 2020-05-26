import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmKmlLayer } from './../../directives/kml-layer';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { KmlLayerOptions } from './../google-maps-types';
/**
 * Manages all KML Layers for a Google Map instance.
 */
import * as ɵngcc0 from '@angular/core';
export declare class KmlLayerManager {
    private _wrapper;
    private _zone;
    private _layers;
    constructor(_wrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer: AgmKmlLayer): void;
    setOptions(layer: AgmKmlLayer, options: KmlLayerOptions): void;
    deleteKmlLayer(layer: AgmKmlLayer): void;
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable<T>(eventName: string, layer: AgmKmlLayer): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<KmlLayerManager>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<KmlLayerManager>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLW1hbmFnZXIuZC50cyIsInNvdXJjZXMiOlsia21sLWxheWVyLW1hbmFnZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFnbUttbExheWVyIH0gZnJvbSAnLi8uLi8uLi9kaXJlY3RpdmVzL2ttbC1sYXllcic7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0IHsgS21sTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy10eXBlcyc7XG4vKipcbiAqIE1hbmFnZXMgYWxsIEtNTCBMYXllcnMgZm9yIGEgR29vZ2xlIE1hcCBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgS21sTGF5ZXJNYW5hZ2VyIHtcbiAgICBwcml2YXRlIF93cmFwcGVyO1xuICAgIHByaXZhdGUgX3pvbmU7XG4gICAgcHJpdmF0ZSBfbGF5ZXJzO1xuICAgIGNvbnN0cnVjdG9yKF93cmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgX3pvbmU6IE5nWm9uZSk7XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5ldyBLTUwgTGF5ZXIgdG8gdGhlIG1hcC5cbiAgICAgKi9cbiAgICBhZGRLbWxMYXllcihsYXllcjogQWdtS21sTGF5ZXIpOiB2b2lkO1xuICAgIHNldE9wdGlvbnMobGF5ZXI6IEFnbUttbExheWVyLCBvcHRpb25zOiBLbWxMYXllck9wdGlvbnMpOiB2b2lkO1xuICAgIGRlbGV0ZUttbExheWVyKGxheWVyOiBBZ21LbWxMYXllcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIEdvb2dsZSBNYXBzIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgZ2l2ZW4gS21sTGF5ZXIgYXMgYW4gT2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgbGF5ZXI6IEFnbUttbExheWVyKTogT2JzZXJ2YWJsZTxUPjtcbn1cbiJdfQ==