import { ClassType, Dispatch, SetStateAction } from "react";
import CryptocurrencieBasicData from "../../entities/cryptocurrencie/CryptocurrencieBasicData";
import CryptocurrencieData from "../../entities/cryptocurrencie/CryptocurrencieData";
import CryptoCurrencieStreamData from "../../entities/cryptocurrencie/CryptocurrencieStreamData";

export type StaticPathObject = {
    params: {
        id: string
    }
}

export interface CryptocurrenciesService {
    subscribeToStreamDataOf: (identifiers: Array<string>) => void
    unsubscribeToStreamDataOf: (identifiers: Array<string>) => void
    getBasicDataOfCryptocurrencies: (identifiers: Array<string>) => Promise<Array<CryptocurrencieBasicData>>
    updateStreamDataOf: (identifier: string, setState: Dispatch<SetStateAction<CryptoCurrencieStreamData>>) => void
    getBasicDataOfAllCryptocurrencies: (perPage: number, page: number) => Promise<Array<CryptocurrencieBasicData>>
    getCryptocurrenciesIdentifiers: () => Promise<Array<StaticPathObject>>
    getCryptocurrencieData: (identifier: string) => Promise<CryptocurrencieData>
    getHistoricalDataOf: (identifier: string) => Promise<any>
}