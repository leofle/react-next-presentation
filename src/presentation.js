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
  Text,
  Image
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
// Import preloader
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';
// Require CSS
require('normalize.css');
const CustomHeading = styled.h1`
  font-size: 2em;
`;

const theme = createTheme(
  {
    primary: '#000',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    white: '#fff'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const files = {
  comp: require("./assets/component.txt")
}
const images = {
  react: require("./assets/react-logo.png"),
  t2baby: require("./assets/t2baby.gif")
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
        textFont={theme.primary}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            How i create UI with React and Machine learning
          </Heading>
          <Text margin="10px 0 0" textColor="white" size={1} fit bold>
            and why we need this any ways...
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <CustomHeading>
              What is Not About
          </CustomHeading>
          <List>
          <Appear order={1}>
            <ListItem>
              Machinne learning
            </ListItem>
          </Appear>
          <Appear order={2}>
            <ListItem>
              Design Patterns
            </ListItem>
          </Appear>
          <Appear order={3}>
            <ListItem>
              AI Best practices
            </ListItem>
          </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <Heading size={6} textColor="white" caps>
            What IS About
          </Heading>
          <List>
            <ListItem>Ideas and research</ListItem>
            <ListItem>React components patterns</ListItem>
            <ListItem>AI as a helper</ListItem>
            <ListItem>Showing the path</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <CustomHeading>
            The problem
          </CustomHeading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <CustomHeading>
            The wrong solution
          </CustomHeading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <CustomHeading>
            My solution
          </CustomHeading>
        </Slide>
        <CodeSlide
            bgColor="#000"
            color="magenta"
            transition={[]}
            lang="js"
            code={files.comp}
            ranges={[
              { loc: [0, 6], title: "HOC example" },
              { loc: [0, 2], note: "The Beginning" },
              { loc: [2, 5], note: "Heres a note!" },
              { loc: [5, 6], note: "Heres a note!" },
              { loc: [0, 6] },
              // ...
            ]}/>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Image src={images.t2baby} width={'100%'}/>
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
        ]} bgColor="primary" textColor="white">
          <CustomHeading>
            Thank You!
          </CustomHeading>
        </Slide>
      </Deck>
    );
  }
}
