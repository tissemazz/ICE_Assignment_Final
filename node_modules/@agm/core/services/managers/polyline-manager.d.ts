import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmPolyline, PathEvent } from '../../directives/polyline';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { LatLng } from '../google-maps-types';
import * as ɵngcc0 from '@angular/core';
export declare class PolylineManager {
    private _mapsWrapper;
    private _zone;
    private _polylines;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    private static _convertPoints;
    private static _convertPath;
    private static _convertIcons;
    addPolyline(line: AgmPolyline): void;
    updatePolylinePoints(line: AgmPolyline): Promise<void>;
    updateIconSequences(line: AgmPolyline): Promise<void>;
    setPolylineOptions(line: AgmPolyline, options: {
        [propName: string]: any;
    }): Promise<void>;
    deletePolyline(line: AgmPolyline): Promise<void>;
    private getMVCPath;
    getPath(agmPolyline: AgmPolyline): Promise<Array<LatLng>>;
    createEventObservable<T>(eventName: string, line: AgmPolyline): Observable<T>;
    createPathEventObservable(line: AgmPolyline): Promise<Observable<PathEvent>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PolylineManager>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PolylineManager>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtbWFuYWdlci5kLnRzIiwic291cmNlcyI6WyJwb2x5bGluZS1tYW5hZ2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFnbVBvbHlsaW5lLCBQYXRoRXZlbnQgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3BvbHlsaW5lJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0IHsgTGF0TG5nIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUG9seWxpbmVNYW5hZ2VyIHtcbiAgICBwcml2YXRlIF9tYXBzV3JhcHBlcjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIHByaXZhdGUgX3BvbHlsaW5lcztcbiAgICBjb25zdHJ1Y3RvcihfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBfem9uZTogTmdab25lKTtcbiAgICBwcml2YXRlIHN0YXRpYyBfY29udmVydFBvaW50cztcbiAgICBwcml2YXRlIHN0YXRpYyBfY29udmVydFBhdGg7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2NvbnZlcnRJY29ucztcbiAgICBhZGRQb2x5bGluZShsaW5lOiBBZ21Qb2x5bGluZSk6IHZvaWQ7XG4gICAgdXBkYXRlUG9seWxpbmVQb2ludHMobGluZTogQWdtUG9seWxpbmUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHVwZGF0ZUljb25TZXF1ZW5jZXMobGluZTogQWdtUG9seWxpbmUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldFBvbHlsaW5lT3B0aW9ucyhsaW5lOiBBZ21Qb2x5bGluZSwgb3B0aW9uczoge1xuICAgICAgICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbiAgICB9KTogUHJvbWlzZTx2b2lkPjtcbiAgICBkZWxldGVQb2x5bGluZShsaW5lOiBBZ21Qb2x5bGluZSk6IFByb21pc2U8dm9pZD47XG4gICAgcHJpdmF0ZSBnZXRNVkNQYXRoO1xuICAgIGdldFBhdGgoYWdtUG9seWxpbmU6IEFnbVBvbHlsaW5lKTogUHJvbWlzZTxBcnJheTxMYXRMbmc+PjtcbiAgICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIGxpbmU6IEFnbVBvbHlsaW5lKTogT2JzZXJ2YWJsZTxUPjtcbiAgICBjcmVhdGVQYXRoRXZlbnRPYnNlcnZhYmxlKGxpbmU6IEFnbVBvbHlsaW5lKTogUHJvbWlzZTxPYnNlcnZhYmxlPFBhdGhFdmVudD4+O1xufVxuIl19