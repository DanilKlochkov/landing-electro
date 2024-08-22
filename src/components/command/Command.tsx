import {
    Card,
    Avatar,
    Text,
    Group,
    Button,
    Container,
    Grid,
    Title,
    useMantineTheme,
    Modal,
    List
} from '@mantine/core';
import classes from './Command.module.css';
import {useDisclosure, useMediaQuery} from "@mantine/hooks";

import ceoUrl from '/CEO.webp?url';
import gorshkov from '/gorshkov.webp?url';
import klochkov from '/Klochkov.webp?url';
import zotov from '/Zotov.webp?url';
import asmolova from '/Asmolova.webp?url';
import beloysov from '/beloysov.webp?url';
import plynin from '/plynin.webp?url';

export function Command() {
    const theme = useMantineTheme()
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <Container size={"lg"} id={"command"} className={classes.container} mih={"100vh"}>
            <Modal
                opened={opened}
                onClose={close}
                title="Железнов Денис Ильич"
                centered
            >
                <List p={10}>
                    <List.Item>
                        Магистр химической технологии
                    </List.Item>
                    <List.Item>
                        Является автором 11 публикаций (в том числе 5 Scopus), 3 РИД
                    </List.Item>
                    <List.Item>
                        Победитель конкурса "Старт-1" Фонда содействия инновациям
                    </List.Item>
                    <List.Item>
                        Победитель Всероссийского инженерного конкурса «ВИК 2023/2024» и "ВИК 2021/2022"
                    </List.Item>
                    <List.Item>
                        Победитель конкурсов на стипендию Президента РФ (приоритетные направления) 2021 и 2023г
                    </List.Item>
                    <List.Item>
                        Получатель гранта Президента Российской Федерации лицам, проявившим выдающиеся способности и
                        показавшим высокие достижения в определенной сфере деятельности фонда «Талант и успех»
                    </List.Item>
                </List>
            </Modal>
            <Grid columns={12} align="center">
                <Grid.Col span={12}>
                    <Title className={classes.title}>Наша команда</Title>
                </Grid.Col>
                {matches && <Grid.Col span={{base: 8, md: 5}}>
                    <Card padding="xl" className={classes.card}>
                        <Card.Section
                            h={300}
                            style={{
                                backgroundImage: `url(${ceoUrl})`,
                                backgroundSize: 'cover',
                                borderRadius: 'var(--mantine-radius-md)'
                            }}
                        />
                        <Text fz="xs" mt={"md"} tt="uppercase" fw={700} c="dimmed" ta="center">
                            Руководитель проекта, Генеральный директор ООО "Энергозаряд"
                        </Text>

                        <Text fz="lg" fw={500} className={classes.name} ta="center">
                            Железнов Денис Ильич
                        </Text>
                        <Button fullWidth radius="md" mt="md" size="md" variant="default" onClick={open}>
                            Подробнее
                        </Button>
                    </Card>
                </Grid.Col>}
                <Grid.Col span={{base: 12, md: 7}}>
                    <Grid columns={4} gutter={!matches ? "xl" : "md"} justify={"center"}>
                        {!matches && <Grid.Col span={{base: 4, sm: 3}}>
                            <Card padding="xl" radius="md" className={classes.card}>
                                <Card.Section
                                    h={250}
                                    style={{
                                        backgroundImage: 'url(CEO.webp)',
                                        backgroundSize: 'cover',
                                    }}
                                />
                                <Text mt={20} fz="xs" tt="uppercase" fw={700} c="dimmed">
                                    Руководитель проекта, Генеральный директор ООО "Энергозаряд"
                                </Text>

                                <Text fz="lg" fw={500} className={classes.name}>
                                    Железнов Денис Ильич
                                </Text>
                                <Button fullWidth radius="md" mt="xl" size="md" variant="default" onClick={open}>
                                    Подробнее
                                </Button>
                            </Card>
                        </Grid.Col>}
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons
                                role={"научный руководитель"}
                                name={"Горшков Н.В."}
                                imageLink={gorshkov}
                                info={[
                                    "К.т.н., доцент кафедры Химия и химическая технология материалов СГТУ им. Гагарина Ю.А.",
                                    "Участник программы развития кадрового управленческого резерва в области науки, технологий и высшего образования (стратегический уровень)",
                                    "63 публикации, H-index 12"
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons
                                role={"разработчик"}
                                name={"Клочков Д.С."}
                                imageLink={klochkov}
                                info={[
                                    "Бакалавр по направлению «Программная инженерия»",
                                    "Старший разработчик, ООО КлаудКом",
                                    "Разработчик, внедрение цифровых методов для решения прикладных задач проекта/химии",
                                    "Прошел интенсивную программу по генерации идей технологических стартапов «SkLab Дубна» 2021 г.",
                                    "Победитель и призер различных конкурсов и хакатонов",
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons
                                role={"инженер-исследователь"}
                                name={"Зотов И.В."}
                                imageLink={zotov}
                                info={[
                                    "Магистр химической технологии",
                                    "Соавтор 6 научных публикаций (Scopus)",
                                    "Являлся исполнителем научно-исследовательских работ по грантам НИР и НИОКР"
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons
                                role={"инженер-исследователь"}
                                name={"Асмолова А.А."}
                                imageLink={asmolova}
                                info={[
                                    "Магистр химической технологии",
                                    "Автор 7 научных публикаций (Scopus)",
                                    "Являлась исполнителем научно-исследовательских работ по грантам НИР и НИОКР",
                                    "Победитель конкурса Программы поддержки молодых ученых «Участник моложеного научно-инновационного конкурса» («УМНИК-2022»)"
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons
                                role={"инженер-технолог"}
                                name={"Белоусов А.И."}
                                imageLink={beloysov}
                                info={[
                                    "Магистр химической технологии",
                                    `Является соавтором 5 публикаций за период обучения в магистратуре.`,
                                    `Имеет опыт работы и.о. лаборатории аналитических исследований и механических испытаний
                                    ООО «СЭПО-ЗЭМ»`
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons
                                role={"инженер-технолог"}
                                name={"Плынин Н.М"}
                                imageLink={plynin}
                                info={[
                                    "Бакалавр химической технологии",
                                    `Имеет опыт работы оператором технологического оборудования перерабатывающих производств (ПАО "Саратовский НПЗ"), технологом буровых  растворов (Компания «Шлюмберже»)`
                                ]}
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    );
}


export function UserInfoIcons({name, role, imageLink, info}: {
    name: string;
    role: string;
    imageLink: string;
    info: string[];
}) {
    const [opened, {open, close}] = useDisclosure(false);
    return (
        <>
            <Modal
                key={`modal-${name}`}
                opened={opened}
                onClose={close}
                title={name}
                centered
                w={"50%"}
            >
                <List p={10}>
                    {info.map(info => (
                        <List.Item key={info}>
                            {info}
                        </List.Item>
                    ))}
                </List>
            </Modal>
            <Card withBorder key={`card-${name}`}>
                <Group wrap="nowrap">
                    <Avatar
                        src={imageLink}
                        alt={name}
                        size={94}
                        radius="md"
                    />
                    <div>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            {role}
                        </Text>

                        <Text fz="lg" fw={500} className={classes.name}>
                            {name}
                        </Text>

                        <Group wrap="nowrap" gap={10} mt={5}>
                            <Button variant="light" onClick={open}>Подробнее</Button>
                        </Group>
                    </div>
                </Group>
            </Card>
        </>
    );
}