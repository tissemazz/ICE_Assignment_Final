/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone, ElementRef } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { DragRef, DragRefConfig } from './drag-ref';
import { DropListRef } from './drop-list-ref';
import { DragDropRegistry } from './drag-drop-registry';
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DragDrop {
    private _document;
    private _ngZone;
    private _viewportRuler;
    private _dragDropRegistry;
    constructor(_document: any, _ngZone: NgZone, _viewportRuler: ViewportRuler, _dragDropRegistry: DragDropRegistry<DragRef, DropListRef>);
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    createDrag<T = any>(element: ElementRef<HTMLElement> | HTMLElement, config?: DragRefConfig): DragRef<T>;
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    createDropList<T = any>(element: ElementRef<HTMLElement> | HTMLElement): DropListRef<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragDrop>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmQudHMiLCJzb3VyY2VzIjpbImRyYWctZHJvcC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgTmdab25lLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3cG9ydFJ1bGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBEcmFnUmVmLCBEcmFnUmVmQ29uZmlnIH0gZnJvbSAnLi9kcmFnLXJlZic7XG5pbXBvcnQgeyBEcm9wTGlzdFJlZiB9IGZyb20gJy4vZHJvcC1saXN0LXJlZic7XG5pbXBvcnQgeyBEcmFnRHJvcFJlZ2lzdHJ5IH0gZnJvbSAnLi9kcmFnLWRyb3AtcmVnaXN0cnknO1xuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgYWxsb3dzIGZvciBkcmFnLWFuZC1kcm9wIGZ1bmN0aW9uYWxpdHkgdG8gYmUgYXR0YWNoZWQgdG8gRE9NIGVsZW1lbnRzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEcmFnRHJvcCB7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI7XG4gICAgcHJpdmF0ZSBfZHJhZ0Ryb3BSZWdpc3RyeTtcbiAgICBjb25zdHJ1Y3RvcihfZG9jdW1lbnQ6IGFueSwgX25nWm9uZTogTmdab25lLCBfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlciwgX2RyYWdEcm9wUmVnaXN0cnk6IERyYWdEcm9wUmVnaXN0cnk8RHJhZ1JlZiwgRHJvcExpc3RSZWY+KTtcbiAgICAvKipcbiAgICAgKiBUdXJucyBhbiBlbGVtZW50IGludG8gYSBkcmFnZ2FibGUgaXRlbS5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIHdoaWNoIHRvIGF0dGFjaCB0aGUgZHJhZ2dpbmcgZnVuY3Rpb25hbGl0eS5cbiAgICAgKiBAcGFyYW0gY29uZmlnIE9iamVjdCB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgZHJhZ2dpbmcgYmVoYXZpb3IuXG4gICAgICovXG4gICAgY3JlYXRlRHJhZzxUID0gYW55PihlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50LCBjb25maWc/OiBEcmFnUmVmQ29uZmlnKTogRHJhZ1JlZjxUPjtcbiAgICAvKipcbiAgICAgKiBUdXJucyBhbiBlbGVtZW50IGludG8gYSBkcm9wIGxpc3QuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byB3aGljaCB0byBhdHRhY2ggdGhlIGRyb3AgbGlzdCBmdW5jdGlvbmFsaXR5LlxuICAgICAqL1xuICAgIGNyZWF0ZURyb3BMaXN0PFQgPSBhbnk+KGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+IHwgSFRNTEVsZW1lbnQpOiBEcm9wTGlzdFJlZjxUPjtcbn1cbiJdfQ==