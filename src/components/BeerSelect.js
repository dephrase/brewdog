

const BeerSelect = ({allBeers, onSelectChange}) => {

    const beerOptions = allBeers.map((beer, index) => {
        return <option key={index} value={index}>{beer.name}</option>
    })

    const handleSelect = (event) => {
        const selectedBeer = allBeers[event.target.value];
        onSelectChange(selectedBeer)
    }

    return (
        <select onChange={handleSelect}>
            {beerOptions}
        </select>
        )
}

export default BeerSelect;