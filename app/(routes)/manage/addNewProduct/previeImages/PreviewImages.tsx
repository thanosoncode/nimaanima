import Image from 'next/image';
import React from 'react';

interface PreviewImagesProps {
  images: string[];
}

const PreviewImages: React.FC<PreviewImagesProps> = ({ images }) => {
  const content =
    images.length > 0 ? (
      <div>
        <h4>Images</h4>
        <div style={{ display: 'flex', gap: '16px' }}>
          {images.map((image) => (
            <Image src={image} width={100} height={100} alt='' key={image} />
          ))}
        </div>
      </div>
    ) : null;

  return content;
};
export default PreviewImages;
