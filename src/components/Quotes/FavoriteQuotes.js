import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";


function FavoriteQuotes({ favoriteQuotes, maxFaves, removeFromFavorites }) {
    return (
        <section className = "favorite-quotes">
            <div className="wrapper quotes">
                <h3>Top 3 favorite quotes</h3>
                {favoriteQuotes.length > 0 && <ul>
                    {favoriteQuotes.map(quote => <FavoriteQuoteCard key={quote.id} quote={quote} removeFromFavorites={removeFromFavorites} />)}
                    </ul>}
            </div>
        </section>
 );
}

export default FavoriteQuotes;