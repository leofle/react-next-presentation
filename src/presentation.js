// Import React
import React from 'react';
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  BlockQuote,
  Quote,
  Cite,
  Image,
  Typeface
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
  color: white;
`;
const RedShadow = styled.p`
    text-shadow: 4px 3px 5px #a20902;
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
    primary: { name: "Roboto", googleFont: true, styles: ["400", "700"] },
    secondary: 'sans-serif',
  }
);

const files = {
  comp: require("./assets/component.txt"),
  json: require("./assets/jsonAfter.txt")
}
const images = {
  react: require("./assets/react-logo.png"),
  t2: require("./assets/liot2.png"),
  tesla: require("./assets/tesla-logo.png"),
  facebook: require("./assets/face-logo.png"),
  netflix: require("./assets/netflix-logo.png"),
  rec1: require("./assets/netflix_recomends1.png"),
  rec2: require("./assets/netflix_recomends2.png"),
  rec3: require("./assets/netflix_recomends3.png"),
  rec4: require("./assets/netflix_recomends4.png"),
  face1: require("./assets/face-knows.png"),
  face2: require("./assets/face-knows2.png"),
  sisense: require("./assets/sisense.png"),
  network: require("./assets/network.png"),
  network2: require("./assets/network2.png"),
  network3: require("./assets/network3.png"),
  network4: require("./assets/network4.png"),
  network5: require("./assets/network5.png")
}
const gifs = {
  t2baby: require("./assets/t2baby.gif"),
  t100: require("./assets/t100.gif"),
  bye: require("./assets/bye.gif"),
  nono: require("./assets/nono.gif"),
  tesla: require("./assets/tesla.gif")
}
preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        controls={false}
        progress={'bar'}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide align="center flex-end" transition={['fade']} bgImage={images.t2} bgSize={'69vh'} bgRepeat={'no-repeat'}>
          <RedShadow>
            <Text margin="10px 0 0" textColor="white" textSize={'54px'} caps bold googleFont="Roboto">
              Componator 2
            </Text>
            <Text margin="10px 0 0" textColor="white" textSize={'54px'} caps bold googleFont="Roboto">
              Judgment Day
            </Text>
          </RedShadow>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="white">
            How i create UI with React and Machine learning
          </Heading>
          <Text margin="10px 0 0" textColor="white" size={1} fit bold>
            and why we need this any ways...
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={2} textColor="white"> Lead UX Engineer </Heading>
          </Typeface>
          <Text textColor="transparent">blah blah</Text>
          <Image src={images.sisense} width={500} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={2} textColor="white"> I make cool stuff!</Heading>
          </Typeface>
          <Text textColor="transparent">blah blah</Text>
          <Heading size={3} textColor="secondary">
            <span role="img" aria-label="rock horns with hand">
              🤘
            </span>
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <CustomHeading>
            What it IS About:
          </CustomHeading>
          <List>
            <ListItem>Ideas and research</ListItem>
            <ListItem>React components patterns</ListItem>
            <ListItem>AI as a helper</ListItem>
            <ListItem>Showing the path</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <CustomHeading>
            What did i use:
          </CustomHeading>
          <List>
            <ListItem>brain.js</ListItem>
            <ListItem>context API</ListItem>
            <ListItem>render props</ListItem>
            <ListItem>styled components</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <CustomHeading>
            What is Machinne learning?
          </CustomHeading>
        </Slide>
        <Slide transition={["fade"]} bgImage={gifs.t100} />
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <BlockQuote >
            <Quote textColor="white">
              "...Machine learning is a field of computer science that gives computer systems the ability to "learn" with data, without being explicitly programmed..."
            </Quote>
            <Cite>Wikipedia god</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.network} />
        <Slide transition={["fade"]} bgImage={images.network2} />
        <Slide transition={["fade"]} bgImage={images.network3} />
        <Slide transition={["fade"]} bgImage={images.network4} />
        <Slide transition={["fade"]} bgImage={images.network5} />
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <Image src={images.netflix} />
        </Slide>
        <Slide transition={['fade']} bgImage={images.rec1} />
        <Slide transition={['fade']} bgImage={images.rec2} />
        <Slide transition={['fade']} bgImage={images.rec3} />
        <Slide transition={['fade']} bgImage={images.rec4} />
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <Image width="500px" src={images.facebook} />
        </Slide>
        <Slide transition={['fade']} bgImage={images.face1} />
        <Slide transition={['fade']} bgImage={images.face2} />
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <Image src={images.tesla} />
        </Slide>
        <Slide transition={["fade"]} bgImage={gifs.tesla} />
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <CustomHeading>
            What if?...
          </CustomHeading>
        </Slide>
        <CodeSlide
          bgColor="#000"
          color="#80de13"
          transition={[]}
          lang="js"
          showLineNumbers={false}
          code={files.comp}
          ranges={[
            { loc: [0, 12] },
            { loc: [0, 12] },
            { loc: [4, 8] },
            { loc: [8, 12] },
            { loc: [0, 12] },
            // ...
          ]} />
        <CodeSlide
          bgColor="#000"
          color="#80de13"
          transition={[]}
          lang="js"
          showLineNumbers={false}
          code={files.json}
          ranges={[
            { loc: [0, 15] },
            { loc: [0, 15] },
            { loc: [5, 9] },
            { loc: [9, 13] },
            { loc: [0, 15] },
            // ...
          ]} />
        <Slide transition={["fade"]} bgImage={gifs.t2baby} />
        <Slide transition={['fade']} bgColor="primary" textColor="white">
          <CustomHeading>
            Demo
          </CustomHeading>
        </Slide>
        <Slide transition={["fade"]} bgImage={gifs.bye} />
        <Slide transition={["fade"]} bgImage={gifs.nono} />
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
