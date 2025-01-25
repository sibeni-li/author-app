import { useEffect, useState } from "react";
import '../../styles/OneCharacter.scss'
import Error from "../Error";
import { useParams } from "react-router-dom";

function OneCharacter() {
    const {id} = useParams()
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
    if (error) return <Error/>;

    const showCharacter = characters.find((char) => char.id === id);
    console.log(showCharacter.attributes)
    if (!showCharacter) {
        return <Error/>
    } else {
        const attri = showCharacter.attributes
    return (
        <div className="char">
            <h1 className="char-title">{showCharacter.name}</h1>
            <div className="div-char">
                <img src={showCharacter.img} alt={showCharacter.name}/>
                <ul className="char-list">
                    {Object.entries(attri).map(([key, value]) => 
                    <li className="char-list_element" key={key}>{key}: {value}</li>
                )}
                </ul>
            </div>
        </div>
        )
    }
}

export default OneCharacter;