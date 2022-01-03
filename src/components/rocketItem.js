import React from 'react';

const Rock = (props) => {
  const rocket = props;
  return (
    <>
      <div className="image">
        <img src={rocket.rock.flickr_images[0]} alt={rocket.rocket_name} className="rocketImage" />
      </div>
      <div className="details">
        <h1>{rocket.rock.rocket_name}</h1>
      </div>
    </>
  );
};

export default Rock;
