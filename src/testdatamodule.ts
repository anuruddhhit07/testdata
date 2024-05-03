import {ohlcdata} from "./testdata"
import { OHLCV } from "./types/datatypes";


// Create a class to handle OHLCV data
class testdatamodule {
    private data 

    // Load data from JSON file
    constructor() {
        this.data = ohlcdata;
    }

    // Method to fetch data for a specific range
    getDataRange(startIndex: number, endIndex: number): OHLCV[] {
        return this.data.slice(startIndex, endIndex + 1);
    }

    // Method to fetch data for a specific time period
    getDataForPeriod(period: number): OHLCV[] {
        return this.data.slice(-period);
    }

    // Method to fetch data for a specific symbol
   
}

export default testdatamodule