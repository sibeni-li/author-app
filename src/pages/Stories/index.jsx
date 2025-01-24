import { Link } from 'react-router-dom';
import '../../styles/Stories.scss';
import { useEffect, useState } from "react";

function Stories() {

    const [story, setStory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/src/assets/data/stories.json')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setStory(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const storyM = story.chapters.map((chapter) => chapter);

    return (
        <div className='stories-container'>
            <div className='story'>
                <h2>Damnatus</h2>
                <ul className='chapter-list'>{storyM.map((chapter, i) => 
                    <li key={i}>
                        <Link to={"../chapters/"+chapter.id}>
                            {chapter.name}
                        </Link>
                    </li>
                )}
                </ul>
            </div>
        </div>
    );
};

export default Stories;