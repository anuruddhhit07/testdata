import { OHLCV } from "./types/datatypes";
declare class testdatamodule {
    private data;
    constructor();
    getDataRange(startIndex: number, endIndex: number): OHLCV[];
    getDataForPeriod(period: number): OHLCV[];
}
export default testdatamodule;
