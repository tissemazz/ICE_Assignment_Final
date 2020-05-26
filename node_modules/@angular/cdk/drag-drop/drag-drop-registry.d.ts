/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
export declare class DragDropRegistry<I, C> implements OnDestroy {
    private _ngZone;
    private _document;
    /** Registered drop container instances. */
    private _dropInstances;
    /** Registered drag item instances. */
    private _dragInstances;
    /** Drag item instances that are currently being dragged. */
    private _activeDragInstances;
    /** Keeps track of the event listeners that we've bound to the `document`. */
    private _globalListeners;
    /**
     * Emits the `touchmove` or `mousemove` events that are dispatched
     * while the user is dragging a drag item instance.
     */
    readonly pointerMove: Subject<TouchEvent | MouseEvent>;
    /**
     * Emits the `touchend` or `mouseup` events that are dispatched
     * while the user is dragging a drag item instance.
     */
    readonly pointerUp: Subject<TouchEvent | MouseEvent>;
    /** Emits when the viewport has been scrolled while the user is dragging an item. */
    readonly scroll: Subject<Event>;
    constructor(_ngZone: NgZone, _document: any);
    /** Adds a drop container to the registry. */
    registerDropContainer(drop: C): void;
    /** Adds a drag item instance to the registry. */
    registerDragItem(drag: I): void;
    /** Removes a drop container from the registry. */
    removeDropContainer(drop: C): void;
    /** Removes a drag item instance from the registry. */
    removeDragItem(drag: I): void;
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    startDragging(drag: I, event: TouchEvent | MouseEvent): void;
    /** Stops dragging a drag item instance. */
    stopDragging(drag: I): void;
    /** Gets whether a drag item instance is currently being dragged. */
    isDragging(drag: I): boolean;
    ngOnDestroy(): void;
    /**
     * Event listener that will prevent the default browser action while the user is dragging.
     * @param event Event whose default action should be prevented.
     */
    private _preventDefaultWhileDragging;
    /** Clears out the global event listeners from the `document`. */
    private _clearGlobalListeners;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragDropRegistry<any, any>>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLXJlZ2lzdHJ5LmQudHMiLCJzb3VyY2VzIjpbImRyYWctZHJvcC1yZWdpc3RyeS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0RBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuLyoqXG4gKiBTZXJ2aWNlIHRoYXQga2VlcHMgdHJhY2sgb2YgYWxsIHRoZSBkcmFnIGl0ZW0gYW5kIGRyb3AgY29udGFpbmVyXG4gKiBpbnN0YW5jZXMsIGFuZCBtYW5hZ2VzIGdsb2JhbCBldmVudCBsaXN0ZW5lcnMgb24gdGhlIGBkb2N1bWVudGAuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERyYWdEcm9wUmVnaXN0cnk8SSwgQz4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX25nWm9uZTtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICAvKiogUmVnaXN0ZXJlZCBkcm9wIGNvbnRhaW5lciBpbnN0YW5jZXMuICovXG4gICAgcHJpdmF0ZSBfZHJvcEluc3RhbmNlcztcbiAgICAvKiogUmVnaXN0ZXJlZCBkcmFnIGl0ZW0gaW5zdGFuY2VzLiAqL1xuICAgIHByaXZhdGUgX2RyYWdJbnN0YW5jZXM7XG4gICAgLyoqIERyYWcgaXRlbSBpbnN0YW5jZXMgdGhhdCBhcmUgY3VycmVudGx5IGJlaW5nIGRyYWdnZWQuICovXG4gICAgcHJpdmF0ZSBfYWN0aXZlRHJhZ0luc3RhbmNlcztcbiAgICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIGV2ZW50IGxpc3RlbmVycyB0aGF0IHdlJ3ZlIGJvdW5kIHRvIHRoZSBgZG9jdW1lbnRgLiAqL1xuICAgIHByaXZhdGUgX2dsb2JhbExpc3RlbmVycztcbiAgICAvKipcbiAgICAgKiBFbWl0cyB0aGUgYHRvdWNobW92ZWAgb3IgYG1vdXNlbW92ZWAgZXZlbnRzIHRoYXQgYXJlIGRpc3BhdGNoZWRcbiAgICAgKiB3aGlsZSB0aGUgdXNlciBpcyBkcmFnZ2luZyBhIGRyYWcgaXRlbSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2ludGVyTW92ZTogU3ViamVjdDxUb3VjaEV2ZW50IHwgTW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogRW1pdHMgdGhlIGB0b3VjaGVuZGAgb3IgYG1vdXNldXBgIGV2ZW50cyB0aGF0IGFyZSBkaXNwYXRjaGVkXG4gICAgICogd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgYSBkcmFnIGl0ZW0gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9pbnRlclVwOiBTdWJqZWN0PFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50PjtcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgdmlld3BvcnQgaGFzIGJlZW4gc2Nyb2xsZWQgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgYW4gaXRlbS4gKi9cbiAgICByZWFkb25seSBzY3JvbGw6IFN1YmplY3Q8RXZlbnQ+O1xuICAgIGNvbnN0cnVjdG9yKF9uZ1pvbmU6IE5nWm9uZSwgX2RvY3VtZW50OiBhbnkpO1xuICAgIC8qKiBBZGRzIGEgZHJvcCBjb250YWluZXIgdG8gdGhlIHJlZ2lzdHJ5LiAqL1xuICAgIHJlZ2lzdGVyRHJvcENvbnRhaW5lcihkcm9wOiBDKTogdm9pZDtcbiAgICAvKiogQWRkcyBhIGRyYWcgaXRlbSBpbnN0YW5jZSB0byB0aGUgcmVnaXN0cnkuICovXG4gICAgcmVnaXN0ZXJEcmFnSXRlbShkcmFnOiBJKTogdm9pZDtcbiAgICAvKiogUmVtb3ZlcyBhIGRyb3AgY29udGFpbmVyIGZyb20gdGhlIHJlZ2lzdHJ5LiAqL1xuICAgIHJlbW92ZURyb3BDb250YWluZXIoZHJvcDogQyk6IHZvaWQ7XG4gICAgLyoqIFJlbW92ZXMgYSBkcmFnIGl0ZW0gaW5zdGFuY2UgZnJvbSB0aGUgcmVnaXN0cnkuICovXG4gICAgcmVtb3ZlRHJhZ0l0ZW0oZHJhZzogSSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSBkcmFnZ2luZyBzZXF1ZW5jZSBmb3IgYSBkcmFnIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSBkcmFnIERyYWcgaW5zdGFuY2Ugd2hpY2ggaXMgYmVpbmcgZHJhZ2dlZC5cbiAgICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgdGhhdCBpbml0aWF0ZWQgdGhlIGRyYWdnaW5nLlxuICAgICAqL1xuICAgIHN0YXJ0RHJhZ2dpbmcoZHJhZzogSSwgZXZlbnQ6IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICAvKiogU3RvcHMgZHJhZ2dpbmcgYSBkcmFnIGl0ZW0gaW5zdGFuY2UuICovXG4gICAgc3RvcERyYWdnaW5nKGRyYWc6IEkpOiB2b2lkO1xuICAgIC8qKiBHZXRzIHdoZXRoZXIgYSBkcmFnIGl0ZW0gaW5zdGFuY2UgaXMgY3VycmVudGx5IGJlaW5nIGRyYWdnZWQuICovXG4gICAgaXNEcmFnZ2luZyhkcmFnOiBJKTogYm9vbGVhbjtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEV2ZW50IGxpc3RlbmVyIHRoYXQgd2lsbCBwcmV2ZW50IHRoZSBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uIHdoaWxlIHRoZSB1c2VyIGlzIGRyYWdnaW5nLlxuICAgICAqIEBwYXJhbSBldmVudCBFdmVudCB3aG9zZSBkZWZhdWx0IGFjdGlvbiBzaG91bGQgYmUgcHJldmVudGVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByZXZlbnREZWZhdWx0V2hpbGVEcmFnZ2luZztcbiAgICAvKiogQ2xlYXJzIG91dCB0aGUgZ2xvYmFsIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBgZG9jdW1lbnRgLiAqL1xuICAgIHByaXZhdGUgX2NsZWFyR2xvYmFsTGlzdGVuZXJzO1xufVxuIl19