import { useEffect, useState } from "react";



function Advartisingpage() {
    const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prevImage) => (prevImage + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const imageDetails = [
    {
      text: 'Welcome to School',
      description: 'This is your first step towards learning.',
      img: 'https://via.placeholder.com/400x300/ffcc00',
    },
    {
      text: 'Top Students of the Year',
      description: 'Congratulations to the top students for their amazing performance!',
      img: 'https://via.placeholder.com/400x300/00ccff',
    },
    {
      text: 'Graduation Day',
      description: 'Celebrating the journey from learning to achievement.',
      img: 'https://via.placeholder.com/400x300/ff5733',
    },
    {
      text: 'Future Leaders',
      description: 'The future is bright with these outstanding leaders.',
      img: 'https://via.placeholder.com/400x300/33cc33',
    }
  ];

  return (

  
    <div className="container">
      <div className="text-box">
        <h1>{imageDetails[image].text}</h1>
        <p>{imageDetails[image].description}</p>
      </div>
      <div className="image-box">
        <img
          src={imageDetails[image].img}
          alt={imageDetails[image].text}
        />
      </div>
    
  
      
    </div>
  )
}

export default Advartisingpage
