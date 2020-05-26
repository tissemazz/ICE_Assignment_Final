import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmMarker } from './../../directives/marker';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { Marker } from './../google-maps-types';
import * as ɵngcc0 from '@angular/core';
export declare class MarkerManager {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    protected _zone: NgZone;
    protected _markers: Map<AgmMarker, Promise<Marker>>;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    convertAnimation(uiAnim: 'BOUNCE' | 'DROP' | null): Promise<any>;
    deleteMarker(marker: AgmMarker): Promise<void>;
    updateMarkerPosition(marker: AgmMarker): Promise<void>;
    updateTitle(marker: AgmMarker): Promise<void>;
    updateLabel(marker: AgmMarker): Promise<void>;
    updateDraggable(marker: AgmMarker): Promise<void>;
    updateIcon(marker: AgmMarker): Promise<void>;
    updateOpacity(marker: AgmMarker): Promise<void>;
    updateVisible(marker: AgmMarker): Promise<void>;
    updateZIndex(marker: AgmMarker): Promise<void>;
    updateClickable(marker: AgmMarker): Promise<void>;
    updateAnimation(marker: AgmMarker): Promise<void>;
    addMarker(marker: AgmMarker): void;
    getNativeMarker(marker: AgmMarker): Promise<Marker>;
    createEventObservable<T>(eventName: string, marker: AgmMarker): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MarkerManager>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MarkerManager>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLW1hbmFnZXIuZC50cyIsInNvdXJjZXMiOlsibWFya2VyLW1hbmFnZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFnbU1hcmtlciB9IGZyb20gJy4vLi4vLi4vZGlyZWN0aXZlcy9tYXJrZXInO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFya2VyTWFuYWdlciB7XG4gICAgcHJvdGVjdGVkIF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXI7XG4gICAgcHJvdGVjdGVkIF96b25lOiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIF9tYXJrZXJzOiBNYXA8QWdtTWFya2VyLCBQcm9taXNlPE1hcmtlcj4+O1xuICAgIGNvbnN0cnVjdG9yKF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIF96b25lOiBOZ1pvbmUpO1xuICAgIGNvbnZlcnRBbmltYXRpb24odWlBbmltOiAnQk9VTkNFJyB8ICdEUk9QJyB8IG51bGwpOiBQcm9taXNlPGFueT47XG4gICAgZGVsZXRlTWFya2VyKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPjtcbiAgICB1cGRhdGVNYXJrZXJQb3NpdGlvbihtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD47XG4gICAgdXBkYXRlVGl0bGUobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHVwZGF0ZUxhYmVsKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPjtcbiAgICB1cGRhdGVEcmFnZ2FibGUobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHVwZGF0ZUljb24obWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHVwZGF0ZU9wYWNpdHkobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHVwZGF0ZVZpc2libGUobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHVwZGF0ZVpJbmRleChtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD47XG4gICAgdXBkYXRlQ2xpY2thYmxlKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPjtcbiAgICB1cGRhdGVBbmltYXRpb24obWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGFkZE1hcmtlcihtYXJrZXI6IEFnbU1hcmtlcik6IHZvaWQ7XG4gICAgZ2V0TmF0aXZlTWFya2VyKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTxNYXJrZXI+O1xuICAgIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgbWFya2VyOiBBZ21NYXJrZXIpOiBPYnNlcnZhYmxlPFQ+O1xufVxuIl19