import BeerSelect from "../components/BeerSelect";
import BeerDetail from "../components/BeerDetail";
import React, { useEffect, useState } from "react";

const BeerContainer = () => {

    const [allBeers, setAllBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)
    const [favouriteBeers, setFavouriteBeers] = useState([])

    const getBeers = () => {
        fetch("https://api.punkapi.com/v2/beers")
        .then(results => results.json())
        .then(beers => setAllBeers(beers))
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