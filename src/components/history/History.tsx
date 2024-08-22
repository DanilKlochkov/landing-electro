import {Carousel} from '@mantine/carousel';
import {Paper, Text, Title, Container, Grid, Timeline, Box, Overlay, Group, Image} from '@mantine/core';
import classes from './History.module.css';
import {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";

import carbonUrl from '/Carbonization.webp?url';
import chemistryUrl from '/SoftChemistry.webp?url';
import electroChemistryUrl from '/ElectroChemistry.webp?url';
import sgtuUrl from '/sgtu.webp?url';
import vikUrl from '/vik.webp?url';
import emkUrl from '/emk.webp?url';
import letUrl from '/30let.webp?url';
import globalUrl from '/global.webp?url';
import elecondUrl from '/elecond.webp?url';

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
                zIndex={0}
            />
            <Paper
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

    const autoplay = useRef(Autoplay({delay: 5000}));

    return (
        <Container id={"history"} size="lg" className={classes.container} mih={'100vh'}>
            <Box className={classes.inner}>
                <Grid columns={12} gutter={"xl"}>
                    <Grid.Col span={{base: 12, sm: 6, lg: 5}}>
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
                    <Grid.Col span={{base: 12, sm: 6, lg: 7}}>
                        <Timeline
                            active={3}
                            bulletSize={18}
                            lineWidth={3}
                        >
                            <Timeline.Item title="Идея">
                                <Grid mt={4} columns={4}>
                                    <Grid.Col span={{base: 4, md: 1}}>
                                        <Text c="dimmed" size="md">
                                            Зарождение идеи в рамках учебной научной деятельности
                                        </Text>
                                    </Grid.Col>
                                    <Grid.Col span={{base: 4, md: 3}}>
                                        <Group>
                                            <a href={"https://www.sstu.ru/"} target={"_blank"}>
                                                <Image src={sgtuUrl} w={100} h={"auto"}/>
                                            </a>
                                            <a href={"https://vikrf.ru/"} target={"_blank"}>
                                                <Image src={vikUrl} h={100} w={"auto"}/>
                                            </a>
                                        </Group>
                                    </Grid.Col>
                                </Grid>
                                <Text size="md" mt={2}>2020 - 2021</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Конкурс">
                                <Grid mt={4} columns={2}>
                                    <Grid.Col span={{base: 2, md: 1}}>
                                        <Text c="dimmed" size="md">
                                            Топ-1000 проектов Всероссийского
                                            форума “Сильные
                                            идеи для нового
                                            времени”<br/>Привлечение
                                            региональных
                                            партнеров
                                        </Text>
                                    </Grid.Col>
                                    <Grid.Col span={{base: 2, md: 1}}>
                                        <a href={"https://www.emk.ru/"} target={"_blank"}>
                                            <Image src={emkUrl} h={100} w={"auto"}/>
                                        </a>
                                    </Grid.Col>
                                </Grid>
                                <Text size="md" mt={2}>2022</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Грант"
                                           lineVariant="dashed">
                                <Grid mt={4} columns={2}>
                                    <Grid.Col span={{base: 2, md: 1}}>
                                        <Text c="dimmed" size="md">
                                            Победа в конкурсе грантов Старт-1
                                            Фонда содействия
                                            инновациям<br/>
                                            Формирование
                                            команды и создание
                                            предприятия, начало
                                            проведения НИОКР
                                        </Text>
                                    </Grid.Col>
                                    <Grid.Col span={{base: 2, md: 1}}>
                                        <a href={"https://fasie.ru/"} target={"_blank"}>
                                            <Image src={letUrl} h={80} w={"auto"}/>
                                        </a>
                                    </Grid.Col>
                                </Grid>
                                <Text size="md" mt={2}>2023</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Производство">
                                <Grid mt={4} columns={2}>
                                    <Grid.Col span={{base: 2, md: 1}}>
                                        <Text c="dimmed" size="md">
                                            Оснащение
                                            собственной
                                            опытнопромышленной
                                            линии
                                            производства,
                                            сотрудничество с
                                            предприятиями-потребителями
                                        </Text>
                                    </Grid.Col>
                                    <Grid.Col span={{base: 2, md: 1}}>
                                        <Group>
                                            <a href={"https://elecond.ru/"} target={"_blank"}>
                                                <Image src={elecondUrl} h={60} w={"auto"}/>
                                            </a>
                                            <a href={"https://globalrdtech.ru/"} target={"_blank"}>
                                                <Image src={globalUrl} h={50} w={"auto"}/>
                                            </a>
                                        </Group>
                                    </Grid.Col>
                                </Grid>
                                <Text size="md" mt={2}>2024</Text>
                            </Timeline.Item>
                        </Timeline>
                    </Grid.Col>
                </Grid>
            </Box>
        </Container>
    );
}