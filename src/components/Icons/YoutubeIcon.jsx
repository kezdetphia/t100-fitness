import React from "react";

const YoutubeIcon = ({ showYoutubeTitle, customsize }) => {
  return (
    <div>
      <a
        href="https://www.youtube.com/watch?v=I-9dthiJw-Q"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center duration-500 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0,0,256,256"
          className={`${customsize}`}
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
            <g transform="scale(8.53333,8.53333)">
              <path d="M15,4c-4.186,0 -9.61914,1.04883 -9.61914,1.04883l-0.01367,0.01563c-1.90652,0.30491 -3.36719,1.94317 -3.36719,3.93555v6v0.00195v5.99805v0.00195c0.00384,1.96564 1.4353,3.63719 3.37695,3.94336l0.00391,0.00586c0,0 5.43314,1.05078 9.61914,1.05078c4.186,0 9.61914,-1.05078 9.61914,-1.05078l0.00195,-0.00195c1.94389,-0.30554 3.37683,-1.97951 3.37891,-3.94727v-0.00195v-5.99805v-0.00195v-6c-0.00288,-1.96638 -1.43457,-3.63903 -3.37695,-3.94531l-0.00391,-0.00586c0,0 -5.43314,-1.04883 -9.61914,-1.04883zM12,10.39844l8,4.60156l-8,4.60156z"></path>
            </g>
          </g>
        </svg>
        {showYoutubeTitle && <div className=" text-customgray">YouTube</div>}
      </a>
    </div>
  );
};

export default YoutubeIcon;
