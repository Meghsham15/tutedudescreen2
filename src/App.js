import React, { useState } from 'react';
import Nav from './components/Nav';
import NavPh from './components/NavPh';

function App() {
  const [width, setWidth] = useState("");

  window.setInterval(lio, 1000);
  function lio() {
    setWidth(window.innerWidth);
  }

  return (<div className='container'>
    {width < 800 ? <NavPh /> : <Nav />}


    {/* <Nav/> */}
    <div className='main-cont'>
      <div className='inner'>
        <div className='top'>
          <h4>UI/UX > Refer & Earn > Friends Referred </h4>
        </div>
        
        <div className='t-box'>
          <div className='ref-box'>
            <div className='ref-box-a'>
              <p className='ref-title'>Referral Earning</p>
              <p className='ref-amount'>₹ 2,500</p>
            </div>
            <div className='ref-box-a'>
              <p className='ref-title'>Total Referrals</p>
              <p className='ref-amount'>7</p>
            </div>
            <div className='ref-box-a'>
              <p className='ref-title'>Wallet Balance</p>
              <p className='ref-amount'>₹ 500</p>
            </div>
            <div className='withdraw'>Withdraw Balance</div>
          </div>
          <div className='referal-code-box'>
            <div className='ref-code'>
              <p className='ref-code-a'>
                Your Referral Code
              </p>
              <p className='ref-code-box'>
                EDCH54
              </p>
            </div>
          </div>
        </div>

        <div className='super-main'>
          <p className='super-head'>How does it work ?</p>
          <div className='super-content'>
            <div className='sec-card'>
              <div className='sec-card-in'>
                <img src={require('./img/profile.png')}></img>
                <div>
                  <p className='sec-head'>Invite your Friends</p>
                  <p className='sec-cont'>Share the link tutedude.com with your friends</p>
                </div>
              </div>
            </div>
            <div className='sec-card'>
              <div className='sec-card-in'>
                <img src={require('./img/tag.png')}></img>
                <div>
                  <p className='sec-head'>Friend purchases any course</p>
                  <p className='sec-cont'>Using your REFERRAL CODE in the payments page</p>
                </div>
              </div>
            </div>
            <div className='sec-card'>
              <div className='sec-card-in'>
                <img src={require('./img/rupee.png')}></img>
                <div>
                  <p className='sec-head'>You get ₹ 200 as referral money</p>
                  <p className='sec-cont'>On total purchase the friend makes, into your wallet</p>
                </div>
              </div>
            </div>
            <div className='sec-card'>
              <div className='sec-card-in'>
                <img src={require('./img/dis.png')}></img>
                <div>
                  <p className='sec-head'>Your Friend gets ₹ 200 Off </p>
                  <p className='sec-cont'>On his overall fee on successful purchase using your referral code </p>
                </div>
              </div>
            </div>
            <div className='sec-card'>
              <div className='sec-card-in'>
                <img src={require('./img/wall.png')}></img>
                <div>
                  <p className='sec-head'>Transfer money from wallet </p>
                  <p className='sec-cont'>On his overall fee on successful purchase using your referral code </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className='terms'>Friends who enrolled</div>
      <div className='terms'>Terms & Conditions</div>
    </div>

  </div>
  );
}

export default App;
