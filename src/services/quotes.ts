import {Quote} from '../data/quote.interface';

export class QuotesService{
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote){
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFacorites(quote: Quote){
    }
    getFavoriteQuotes(){}
    isFavorite(quote: Quote){}
}