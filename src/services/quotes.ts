import {Quote} from '../data/quote.interface';

export class QuotesService{
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote){
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote){
        let idx = this.favoriteQuotes.indexOf(quote);
        this.favoriteQuotes.splice(idx,1);
    }
    getFavoriteQuotes(){
        return this.favoriteQuotes;
    }
    isFavorite(quote: Quote){
        if(this.favoriteQuotes.find(x => x == quote)){
            return true
        }
        else{
            return false
        }
        // console.log(this.favoriteQuotes.find(x => x == quote))
    }
}