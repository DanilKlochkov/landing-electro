import {Group, Burger, Container, Image, Flex, Title} from '@mantine/core';
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
                href={link.link}
                className={classes.link}
            >
                {link.label}
            </a>
        );
    });

    return (
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
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"/>
                </div>
            </Container>
        </header>
    );
}