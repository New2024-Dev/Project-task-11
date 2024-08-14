import "./Sneakersimg.css"
import React, { useState, useEffect } from 'react';

function Sneakersimg(){
    const [images, setImages] = useState([
        { id: 1, prodimg: "/assets/Images/image-product-1.jpg" },
      { id: 2, prodimg: "/assets/Images/image-product-2.jpg" },
      { id: 3, prodimg: "/assets/Images/image-product-3.jpg" },
      { id: 4, prodimg: "/assets/Images/image-product-4.jpg" }
    ]);
    const [selectedImage, setSelectedImage] = useState("/assets/Images/image-product-1.jpg");

   
    
    return (
        <div id="image-gallery">
            
            {selectedImage && <img src={selectedImage} alt="Selected" id="main-image" />}
            
            
            <div id="smallimages">
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.prodimg}
                        alt={`Thumbnail ${image.id}`}
                        onClick={() => setSelectedImage(image.prodimg)}
                    />
                ))}
            </div>
        </div>
    );
}
export default Sneakersimg