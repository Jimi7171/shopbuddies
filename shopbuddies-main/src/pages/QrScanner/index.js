import React, { useEffect }  from 'react';
import Wrapper from './styles';
import { PageHero, ChatWidget, FAB } from '../../components';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineQrcode } from "react-icons/ai";
import QRCode from "react-qr-code";
import { Link } from 'react-router-dom';

const QrScanner = () => {
  useEffect(() => {
    document.title = 'ShopBuddies | Qr';
  }, []);
  const actions = [    
    { label: "QrCode", icon:  <Link to='/qr'><AiOutlineQrcode /></Link>, onClick: console.log },
    { label: "Instagram", icon: <a href="https://www.instagram.com/shopbuddies.com.my/"><FaInstagram /></a>, onClick: console.log },
    { label: "Facebook", icon: <a href="https://www.facebook.com/shopbuddies.my/"><FaFacebook /></a>, onClick: console.log },
    { label: "Email", icon: <a href='mailto:customer@shopbuddies.com.my'><MdEmail /></a>, onClick: console.log },
  ];
  return (
    <main>
      <PageHero title='QR Code' />
      <Wrapper className='page section section-center'>
       <QRCode
        size={400}
        bgColor="white"
        fgColor="black"
        value="http://shopbuddies.com.my/"
        />
      </Wrapper>
      <ChatWidget />      
      <FAB actions={actions} />
    </main>    
  );
};

export default QrScanner;
