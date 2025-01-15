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
                <h2>Damnatus</h2>
                <div className='last-chapters'>
                    <Story/>
                </div>
            </div>
        </div>
    )
};
export default Home;