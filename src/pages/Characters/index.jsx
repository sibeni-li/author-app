import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Characters.scss'


function Characters() {
    const [characters, setCharacters] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            fetch('/src/assets/data/characters.json')
                .then(response => {
                    if (!response.ok) {
                    throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setCharacters(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        }, []);

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
        console.log(characters)
    return (
        <div className="characters">
            <h1 className="characters-title">Les Personnages</h1>
            <ul className="characters-list">{characters.map((character) => <li className="characters-list__element" key={character.id}><Link to='/' >{character.name}</Link></li>)}</ul>
        </div>
    )
};
export default Characters;