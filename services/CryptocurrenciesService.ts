export interface CryptocurrenciesService {
    subscribeToStreamDataOf: (currencies: Array<string>) => void
    unsubscribeToStreamDataOf: (currencies: Array<string>) => void
}