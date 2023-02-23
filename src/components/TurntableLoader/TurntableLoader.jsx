import React from 'react';
import './TurntableLoader.css';

export default function TurntableLoader() {
  return (
    <div className='turntable-base'>
      <div className='turntable-platter'>
        <div className='turntable-ring first'>
          <div className='turntable-ring second'>
            <div className='turntable-label'>
              <div className='turntable-point'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
