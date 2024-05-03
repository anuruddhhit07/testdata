export interface OHLCV {
    id: number;
    ticker: string;
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}
export declare const ohlcdata: OHLCV[];
