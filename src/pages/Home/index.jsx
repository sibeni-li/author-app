import '../../styles/Home.scss'
import data from '../../assets/stories.json'

function Home() {
    const lastChapters = data.map((data) => {
        return (
            <div key={data.name} className='last-chapters--content'>
                <h3>{data.name}</h3>
                <p className='content'>{data.content}</p>
            </div>
        )
    });
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
                    {lastChapters}
                </div>
            </div>
        </div>
    )
};
export default Home;