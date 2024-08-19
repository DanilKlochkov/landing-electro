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
    Mark,
    List
} from '@mantine/core';
import classes from './Command.module.css';
import {useDisclosure, useMediaQuery} from "@mantine/hooks";

import ceoUrl from '/CEO.webp?url';
import gorshkov from '/gorshkov.webp?url';
import klochkov from '/Klochkov.webp?url';
import zotov from '/Zotov.webp?url';
import asmolova from '/Asmolova.webp?url';

export function Command() {
    const theme = useMantineTheme()
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <Container size={"lg"} id={"command"} className={classes.container} mih={"100vh"}>
            <Modal
                opened={opened}
                onClose={close}
                title="Денис Железнов"
                centered
            >
                <List p={10}>
                    <List.Item>
                        Магистр химической технологии
                    </List.Item>
                    <List.Item>
                        Опыт научно-исследовательской деятельности 5 лет, прошел обучение по
                        дополнительной профессиональной программе <Mark color="blue">«Современные подходы к синтезу
                        новых материалов»</Mark> на
                        базе НИТУ
                        МИСИС Победитель Всероссийского инженерного конкурса «ВИК 2023/2024».
                    </List.Item>
                    <List.Item>
                        Победитель конкурсов на стипендию
                        Президента РФ (приоритетные направления) 2021 и 2023г., получатель гранта Президента Российской
                        Федерации лицам, проявившим выдающиеся способности и показавшим высокие достижения в
                        определенной сфере
                        деятельности фонда <Mark color="blue">«Талант и успех»</Mark>.
                    </List.Item>
                </List>
            </Modal>
            <Grid columns={12} align="center">
                <Grid.Col span={12}>
                    <Title className={classes.title}>Наша команда</Title>
                </Grid.Col>
                <Grid.Col span={12}>
                    Победители профильных конкурсов, активные участники научных исследований
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
                            />
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons
                                role={"разработчик"}
                                name={"Клочков Д.С."}
                                imageLink={klochkov}
                            />
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons
                                role={"инженер"}
                                name={"Зотов И.В."}
                                imageLink={zotov}
                            />
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons
                                role={"инженер"}
                                name={"Асмолова А.А."}
                                imageLink={asmolova}
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                {matches && <Grid.Col span={{base: 8, sm: 5, md: 5}}>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed" ta="center">
                        Руководитель проекта, Генеральный директор ООО "Энергозаряд"
                    </Text>

                    <Text fz="lg" fw={500} className={classes.name} ta="center">
                        Железнов Денис Ильич
                    </Text>
                    <Button fullWidth radius="md" mt="md" size="md" variant="default" onClick={open}>
                        Подробнее
                    </Button>
                </Grid.Col>}
            </Grid>
        </Container>
    );
}


export function UserInfoIcons({name, role, imageLink}: {
    name: string;
    role: string;
    imageLink: string;
}) {
    return (
        <Card withBorder>
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
                        <Button variant="light">Подробнее</Button>
                    </Group>
                </div>
            </Group>
        </Card>
    );
}