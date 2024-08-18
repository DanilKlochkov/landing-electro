import {useState} from 'react'
import {Header} from "./components/header/Header.tsx";
import {Hero} from "./components/hero/hero.tsx";
import {CardsCarousel} from "./components/history/History.tsx";
import './App.css'
import {FaqWithHeader} from "./components/contacts/Contancts.tsx";

function App() {
    const [count, setCount] = useState(0)

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
