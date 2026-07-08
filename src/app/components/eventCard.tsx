import { Paper, Flex, Stack, Title, Text, Image, Group, Card } from "@mantine/core";
import styles from './eventCard.module.css';
import { Event } from "../data";
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react';
import { DetailTag } from "./detailTag";
import { EventModal } from "./eventModal";
import { useDisclosure } from "@mantine/hooks";

export function EventCard({event,onClick}:{event:Event,onClick: (event:Event) => void}){
    return (
        <>
        
        <Card
            radius="md"
            onClick={() => {onClick(event)}}
            className={styles.eventCard}
        >
            <Card.Section>
            <Image src={event.image} radius="var(--mantine-spacing-md) var(--mantine-spacing-md) 0 0" />
            </Card.Section>
            <Card.Section>
            <Stack justify="between" p={10} className={styles.eventDetails}>
                <Stack>
                    <Title className={styles.eventTitle} order={4} size='h2'>{event.title}</Title>
                    <Flex gap={12}>
                        
                        <DetailTag icon={<ClockIcon width={20} className={styles.eventText} />} text={event.time} />
                        <DetailTag icon={<MapPinIcon width={20} className={styles.eventText} />} text={event.venue} />
                    </Flex>
                </Stack>
                <Flex>
                    Test
                </Flex>
            </Stack>
            
            </Card.Section>
        </Card>
        </>
    )
}