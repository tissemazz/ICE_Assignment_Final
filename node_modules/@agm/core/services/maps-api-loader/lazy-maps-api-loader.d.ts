import { InjectionToken } from '@angular/core';
import { DocumentRef, WindowRef } from '../../utils/browser-globals';
import { MapsAPILoader } from './maps-api-loader';
import * as ɵngcc0 from '@angular/core';
export declare enum GoogleMapsScriptProtocol {
    HTTP = 1,
    HTTPS = 2,
    AUTO = 3
}
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
export declare const LAZY_MAPS_API_CONFIG: InjectionToken<LazyMapsAPILoaderConfigLiteral>;
/**
 * Configuration for the {@link LazyMapsAPILoader}.
 */
export interface LazyMapsAPILoaderConfigLiteral {
    /**
     * The Google Maps API Key (see:
     * https://developers.google.com/maps/documentation/javascript/get-api-key)
     */
    apiKey?: string;
    /**
     * The Google Maps client ID (for premium plans).
     * When you have a Google Maps APIs Premium Plan license, you must authenticate
     * your application with either an API key or a client ID.
     * The Google Maps API will fail to load if both a client ID and an API key are included.
     */
    clientId?: string;
    /**
     * The Google Maps channel name (for premium plans).
     * A channel parameter is an optional parameter that allows you to track usage under your client
     * ID by assigning a distinct channel to each of your applications.
     */
    channel?: string;
    /**
     * Google Maps API version.
     */
    apiVersion?: string;
    /**
     * Host and Path used for the `<script>` tag.
     */
    hostAndPath?: string;
    /**
     * Protocol used for the `<script>` tag.
     */
    protocol?: GoogleMapsScriptProtocol;
    /**
     * Defines which Google Maps libraries should get loaded.
     */
    libraries?: string[];
    /**
     * The default bias for the map behavior is US.
     * If you wish to alter your application to serve different map tiles or bias the
     * application, you can overwrite the default behavior (US) by defining a `region`.
     * See https://developers.google.com/maps/documentation/javascript/basics#Region
     */
    region?: string;
    /**
     * The Google Maps API uses the browser's preferred language when displaying
     * textual information. If you wish to overwrite this behavior and force the API
     * to use a given language, you can use this setting.
     * See https://developers.google.com/maps/documentation/javascript/basics#Language
     */
    language?: string;
}
export declare class LazyMapsAPILoader extends MapsAPILoader {
    private localeId;
    protected _scriptLoadingPromise: Promise<void>;
    protected _config: LazyMapsAPILoaderConfigLiteral;
    protected _windowRef: WindowRef;
    protected _documentRef: DocumentRef;
    protected readonly _SCRIPT_ID: string;
    protected readonly callbackName: string;
    constructor(config: any, w: WindowRef, d: DocumentRef, localeId: string);
    load(): Promise<void>;
    private _assignScriptLoadingPromise;
    protected _getScriptSrc(callbackName: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LazyMapsAPILoader>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LazyMapsAPILoader>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1tYXBzLWFwaS1sb2FkZXIuZC50cyIsInNvdXJjZXMiOlsibGF6eS1tYXBzLWFwaS1sb2FkZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudFJlZiwgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vdXRpbHMvYnJvd3Nlci1nbG9iYWxzJztcbmltcG9ydCB7IE1hcHNBUElMb2FkZXIgfSBmcm9tICcuL21hcHMtYXBpLWxvYWRlcic7XG5leHBvcnQgZGVjbGFyZSBlbnVtIEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbCB7XG4gICAgSFRUUCA9IDEsXG4gICAgSFRUUFMgPSAyLFxuICAgIEFVVE8gPSAzXG59XG4vKipcbiAqIFRva2VuIGZvciB0aGUgY29uZmlnIG9mIHRoZSBMYXp5TWFwc0FQSUxvYWRlci4gUGxlYXNlIHByb3ZpZGUgYW4gb2JqZWN0IG9mIHR5cGUge0BsaW5rXG4gKiBMYXp5TWFwc0FQSUxvYWRlckNvbmZpZ30uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IExBWllfTUFQU19BUElfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxMYXp5TWFwc0FQSUxvYWRlckNvbmZpZ0xpdGVyYWw+O1xuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciB0aGUge0BsaW5rIExhenlNYXBzQVBJTG9hZGVyfS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMYXp5TWFwc0FQSUxvYWRlckNvbmZpZ0xpdGVyYWwge1xuICAgIC8qKlxuICAgICAqIFRoZSBHb29nbGUgTWFwcyBBUEkgS2V5IChzZWU6XG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZ2V0LWFwaS1rZXkpXG4gICAgICovXG4gICAgYXBpS2V5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBHb29nbGUgTWFwcyBjbGllbnQgSUQgKGZvciBwcmVtaXVtIHBsYW5zKS5cbiAgICAgKiBXaGVuIHlvdSBoYXZlIGEgR29vZ2xlIE1hcHMgQVBJcyBQcmVtaXVtIFBsYW4gbGljZW5zZSwgeW91IG11c3QgYXV0aGVudGljYXRlXG4gICAgICogeW91ciBhcHBsaWNhdGlvbiB3aXRoIGVpdGhlciBhbiBBUEkga2V5IG9yIGEgY2xpZW50IElELlxuICAgICAqIFRoZSBHb29nbGUgTWFwcyBBUEkgd2lsbCBmYWlsIHRvIGxvYWQgaWYgYm90aCBhIGNsaWVudCBJRCBhbmQgYW4gQVBJIGtleSBhcmUgaW5jbHVkZWQuXG4gICAgICovXG4gICAgY2xpZW50SWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIEdvb2dsZSBNYXBzIGNoYW5uZWwgbmFtZSAoZm9yIHByZW1pdW0gcGxhbnMpLlxuICAgICAqIEEgY2hhbm5lbCBwYXJhbWV0ZXIgaXMgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgYWxsb3dzIHlvdSB0byB0cmFjayB1c2FnZSB1bmRlciB5b3VyIGNsaWVudFxuICAgICAqIElEIGJ5IGFzc2lnbmluZyBhIGRpc3RpbmN0IGNoYW5uZWwgdG8gZWFjaCBvZiB5b3VyIGFwcGxpY2F0aW9ucy5cbiAgICAgKi9cbiAgICBjaGFubmVsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEdvb2dsZSBNYXBzIEFQSSB2ZXJzaW9uLlxuICAgICAqL1xuICAgIGFwaVZlcnNpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSG9zdCBhbmQgUGF0aCB1c2VkIGZvciB0aGUgYDxzY3JpcHQ+YCB0YWcuXG4gICAgICovXG4gICAgaG9zdEFuZFBhdGg/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUHJvdG9jb2wgdXNlZCBmb3IgdGhlIGA8c2NyaXB0PmAgdGFnLlxuICAgICAqL1xuICAgIHByb3RvY29sPzogR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgd2hpY2ggR29vZ2xlIE1hcHMgbGlicmFyaWVzIHNob3VsZCBnZXQgbG9hZGVkLlxuICAgICAqL1xuICAgIGxpYnJhcmllcz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGJpYXMgZm9yIHRoZSBtYXAgYmVoYXZpb3IgaXMgVVMuXG4gICAgICogSWYgeW91IHdpc2ggdG8gYWx0ZXIgeW91ciBhcHBsaWNhdGlvbiB0byBzZXJ2ZSBkaWZmZXJlbnQgbWFwIHRpbGVzIG9yIGJpYXMgdGhlXG4gICAgICogYXBwbGljYXRpb24sIHlvdSBjYW4gb3ZlcndyaXRlIHRoZSBkZWZhdWx0IGJlaGF2aW9yIChVUykgYnkgZGVmaW5pbmcgYSBgcmVnaW9uYC5cbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvYmFzaWNzI1JlZ2lvblxuICAgICAqL1xuICAgIHJlZ2lvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgR29vZ2xlIE1hcHMgQVBJIHVzZXMgdGhlIGJyb3dzZXIncyBwcmVmZXJyZWQgbGFuZ3VhZ2Ugd2hlbiBkaXNwbGF5aW5nXG4gICAgICogdGV4dHVhbCBpbmZvcm1hdGlvbi4gSWYgeW91IHdpc2ggdG8gb3ZlcndyaXRlIHRoaXMgYmVoYXZpb3IgYW5kIGZvcmNlIHRoZSBBUElcbiAgICAgKiB0byB1c2UgYSBnaXZlbiBsYW5ndWFnZSwgeW91IGNhbiB1c2UgdGhpcyBzZXR0aW5nLlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9iYXNpY3MjTGFuZ3VhZ2VcbiAgICAgKi9cbiAgICBsYW5ndWFnZT86IHN0cmluZztcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExhenlNYXBzQVBJTG9hZGVyIGV4dGVuZHMgTWFwc0FQSUxvYWRlciB7XG4gICAgcHJpdmF0ZSBsb2NhbGVJZDtcbiAgICBwcm90ZWN0ZWQgX3NjcmlwdExvYWRpbmdQcm9taXNlOiBQcm9taXNlPHZvaWQ+O1xuICAgIHByb3RlY3RlZCBfY29uZmlnOiBMYXp5TWFwc0FQSUxvYWRlckNvbmZpZ0xpdGVyYWw7XG4gICAgcHJvdGVjdGVkIF93aW5kb3dSZWY6IFdpbmRvd1JlZjtcbiAgICBwcm90ZWN0ZWQgX2RvY3VtZW50UmVmOiBEb2N1bWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX1NDUklQVF9JRDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjYWxsYmFja05hbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSwgdzogV2luZG93UmVmLCBkOiBEb2N1bWVudFJlZiwgbG9jYWxlSWQ6IHN0cmluZyk7XG4gICAgbG9hZCgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHByaXZhdGUgX2Fzc2lnblNjcmlwdExvYWRpbmdQcm9taXNlO1xuICAgIHByb3RlY3RlZCBfZ2V0U2NyaXB0U3JjKGNhbGxiYWNrTmFtZTogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19