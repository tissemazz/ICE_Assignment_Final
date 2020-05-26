import { AgmBicyclingLayer } from '../../directives/bicycling-layer';
import { AgmTransitLayer } from '../../directives/transit-layer';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { BicyclingLayerOptions, TransitLayerOptions } from '../google-maps-types';
/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */
import * as ɵngcc0 from '@angular/core';
export declare class LayerManager {
    private _wrapper;
    private _layers;
    constructor(_wrapper: GoogleMapsAPIWrapper);
    /**
     * Adds a transit layer to a map instance.
     * @param {AgmTransitLayer} layer - a TransitLayer object
     * @param {TransitLayerOptions} options - TransitLayerOptions options
     * @returns void
     */
    addTransitLayer(layer: AgmTransitLayer, options: TransitLayerOptions): void;
    /**
     * Adds a bicycling layer to a map instance.
     * @param {AgmBicyclingLayer} layer - a bicycling layer object
     * @param {BicyclingLayerOptions} options - BicyclingLayer options
     * @returns void
     */
    addBicyclingLayer(layer: AgmBicyclingLayer, options: BicyclingLayerOptions): void;
    /**
     * Deletes a map layer
     * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
     * @returns  Promise<void>
     */
    deleteLayer(layer: AgmTransitLayer | AgmBicyclingLayer): Promise<void>;
    /**
     * Hide/Show a google map layer
     * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
     * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
     * @returns Promise<void>
     */
    toggleLayerVisibility(layer: AgmTransitLayer | AgmBicyclingLayer, options: TransitLayerOptions | BicyclingLayerOptions): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerManager>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LayerManager>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbWFuYWdlci5kLnRzIiwic291cmNlcyI6WyJsYXllci1tYW5hZ2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnbUJpY3ljbGluZ0xheWVyIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9iaWN5Y2xpbmctbGF5ZXInO1xuaW1wb3J0IHsgQWdtVHJhbnNpdExheWVyIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90cmFuc2l0LWxheWVyJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0IHsgQmljeWNsaW5nTGF5ZXJPcHRpb25zLCBUcmFuc2l0TGF5ZXJPcHRpb25zIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIG1hbmFnZXMgVHJhbnNpdCBhbmQgQmljeWNsaW5nIExheWVycyBmb3IgYSBHb29nbGUgTWFwIGluc3RhbmNlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMYXllck1hbmFnZXIge1xuICAgIHByaXZhdGUgX3dyYXBwZXI7XG4gICAgcHJpdmF0ZSBfbGF5ZXJzO1xuICAgIGNvbnN0cnVjdG9yKF93cmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlcik7XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHRyYW5zaXQgbGF5ZXIgdG8gYSBtYXAgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtBZ21UcmFuc2l0TGF5ZXJ9IGxheWVyIC0gYSBUcmFuc2l0TGF5ZXIgb2JqZWN0XG4gICAgICogQHBhcmFtIHtUcmFuc2l0TGF5ZXJPcHRpb25zfSBvcHRpb25zIC0gVHJhbnNpdExheWVyT3B0aW9ucyBvcHRpb25zXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGFkZFRyYW5zaXRMYXllcihsYXllcjogQWdtVHJhbnNpdExheWVyLCBvcHRpb25zOiBUcmFuc2l0TGF5ZXJPcHRpb25zKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgYmljeWNsaW5nIGxheWVyIHRvIGEgbWFwIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7QWdtQmljeWNsaW5nTGF5ZXJ9IGxheWVyIC0gYSBiaWN5Y2xpbmcgbGF5ZXIgb2JqZWN0XG4gICAgICogQHBhcmFtIHtCaWN5Y2xpbmdMYXllck9wdGlvbnN9IG9wdGlvbnMgLSBCaWN5Y2xpbmdMYXllciBvcHRpb25zXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGFkZEJpY3ljbGluZ0xheWVyKGxheWVyOiBBZ21CaWN5Y2xpbmdMYXllciwgb3B0aW9uczogQmljeWNsaW5nTGF5ZXJPcHRpb25zKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGEgbWFwIGxheWVyXG4gICAgICogQHBhcmFtIHtBZ21UcmFuc2l0TGF5ZXJ8QWdtQmljeWNsaW5nTGF5ZXJ9IGxheWVyIC0gdGhlIGxheWVyIHRvIGRlbGV0ZVxuICAgICAqIEByZXR1cm5zICBQcm9taXNlPHZvaWQ+XG4gICAgICovXG4gICAgZGVsZXRlTGF5ZXIobGF5ZXI6IEFnbVRyYW5zaXRMYXllciB8IEFnbUJpY3ljbGluZ0xheWVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICAvKipcbiAgICAgKiBIaWRlL1Nob3cgYSBnb29nbGUgbWFwIGxheWVyXG4gICAgICogQHBhcmFtIHsgQWdtVHJhbnNpdExheWVyfEFnbUJpY3ljbGluZ0xheWVyfSBsYXllciAtIHRoZSBsYXllciB0byBoaWRlL3Nob3dcbiAgICAgKiBAcGFyYW0ge1RyYW5zaXRMYXllck9wdGlvbnN8QmljeWNsaW5nTGF5ZXJPcHRpb25zfSBvcHRpb25zIC0gdXNlZCB0byBzZXQgdmlzaWJpbGl0eSBvZiB0aGUgbGF5ZXJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gICAgICovXG4gICAgdG9nZ2xlTGF5ZXJWaXNpYmlsaXR5KGxheWVyOiBBZ21UcmFuc2l0TGF5ZXIgfCBBZ21CaWN5Y2xpbmdMYXllciwgb3B0aW9uczogVHJhbnNpdExheWVyT3B0aW9ucyB8IEJpY3ljbGluZ0xheWVyT3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG59XG4iXX0=