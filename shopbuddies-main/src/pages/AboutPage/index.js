import React, { useEffect, useRef }  from 'react';
import Wrapper from './styles';
import StyledContactForm from './form';
import { PageHero, ChatWidget, FAB } from '../../components';
import aboutImg from '../../assets/2.jpg';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineQrcode } from "react-icons/ai";
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'ShopBuddies | About';
  }, []);
  const actions = [    
    { label: "QrCode", icon: <Link to='/qr'><AiOutlineQrcode /></Link>, onClick: console.log },
    { label: "Instagram", icon: <a href="https://www.instagram.com/shopbuddies.com.my/"><FaInstagram /></a>, onClick: console.log },
    { label: "Facebook", icon: <a href="https://www.facebook.com/shopbuddies.my/"><FaFacebook /></a>, onClick: console.log },
    { label: "Email", icon: <a href='mailto:customer@shopbuddies.com.my'><MdEmail /></a>, onClick: console.log },
  ];
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wk21ff8', 'template_w7664tm', form.current, 'QK26m2Ig-0wXa6Ycb')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='pic' />
        <article>
          <div className='title'>
            <h1>Shopbuddies</h1><br></br>
            <div className='underline'></div>
          </div>
            <p>SHOPBUDDIES is one of the global online retail company that delivers products directly to consumers around the world. We offer customers a convenient way to shop for a wide selection of lifestyle products at attractive prices.
              </p><p>
              With hundreds of thousands of products across categories including, fashion & accessories, educational board games, mobiles & tablets, consumer electronics, car accessories, shoes & bags etc., SHOPBUDDIES is the place to visit for all your shopping needs.
              </p><p>
              Customer’s benefits are always the top priority of the starting points. That’s why we created perfect shopping atmosphere for our valued customers. Experience different shopping way and have fun with us.</p>
        </article>
        <article>
        <div className="quickSupport">
        <div className='title'>
            <h1>Quick support?</h1>
            <div className='underline'></div>
          </div>
          <p>Get quick support 24/7 with our dedicated customer service team. We're here to help you manage your account, answer any questions, and resolve any issues. Trust us to make your experience stress-free and enjoyable.</p>
          <br></br>
          <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>
        </div>
        </article>
      </Wrapper>
      <ChatWidget />      
      <FAB actions={actions} />
    </main>    
  );
};

export default AboutPage;
