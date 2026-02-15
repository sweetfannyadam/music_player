import React from 'react';
import '../styles/About.css';

const AboutSection: React.FC = () => {
  // 1. Data structure with photo and text
  const galleryData = [
    {
      src: '/images/1.jpg',
      text: `It begins with the feeling of falling for him in a way that felt natural. 
      Being with him made me feel strangely fearless about trying to love again. I let myself love without hesitation and fear.
      Happiness came just from talking to him, hearing his voice, or imagining small moments we could share together. 
      Loving him felt like discovering a part of my heart that I didn’t know was still capable of feeling that open and young.`,
    },
    {
      src: '/images/3.jpg',
      text: ` 
      As my feelings grew, they became quieter but deeper and more rooted. My love for him became something that lived in the background of everything I do.
      It holds warmth, but sometimes feels heavy with thoughts I cannot fully explain. It made me aware of how strongly someone can live inside my thoughts and how emotions can exist in ways that don’t always have clear answers.  
      None of these feelings cancel each other out. They exist together, shaping how I carry him in my story.
      
      `,
    },
    {
      src: '/images/6.jpg',
      text: `
      
      I have always seen him as a work of art. He is art — someone whose presence feels beautiful in a way that is difficult to fully explain. 
      He brings calm into my world simply by being himself. 
      I love him not only for how him made me feel, but for who him are — someone rare and meaningful in my life. Cariño is my quiet love letter to him. `,
    },
    {
      src: '/images/8.jpg',
      text: `Loving him made me want life to be kind to him. I have always seen his strength, even in moments when him might not see it himself. 
      I want him to continue growing, blooming, and becoming everything him are meant to be even in moments when things feel heavy. And I'm always willing to be there as he grows.`,
    },
  ];

  return (
    <div className='about-container'>
      <div className='opening-container'>
        <h2 className='about-title'>Through My Ears</h2>
        <p className='about-description'>
          Music has always been the language I use when feelings grow too
          layered for simple words. Songs hold emotions the way memories do —
          quietly, but rawly, and abstractly. This is a glimpse into how I
          experienced loving you and how I saw you through my own emotional
          world.
          <br />
          <br />
          Through these songs, I am showing you how love sounded to me.
        </p>
      </div>
      <div className='vertical-collage'>
        {galleryData.map((item, index) => (
          <div className='scroll-item' key={index}>
            <img src={item.src} alt={`Moment ${index}`} />
            {/* 2. Added text div */}
            <div className='item-caption'>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='closing-container'>
        <p className='about-conclusion'>
          I have always wished that love could exist not only in words,
          feelings, or imagination, but fully in our shared reality — in moments
          we could hold, places we could stand together, and memories we could
          create side by side. But wherever life takes us, I hope there is a
          small place in his heart that remembers him were loved that fully,
          that quietly, and that truthfully.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
