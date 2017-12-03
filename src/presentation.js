// Import React
import React from 'react';
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
// Import preloader
import preloader from 'spectacle/lib/utils/preloader';
// Require CSS
require('normalize.css');

const CustomHeading = styled.h1`
  font-size: 2em;
`;

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  react: require("./assets/react-logo.png")
}

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress={'bar'}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How i create UI with React and Machine learning
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            and why we need this any ways...
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Appear order={1}>
            <CustomHeading>
              custom h1...
            </CustomHeading>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={[
          'fade',
          (transitioning, forward) => {
            const angle = forward ? -180 : 180;
            return {
              transform: `
          translate3d(0%, ${transitioning ? 100 : 0}%, 0)
          rotate(${transitioning ? angle : 0}deg)
        `,
              backgroundColor: transitioning ? '#26afff' : '#000'
            };
          }
        ]} bgColor="secondary" textColor="primary">
          <CustomHeading>
            Thank You!
          </CustomHeading>
        </Slide>
      </Deck>
    );
  }
}
