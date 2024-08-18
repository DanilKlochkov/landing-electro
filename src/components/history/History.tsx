import {Carousel} from '@mantine/carousel';
import {Paper, Text, Title, Container, Grid, Timeline, Box} from '@mantine/core';
import classes from './History.module.css';
import {IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots} from "@tabler/icons-react";
import {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";

import carbonUrl from '/Carbonization.png?url';
import chemistryUrl from '/SoftChemistry.png?url';
import electroChemistryUrl from '/ElectroChemistry.png?url';

interface CardProps {
    image: string;
    title: string;
    category: string;
}

function Card({image, title, category}: CardProps) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{backgroundImage: `url(${image})`}}
            className={classes.card}
        >
            <div>
                <Text className={`${classes.category} noselect`} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
        </Paper>
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
                    <Grid.Col span={{base: 12, md: 6, lg: 5}}>
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
                            bulletSize={24}
                            lineWidth={2}
                        >
                            <Timeline.Item bullet={<IconGitBranch size={12}/>} title="Идея">
                                <Text c="dimmed" size="md">
                                    Зарождение идеи в рамках учебной научной деятельности
                                </Text>
                                <Text size="md" mt={4}>2020 - 2021</Text>
                            </Timeline.Item>

                            <Timeline.Item bullet={<IconGitCommit size={12}/>} title="Конкурс">
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

                            <Timeline.Item title="Конкурс"
                                           bullet={<IconGitPullRequest size={12}/>}
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

                            <Timeline.Item title="Производство" bullet={<IconMessageDots size={12}/>}>
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