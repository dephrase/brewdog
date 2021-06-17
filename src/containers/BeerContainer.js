import BeerSelect from "../components/BeerSelect";
import BeerDetail from "../components/BeerDetail";
import React, { useEffect, useState } from "react";

const BeerContainer = () => {

    const [allBeers, setAllBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)
    const [favouriteBeers, setFavouriteBeers] = useState([])

    let fetchArray = []

    const getBeers = () => {

        fetchArray[0] = fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80").then(results => results.json())
        fetchArray[1] = fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80").then(results => results.json())
        fetchArray[2] = fetch("https://api.punkapi.com/v2/beers?page=3&per_page=80").then(results => results.json())
        fetchArray[3] = fetch("https://api.punkapi.com/v2/beers?page=4&per_page=80").then(results => results.json())
        fetchArray[4] = fetch("https://api.punkapi.com/v2/beers?page=5&per_page=80").then(results => results.json())
        Promise.all(fetchArray)
        .then(beers => setAllBeers(beers.flat()))
    }

    useEffect(() => {
        getBeers();
    }, [])

    const onSelectChange = (beer) => {
        setSelectedBeer(beer)
    } 

    const onFavourite = (favBeer) => {
        if(favouriteBeers?.includes(favBeer)){
            let newarray = favouriteBeers.filter(beer => beer!==favBeer)
            setFavouriteBeers(newarray)
        } else {
            setFavouriteBeers([...favouriteBeers, favBeer])
        }
        
    }


    return (
        <>
            <BeerSelect allBeers={allBeers} onSelectChange={onSelectChange}/>
            {selectedBeer ? <BeerDetail selectedBeer={selectedBeer} onFavourite={onFavourite} favouriteBeers={favouriteBeers}/> : null }
        </>
    )
}

export default BeerContainer;