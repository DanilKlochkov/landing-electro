import {Carousel} from '@mantine/carousel';
import {Paper, Text, Title, Container, Grid, Timeline, Box, Overlay} from '@mantine/core';
import classes from './History.module.css';
import {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";

import carbonUrl from '/Carbonization.png?url';
import chemistryUrl from '/SoftChemistry.png?url';
import electroChemistryUrl from '/ElectroChemistry.png?url';

interface CardProps {
    image: string;
    title: string;
}

function Card({image, title}: CardProps) {
    return (
        <>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .1) 100%)"
                opacity={1}
                zIndex={1}
            />
            <Paper
                shadow="md"
                p="xl"
                radius="md"
                style={{backgroundImage: `url(${image})`}}
                className={classes.card}
            >
                <div className={classes.innerCard}>
                    <Title order={3} className={classes.title}>
                        {title}
                    </Title>
                </div>
            </Paper>
        </>
    );
}

const data = [
    {
        image: chemistryUrl,
        title: 'Внедрение методов "мягкой химии" для управления характеристиками материалов',
        category: 'наука',
    },
    {
        image: carbonUrl,
        title: 'Карбонизация и активация материалов в контроллируемой атмосфере',
        category: 'химия',
    },
    {
        image: electroChemistryUrl,
        title: 'Электрохимическое тестирование материалов для оптимизации технологий синтеза',
        category: 'химия',
    },
];

export function CardsCarousel() {
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    const autoplay = useRef(Autoplay({delay: 3500}));

    return (
        <Container id={"history"} size="lg" className={classes.container} mih={'100vh'}>
            <Box className={classes.inner}>
                <Grid columns={12} gutter={"xl"}>
                    <Grid.Col span={{base: 12, xs: 6, lg: 5}}>
                        <Carousel
                            plugins={[autoplay.current]}
                            withIndicators
                            loop
                            classNames={{
                                root: classes.carousel,
                                controls: classes.carouselControls,
                                indicator: classes.carouselIndicator,
                            }}
                        >
                            {slides}
                        </Carousel>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, xs: 6, lg: 7}}>
                        <Timeline
                            active={3}
                            bulletSize={18}
                            lineWidth={3}
                        >
                            <Timeline.Item title="Идея">
                                <Text c="dimmed" size="md">
                                    Зарождение идеи в рамках учебной научной деятельности
                                </Text>
                                <Text size="md" mt={4}>2020 - 2021</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Конкурс">
                                <Text c="dimmed" size="md">
                                    Топ-1000 проектов Всероссийского
                                    форума “Сильные
                                    идеи для нового
                                    времени”<br/>Привлечение
                                    региональных
                                    партнеров
                                </Text>
                                <Text size="md" mt={4}>2022</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Грант"
                                           lineVariant="dashed">
                                <Text c="dimmed" size="md">
                                    Победа в конкурсе

                                    грантов Старт-1

                                    Фонда содействия
                                    инновациям<br/>
                                    Формирование
                                    команды и создание
                                    предприятия, начало
                                    проведения НИОКР
                                </Text>
                                <Text size="md" mt={4}>2023</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Производство">
                                <Text c="dimmed" size="md">
                                    Оснащение
                                    собственной
                                    опытнопромышленной
                                    линии
                                    производства,
                                    сотрудничество с
                                    предприятиями-потребителями
                                </Text>
                                <Text size="md" mt={4}>2024</Text>
                            </Timeline.Item>
                        </Timeline>
                    </Grid.Col>
                </Grid>
            </Box>
        </Container>
    );
}