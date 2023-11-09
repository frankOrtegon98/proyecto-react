export default function Characters(props){

    let {charactersAtributo, setCharacters} = props

    console.log(charactersAtributo);

    let resetCharacters = () =>{
        console.log("Reseteando");
        setCharacters(null);
    }

    return(
        <div className="characters">
            <h1>Personajes de la serie</h1>
            <span className="back-home" onClick={resetCharacters}>Volver al home</span>
            <div className="container-characters">
                {charactersAtributo.map((character, index) => (
                    <div className="character-container">
                        <div>
                            <img src={character.image} alt={character.name}></img>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>{character.status}</h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver al home</span>
        </div>
    );
}