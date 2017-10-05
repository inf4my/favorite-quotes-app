import {Quote} from '../data/quote.interface';

export class QuotesService{
    private favoriteQuotes: Quote[] = []
    private temp: Quote

    addQuoteToFavorites(quote: Quote){
        this.favoriteQuotes.push(quote);
    }

    addNewQuotes(data){
        // ngeset isi
        this.favoriteQuotes.push(data);
        // this.temp.text = t;
        // this.favoriteQuotes.push(this.temp);
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