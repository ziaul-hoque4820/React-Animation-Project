import React from 'react';

export default function Marquee({ imagesurl, direction = 'left' }) {
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap">
      <div
        className={`flex ${
          direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left'
        }`}
        style={{ width: 'calc(200%)' }}
      >
        {imagesurl.map((url, index) => (
          <img
            key={`set1-${index}`}
            className="flex-shrink-0 object-contain w-32 h-32 mx-4"
            src={url}
            alt={`image-${index + 1}`}
          />
        ))}

        {imagesurl.map((url, index) => (
          <img
            key={`set2-${index}`}
            className="flex-shrink-0 object-contain w-32 h-32 mx-4"
            src={url}
            alt={`image-duplicate-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
