const HeaderText = ({ text1, text2, showRedLine }) => {
  return (
    <div>
      <div className="font-exo2 flex items-start p-5  text-3xl ">
        <h1 className="font-exo2 text-4xl font-bold left-0 tracking-wider text-white">
          {text1}&nbsp;
          <span className="text-customred">{text2}</span>
        </h1>
      </div>
      {showRedLine && <div className="w-20 border border-customred mx-5"></div>}
    </div>
  );
};

export default HeaderText;
