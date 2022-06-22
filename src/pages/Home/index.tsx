import './style.css';

//components
import Header from '../../components/Header';
import Box from '../../components/Box';
import FigCaption from '../../components/FigCapion';
import Card from '../../components/Card';


//img
import Banner from '../../assets/images/primeiroBanner.png';
import Climbing from '../../assets/images/category/climb.png';
import City from '../../assets/images/category/city.png';
import Hike from '../../assets/images/category/hike.png';
import Basket from '../../assets/images/category/bask.png';
import Baseball from '../../assets/images/category/base.png';
import Badmint from '../../assets/images/category/badmint.png';
import Archery from '../../assets/images/category/arqueflecha.png';
import Category from '../../assets/images/category/category.png';




export default function Home() {


  return (
    <div className="App">
      <Header />
      <Box background='gray' >
        <img src={Banner} alt="Primeiro banner" />
      </Box>
      <Box background='abobora'>
        <div className='figures'>
          <div className="fileira">
            <FigCaption redirect={Climbing} text="Imagem" legend='CLIMBING' />
            <FigCaption redirect={City} text="Imagem" legend='CITY BIKING' />
            <FigCaption redirect={Hike} text="Imagem" legend='HIKE & CAMP' />
            <FigCaption redirect={Basket} text="Imagem" legend='BASKETBALL' />
          </div>
          <div className="fileira">
            <FigCaption redirect={Baseball} text="Imagem" legend='BASEBALL' />
            <FigCaption redirect={Badmint} text="Imagem" legend='BADMINT' />
            <FigCaption redirect={Archery} text="Imagem" legend='ARCHERY' />
            <FigCaption redirect={Category} text="Imagem" legend='CATEGORY' />
          </div>
        </div>
      </Box>
      <Box background='gray'>
        <>
        <Card />
        </>
        
      </Box>
    </div>
  )
}