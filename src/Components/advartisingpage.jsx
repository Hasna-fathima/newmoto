import { useEffect, useState } from "react";
import singlebike from '../assets/singlebike.jpg';
import singlemoto from '../assets/singlemoto.jpg';
import singlemoto1 from '../assets/singlemoto1.jpg';

function Advartisingpage() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // Set interval to change the image every 3 seconds
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3); // Only cycle through 3 images (0 to 2)
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const imageDetails = [
    {
      text: 'Welcome to School',
      description: 'This is your first step towards learning.',
      img: singlebike
    },
    {
      text: 'Top Students of the Year',
      description: 'Congratulations to the top students for their amazing performance!',
      img: singlemoto
    },
    {
      text: 'Graduation Day',
      description: 'Celebrating the journey from learning to achievement.',
      img: singlemoto1
    },
  ];

  const currentImage = imageDetails[imageIndex];

  return (
    <div className="container">
      <div className="text-box">
        {/* Ensure currentImage exists before trying to render */}
        {currentImage ? (
          <>
            <h1>{currentImage.text}</h1>
            <div className="border"></div>
            <p>{currentImage.description}</p>
            <button>Get Started</button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="image-box">
        {/* Ensure the image source is valid before rendering */}
        {currentImage ? (
          <img
            src={currentImage.img}
            alt={currentImage.text}
          />
        ) : (
          <p>Loading image...</p>
        )}
      </div>
    </div>
  );
}

export default Advartisingpage;