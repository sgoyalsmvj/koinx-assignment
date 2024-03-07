import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Deck from './Deck';

function CarouselDeck() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
      <Deck
          bgColor="blue-100"
          icon={news}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum excepturi illo dolorem aliquid rem incidunt numquam, quos adipisci natus quas ex, quis cum voluptas libero laboriosam tempore fuga earum?"
        />
      </Carousel.Item>
      <Carousel.Item>
     
        <Deck
          bgColor="green-100"
          icon={trend}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum excepturi illo dolorem aliquid rem incidunt numquam, quos adipisci natus quas ex, quis cum voluptas libero laboriosam tempore fuga earum?"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselDeck;