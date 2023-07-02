import React, { useEffect } from 'react';
import { FeaturedProducts, Hero, Services, Contact, ChatWidget, FAB } from '../../components';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineQrcode } from "react-icons/ai";
import { Link } from 'react-router-dom';

const HomePage = () => {
  useEffect(() => {
    document.title = 'ShopBuddies | Home';
  }, []);

  const actions = [    
    { label: "QrCode", icon:  <Link to='/qr'><AiOutlineQrcode /></Link>, onClick: console.log },
    { label: "Instagram", icon: <a href="https://www.instagram.com/shopbuddies.com.my/"><FaInstagram /></a>, onClick: console.log },
    { label: "Facebook", icon: <a href="https://www.facebook.com/shopbuddies.my/"><FaFacebook /></a>, onClick: console.log },
    { label: "Email", icon: <a href='mailto:customer@shopbuddies.com.my'><MdEmail /></a>, onClick: console.log },
  ];
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />      
      <ChatWidget />
      <FAB actions={actions} />
    </main>
  );
};

export default HomePage;
