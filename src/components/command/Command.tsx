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

import ceoUrl from '/CEO.png?url';

export function Command() {
    const theme = useMantineTheme()
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
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
            <Grid columns={12} gutter={"xl"}>
                {matches && <Grid.Col span={{base: 8, sm: 5, md: 4}}>
                    <Card padding="xl" radius="md" className={classes.card}>
                        <Card.Section
                            h={250}
                            style={{
                                backgroundImage: `url(${ceoUrl})`,
                                backgroundSize: 'cover',
                            }}
                        />
                        <Text ta="center" fz="lg" fw={500} mt="sm">
                            Денис Железнов
                        </Text>
                        <Text ta="center" fz="sm" c="dimmed">
                            Руководитель проекта, Генеральный директор ООО "Энергозаряд"
                        </Text>
                        <Button fullWidth radius="md" mt="xl" size="md" variant="default" onClick={open}>
                            Подробнее
                        </Button>
                    </Card>
                </Grid.Col>}
                <Grid.Col span={{base: 12, sm: 7, md: 8}}>
                    <Grid columns={4} gutter={!matches ? "xl" : "md"}>
                        <Grid.Col span={4}>
                            <Title className={classes.title}>Наша команда</Title>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Grid.Col>
                        {!matches && <Grid.Col span={{base: 4}}>
                            <Card padding="xl" radius="md" className={classes.card}>
                                <Card.Section
                                    h={250}
                                    style={{
                                        backgroundImage:
                                            'url(CEO.png)',
                                        backgroundSize: 'cover',
                                    }}
                                />
                                <Text ta="center" fz="lg" fw={500} mt="sm">
                                    Денис Железнов
                                </Text>
                                <Text ta="center" fz="sm" c="dimmed">
                                    Руководитель проекта, Генеральный директор ООО "Энергозаряд"
                                </Text>
                                <Button fullWidth radius="md" mt="xl" size="md" variant="default" onClick={open}>
                                    Подробнее
                                </Button>
                            </Card>
                        </Grid.Col>}
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons/>
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons/>
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons/>
                        </Grid.Col>
                        <Grid.Col span={{base: 4, xs: 2}}>
                            <UserInfoIcons/>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    );
}

export function UserInfoIcons() {
    return (
        <div>
            <Group wrap="nowrap">
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                    size={94}
                    radius="md"
                />
                <div>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        инженер
                    </Text>

                    <Text fz="lg" fw={500} className={classes.name}>
                        Рабочий Работник
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={5}>
                        <Button variant="light">Подробнее</Button>
                    </Group>
                </div>
            </Group>
        </div>
    );
}