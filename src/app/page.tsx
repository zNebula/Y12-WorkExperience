'use client';

import PageLayout from '@/app/genericLayout';
import { Box, Button, Container, Flex, Grid, Image, Paper, Scroller, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import TextAndImageBlock from './components/textAndImageBlock';
import { useEffect, useRef, useState } from 'react';
import {Carousel} from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay'


export default function Home() {
  const autoplay = useRef(Autoplay({delay:30000}))
  const images = ["dancing.jpg","ceilidh.jpg","dancing.jpg","ff-craft-fair-1.jpg","ff-craft-fair-2.jpg","ff-craft-fair-3.jpg"]
  return (
    <PageLayout>
      <Stack justify='center'>
        <Container p={100} bg="var(--brown)" size="100%" c="var(--white)" style={{marginTop: 'calc(var(--mantine-spacing-md) * -1)'}}>
          <Grid>
            <Grid.Col span={6}>
            <Stack>
              <Title p={50} m="auto" order={1} size={70}>The Trust</Title>
              <Text size='xl'>
                Tenterden Folk Day Trust is a registered charity formed in May 1994 to preserve and advance public education and appreciation of traditional and contemporary folk song, music, dance, traditions, crafts and folk arts as a part of the living heritage.  The Trust is supported by Tenterden Town Council, Ashford Borough Council and Kent County Council and a number of local and regional businesses and other community organisations.
              </Text>
              <Flex m='auto' gap={12}>
              <Button component='a' href="events" variant='outline' color="var(--white)" size='lg' radius='xl'>See Events</Button>
              <Button component='a' href="https://www.musicglue.com/tenterdenfolkfestival/tickets" color='var(--oliveGreen)' size='lg' radius='xl'>Buy Tickets</Button>
              </Flex>
            </Stack>
          {/* <TextAndImageBlock
            text='Tenterden Folk Day Trust is a registered charity formed in May 1994 to preserve and advance public education and appreciation of traditional and contemporary folk song, music, dance, traditions, crafts and folk arts as a part of the living heritage.  The Trust is supported by Tenterden Town Council, Ashford Borough Council and Kent County Council and a number of local and regional businesses and other community organisations.'
            imageSrc='/images/welcome.jpg'
            //uses Grid which assumes 12 columns
            imageWidth={3}
            imageSide='left'
          /> */}
          </Grid.Col>
          <Grid.Col span={6}>
            <Image fit='contain' w="100%" h={500} src="/images/ff-procession.jpg" />
          </Grid.Col>
          </Grid>
        </Container>
        <Carousel plugins={[autoplay.current]} withIndicators slideSize="80%" height={1500} slideGap="sm" emblaOptions={{loop: true, dragFree: false}}>
          {images.map((image) => (
            <Carousel.Slide>
              <Image fit="cover" radius="md" height="100%" src={"/images/" + image} />
            </Carousel.Slide>
          ))}
        </Carousel>
        
      </Stack>
    </PageLayout>
  );
}
