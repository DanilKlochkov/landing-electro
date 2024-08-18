import {Header} from "./components/header/Header.tsx";
import {Hero} from "./components/hero/hero.tsx";
import {CardsCarousel} from "./components/history/History.tsx";
import {FaqWithHeader} from "./components/contacts/Contancts.tsx";
import {ActionIcon, Affix, rem, Transition} from "@mantine/core";
import {useWindowScroll} from "@mantine/hooks";
import {IconArrowUp} from "@tabler/icons-react";
import {Command} from "./components/command/Command.tsx";
import './App.css'

function App() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Header/>
            <Hero/>
            <CardsCarousel/>
            <Command/>
            <FaqWithHeader/>
            <Affix position={{bottom: 20, right: 20}}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <ActionIcon
                            size="xl"
                            style={{
                                ...transitionStyles,
                                color: "#C4DEFD"
                            }}
                            onClick={() => scrollTo({y: 0})}
                        >
                            <IconArrowUp style={{width: rem(16), height: rem(16)}}/>
                        </ActionIcon>
                    )}
                </Transition>
            </Affix>
        </>
    )
}

export default App
