import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { UncontrolledCarousel } from 'reactstrap';
const Home = () => {
  return (
    <div>
      <UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: '',
      key: 1,
      src: 'https://picsum.photos/id/123/1200/600'
    },
    {
      altText: 'Slide 2',
      caption: '',
      key: 2,
      src: 'https://picsum.photos/id/456/1200/600'
    },
    {
      altText: 'Slide 3',
      caption: '',
      key: 3,
      src: 'https://picsum.photos/id/678/1200/600'
    }
  ]}
 />
    </div>
  )
}

export default Home