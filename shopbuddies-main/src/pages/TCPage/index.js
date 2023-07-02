import React, { useEffect }  from 'react';
import Wrapper from './styles';
import { PageHero, ChatWidget, FAB } from '../../components';
import sbImg from '../../assets/shopb.png';
import biztrust from '../../assets/biztrust.png';
import { Collapse } from 'antd';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineQrcode } from "react-icons/ai";
import { Link } from 'react-router-dom';
const { Panel } = Collapse;

const CCPage = () => {
  useEffect(() => {
    document.title = 'ShopBuddies | T & C';
  }, []);
  const actions = [    
    { label: "QrCode", icon: <Link to='/qr'><AiOutlineQrcode /></Link>, onClick: console.log },
    { label: "Instagram", icon: <a href="https://www.instagram.com/shopbuddies.com.my/"><FaInstagram /></a>, onClick: console.log },
    { label: "Facebook", icon: <a href="https://www.facebook.com/shopbuddies.my/"><FaFacebook /></a>, onClick: console.log },
    { label: "Email", icon: <a href='mailto:customer@shopbuddies.com.my'><MdEmail /></a>, onClick: console.log },
  ];
  return (
    <main>
      <PageHero title='Terms & Conditions' />
      <Wrapper className='page section section-center'>
        
        <article>
    <div id="faq" className="block faqBlock">
        <Collapse defaultActiveKey={['1']}>
          <Panel header="About Us" key="1"><br></br>            
        <img id='sb' src={sbImg} alt='pic' />
          <p>
              SHOPBUDDIES is one of the global online retail company that delivers products directly to consumers around the world. We offer customers a convenient way to shop for a wide selection of lifestyle products at attractive prices.
              With hundreds of thousands of products across categories including, fashion & accessories, educational board games, mobiles & tablets, consumer electronics, car accessories, shoes & bags etc.
              </p><br></br><p>SHOPBUDDIES is the place to visit for all your shopping needs.
              Customer’s benefits are always the top priority of the starting points. That’s why we created perfect shopping atmosphere for our valued customers. Experience different shopping way and have fun with us.
            </p></Panel>
          <Panel header="Affiliate/Referral Program" key="2">
          <p>
              What’s ShopBuddies Reseller Program?
              <li>* 10% - 20% commission for selected items (will be informed separately)</li>
              <li>* Market our product through social media / social circle</li>
            </p>
            <br></br>
            <p>
              How much can I earn?
              <li>* RM0 ~ RM30,000 : 10% commission of purchase value</li>
              <li>* More than RM30,000 : 20% commission of purchase value</li>
            </p>
            <br></br>
            <p>
              The Benefits?
              <li>* No need to buy products</li>
              <li>* Get one product sponsored</li>
              <li>* No upfront or any registration</li>
              <li>* All orders is fulfilled by ShopBuddies Team</li>
            </p>
            <br></br>
            <p>
              How do I start?
            </p>
            <ul>1 - Broadcast to your friends contact number / facebook friends / social media friends about ShopBuddies's Raya 2018 items using your personalised promocode </ul>
            <ul>2 - We will consolidate the report and payout the commission to you end of the month (Cut off date: every 30th of month)</ul>
            <br></br><p>
              Terms and Conditions
              <li>* You need to achieve minimum sales of RM200 to start qualifying for the commission scheme and free one product</li>
                <li>* You will be given 1 month period to keep account active</li>
                  <li>* Commission will be paid in 60 days, cutoff on every 30th of month</li>
            </p><br></br>
            <p>
              If you are interested to join us for the above Affiliate / Referral Program, please SIGN UP HERE or contact us at marketing@shopbuddies.com.my  		 
            </p>
          </Panel>
          <Panel header="Returns Policy" key="3">
          <p>
              <li>* SHOPBUDDIES online shop makes sales based on proven reliability and our product quality is guaranteed.</li>
              <br></br><li>* We have a QC team to check and test that your ordered products are functioning correctly before they are packed and sent to you. However, you do need to confirm your size carefully with the size guide provided in FASHION category before you purchase.</li>
              <br></br><li>* If you are not satisfied with the items you received, you may return or exchange your items within 14 days from the delivered date.</li>
              <br></br><li>* Returned items must be unused, undamaged with original packaging. Customers will be responsible for all shipping fees.</li>
              <br></br><li>* Please contact our customer service and we will do the best we can. If you received the items that are not your order, please take an image and show us, we will resend the right one to you immediately.</li>
              <br></br><li>* To qualify for a return or exchange, please reflect the problems with the image of defective or faulty and get the approval from us before returning.</li>
              <br></br><li>* Items Not Eligible for Return Bodysuits, Swimwear, Lingerie & Sleepwear, Jewellery, and Accessories (except Bags & Scarves) are not allowed to be returned or exchanged.</li>
              <br></br><li>* Further questions regarding returns, please feel free to contact us. </li>     		  
             </p></Panel>
          <Panel header="Delivery Information" key="4">
            <p>
              SHOPBUDDIES provide shipping to West and East Malaysia.
              </p><p>
              * All your parcel will be delivered using major courier services such as Poslaju, Skynet and ABX.
              </p><p>
              * SHOPBUDDIES special provide free shipping to West Malaysia only. Other country shipping charges will be based on weight.
              </p><p>
              * There will be surcharges for delivery to East Malaysia.
              </p>
              <br></br>
              <p>
              SHIPPING TERMS & CONDITIONS</p><p>
              1. Item ordered take 3-10 handling days and delivery estimated 3-7 working days.Package required the signature upon delivery. Please ensure someone available at your given address to SIGN for the parcel.
              </p><p>2. Kindly provide us your Telephone Number so that the courier could contact you to arrange delivery at your convenient time in case there is no one at home when they attempt delivery.
              </p><p>3. The transit time is estimated delivery duration only. Please contact us if you did not receive the item after 14 days.
              </p>
              <br></br>
              <p>
              RETURN POLICY</p><p>
              1. Return is accepted. Only defective item is subjected to refund. Defective item(s) must be returned in original condition within 7 days of receipt. 
              </p><p>2. Buyer is responsible for return shipping cost.
              </p><p>3. Refund amount only covers item's price as listed, excluding shipping cost. Refund will be issued after we receive the returned item.
              </p><p>4. If you are returning or exchanging dresses, clothing, or accessories, please make sure they are in original condition-unworn, unwashed, unaltered, undamaged, clean, free of lint and hair and with tags intact and attached.
              </p>
              <br></br>
              <p>
              Please contact our customer service for further details. </p> </Panel>
          <Panel header="Privacy Policy" key="5">
          <p>
              SHOPBUDDIES respects your privacy and takes your online safety seriously. In order to provide you with the best products, efficient customer service, and timely updates, we record variety information from your visit to our site including name, phone number, zip code, address.
            </p><br></br>
            <p>We may use your personal information to:</p>
            <p><li>* Record and quickly bring up information you have given</li>
              <li>* Help you quickly find information, products, and services</li>
              <li>* Create content that is relevant to you</li>
              <li>* Alert you to our new information, products, and services We use your personal info to process your order and provide you with customer service.</li>
            </p><br></br><p>
              We will use your personal info to communicate with you about our site and regarding your orders.   		  
          </p></Panel>
          <Panel header="Terms & Conditions" key="6">
          <p>
              <b>OVERVIEW</b>
              </p><p>
              Welcome to SHOPBUDDIES. Please review the following basic rules that govern your use of this Site. These terms and conditions represent the agreement of the parties. Your use of this Site constitutes your unconditional agreement to follow and be bound by these Terms of Use. Shopbuddies reserves the right to update or modify these terms of use at any time without prior notice to you. Your use of this Site following any such change constitutes your unconditional agreement to follow and be bound by these Terms of Use as changed. For this reason, we encourage you to review these Terms of Use whenever you use this Site.
            </p><br></br>
            <p>
              <b>ORDERS ACCEPTANCE</b>
              </p><p>Please note that there may be certain orders we are unable to accept and must cancel. We reserve the right, at our sole discretion, to refuse or cancel any order for any reason. Some situations that may result in your order being canceled include limitations on quantities available for purchase, inaccuracies or errors in product or pricing information, or problems identified by our credit and fraud avoidance department. We may also require additional verification or information before accepting any order. We will contact you if the additional information required or if any of your order unable to accept.
            </p><br></br>
            <p>
              <b>TYPOGRAPHICAL ERRORS</b>
              </p><p>
              We strive to provide accurate product and pricing information, pricing or typographical errors may occur. However, in the event that an item is listed at an incorrect price or with incorrect information due to an error in pricing or product information, we shall have the right, at our sole discretion, to refuse or cancel any orders placed for that item. In the event that an item is mispriced, at our discretion, we may either contact you for instructions or cancel your order and notify you of such cancellation.
              </p><br></br>
              <p>
              <b>PAYMENT</b>
              </p>
              <p>The discount applies only to the invoiced value of the material (not to taxes or shipping fees). We reserve the right to require advance payment or satisfactory security for the goods if the financial condition of you so warrants as determined by us. If you fail to make payment in accordance with terms of this agreement or any collateral agreement or fail to comply with any provisions hereof, we may, at its option (and in addition to other remedies), cancel any unshipped portion of this order. Buyer is to remain liable for all unpaid accounts.
              </p><br></br>
              <p><b>
              RETURN OF PRODUCTS
              </b></p>
              <p>
              Return is accepted. Only defective item is subjected to refund. Defective item(s) must be returned in original condition within 7 days of receipt. Customers returning goods are responsible for all shipping fees.
              </p><br></br><p><b>
              OBJECTIONABLE MATERIAL
              </b></p><p>
              You understand that by using this Site or any services provided on the Site, you may encounter Content that may be deemed by some to be offensive, indecent, or objectionable, which Content may or may not be identified as such. You agree to use the Site and any service at your sole risk and we shall have no liability to you for Content that may be deemed offensive, indecent, or objectionable.
              </p><br></br>
              <p><b>
              LIMITATION OF LIABILITY
              </b></p><p>
              Under no circumstances and under no legal or equitable theory, whether in tort, contract, strict liability or otherwise, shall we or any of its employees, directors, officers, agents, vendors or suppliers be liable to you or to any other person for any indirect, special, incidental or consequential losses or damages of any nature arising out of or in connection with the use of or inability to use this Site, including, without limitation, damages for lost profits, loss of goodwill, loss of data, work stoppage, accuracy of results, or computer failure or malfunction, even if an authorized representative of us has been advised of or should have known of the possibility of such damages.
              </p><br></br><p><b>
              FORCE MAJEURE
              </b></p><p>
              We shall not be held responsible for the delay in shipment or non-delivery of the goods due to war, earthquake, serious flood, fire and other Force majeure causes agreed by both parties. However, we shall advise you by mail, immediately of such occurrence and within fourteen days thereafter. Under such circumstances, however, we are still under the obligation to take all necessary measures to hasten the delivery of the goods.
              </p><br></br>
              <p><b>
              GENERAL
              </b></p><p>
              This Agreement represents the complete agreement between the parties and supersedes all prior agreements and representations between them. Headings used in these Terms of Use are for reference purposes only and in no way define or limit the scope of the section. If any provision of this Agreement is held to be unenforceable for any reason, such provision shall be reformed only to the extent necessary to make it enforceable and the other terms of this Agreement shall remain in full force and effect. The failure to act with respect to a breach of this Agreement by you or others does not constitute a waiver and shall not limit our right with respect to such breach or any subsequent breaches.      		  
           </p></Panel>
        </Collapse>
        </div>
        </article>
        <article>          
          <div className="cert"><br></br>
            <h4><b>Certified Trusted Seller</b></h4><br></br>
            <div className='icon d_flex'>
            <a href="https://biztrust.ssm.com.my/web/guest/seal-auth?sealID=a198fdef-60fc-b102-7ec7-c1396d60e034">
              <img class="biz" src={biztrust} alt=" "></img>
            </a>
            </div>
          </div>
        </article>
      </Wrapper>
      <ChatWidget />      
      <FAB actions={actions} />
    </main>    
  );
};

export default CCPage;
