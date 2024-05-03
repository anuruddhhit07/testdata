import {ohlcdata} from "./testdata"
import { OHLCV } from "./types/datatypes";
import { Indicators, IndicatorsNormalizedSync,IndicatorsNormalized } from "@ixjb94/indicators"

type SeriesName = 'open' | 'close'|'high'|'low'
// Create a class to handle OHLCV data
class testdatamodule {
    private data 
    private ta
    // private datalength
    // Load data from JSON file
    constructor(datalength:number) {
        this.data = datalength>0? ohlcdata.slice(-datalength):ohlcdata
        this.ta=new IndicatorsNormalizedSync()
        // this.datalength=datalength
    }

    // Method to fetch data for a specific range
    getDataRange(startIndex: number, endIndex: number): OHLCV[] {
        return this.data.slice(startIndex, endIndex + 1);
    }

    // Method to fetch data for a specific time period
    getDataForPeriod(subdatalength: number): OHLCV[] {
        return this.data.slice(-subdatalength);
    }

    getSeriesPeriod(key:SeriesName): number[] {
        return this.data.map(item=>item[key])
    }


    getSMAForPeriod(smaperiod:number): number[] {
        const filterdata=this.getSeriesPeriod('close')
        return  this.ta.sma(filterdata,smaperiod)   
    }

    getEMAForPeriod(emaperiod:number): number[] {
        const filterdata=this.getSeriesPeriod('close')
        return  this.ta.ema(filterdata,emaperiod)   
    }

    getRSIForPeriod(rsiperiod:number): number[] {
        const filterdata=this.getSeriesPeriod('close')
        return  this.ta.rsi(filterdata,rsiperiod)   
    }

    getADXForPeriod(adxperiod:number): number[] {
        const high=this.getSeriesPeriod('high')
        const low=this.getSeriesPeriod('low')
        return  this.ta.adx(high,low,adxperiod)   
    }

    // Method to fetch data for a specific symbol
   
}

export default testdatamodule