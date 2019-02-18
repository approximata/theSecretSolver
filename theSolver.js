const recoverSecret = triplets => {

    const isTheFirstLetter = (theLetter, triplets) => (
        !triplets.some(
            triplet => triplet.some(
                (letter, index) => (letter === theLetter && index !== 0)))
    )

    const removeLetterFromArray = (theLetter, triplets) => (
        triplets.map(triplet => (
            triplet.filter(letter => (letter !== theLetter))
            )
        )
    )

    let theworld = ''

    const searchFirstLetters = (triplets) => {
        triplets.forEach(triplet => (
            triplet.forEach(letter => {
                if (isTheFirstLetter(letter, triplets)) {
                    if(!theworld.includes(letter)){
                        theworld += letter
                        const newTriplets = removeLetterFromArray(letter, triplets)
                        searchFirstLetters(newTriplets)
                    }
                }
            })
        ))
    }

    searchFirstLetters(triplets);

    return theworld;
};
