import { Link } from 'react-router';
import data from '../../assets/stories.json';
import '../../styles/Stories.scss'

function Stories() {

    const stories = data.map((data) => {
        return (
            <Link to={"./chapter/"+data.id} key={data.name}>
                {data.name}
            </Link>)
    });
    
    return (
        <div className='story'>
            <h2>Damnatus</h2>
            <div className='chapter-list'>{stories}</div>
        </div>
        );
};

export default Stories;