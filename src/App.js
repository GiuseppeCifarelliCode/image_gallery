import {useState} from 'react';
import './App.css';


function ImageGallery() {
  const images = [
    'https://loremflickr.com/200/300',
    'http://baconmockup.com/200/300',
    'http://placebear.com/200/300',
    'https://loremflickr.com/200/300'
  ];

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div>
      <div className='gallery'>
        {images.map((imgUrl, i) => (
          <img key={i} src={imgUrl} alt={`Immagine #${i+1}`} onClick={() => setSelectedImage(imgUrl)}></img>
        ))}
      </div>
        {selectedImage && (
          <div className='lightbox' onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt='Immagine Selezionata'></img>
          </div>
        )}
    </div>
  )
}

export default ImageGallery;
