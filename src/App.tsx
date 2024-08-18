import {Header} from "./components/header/Header.tsx";
import {Hero} from "./components/hero/hero.tsx";
import {CardsCarousel} from "./components/history/History.tsx";
import './App.css'
import {FaqWithHeader} from "./components/contacts/Contancts.tsx";

function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <CardsCarousel/>
            <FaqWithHeader/>
        </>
    )
}

export default App
