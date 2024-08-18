import {Title, Container, Text, ThemeIcon, rem, Stack, Group, ActionIcon, Image, Flex, Anchor} from '@mantine/core';
import classes from './Contacts.module.css';
import {
    IconAt, IconBrandTelegram,
    IconBrandVk,
    IconBrandYoutube,
    IconMapPin,
    IconPhone,
    IconSun
} from "@tabler/icons-react";

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
            href="http://maps.google.com/?q=%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2,%20%D1%80%D1%8B%D0%BD%D0%BE%D0%BA%20%D0%A1%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9"
            target={"_blank"}
        >
            844 Morris Park avenue
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
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner} size="lg">
                <Flex gap={10} align={"center"}>
                    <Image src={"/Logo.svg"} h={28}/>
                    <Title className={classes.titleFooter}>Энергозаряд</Title>
                </Flex>

                <Group className={classes.links}>{items}</Group>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTelegram style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandVk style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}
