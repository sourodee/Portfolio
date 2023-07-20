/* eslint-disable react/prop-types */
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { memo } from 'react';

function LazyImage({ publicId, containerClassName }) {
    const imageSrc = new CloudinaryImage(publicId, {
        cloudName: import.meta.env.VITE_CLOUD_NAME,
    });
    return (
        <div className={`image-container ${containerClassName}`}>
            <AdvancedImage
                cldImg={imageSrc}
                plugins={[
                    lazyload(),
                    placeholder(),
                ]}
            />
        </div>
    );
}
const MemoizedLazyImage = memo(LazyImage);
export default MemoizedLazyImage;