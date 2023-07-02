import React from 'react';
import Wrapper from "./styles";
import { Link } from 'react-router-dom';
import Carousel from "./carousel";
import heroBcg from '../../assets/2.jpg';
import heroBcg2 from '../../assets/1.jpg';

const Hero = () => {
  return (
    <div className='section-center'>
      <div className='content' style={{marginTop: '100px',marginBottom:'100px'}}>
      <div className='carousel'>
      <Carousel />
      </div>
      <div className='content' style={{marginTop: '100px', marginBottom:'100px'}}>
      <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Search less <br />
          Sell fast
        </h1>
        <p>
        ShopBuddies is an online retailer for fashion, electronics, gadgets, home appliances, beauty & toys at reasonable prices. A place to visit for all your shopping needs.
        </p>
        <Link to='/products' className='btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='' className='main-img' />
        <img src={heroBcg2} alt='' className='accent-img' />
      </article>
    </Wrapper>
        </div>
        </div>
      </div>
  );
};

export default Hero;