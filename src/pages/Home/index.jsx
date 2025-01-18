import '../../styles/Home.scss'
import Story from '../../components/Story';

function Home() {

    return (
        <div>
            <div className="banner div">
                <div className="title">
                    <h1>Bienvenue dans mon univers</h1>
                    <h2>L&apos;univers d&apos;un cerveau...</h2>
                </div>
            </div>
            <div className='div'>
                <Story/>
            </div>
        </div>
    )
};
export default Home;