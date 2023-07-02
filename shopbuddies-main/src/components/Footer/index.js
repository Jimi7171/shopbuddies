import React from 'react';
import Wrapper from './styles';
import { socialLinks, footerLinks } from "../../utils/constants";
import { Link } from 'react-router-dom';
import tng from "./p0.png"
import fpx from "./p1.png"
import cimb from "./p2.png"
import hl from "./p3.png"
import master from "./p4.png"
import mb from "./p5.png"
import paypal from "./p6.png"
import pb from "./p7.png"
import visa from "./p8.png"

const Footer = () => {
  return (
    <Wrapper>
      <div className="footerSocialLinks">
        {socialLinks.map((link) => {
          const { url, icon, text } = link;
          return (
            <div key={text}>
              <a href={url}>{icon}</a>
            </div>
          );
        })}
      </div>
      <div className="footerLinks">
        {footerLinks.map((link) => {
          const { url, text, id } = link;
          return (
            <div key={id}>
                <Link to={url}>{text}</Link>
            </div>
          );
        })}
      </div>
      <div className='pay'>
        <img className="payment-image" src={tng} alt="TNG"></img>
        <img className="payment-image" src={fpx} alt="FPX"></img>
        <img className="payment-image" src={cimb} alt="CIMB"></img>
        <img className="payment-image" src={hl} alt="HL"></img>
        <img className="payment-image" src={master} alt="MasterCard"></img>
        <img className="payment-image" src={mb} alt="Maybank"></img>
        <img className="payment-image" src={paypal} alt="PayPal"></img>
        <img className="payment-image" src={pb} alt="PublicBank"></img>
        <img className="payment-image" src={visa} alt="Visa"></img>
        </div>
      <div className='underline'>
      </div>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> ShopBuddies </span>
         - All Rights Reserved. (SHOP BUDDY TECH SDN. BHD. Company Reg No. 1249036-M)
      </h5>
    </Wrapper>
  );
};

export default Footer;
