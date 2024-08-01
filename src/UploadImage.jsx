import { useState } from 'react';
import axios from 'axios';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const ImageUpload = () => {
    const [imageId, setImageId] = useState(null);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // Replace with your upload preset

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload',
                    formData
                );
                setImageId(response.data.public_id);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const cld = new Cloudinary({ cloud: { cloudName: 'dz7kwxhmp' } });

    const img = imageId
        ? cld
            .image(imageId)
            .format('auto')
            .quality('auto')
            .resize(auto().gravity(autoGravity()).width(500).height(500))
        : null;

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            {img && <AdvancedImage cldImg={img} />}
        </div>
    );
};

export default ImageUpload;