import {Title, Container, Text, ThemeIcon, rem, Stack, Group, Image, Flex, Anchor} from '@mantine/core';
import classes from './Contacts.module.css';
import {
    IconAt,
    IconMapPin,
    IconPhone,
    IconSun
} from "@tabler/icons-react";

import logoUrl from '/Logo.svg?url';

export function FaqWithHeader() {
    return (
        <div>
            <Container id={"contacts"} className={classes.wrapper} size="lg">
                <div className={classes.header}>
                    <div>
                        <Title className={`${classes.titleOverlay} noselect`} role="presentation">
                            Энергo
                        </Title>
                        <Title className={`${classes.titleOverlay} noselect`} role="presentation">
                            Заряд
                        </Title>
                    </div>

                    <div className={classes.contact}>
                        <Text size="xl" fw={500} className={classes.contactTitle}>
                            Связаться с нами
                        </Text>

                        <ContactIconsList/>
                    </div>
                </div>
            </Container>
            <FooterCentered/>
        </div>
    );
}

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
}

function ContactIcon({icon: Icon, title, description, ...others}: ContactIconProps) {
    return (
        <div className={classes.wrapper2} {...others}>
            <ThemeIcon size={40} radius="md" className={classes.icon2}>
                <Icon style={{width: rem(24), height: rem(24)}}/>
            </ThemeIcon>

            <div>
                <Text size="xs" className={classes.title2}>
                    {title}
                </Text>
                <Text className={classes.description2}>{description}</Text>
            </div>
        </div>
    );
}

const MOCKDATA = [
    {
        title: 'Электронная почта',
        description: <Anchor
            href={"mailto:enzaryad@mail.ru"}
            underline="hover"
        >
            enzaryad@mail.ru
        </Anchor>,
        icon: IconAt
    },
    {
        title: 'Номер телефона',
        description: <Anchor
            underline="hover"
            href={"tel:+7 (919) 837-49-70"}
        >
            +7 (919) 837-49-70
        </Anchor>,
        icon: IconPhone
    },
    {
        title: 'Адрес',
        description: <Anchor
            underline="hover"
            href="https://www.google.com/maps?q=%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2,+%D1%83%D0%BB.+%D0%90%D1%82%D0%BA%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F,+66"
            target={"_blank"}
        >
            г. Саратов, ул. Аткарская, 66
        </Anchor>,
        icon: IconMapPin
    },
    {title: 'Рабочие часы', description: '8:00 – 17:00', icon: IconSun},
];

export function ContactIconsList() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}


const links = [
    {link: '#about', label: 'Проект'},
    {link: '#history', label: 'История'},
    {link: '#command', label: 'Команда'},
    {link: '#contacts', label: 'Контакты'},
];

export function FooterCentered() {
    const items = links.map((link) => (
        <Anchor
            underline={"hover"}
            className={classes.link}
            c="dimmed"
            key={link.label}
            href={link.link}
            lh={1}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner} size="lg">
                <Flex gap={10} align={"center"}>
                    <Image src={logoUrl} h={28} alt={"Энергозаряд"}/>
                    <Title className={classes.titleFooter}>Энергозаряд</Title>
                </Flex>

                <Group className={classes.links} justify="flex-end">{items}</Group>
            </Container>
        </div>
    );
}
