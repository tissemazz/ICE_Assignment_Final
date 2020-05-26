import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmRectangle } from '../../directives/rectangle';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as mapTypes from '../google-maps-types';
import * as ɵngcc0 from '@angular/core';
export declare class RectangleManager {
    private _apiWrapper;
    private _zone;
    private _rectangles;
    constructor(_apiWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    addRectangle(rectangle: AgmRectangle): void;
    /**
     * Removes the given rectangle from the map.
     */
    removeRectangle(rectangle: AgmRectangle): Promise<void>;
    setOptions(rectangle: AgmRectangle, options: mapTypes.RectangleOptions): Promise<void>;
    getBounds(rectangle: AgmRectangle): Promise<mapTypes.LatLngBounds>;
    setBounds(rectangle: AgmRectangle): Promise<void>;
    setEditable(rectangle: AgmRectangle): Promise<void>;
    setDraggable(rectangle: AgmRectangle): Promise<void>;
    setVisible(rectangle: AgmRectangle): Promise<void>;
    createEventObservable<T>(eventName: string, rectangle: AgmRectangle): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RectangleManager>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<RectangleManager>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdGFuZ2xlLW1hbmFnZXIuZC50cyIsInNvdXJjZXMiOlsicmVjdGFuZ2xlLW1hbmFnZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFnbVJlY3RhbmdsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmVjdGFuZ2xlJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0ICogYXMgbWFwVHlwZXMgZnJvbSAnLi4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUmVjdGFuZ2xlTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBfYXBpV3JhcHBlcjtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIHByaXZhdGUgX3JlY3RhbmdsZXM7XG4gICAgY29uc3RydWN0b3IoX2FwaVdyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBfem9uZTogTmdab25lKTtcbiAgICBhZGRSZWN0YW5nbGUocmVjdGFuZ2xlOiBBZ21SZWN0YW5nbGUpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIHJlY3RhbmdsZSBmcm9tIHRoZSBtYXAuXG4gICAgICovXG4gICAgcmVtb3ZlUmVjdGFuZ2xlKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRPcHRpb25zKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlLCBvcHRpb25zOiBtYXBUeXBlcy5SZWN0YW5nbGVPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcbiAgICBnZXRCb3VuZHMocmVjdGFuZ2xlOiBBZ21SZWN0YW5nbGUpOiBQcm9taXNlPG1hcFR5cGVzLkxhdExuZ0JvdW5kcz47XG4gICAgc2V0Qm91bmRzKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRFZGl0YWJsZShyZWN0YW5nbGU6IEFnbVJlY3RhbmdsZSk6IFByb21pc2U8dm9pZD47XG4gICAgc2V0RHJhZ2dhYmxlKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBzZXRWaXNpYmxlKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPjtcbiAgICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogT2JzZXJ2YWJsZTxUPjtcbn1cbiJdfQ==