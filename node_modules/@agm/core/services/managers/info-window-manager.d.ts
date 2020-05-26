import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmInfoWindow } from '../../directives/info-window';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { InfoWindowOptions } from '../google-maps-types';
import { MarkerManager } from './marker-manager';
import * as ɵngcc0 from '@angular/core';
export declare class InfoWindowManager {
    private _mapsWrapper;
    private _zone;
    private _markerManager;
    private _infoWindows;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone, _markerManager: MarkerManager);
    deleteInfoWindow(infoWindow: AgmInfoWindow): Promise<void>;
    setPosition(infoWindow: AgmInfoWindow): Promise<void>;
    setZIndex(infoWindow: AgmInfoWindow): Promise<void>;
    open(infoWindow: AgmInfoWindow): Promise<void>;
    close(infoWindow: AgmInfoWindow): Promise<void>;
    setOptions(infoWindow: AgmInfoWindow, options: InfoWindowOptions): Promise<void>;
    addInfoWindow(infoWindow: AgmInfoWindow): void;
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    createEventObservable<T>(eventName: string, infoWindow: AgmInfoWindow): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InfoWindowManager>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<InfoWindowManager>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby13aW5kb3ctbWFuYWdlci5kLnRzIiwic291cmNlcyI6WyJpbmZvLXdpbmRvdy1tYW5hZ2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWdtSW5mb1dpbmRvdyB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvaW5mby13aW5kb3cnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQgeyBJbmZvV2luZG93T3B0aW9ucyB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7IE1hcmtlck1hbmFnZXIgfSBmcm9tICcuL21hcmtlci1tYW5hZ2VyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEluZm9XaW5kb3dNYW5hZ2VyIHtcbiAgICBwcml2YXRlIF9tYXBzV3JhcHBlcjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIHByaXZhdGUgX21hcmtlck1hbmFnZXI7XG4gICAgcHJpdmF0ZSBfaW5mb1dpbmRvd3M7XG4gICAgY29uc3RydWN0b3IoX21hcHNXcmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgX3pvbmU6IE5nWm9uZSwgX21hcmtlck1hbmFnZXI6IE1hcmtlck1hbmFnZXIpO1xuICAgIGRlbGV0ZUluZm9XaW5kb3coaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0UG9zaXRpb24oaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0WkluZGV4KGluZm9XaW5kb3c6IEFnbUluZm9XaW5kb3cpOiBQcm9taXNlPHZvaWQ+O1xuICAgIG9wZW4oaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdyk6IFByb21pc2U8dm9pZD47XG4gICAgY2xvc2UoaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdyk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0T3B0aW9ucyhpbmZvV2luZG93OiBBZ21JbmZvV2luZG93LCBvcHRpb25zOiBJbmZvV2luZG93T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG4gICAgYWRkSW5mb1dpbmRvdyhpbmZvV2luZG93OiBBZ21JbmZvV2luZG93KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBJbmZvV2luZG93IGFzIGFuIE9ic2VydmFibGVcbiAgICAgKi9cbiAgICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIGluZm9XaW5kb3c6IEFnbUluZm9XaW5kb3cpOiBPYnNlcnZhYmxlPFQ+O1xufVxuIl19