import {Overlay, Container, Title, Text} from '@mantine/core';
import classes from './hero.module.css';

export function Hero() {
    return (
        <div className={classes.hero} id={"about"}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 90%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container} size="md">
                <Title className={classes.title}>
                    Новые углеродные материалы для накопителей энергии
                </Title>
                <Text className={classes.description} size="xl" mt="xl">
                    Разработка высокочистого пористого углерода со сниженной себестоимостью, контролируемыми свойствами
                    и высокими техническими характеристиками пористости и электрохимической емкости позволяет расширить
                    применение суперконденсаторов и модулей на их основе, проектировать новые эффективные и экологически
                    чистые решения для энергетической отрасли
                </Text>
            </Container>
        </div>
    );
}