import '../../styles/Home.scss';
import Story from '../../components/Story';
import Error from '../Error';
import { useEffect, useState } from "react";

function Home() {
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
    if (error) return <Error/>;

    return (
        <div>
            <div className="banner div">
                <div className="title">
                    <h1>Bienvenue dans mon univers</h1>
                    <h2>L&apos;univers d&apos;un cerveau...</h2>
                </div>
            </div>
            <div className='div'>
                <Story story={story}/>
            </div>
        </div>
    );
};
export default Home;