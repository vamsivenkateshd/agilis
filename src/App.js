import Carousel from './Component/Carousel/carousel';

let data= [
  {
    image:
      "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  },
  {
    image:
      "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
  },
]
function App() {
  return (
    <div className="App">
      <Carousel  items={data} autoplayInterval={1000}/>
    </div>
  );
}

export default App;
