

const BeerDetail = ({selectedBeer, onFavourite, favouriteBeers}) => {

    const handleFavourite = () => {
        if (selectedBeer){
            onFavourite(selectedBeer)
        }
    }

    const renderFavourite = () => {
        if(favouriteBeers?.includes(selectedBeer)){
            return <p>Favourite is here</p>
            
        }
    }

    const getIngredients = () => {

    const malts = selectedBeer?.ingredients.malt.map((ingredient, index) => {
        return ingredient.name
    })

    const hops = selectedBeer?.ingredients.hops.map((ingredient, index) => {
        return ingredient.name
    })

    const ingredients = malts.concat(hops)
    const newIngredients = []

    for(let i = 0; i < ingredients.length; i++){
        if(ingredients.indexOf(ingredients[i]) === i){
            
            newIngredients.push(ingredients[i])
        }
    }

    const beerIngredients = newIngredients.map((ingredient, index) => {
        return <p key={index}>{ingredient}</p>
    })
    // return <p key={index}>{ingredient.name}</p>

    return beerIngredients
}   

    
        
    


    return (
        <>
            <h2>{selectedBeer.name}</h2>
            <h4>{selectedBeer.abv}</h4>
            <h4>{selectedBeer.tagline}</h4>
            <h4>{selectedBeer.description}</h4>
            <img src={selectedBeer.image_url}/>
            
            <button onClick={handleFavourite}>Favourite</button>
            {renderFavourite()}

            {getIngredients()}

            

        </>
    )
}

export default BeerDetail;