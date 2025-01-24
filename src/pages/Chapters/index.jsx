import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Error from '../Error/index.jsx';
import Chapter from "../../components/Chapter";
import '../../styles/Chapters.scss'

function Chapters() {
    const { id } = useParams();
    const [chapter, setChapter] = useState(null);
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
                const foundChapter = data.chapters.find(chapter => chapter.id === id);
                if (foundChapter) {
                    setChapter(foundChapter);
                } else {
                    setError('Chapter not found');
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
        }, [id]);
        
        if (loading) return <div>Loading...</div>;
        if (error) return <Error/>

    return (
        <div className="read-chapter">
            <Chapter chapter={chapter} />
        </div>
    );
};

export default Chapters;