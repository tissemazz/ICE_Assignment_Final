import { BehaviorSubject, Observable } from 'rxjs';
import { LatLng, LatLngBounds, LatLngLiteral } from './google-maps-types';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as ɵngcc0 from '@angular/core';
export interface FitBoundsDetails {
    latLng: LatLng | LatLngLiteral;
}
/**
 * @internal
 */
export declare type BoundsMap = Map<string, LatLng | LatLngLiteral>;
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
export declare abstract class FitBoundsAccessor {
    abstract getFitBoundsDetails$(): Observable<FitBoundsDetails>;
}
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
export declare class FitBoundsService {
    protected readonly bounds$: Observable<LatLngBounds>;
    protected readonly _boundsChangeSampleTime$: BehaviorSubject<number>;
    protected readonly _includeInBounds$: BehaviorSubject<Map<string, LatLng | LatLngLiteral>>;
    constructor(loader: MapsAPILoader);
    private _generateBounds;
    addToBounds(latLng: LatLng | LatLngLiteral): void;
    removeFromBounds(latLng: LatLng | LatLngLiteral): void;
    changeFitBoundsChangeSampleTime(timeMs: number): void;
    getBounds$(): Observable<LatLngBounds>;
    protected _createIdentifier(latLng: LatLng | LatLngLiteral): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FitBoundsService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<FitBoundsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml0LWJvdW5kcy5kLnRzIiwic291cmNlcyI6WyJmaXQtYm91bmRzLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXRMbmcsIExhdExuZ0JvdW5kcywgTGF0TG5nTGl0ZXJhbCB9IGZyb20gJy4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHsgTWFwc0FQSUxvYWRlciB9IGZyb20gJy4vbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlcic7XG5leHBvcnQgaW50ZXJmYWNlIEZpdEJvdW5kc0RldGFpbHMge1xuICAgIGxhdExuZzogTGF0TG5nIHwgTGF0TG5nTGl0ZXJhbDtcbn1cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBkZWNsYXJlIHR5cGUgQm91bmRzTWFwID0gTWFwPHN0cmluZywgTGF0TG5nIHwgTGF0TG5nTGl0ZXJhbD47XG4vKipcbiAqIENsYXNzIHRvIGltcGxlbWVudCB3aGVuIHlvdSB3aGF0IHRvIGJlIGFibGUgdG8gbWFrZSBpdCB3b3JrIHdpdGggdGhlIGF1dG8gZml0IGJvdW5kcyBmZWF0dXJlXG4gKiBvZiBBR00uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEZpdEJvdW5kc0FjY2Vzc29yIHtcbiAgICBhYnN0cmFjdCBnZXRGaXRCb3VuZHNEZXRhaWxzJCgpOiBPYnNlcnZhYmxlPEZpdEJvdW5kc0RldGFpbHM+O1xufVxuLyoqXG4gKiBUaGUgRml0Qm91bmRzU2VydmljZSBpcyByZXNwb25zaWJsZSBmb3IgY29tcHV0aW5nIHRoZSBib3VuZHMgb2YgdGhlIGEgc2luZ2xlIG1hcC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRml0Qm91bmRzU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJvdW5kcyQ6IE9ic2VydmFibGU8TGF0TG5nQm91bmRzPjtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2JvdW5kc0NoYW5nZVNhbXBsZVRpbWUkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPjtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2luY2x1ZGVJbkJvdW5kcyQ6IEJlaGF2aW9yU3ViamVjdDxNYXA8c3RyaW5nLCBMYXRMbmcgfCBMYXRMbmdMaXRlcmFsPj47XG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBNYXBzQVBJTG9hZGVyKTtcbiAgICBwcml2YXRlIF9nZW5lcmF0ZUJvdW5kcztcbiAgICBhZGRUb0JvdW5kcyhsYXRMbmc6IExhdExuZyB8IExhdExuZ0xpdGVyYWwpOiB2b2lkO1xuICAgIHJlbW92ZUZyb21Cb3VuZHMobGF0TG5nOiBMYXRMbmcgfCBMYXRMbmdMaXRlcmFsKTogdm9pZDtcbiAgICBjaGFuZ2VGaXRCb3VuZHNDaGFuZ2VTYW1wbGVUaW1lKHRpbWVNczogbnVtYmVyKTogdm9pZDtcbiAgICBnZXRCb3VuZHMkKCk6IE9ic2VydmFibGU8TGF0TG5nQm91bmRzPjtcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUlkZW50aWZpZXIobGF0TG5nOiBMYXRMbmcgfCBMYXRMbmdMaXRlcmFsKTogc3RyaW5nO1xufVxuIl19