import React from "react";
import '../../style/Home/Home.scss'

const Header = () => {
  window.addEventListener("scroll", function () {
    const imgid2 = document.getElementById("imgid2").style;
    const imgid3 = document.getElementById("imgid3").style;
    const imgid4 = document.getElementById("imgid4").style;
    let Sc = window.pageYOffset / 100;
    imgid2.transition = `1s`;
    imgid3.transition = `1s`;
    imgid4.transition = `1s`;


    imgid2.transform = `translateY(${Sc * 16}px)`;
    imgid3.transform = `translateY(${Sc * 26}px)`;
    imgid4.transform = `translateY(${Sc *36}px)`;
  });

  return (
    <>
      <div className="homepage" id="homepages">
        <div className="homeSlider">
        <div className="headerText">
             <h2 className="headerText-welcome">WELCOME To </h2>
             <h1 className="headerText-company">SCHOLAR WORLD</h1>
             <div className="joinBtn"> 
             <div className="imageIcon">
             <img src="Image/LogoSmall.svg" alt="" />
             </div>
             <div className="joinText">
                   Join Now
            </div>
             </div>
        </div>
          <img
            src="Image/1-01.svg"
            alt=""
            className="imageAb imageIndex1"
            id="imgid1"
          />
          <img
            src="Image/1-02.svg"
            alt=""
            className="imageAb imageIndex2"
            id="imgid2"
          />
          <img
            src="Image/1-03.svg"
            alt=""
            className="imageAb imageIndex3"
            id="imgid3"
          />
          <img
            src="Image/1-04.svg"
            alt=""
            className=" imageIndex4"
            id="imgid4"
          />
        </div>
           <div className="otherdiv" />
      </div>
    </>
  );
};

export default Header;
