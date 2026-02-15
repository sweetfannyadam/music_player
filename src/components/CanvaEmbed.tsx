import React from 'react';

const CanvaEmbed: React.FC = () => {
  return (
    /* We use 98vw (viewport width) to take up almost the whole screen regardless of parent containers */
    <div
      className='canva-section'
      style={{ width: '98vw', margin: '60px auto', padding: '0' }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '80%' /* Your specific project ratio */,
          paddingBottom: 0,
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          overflow: 'hidden',
          borderRadius: '12px',
          willChange: 'transform',
        }}
      >
        <iframe
          loading='lazy'
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
          src='https://www.canva.com/design/DAHBSdqwicQ/o-MZubOcOdhsBTk-IVRqJg/watch?embed'
          allowFullScreen={true}
          allow='fullscreen'
          title='Canva Design'
        ></iframe>
      </div>

      {/* The link and "Scrapbook by..." text have been deleted from here */}
    </div>
  );
};

export default CanvaEmbed;
