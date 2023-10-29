import Image from 'next/image';
import React from 'react';

interface PreviewImagesProps {
  images: string[];
}

const PreviewImages: React.FC<PreviewImagesProps> = ({ images }) => {
  const content =
    images.length > 0 ? (
      <div className='pt-2 px-2 mb-2 pb-4 bg-neutral-100 rounded'>
        <h4 className='pb-2'>Images</h4>
        <div className='flex gap-4'>
          {images.map((image) => (
            <Image src={image} width={100} height={100} alt='' key={image} />
          ))}
        </div>
      </div>
    ) : null;

  return content;
};
export default PreviewImages;
