import React, { useState } from 'react';
import styled from 'styled-components';

const LoaderWithToggle = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  const handleToggle = (e) => {
    setIsLoaderVisible(e.target.checked);
  };

  return (
    <StyledWrapper>
      {/* Toggle Switch */}
      <div className="toggle-container">
        <div className="toggle-cont">
          <input 
            className="toggle-input" 
            id="toggle" 
            name="toggle" 
            type="checkbox"
            checked={isLoaderVisible}
            onChange={handleToggle}
          />
          <label className="toggle-label" htmlFor="toggle">
            <div className="cont-label-play">
              <span className="label-play" />
            </div>
          </label>
        </div>
      </div>

      {/* Loader */}
      {isLoaderVisible && (
        <div className="loader">
          <div className="react-star">
            <div className="nucleus" />
            <div className="electron electron1" />
            <div className="electron electron2" />
            <div className="electron electron3" />
          </div>
        </div>
      )}
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .toggle-container {
    position: relative;
    z-index: 10;
  }

  .loader {
    height: 20rem;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-star {
    position: relative;
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15rem;
    animation: rotate 6s infinite;
  }

  .nucleus {
    position: absolute;

    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: linear-gradient(#0738e8, cyan);
    height: 2rem;
    width: 2rem;
    animation: rotate 3s linear infinite;
  }

  .electron {
    position: absolute;
    width: 15rem;
    height: 6rem;
    border-radius: 50%;
    border: 0.3rem solid #00ffff;
    animation: revolve 3s linear infinite;
  }

  .electron1::before,
  .electron2::before,
  .electron3::before {
    content: "";
    position: absolute;
    top: 60%;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 1rem;
    background-color: cyan;
    border-radius: 50%;
    animation: moveElectron 3s infinite;
  }
  .electron2 {
    transform: rotate(60deg);
    animation-delay: -0.66s;
  }
  .electron2::before {
    animation-delay: -0.66s;
  }

  .electron3 {
    transform: rotate(-60deg);
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg) scale3d(1.1, 1.1, 0);
    }
  }

  @keyframes revolve {
    0% {
      border-color: #00ffff9c;
      border-right: transparent;
    }
    25% {
      border-color: #00ffff9c;
      border-bottom-color: transparent;
    }
    50% {
      border-color: #00ffff9c;
      border-left-color: transparent;
    }
    75% {
      border-color: #00ffff9c;
      border-top-color: transparent;
    }
    100% {
      border-color: #00ffff9c;
      border-right-color: transparent;
    }
  }

  @keyframes moveElectron {
    0% {
      top: 60%;
      left: 100%;
    }
    25% {
      top: 100%;
      left: 60%;
    }
    50% {
      top: 60%;
      left: 0%;
    }
    75% {
      top: 0%;
      left: 60%;
    }
    100% {
      top: 60%;
      left: 100%;
    }
    }
     /* Add toggle switch styles */
  .toggle-cont {
    width: 100px;
    height: 50px;
    border-radius: 9999px;
  }

  .toggle-cont .toggle-input {
    display: none;
  }

  .toggle-cont .toggle-label {
    cursor: pointer;
    position: relative;
    display: inline-block;
    padding: 6px;
    width: 100%;
    height: 100%;
    background: #272727;
    border-radius: 9999px;
    box-sizing: content-box;
    box-shadow: 0px 0px 16px -8px #fefefe;
  }

  .toggle-cont .toggle-label .cont-label-play {
    position: relative;
    width: 50px;
    aspect-ratio: 1 / 1;
    background: #5e5e5e;
    border-radius: 9999px;
    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
  }

  .toggle-cont .toggle-input:checked + .toggle-label .cont-label-play {
    background: #f43f5e;
    transform: translateX(50px);
  }

  .toggle-cont .toggle-label .label-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 24px;
    aspect-ratio: 1 / 1;
    background: #fefefe;
    border-radius: 4px;
    clip-path: polygon(25% 0, 75% 50%, 25% 100%, 25% 51%);
    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
  }

  .toggle-cont .toggle-input:checked + .toggle-label .label-play {
    width: 20px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  }`;

  export default LoaderWithToggle;

