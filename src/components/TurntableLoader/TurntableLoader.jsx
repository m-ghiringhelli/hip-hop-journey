import React from 'react';
import './TurntableLoader.css';

export default function TurntableLoader() {
  return (
    <div className='turntable-base'>
      <div className='turntable-platter'>
        <div className='turntable-ring first'>
          <div className='turntable-ring second'>
            <div className='turntable-label'>
              <p>loading...
              </p>
              <div className='turntable-point'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='turntable-tone-arm'>
        <div className='turntable-tone-arm-weight'></div>
        <div className='turntable-tone-arm-arm'></div>
        <div className='turntable-tone-arm-cartridge'>
          <div className='cartridge-arm'></div>
          <div className='cartridge-cartridge'></div>
        </div>
      </div>
    </div>
  );
}
