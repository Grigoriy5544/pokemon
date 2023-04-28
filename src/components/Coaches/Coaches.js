// import './';
import Header from '../Header/Header';
import Trainer from './Trainer/Trainer';
import TrainerList from './TrainerList/TrainerList';
import Footer from '../Footer/Footer';

function Coaches() {
    return (
        <>
        <Header/>
        <main className="content">
            <Trainer/>
            <TrainerList/>
        </main>
        <Footer/>
        </>
    )
}

export default Coaches;