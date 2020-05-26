/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PendingCopy } from './pending-copy';
/**
 * A service for copying text to the clipboard.
 */
import * as ɵngcc0 from '@angular/core';
export declare class Clipboard {
    private readonly _document;
    constructor(document: any);
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param text The string to copy.
     * @returns Whether the operation was successful.
     */
    copy(text: string): boolean;
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param text The string to copy.
     * @returns the pending copy operation.
     */
    beginCopy(text: string): PendingCopy;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Clipboard>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcGJvYXJkLmQudHMiLCJzb3VyY2VzIjpbImNsaXBib2FyZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBQZW5kaW5nQ29weSB9IGZyb20gJy4vcGVuZGluZy1jb3B5Jztcbi8qKlxuICogQSBzZXJ2aWNlIGZvciBjb3B5aW5nIHRleHQgdG8gdGhlIGNsaXBib2FyZC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2xpcGJvYXJkIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kb2N1bWVudDtcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudDogYW55KTtcbiAgICAvKipcbiAgICAgKiBDb3BpZXMgdGhlIHByb3ZpZGVkIHRleHQgaW50byB0aGUgdXNlcidzIGNsaXBib2FyZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0ZXh0IFRoZSBzdHJpbmcgdG8gY29weS5cbiAgICAgKiBAcmV0dXJucyBXaGV0aGVyIHRoZSBvcGVyYXRpb24gd2FzIHN1Y2Nlc3NmdWwuXG4gICAgICovXG4gICAgY29weSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFByZXBhcmVzIGEgc3RyaW5nIHRvIGJlIGNvcGllZCBsYXRlci4gVGhpcyBpcyB1c2VmdWwgZm9yIGxhcmdlIHN0cmluZ3NcbiAgICAgKiB3aGljaCB0YWtlIHRvbyBsb25nIHRvIHN1Y2Nlc3NmdWxseSByZW5kZXIgYW5kIGJlIGNvcGllZCBpbiB0aGUgc2FtZSB0aWNrLlxuICAgICAqXG4gICAgICogVGhlIGNhbGxlciBtdXN0IGNhbGwgYGRlc3Ryb3lgIG9uIHRoZSByZXR1cm5lZCBgUGVuZGluZ0NvcHlgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRleHQgVGhlIHN0cmluZyB0byBjb3B5LlxuICAgICAqIEByZXR1cm5zIHRoZSBwZW5kaW5nIGNvcHkgb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIGJlZ2luQ29weSh0ZXh0OiBzdHJpbmcpOiBQZW5kaW5nQ29weTtcbn1cbiJdfQ==