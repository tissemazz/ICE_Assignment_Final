import { ModuleWithProviders } from '@angular/core';
import { AgmBicyclingLayer } from './directives/bicycling-layer';
import { AgmCircle } from './directives/circle';
import { AgmDataLayer } from './directives/data-layer';
import { AgmFitBounds } from './directives/fit-bounds';
import { AgmInfoWindow } from './directives/info-window';
import { AgmKmlLayer } from './directives/kml-layer';
import { AgmMap } from './directives/map';
import { AgmMarker } from './directives/marker';
import { AgmPolygon } from './directives/polygon';
import { AgmPolyline } from './directives/polyline';
import { AgmPolylineIcon } from './directives/polyline-icon';
import { AgmPolylinePoint } from './directives/polyline-point';
import { AgmRectangle } from './directives/rectangle';
import { AgmTransitLayer } from './directives/transit-layer';
import { LazyMapsAPILoaderConfigLiteral } from './services/maps-api-loader/lazy-maps-api-loader';
/**
 * @internal
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './directives/bicycling-layer';
import * as ɵngcc2 from './directives/circle';
import * as ɵngcc3 from './directives/data-layer';
import * as ɵngcc4 from './directives/fit-bounds';
import * as ɵngcc5 from './directives/info-window';
import * as ɵngcc6 from './directives/kml-layer';
import * as ɵngcc7 from './directives/map';
import * as ɵngcc8 from './directives/marker';
import * as ɵngcc9 from './directives/polygon';
import * as ɵngcc10 from './directives/polyline';
import * as ɵngcc11 from './directives/polyline-icon';
import * as ɵngcc12 from './directives/polyline-point';
import * as ɵngcc13 from './directives/rectangle';
import * as ɵngcc14 from './directives/transit-layer';
export declare function coreDirectives(): (typeof AgmTransitLayer | typeof AgmBicyclingLayer | typeof AgmCircle | typeof AgmDataLayer | typeof AgmFitBounds | typeof AgmMarker | typeof AgmInfoWindow | typeof AgmKmlLayer | typeof AgmPolygon | typeof AgmPolylineIcon | typeof AgmPolylinePoint | typeof AgmPolyline | typeof AgmRectangle | typeof AgmMap)[];
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
export declare class AgmCoreModule {
    /**
     * Please use this method when you register the module at the root level.
     */
    static forRoot(lazyMapsAPILoaderConfig?: LazyMapsAPILoaderConfigLiteral): ModuleWithProviders<AgmCoreModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<AgmCoreModule, [typeof ɵngcc1.AgmBicyclingLayer, typeof ɵngcc2.AgmCircle, typeof ɵngcc3.AgmDataLayer, typeof ɵngcc4.AgmFitBounds, typeof ɵngcc5.AgmInfoWindow, typeof ɵngcc6.AgmKmlLayer, typeof ɵngcc7.AgmMap, typeof ɵngcc8.AgmMarker, typeof ɵngcc9.AgmPolygon, typeof ɵngcc10.AgmPolyline, typeof ɵngcc11.AgmPolylineIcon, typeof ɵngcc12.AgmPolylinePoint, typeof ɵngcc13.AgmRectangle, typeof ɵngcc14.AgmTransitLayer], never, [typeof ɵngcc1.AgmBicyclingLayer, typeof ɵngcc2.AgmCircle, typeof ɵngcc3.AgmDataLayer, typeof ɵngcc4.AgmFitBounds, typeof ɵngcc5.AgmInfoWindow, typeof ɵngcc6.AgmKmlLayer, typeof ɵngcc7.AgmMap, typeof ɵngcc8.AgmMarker, typeof ɵngcc9.AgmPolygon, typeof ɵngcc10.AgmPolyline, typeof ɵngcc11.AgmPolylineIcon, typeof ɵngcc12.AgmPolylinePoint, typeof ɵngcc13.AgmRectangle, typeof ɵngcc14.AgmTransitLayer]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<AgmCoreModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsiY29yZS5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7Ozs7OzhFQVM4RSxrQ0FBbUI7OztBQUNqRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnbUJpY3ljbGluZ0xheWVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2JpY3ljbGluZy1sYXllcic7XG5pbXBvcnQgeyBBZ21DaXJjbGUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2lyY2xlJztcbmltcG9ydCB7IEFnbURhdGFMYXllciB9IGZyb20gJy4vZGlyZWN0aXZlcy9kYXRhLWxheWVyJztcbmltcG9ydCB7IEFnbUZpdEJvdW5kcyB9IGZyb20gJy4vZGlyZWN0aXZlcy9maXQtYm91bmRzJztcbmltcG9ydCB7IEFnbUluZm9XaW5kb3cgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5mby13aW5kb3cnO1xuaW1wb3J0IHsgQWdtS21sTGF5ZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMva21sLWxheWVyJztcbmltcG9ydCB7IEFnbU1hcCB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXAnO1xuaW1wb3J0IHsgQWdtTWFya2VyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hcmtlcic7XG5pbXBvcnQgeyBBZ21Qb2x5Z29uIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BvbHlnb24nO1xuaW1wb3J0IHsgQWdtUG9seWxpbmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWxpbmUnO1xuaW1wb3J0IHsgQWdtUG9seWxpbmVJY29uIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BvbHlsaW5lLWljb24nO1xuaW1wb3J0IHsgQWdtUG9seWxpbmVQb2ludCB9IGZyb20gJy4vZGlyZWN0aXZlcy9wb2x5bGluZS1wb2ludCc7XG5pbXBvcnQgeyBBZ21SZWN0YW5nbGUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVjdGFuZ2xlJztcbmltcG9ydCB7IEFnbVRyYW5zaXRMYXllciB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmFuc2l0LWxheWVyJztcbmltcG9ydCB7IExhenlNYXBzQVBJTG9hZGVyQ29uZmlnTGl0ZXJhbCB9IGZyb20gJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL2xhenktbWFwcy1hcGktbG9hZGVyJztcbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGNvcmVEaXJlY3RpdmVzKCk6ICh0eXBlb2YgQWdtVHJhbnNpdExheWVyIHwgdHlwZW9mIEFnbUJpY3ljbGluZ0xheWVyIHwgdHlwZW9mIEFnbUNpcmNsZSB8IHR5cGVvZiBBZ21EYXRhTGF5ZXIgfCB0eXBlb2YgQWdtRml0Qm91bmRzIHwgdHlwZW9mIEFnbU1hcmtlciB8IHR5cGVvZiBBZ21JbmZvV2luZG93IHwgdHlwZW9mIEFnbUttbExheWVyIHwgdHlwZW9mIEFnbVBvbHlnb24gfCB0eXBlb2YgQWdtUG9seWxpbmVJY29uIHwgdHlwZW9mIEFnbVBvbHlsaW5lUG9pbnQgfCB0eXBlb2YgQWdtUG9seWxpbmUgfCB0eXBlb2YgQWdtUmVjdGFuZ2xlIHwgdHlwZW9mIEFnbU1hcClbXTtcbi8qKlxuICogVGhlIGFuZ3VsYXItZ29vZ2xlLW1hcHMgY29yZSBtb2R1bGUuIENvbnRhaW5zIGFsbCBEaXJlY3RpdmVzL1NlcnZpY2VzL1BpcGVzXG4gKiBvZiB0aGUgY29yZSBtb2R1bGUuIFBsZWFzZSB1c2UgYEFnbUNvcmVNb2R1bGUuZm9yUm9vdCgpYCBpbiB5b3VyIGFwcCBtb2R1bGUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFnbUNvcmVNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIFBsZWFzZSB1c2UgdGhpcyBtZXRob2Qgd2hlbiB5b3UgcmVnaXN0ZXIgdGhlIG1vZHVsZSBhdCB0aGUgcm9vdCBsZXZlbC5cbiAgICAgKi9cbiAgICBzdGF0aWMgZm9yUm9vdChsYXp5TWFwc0FQSUxvYWRlckNvbmZpZz86IExhenlNYXBzQVBJTG9hZGVyQ29uZmlnTGl0ZXJhbCk6IE1vZHVsZVdpdGhQcm92aWRlcnM7XG59XG4iXX0=