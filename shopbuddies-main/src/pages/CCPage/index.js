import React, { useEffect, useState }  from 'react';
import Wrapper from './styles';
import { PageHero, ChatWidget, FAB } from '../../components';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineQrcode } from "react-icons/ai";
import CurrencyOptions from './CurrencyOptions'
import './index.css'
import { Link } from 'react-router-dom';

const CCPage = () => {
  useEffect(() => {
    document.title = 'ShopBuddies | Currency';
  }, []);
 
  const actions = [    
    { label: "QrCode", icon: <Link to='/qr'><AiOutlineQrcode /></Link>, onClick: console.log },
    { label: "Instagram", icon: <a href="https://www.instagram.com/shopbuddies.com.my/"><FaInstagram /></a>, onClick: console.log },
    { label: "Facebook", icon: <a href="https://www.facebook.com/shopbuddies.my/"><FaFacebook /></a>, onClick: console.log },
    { label: "Email", icon: <a href='mailto:customer@shopbuddies.com.my'><MdEmail /></a>, onClick: console.log },
  ];
  const [currencyOptions , setCurrencyOptions] = useState([])
  const [fromAmount , setFromAmount] = useState(0)
  const [toAmount , setToAmount] = useState(0)
  const [fromCurrency , setFromCurrency] = useState('')
  const [toCurrency , setToCurrency] = useState('')
  const [currencyNames , setCurrencyNames] = useState({})
  useEffect(() =>{
      fetch(`https://api.frankfurter.app/currencies`).then(res => res.json()).then(data => {
        setCurrencyOptions(Object.keys(data))
        setFromCurrency(Object.keys(data)[0])
        setToCurrency(Object.keys(data)[0])
        setCurrencyNames(data)
      })
  },[])
  useEffect(() => {
    if(parseInt(fromAmount) === 0){
      setToAmount(0)
    } else if(fromAmount === ''){
      setToAmount('')
    } else if(fromCurrency === toCurrency){
      setToAmount(fromAmount)
    } else {
      fetch(`https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`).then(res => res.json()).then(data => setToAmount(Object.values(data.rates)[0]))
    }
  },[fromCurrency , toCurrency , fromAmount , toAmount])
  return (
    <main>
      <PageHero title='Currency Converter' />
      <Wrapper className='page section section-center'>
    <div className = "index">
      <div className = "container">
        <div className = "item1">
          <div className = "opt-1">
            <h2>From Currency: </h2><br></br>
            <CurrencyOptions prop = "From currency" fromCurrency = {fromCurrency} currencyOptions = {currencyOptions} updateCurrency = {e => setFromCurrency(e.target.value)}/>
          </div>
          <div className = "opt-2">
            <h2>To Currency: </h2><br></br>
            <CurrencyOptions prop = "To currency" toCurrency = {toCurrency} currencyOptions = {currencyOptions} updateCurrency = {e => setToCurrency(e.target.value)}/>
          </div>
        </div>
        <div className = "item2">
        <div className = "opt-1">
          <h2>{currencyNames[`${fromCurrency}`]} </h2>
          </div>
          <div className = "opt-2">
          <h2>{currencyNames[`${toCurrency}`]} </h2>
        </div>
        </div>
        <div className = "item3">
          <input type = "number" autoComplete = "off" value = {fromAmount} className = "input" onChange = {e => setFromAmount(e.target.value)}/>
          <h2>=</h2>
          <input className = "output" disabled value = {toAmount} type="text"/>
        </div>
        <div className = "item4">
          <h2>{fromAmount} {fromCurrency} = {toAmount} {toCurrency}</h2>
        </div>
      </div>
      </div>
      </Wrapper>
      <ChatWidget />      
      <FAB actions={actions} />
    </main>    
  );
};

export default CCPage;
