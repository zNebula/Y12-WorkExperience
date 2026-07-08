'use client';

import PageLayout from '@/app/genericLayout';
import { ReactNode, useState } from 'react';
import { Event, events } from '../data';
import { ActionIcon, Box, Button, Flex, Grid, Image, List, SimpleGrid, Stack, Tabs, Title } from '@mantine/core';
import { EventCard } from '../components/eventCard';
import { EventModal } from '../components/eventModal';
import { useDisclosure } from '@mantine/hooks';
import { SlidersHorizontalIcon } from '@phosphor-icons/react';

export default function Events(): ReactNode {
  const eventsData = events;
  const dates: string[] = [...new Set<string>(events.map((event) => event.date))];
  const[selectedEvent,setSelectedEvent] = useState<Event>();
  const [ opened, {open,close}] = useDisclosure()
  const clickCard = (event:Event) => {
    setSelectedEvent(event);
    open();
  }
  return (
    <>
    
    <PageLayout>
      <EventModal event={selectedEvent} opened={opened} onClose={close}/>
      <Stack w="90%" m="auto" justify='center'>
        <Title c="var(--brown)" order={1}>Map</Title>
        <Grid>
          <Grid.Col span={8}>
            <Box bdrs="md" w="100%" h={800} bg="var(--pink)"></Box> {/* [TODO]: Add Map Functionality... Eventually */}
          </Grid.Col>
          <Grid.Col span={4}>
            <List>
              <List.Item>Test</List.Item>
            </List>
          </Grid.Col>
        </Grid>
        <Flex align="center" gap="lg">
        <Title c="var(--brown)" order={1}>Events</Title>
        <ActionIcon variant='subtle' color="var(--oliveGreen)">
          <SlidersHorizontalIcon />
        </ActionIcon>
        </Flex>
        <Tabs defaultValue={dates[0]}>
          <Tabs.List>
            {dates.map((date) => (
              <Tabs.Tab size={50} key={date} value={date}>{date}</Tabs.Tab>
            ))}
            
          </Tabs.List>
          {dates.map((date) => (
            <Tabs.Panel key={date} value={date}>
              <EventsView eventsData={eventsData.filter((event) => event.date == date)} clickCard={clickCard} />
            </Tabs.Panel>
          ))}
        </Tabs>
        
      </Stack>
    </PageLayout>
    </>
  );
}

function EventsView({eventsData,clickCard}:{eventsData:Event[],clickCard:(event:Event) => void}){
  return (<SimpleGrid spacing="md" cols={3}>
          {eventsData.map((event) => (

              <EventCard onClick={clickCard} event={event} />
              
          ))}
  </SimpleGrid>)
}
