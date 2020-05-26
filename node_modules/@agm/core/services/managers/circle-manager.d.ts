import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmCircle } from '../../directives/circle';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as mapTypes from '../google-maps-types';
import * as ɵngcc0 from '@angular/core';
export declare class CircleManager {
    private _apiWrapper;
    private _zone;
    private _circles;
    constructor(_apiWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    addCircle(circle: AgmCircle): void;
    /**
     * Removes the given circle from the map.
     */
    removeCircle(circle: AgmCircle): Promise<void>;
    setOptions(circle: AgmCircle, options: mapTypes.CircleOptions): Promise<void>;
    getBounds(circle: AgmCircle): Promise<mapTypes.LatLngBounds>;
    getCenter(circle: AgmCircle): Promise<mapTypes.LatLng>;
    getRadius(circle: AgmCircle): Promise<number>;
    setCenter(circle: AgmCircle): Promise<void>;
    setEditable(circle: AgmCircle): Promise<void>;
    setDraggable(circle: AgmCircle): Promise<void>;
    setVisible(circle: AgmCircle): Promise<void>;
    setRadius(circle: AgmCircle): Promise<void>;
    getNativeCircle(circle: AgmCircle): Promise<mapTypes.Circle>;
    createEventObservable<T>(eventName: string, circle: AgmCircle): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CircleManager>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CircleManager>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLW1hbmFnZXIuZC50cyIsInNvdXJjZXMiOlsiY2lyY2xlLW1hbmFnZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBZ21DaXJjbGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NpcmNsZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCAqIGFzIG1hcFR5cGVzIGZyb20gJy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENpcmNsZU1hbmFnZXIge1xuICAgIHByaXZhdGUgX2FwaVdyYXBwZXI7XG4gICAgcHJpdmF0ZSBfem9uZTtcbiAgICBwcml2YXRlIF9jaXJjbGVzO1xuICAgIGNvbnN0cnVjdG9yKF9hcGlXcmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgX3pvbmU6IE5nWm9uZSk7XG4gICAgYWRkQ2lyY2xlKGNpcmNsZTogQWdtQ2lyY2xlKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjaXJjbGUgZnJvbSB0aGUgbWFwLlxuICAgICAqL1xuICAgIHJlbW92ZUNpcmNsZShjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0T3B0aW9ucyhjaXJjbGU6IEFnbUNpcmNsZSwgb3B0aW9uczogbWFwVHlwZXMuQ2lyY2xlT3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG4gICAgZ2V0Qm91bmRzKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTxtYXBUeXBlcy5MYXRMbmdCb3VuZHM+O1xuICAgIGdldENlbnRlcihjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8bWFwVHlwZXMuTGF0TG5nPjtcbiAgICBnZXRSYWRpdXMoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPG51bWJlcj47XG4gICAgc2V0Q2VudGVyKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRFZGl0YWJsZShjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0RHJhZ2dhYmxlKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRWaXNpYmxlKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRSYWRpdXMoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGdldE5hdGl2ZUNpcmNsZShjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8bWFwVHlwZXMuQ2lyY2xlPjtcbiAgICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIGNpcmNsZTogQWdtQ2lyY2xlKTogT2JzZXJ2YWJsZTxUPjtcbn1cbiJdfQ==