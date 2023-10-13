const Button = ({text ,width}) => {

  const defaultClasses =  `font-exo2 font-bold italic bg-customred text-customwhite text-2xl py-3 px-6 my-2 shadow-lg transition duration-500 hover:scale-105`  

  const buttonClass = `${defaultClasses} ${width}`
  return ( 
    <div>
      <button className={buttonClass} >
        {text}
      </button>
      
    </div>
  );
};

export default Button;