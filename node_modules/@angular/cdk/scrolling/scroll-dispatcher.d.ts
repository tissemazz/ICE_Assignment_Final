/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { ElementRef, NgZone, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { CdkScrollable } from './scrollable';
/** Time in ms to throttle the scrolling events by default. */
import * as ɵngcc0 from '@angular/core';
export declare const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
export declare class ScrollDispatcher implements OnDestroy {
    private _ngZone;
    private _platform;
    constructor(_ngZone: NgZone, _platform: Platform);
    /** Subject for notifying that a registered scrollable reference element has been scrolled. */
    private _scrolled;
    /** Keeps track of the global `scroll` and `resize` subscriptions. */
    _globalSubscription: Subscription | null;
    /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
    private _scrolledCount;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     */
    scrollContainers: Map<CdkScrollable, Subscription>;
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    register(scrollable: CdkScrollable): void;
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    deregister(scrollable: CdkScrollable): void;
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    scrolled(auditTimeInMs?: number): Observable<CdkScrollable | void>;
    ngOnDestroy(): void;
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    ancestorScrolled(elementRef: ElementRef, auditTimeInMs?: number): Observable<CdkScrollable | void>;
    /** Returns all registered Scrollables that contain the provided element. */
    getAncestorScrollContainers(elementRef: ElementRef): CdkScrollable[];
    /** Returns true if the element is contained within the provided Scrollable. */
    private _scrollableContainsElement;
    /** Sets up the global scroll listeners. */
    private _addGlobalListener;
    /** Cleans up the global scroll listener. */
    private _removeGlobalListener;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollDispatcher>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWRpc3BhdGNoZXIuZC50cyIsInNvdXJjZXMiOlsic2Nyb2xsLWRpc3BhdGNoZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2RrU2Nyb2xsYWJsZSB9IGZyb20gJy4vc2Nyb2xsYWJsZSc7XG4vKiogVGltZSBpbiBtcyB0byB0aHJvdHRsZSB0aGUgc2Nyb2xsaW5nIGV2ZW50cyBieSBkZWZhdWx0LiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgREVGQVVMVF9TQ1JPTExfVElNRSA9IDIwO1xuLyoqXG4gKiBTZXJ2aWNlIGNvbnRhaW5lZCBhbGwgcmVnaXN0ZXJlZCBTY3JvbGxhYmxlIHJlZmVyZW5jZXMgYW5kIGVtaXRzIGFuIGV2ZW50IHdoZW4gYW55IG9uZSBvZiB0aGVcbiAqIFNjcm9sbGFibGUgcmVmZXJlbmNlcyBlbWl0IGEgc2Nyb2xsZWQgZXZlbnQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNjcm9sbERpc3BhdGNoZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX25nWm9uZTtcbiAgICBwcml2YXRlIF9wbGF0Zm9ybTtcbiAgICBjb25zdHJ1Y3Rvcihfbmdab25lOiBOZ1pvbmUsIF9wbGF0Zm9ybTogUGxhdGZvcm0pO1xuICAgIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhhdCBhIHJlZ2lzdGVyZWQgc2Nyb2xsYWJsZSByZWZlcmVuY2UgZWxlbWVudCBoYXMgYmVlbiBzY3JvbGxlZC4gKi9cbiAgICBwcml2YXRlIF9zY3JvbGxlZDtcbiAgICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIGdsb2JhbCBgc2Nyb2xsYCBhbmQgYHJlc2l6ZWAgc3Vic2NyaXB0aW9ucy4gKi9cbiAgICBfZ2xvYmFsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsO1xuICAgIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgYW1vdW50IG9mIHN1YnNjcmlwdGlvbnMgdG8gYHNjcm9sbGVkYC4gVXNlZCBmb3IgY2xlYW5pbmcgdXAgYWZ0ZXJ3YXJkcy4gKi9cbiAgICBwcml2YXRlIF9zY3JvbGxlZENvdW50O1xuICAgIC8qKlxuICAgICAqIE1hcCBvZiBhbGwgdGhlIHNjcm9sbGFibGUgcmVmZXJlbmNlcyB0aGF0IGFyZSByZWdpc3RlcmVkIHdpdGggdGhlIHNlcnZpY2UgYW5kIHRoZWlyXG4gICAgICogc2Nyb2xsIGV2ZW50IHN1YnNjcmlwdGlvbnMuXG4gICAgICovXG4gICAgc2Nyb2xsQ29udGFpbmVyczogTWFwPENka1Njcm9sbGFibGUsIFN1YnNjcmlwdGlvbj47XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgc2Nyb2xsYWJsZSBpbnN0YW5jZSB3aXRoIHRoZSBzZXJ2aWNlIGFuZCBsaXN0ZW5zIGZvciBpdHMgc2Nyb2xsZWQgZXZlbnRzLiBXaGVuIHRoZVxuICAgICAqIHNjcm9sbGFibGUgaXMgc2Nyb2xsZWQsIHRoZSBzZXJ2aWNlIGVtaXRzIHRoZSBldmVudCB0byBpdHMgc2Nyb2xsZWQgb2JzZXJ2YWJsZS5cbiAgICAgKiBAcGFyYW0gc2Nyb2xsYWJsZSBTY3JvbGxhYmxlIGluc3RhbmNlIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAgICovXG4gICAgcmVnaXN0ZXIoc2Nyb2xsYWJsZTogQ2RrU2Nyb2xsYWJsZSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRGVyZWdpc3RlcnMgYSBTY3JvbGxhYmxlIHJlZmVyZW5jZSBhbmQgdW5zdWJzY3JpYmVzIGZyb20gaXRzIHNjcm9sbCBldmVudCBvYnNlcnZhYmxlLlxuICAgICAqIEBwYXJhbSBzY3JvbGxhYmxlIFNjcm9sbGFibGUgaW5zdGFuY2UgdG8gYmUgZGVyZWdpc3RlcmVkLlxuICAgICAqL1xuICAgIGRlcmVnaXN0ZXIoc2Nyb2xsYWJsZTogQ2RrU2Nyb2xsYWJsZSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgYW4gZXZlbnQgd2hlbmV2ZXIgYW55IG9mIHRoZSByZWdpc3RlcmVkIFNjcm9sbGFibGVcbiAgICAgKiByZWZlcmVuY2VzIChvciB3aW5kb3csIGRvY3VtZW50LCBvciBib2R5KSBmaXJlIGEgc2Nyb2xsZWQgZXZlbnQuIENhbiBwcm92aWRlIGEgdGltZSBpbiBtc1xuICAgICAqIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IFwidGhyb3R0bGVcIiB0aW1lLlxuICAgICAqXG4gICAgICogKipOb3RlOioqIGluIG9yZGVyIHRvIGF2b2lkIGhpdHRpbmcgY2hhbmdlIGRldGVjdGlvbiBmb3IgZXZlcnkgc2Nyb2xsIGV2ZW50LFxuICAgICAqIGFsbCBvZiB0aGUgZXZlbnRzIGVtaXR0ZWQgZnJvbSB0aGlzIHN0cmVhbSB3aWxsIGJlIHJ1biBvdXRzaWRlIHRoZSBBbmd1bGFyIHpvbmUuXG4gICAgICogSWYgeW91IG5lZWQgdG8gdXBkYXRlIGFueSBkYXRhIGJpbmRpbmdzIGFzIGEgcmVzdWx0IG9mIGEgc2Nyb2xsIGV2ZW50LCB5b3UgaGF2ZVxuICAgICAqIHRvIHJ1biB0aGUgY2FsbGJhY2sgdXNpbmcgYE5nWm9uZS5ydW5gLlxuICAgICAqL1xuICAgIHNjcm9sbGVkKGF1ZGl0VGltZUluTXM/OiBudW1iZXIpOiBPYnNlcnZhYmxlPENka1Njcm9sbGFibGUgfCB2b2lkPjtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW5ldmVyIGFueSBvZiB0aGVcbiAgICAgKiBzY3JvbGxhYmxlIGFuY2VzdG9ycyBvZiBhbiBlbGVtZW50IGFyZSBzY3JvbGxlZC5cbiAgICAgKiBAcGFyYW0gZWxlbWVudFJlZiBFbGVtZW50IHdob3NlIGFuY2VzdG9ycyB0byBsaXN0ZW4gZm9yLlxuICAgICAqIEBwYXJhbSBhdWRpdFRpbWVJbk1zIFRpbWUgdG8gdGhyb3R0bGUgdGhlIHNjcm9sbCBldmVudHMuXG4gICAgICovXG4gICAgYW5jZXN0b3JTY3JvbGxlZChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBhdWRpdFRpbWVJbk1zPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxDZGtTY3JvbGxhYmxlIHwgdm9pZD47XG4gICAgLyoqIFJldHVybnMgYWxsIHJlZ2lzdGVyZWQgU2Nyb2xsYWJsZXMgdGhhdCBjb250YWluIHRoZSBwcm92aWRlZCBlbGVtZW50LiAqL1xuICAgIGdldEFuY2VzdG9yU2Nyb2xsQ29udGFpbmVycyhlbGVtZW50UmVmOiBFbGVtZW50UmVmKTogQ2RrU2Nyb2xsYWJsZVtdO1xuICAgIC8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiB0aGUgcHJvdmlkZWQgU2Nyb2xsYWJsZS4gKi9cbiAgICBwcml2YXRlIF9zY3JvbGxhYmxlQ29udGFpbnNFbGVtZW50O1xuICAgIC8qKiBTZXRzIHVwIHRoZSBnbG9iYWwgc2Nyb2xsIGxpc3RlbmVycy4gKi9cbiAgICBwcml2YXRlIF9hZGRHbG9iYWxMaXN0ZW5lcjtcbiAgICAvKiogQ2xlYW5zIHVwIHRoZSBnbG9iYWwgc2Nyb2xsIGxpc3RlbmVyLiAqL1xuICAgIHByaXZhdGUgX3JlbW92ZUdsb2JhbExpc3RlbmVyO1xufVxuIl19