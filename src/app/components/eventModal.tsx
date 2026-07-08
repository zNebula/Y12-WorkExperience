import { ActionIcon, Anchor, Box, Divider, Flex, Group, Image, Modal, Stack, Text, Title } from "@mantine/core";
import { Event } from "../data";
import { ClockIcon, CurrencyGbpIcon, MapPinIcon, XIcon } from "@phosphor-icons/react";
import { DetailTag } from "./detailTag";
import styles from './eventModal.module.css';

export function EventModal({event,opened,onClose}:{opened:boolean,onClose: () => void,event?:Event|undefined}){
    if (!event) return
    return (
        <Modal size="60%" padding={0} opened={opened} onClose={onClose} centered lockScroll={false} withCloseButton={false}>
            <ActionIcon size="lg" onClick={onClose} variant="light" pos="absolute" right={10} top={10}>
                <XIcon />
            </ActionIcon>
            <Image src={event?.image} />
            <Stack p="md">
                
                <Title order={3}>{event?.title}</Title>
                <Flex gap="lg">
                    <DetailTag icon={<ClockIcon />} text={event.time} color="var(--oliveGreen)"/>
                    <Divider orientation="vertical" />
                    <DetailTag icon={<MapPinIcon />} text={event.venue} color="var(--oliveGreen)" />
                    {!event.ticketPrice.startsWith("No") && (
                        <>
                        <Divider orientation="vertical" />
                        <DetailTag icon={<></>} text={event.ticketPrice} color="var(--oliveGreen)" />
                        </>
                    )}
                </Flex>
                
                <Group>
                    <Title order={4}>What's Going On?</Title>
                    <Text>{event.description}</Text>
                </Group>
                
                {event.contactDetails && (<Stack>
                    <Title order={4}>Get in Touch</Title>
                    <Anchor c="var(--oliveGreen)" target="_blank" href={"mailto:" + event.contactDetails.email}>{event.contactDetails.email}</Anchor>
                </Stack>)}
                
            </Stack>
        </Modal>
    )
}