import {Group, Burger, Container, Image, Flex, Title, Drawer, Divider, Space} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './Header.module.css';

import logoUrl from '/Logo.svg?url';

const links = [
    {link: '#about', label: 'Проект'},
    {link: '#history', label: 'История'},
    {link: '#command', label: 'Команда'},
    {link: '#contacts', label: 'Контакты'},
];

export function Header() {
    const [opened, {toggle}] = useDisclosure(false);

    const items = links.map((link) => {
        return (
            <a
                key={link.link}
                href={link.link}
                className={classes.link}
            >
                {link.label}
            </a>
        );
    });

    return (
        <>
            <header className={classes.header}>
                <Container size="lg">
                    <div className={classes.inner}>
                        <Flex gap={10} align={"center"}>
                            <Image src={logoUrl} h={28} alt="Энергозаряд"/>
                            <Title className={classes.title}>Энергозаряд</Title>
                        </Flex>
                        <Group gap={5} visibleFrom="sm">
                            {items}
                        </Group>
                        <Burger color={"white"} opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"/>
                    </div>
                </Container>
            </header>
            <Drawer
                opened={opened}
                onClose={toggle}
                size="100%"
                padding="md"
                title={
                    <Flex gap={10} align={"center"}>
                        <Image src={logoUrl} h={28} alt="Энергозаряд"/>
                        <Title className={classes.title_burger}>Энергозаряд</Title>
                    </Flex>
                }
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <Divider/>
                <Space h={"lg"}/>
                {links.map(link =>
                    <a href={link.link} key={link.link} className={classes.link_burger} onClick={toggle}>
                        {link.label}
                    </a>
                )}
            </Drawer>
        </>
    );
}