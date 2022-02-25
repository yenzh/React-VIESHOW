import {  Carousel, CardGroup} from 'react-bootstrap'
import styled from 'styled-components'

const Carouse = () => {
    return (
        <Carouselbanner className="Carouselbanner">
          <CarouselItem>
            <img className="d-block w-100" src="homepage1.jpeg" />
            <Carousel.Caption></Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img className="d-block w-100" src="homepage2.jpeg" />
            <Carousel.Caption></Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img className="d-block w-100" src="homepage3.jpeg" />
            <Carousel.Caption></Carousel.Caption>
          </CarouselItem>
        </Carouselbanner>

    )
};

export default Carouse 

const Carouselbanner = styled(Carousel)`
  text-align: center;
  margin: 0px auto;
`;

const CarouselItem = styled(Carousel.Item)`
  height: 800px;
`;
