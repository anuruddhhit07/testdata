import { OHLCV } from "./types/datatypes";
type SeriesName = 'open' | 'close' | 'high' | 'low';
declare class testdatamodule {
    private data;
    private ta;
    constructor(datalength: number);
    getDataRange(startIndex: number, endIndex: number): OHLCV[];
    getDataForPeriod(subdatalength: number): OHLCV[];
    getSeriesPeriod(key: SeriesName): number[];
    getSMAForPeriod(smaperiod: number): Promise<number[]>;
}
export default testdatamodule;
