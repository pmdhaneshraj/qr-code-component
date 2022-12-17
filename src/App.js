import React from 'react';
import { Card } from 'antd';

import './App.scss';

import qrImg from './assests/images/image-qr-code.png'

const { Meta } = Card;

function App() {
  return (
    <div className="App pattern-zigzag-xl bg-blue white">
      <div className='qr-container'>
        <div className='qr-card-container'>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img className='qr-img' alt="qr-img" src={qrImg} />}
          >
            <Meta 
              title="Improve your front-end skills by building projects" 
              description="scan QR code to visit Frontend Mentors and take your coding skills to next level"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
