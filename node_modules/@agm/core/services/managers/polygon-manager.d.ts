import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmPolygon, PolygonPathEvent } from '../../directives/polygon';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { LatLng } from '../google-maps-types';
import * as ɵngcc0 from '@angular/core';
export declare class PolygonManager {
    private _mapsWrapper;
    private _zone;
    private _polygons;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    addPolygon(path: AgmPolygon): void;
    updatePolygon(polygon: AgmPolygon): Promise<void>;
    setPolygonOptions(path: AgmPolygon, options: {
        [propName: string]: any;
    }): Promise<void>;
    deletePolygon(paths: AgmPolygon): Promise<void>;
    getPath(polygon: AgmPolygon): Promise<Array<LatLng>>;
    getPaths(polygon: AgmPolygon): Promise<Array<Array<LatLng>>>;
    createEventObservable<T>(eventName: string, path: AgmPolygon): Observable<T>;
    createPathEventObservable(agmPolygon: AgmPolygon): Promise<Observable<PolygonPathEvent<any>>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PolygonManager>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PolygonManager>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi1tYW5hZ2VyLmQudHMiLCJzb3VyY2VzIjpbInBvbHlnb24tbWFuYWdlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWdtUG9seWdvbiwgUG9seWdvblBhdGhFdmVudCB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcG9seWdvbic7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7IExhdExuZyB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBvbHlnb25NYW5hZ2VyIHtcbiAgICBwcml2YXRlIF9tYXBzV3JhcHBlcjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIHByaXZhdGUgX3BvbHlnb25zO1xuICAgIGNvbnN0cnVjdG9yKF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIF96b25lOiBOZ1pvbmUpO1xuICAgIGFkZFBvbHlnb24ocGF0aDogQWdtUG9seWdvbik6IHZvaWQ7XG4gICAgdXBkYXRlUG9seWdvbihwb2x5Z29uOiBBZ21Qb2x5Z29uKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRQb2x5Z29uT3B0aW9ucyhwYXRoOiBBZ21Qb2x5Z29uLCBvcHRpb25zOiB7XG4gICAgICAgIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xuICAgIH0pOiBQcm9taXNlPHZvaWQ+O1xuICAgIGRlbGV0ZVBvbHlnb24ocGF0aHM6IEFnbVBvbHlnb24pOiBQcm9taXNlPHZvaWQ+O1xuICAgIGdldFBhdGgocG9seWdvbjogQWdtUG9seWdvbik6IFByb21pc2U8QXJyYXk8TGF0TG5nPj47XG4gICAgZ2V0UGF0aHMocG9seWdvbjogQWdtUG9seWdvbik6IFByb21pc2U8QXJyYXk8QXJyYXk8TGF0TG5nPj4+O1xuICAgIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgcGF0aDogQWdtUG9seWdvbik6IE9ic2VydmFibGU8VD47XG4gICAgY3JlYXRlUGF0aEV2ZW50T2JzZXJ2YWJsZShhZ21Qb2x5Z29uOiBBZ21Qb2x5Z29uKTogUHJvbWlzZTxPYnNlcnZhYmxlPFBvbHlnb25QYXRoRXZlbnQ8YW55Pj4+O1xufVxuIl19