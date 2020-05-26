import { Observable } from 'rxjs';
import { Geocoder, GeocoderRequest, GeocoderResult } from './google-maps-types';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as ɵngcc0 from '@angular/core';
export declare class AgmGeocoder {
    protected readonly geocoder$: Observable<Geocoder>;
    constructor(loader: MapsAPILoader);
    geocode(request: GeocoderRequest): Observable<GeocoderResult[]>;
    private _getGoogleResults;
    private _createGeocoder;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmGeocoder>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AgmGeocoder>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kZXItc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJnZW9jb2Rlci1zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdlb2NvZGVyLCBHZW9jb2RlclJlcXVlc3QsIEdlb2NvZGVyUmVzdWx0IH0gZnJvbSAnLi9nb29nbGUtbWFwcy10eXBlcyc7XG5pbXBvcnQgeyBNYXBzQVBJTG9hZGVyIH0gZnJvbSAnLi9tYXBzLWFwaS1sb2FkZXIvbWFwcy1hcGktbG9hZGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFnbUdlb2NvZGVyIHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZ2VvY29kZXIkOiBPYnNlcnZhYmxlPEdlb2NvZGVyPjtcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IE1hcHNBUElMb2FkZXIpO1xuICAgIGdlb2NvZGUocmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0KTogT2JzZXJ2YWJsZTxHZW9jb2RlclJlc3VsdFtdPjtcbiAgICBwcml2YXRlIF9nZXRHb29nbGVSZXN1bHRzO1xuICAgIHByaXZhdGUgX2NyZWF0ZUdlb2NvZGVyO1xufVxuIl19