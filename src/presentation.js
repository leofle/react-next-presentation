// Import React
import React from "react";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  BlockQuote,
  Quote,
  Cite,
  Image,
  Typeface
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
// Import preloader
import preloader from "spectacle/lib/utils/preloader";
// Require CSS
require("normalize.css");
const CustomHeading = styled.h1`
  font-size: 2em;
  color: white;
`;
const theme = createTheme(
  {
    primary: "#000",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    white: "#fff"
  },
  {
    primary: {
      name: "Roboto",
      googleFont: true,
      styles: ["400", "700"]
    },
    secondary: "sans-serif"
  }
);

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
  snap: require("./assets/snapface.jpg"),
  snaplogo: require("./assets/snapchat-logo.jpg"),
  deepmind: require("./assets/deepmind.jpg"),
  feed1: require("./assets/feed1.jpg"),
  feed2: require("./assets/feed2.jpg"),
  amazon: require("./assets/amazon1.png"),
  amazonlogo: require("./assets/amazon-logo.jpg"),
  amazonstack: require("./assets/amazonstack.png"),
  applelogo: require("./assets/apple-logo.png"),
  auto: require("./assets/auto.png"),
  gmail: require("./assets/gmail.png"),
  instalogo: require("./assets/insta-logo.png"),
  insta: require("./assets/instafeed.jpg"),
  zone: require("./assets/zone.jpg"),
};
const gifs = {
  t2baby: require("./assets/t2baby.gif"),
  t100: require("./assets/t100.gif"),
  bye: require("./assets/bye.gif"),
  nono: require("./assets/nono.gif"),
  tesla: require("./assets/tesla.gif"),
  training: require("./assets/training.gif"),
  search: require("./assets/search.gif"),
  siri: require("./assets/siri.gif"),
};
preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        controls={false}
        progress={"bar"}
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <BlockQuote>
            <Quote textColor="white">
              "...Machine learning is a field of computer science that gives
              computer systems the ability to "learn" with data, without being
              explicitly programmed..."
            </Quote>
            <Cite>Wikipedia god</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="white">
            State of ML 2018
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={2} textColor="white">
              {" "}
              Lead UX Engineer{" "}
            </Heading>
          </Typeface>
          <Text textColor="transparent">blah blah</Text>
          <Image src={images.sisense} width={500} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={2} textColor="white">
              {" "}
              I make cool stuff!
            </Heading>
          </Typeface>
          <Text textColor="transparent">blah blah</Text>
          <Heading size={3} textColor="secondary">
            <span role="img" aria-label="rock horns with hand">
              🤘
            </span>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image src={images.applelogo} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image width="370px" src={images.auto} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image width="370px" src={gifs.siri} />
        </Slide>
        <Slide transition={["fade"]} bgImage={gifs.search} />
        <Slide transition={["fade"]} bgImage={images.gmail} />
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image src={images.netflix} />
        </Slide>
        <Slide transition={["fade"]} bgImage={images.rec1} />
        <Slide transition={["fade"]} bgImage={images.rec2} />
        <Slide transition={["fade"]} bgImage={images.rec3} />
        <Slide transition={["fade"]} bgImage={images.rec4} />
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image src={images.amazonlogo} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image src={images.amazon} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image  src={images.amazonstack} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image width="500px" src={images.facebook} />
        </Slide>
        <Slide transition={["fade"]} bgImage={images.face1} />
        <Slide transition={["fade"]} bgImage={images.face2} />
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image width="370px" src={images.feed1} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image width="370px" src={images.feed2} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image width="500px" src={images.instalogo} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image width="370px" src={images.insta} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image src={images.zone} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image src={images.tesla} />
        </Slide>
        <Slide transition={["fade"]} bgImage={gifs.tesla} />
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image src={images.snaplogo} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image src={images.snap} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="white">
          <Image src={images.deepmind} />
        </Slide>
        <Slide transition={["fade"]} bgImage={gifs.training} />
        <Slide transition={["fade"]} bgImage={gifs.nono} />
        <Slide transition={["fade"]} bgImage={gifs.bye} />
        <Slide
          transition={[
            "fade",
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
              translate3d(0%, ${transitioning ? 100 : 0}%, 0)
              rotate(${transitioning ? angle : 0}deg)
              `,
                backgroundColor: transitioning ? "#26afff" : "#000"
              };
            }
          ]}
          bgColor="primary"
          textColor="white"
        >
          <CustomHeading>Thank You!</CustomHeading>
        </Slide>
      </Deck>
    );
  }
}
