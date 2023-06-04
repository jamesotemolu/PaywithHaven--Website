import React, {useState} from 'react';
import './whathaven.css';
import buyericon from '../../assets/buyerIcon.png';
import sellericon from '../../assets/sellerIcon.png';
import buyer1 from '../../assets/buyer1.png';
import buyer2 from '../../assets/buyer2.png';
import buyer3 from '../../assets/buyer3.png';
import seller1 from '../../assets/Seller1.png';
import seller2 from '../../assets/Seller2.png';
import seller3 from '../../assets/Seller3.png';

// This section is Bid "Fear of Online Transaction" Bye


const WhatHaven = () => {
  const [toggle, setToggle] = useState(0);
  // const handleToggle = () => {
  //   setToggle(prev =>  !prev)
  // }
  return (
    <div className='haven__whathaven'>
      <div className='haven__whathaven-header'> 
        <h1>Bid “Fear of Online Transactions” Bye!</h1>
        <p>Build confidence in buying and selling online with fear of compromise</p>
        <hr id='goldline'/>
      </div>
      <div className='haven__whathaven-protections'>
        <div className='haven__whathaven-buyerprotection'>
          <div className='haven__whathaven-headers'>
            <div className={toggle === 0 ? "buyer-header" : "buyer-header inactive"} onMouseEnter={() => setToggle(0)} id='buyersection'>
              <div className='buyer-icontext'>
                <img src={buyericon} alt="buyer-icon" />
                <h1>Buyer Protection</h1>
              </div>
              <div>
                <p>
                With an added layer of security, you can prevent fraud <br /> 
                and gain a safer way to buy and sell online. With Haven, <br /> 
                you can rest assured that your funds will only be released <br /> 
                to the seller once you have received and verified the <br /> 
                product or service you have purchased.
                </p>
              </div>
            </div>
            <div className={toggle === 1 ? "buyer-header" : "buyer-header inactive"} onMouseEnter={() => setToggle(1)} id='sellersection'>
              <div className='buyer-icontext'>
                <img src={sellericon} alt="haven seller-icon" />
                <h1 id='seller-h1'>Seller Protection</h1>
              </div>
              <div>
                <p>
                You want to ensure that you receive payment for the <br /> 
                products or services you provide. Haven provides a safe <br /> 
                and reliable way to do just that. You can be sure that the <br /> 
                buyer's funds are held securely until the transaction is <br /> 
                complete, giving you peace of mind. 
                </p>
              </div>
            </div>
          </div>
          {
            toggle === 0 && 
            <div className='buyer-images'>
            <div className='col1'>
              <img src={buyer1} alt="haven buyer1" id='buyer1'/>
              <img src={buyer2} alt="haven buyer2" id='buyer2'/>
            </div>
            <img src={buyer3} alt="haven buyer3" id='buyer3'/>
          </div>
          }
          {
            toggle === 1 &&
            <div className='buyer-images'>
            <div className='col1'>
              <img src={seller1} alt="haven buyer1" id='buyer1'/>
              <img src={seller2} alt="haven buyer2" id='buyer2'/>
            </div>
            <img src={seller3} alt="haven buyer3" id='buyer3'/>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default WhatHaven
