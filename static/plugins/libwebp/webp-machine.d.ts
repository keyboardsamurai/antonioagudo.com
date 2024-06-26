import { WebpMachineOptions, PolyfillDocumentOptions, DetectWebpImage } from "./interfaces.js";
export declare class WebpMachineError extends Error {
}
export declare const defaultDetectWebpImage: DetectWebpImage;
/**
 * Webp Machine
 * - decode and polyfill webp images
 * - can only decode images one-at-a-time (otherwise will throw busy error)
 */
export declare class WebpMachine {
    private readonly webp;
    private readonly webpSupport;
    private readonly detectWebpImage;
    private busy;
    private cache;
    constructor({ webp, webpSupport, detectWebpImage }?: WebpMachineOptions);
    /**
     * Decode raw webp data into a png data url
     */
    decode(webpData: Uint8Array): Promise<string>;
    /**
     * Polyfill the webp format on the given <img> element
     */
    polyfillImage(image: HTMLImageElement): Promise<void>;
    /**
     * Polyfill webp format on the entire web page
     */
    polyfillDocument({ document }?: PolyfillDocumentOptions): Promise<void>;
}
