import React from 'react';

const FacebookIcon = ({ showFacebookTitle }) => {
  return (
    <div>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center" // Add this class to style the anchor as a flex container
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className="w-5 mr-3"
          viewBox="0,0,256,256"
        >
          <g
            fill="#ee393d"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(10.66667,10.66667)">
              <path d="M11.666,2.005c-5.046,0.165 -9.292,4.246 -9.641,9.283c-0.369,5.329 3.442,9.832 8.481,10.589v-7.227h-1.614c-0.726,0 -1.314,-0.588 -1.314,-1.314v0c0,-0.726 0.588,-1.314 1.314,-1.314h1.613v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c0.357,0 0.662,0.008 0.921,0.021c0.636,0.031 1.129,0.561 1.129,1.198v0c0,0.663 -0.537,1.2 -1.2,1.2h-0.442c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h1.87c0.591,0 1.043,0.527 0.953,1.111l-0.108,0.701c-0.073,0.47 -0.477,0.817 -0.953,0.817h-1.762v7.247c4.883,-0.663 8.648,-4.837 8.648,-9.899c0,-5.634 -4.659,-10.179 -10.334,-9.995z"></path>
            </g>
          </g>
        </svg>
        {showFacebookTitle && (
          <div className="text-customgray ">Krisztian Majer</div>
        )}
      </a>
    </div>
  );
};

export default FacebookIcon;