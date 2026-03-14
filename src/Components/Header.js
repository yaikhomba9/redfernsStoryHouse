import React, { useRef } from 'react';
import style from '../Css/Header.module.css';
import logoImage from '../asset/images/logoRF.webp';

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  return (
    <header ref={headerRef} className={style.header}>
      <div className={style.container}>
        <div className={style.headerContent}>
           
          <div ref={logoRef} className={style.logo}>
            <div className={style.logoIcon}>
              <img src={logoImage} alt="Redfern Storyhouse Logo" />
            </div>
            <div className={style.logoText}>
              <span className={`${style.redfernText} ${style.elegantRedfern}`}>
                Redfern
              </span>
              <span className={`${style.storyhouseText} ${style.elegantStoryhouse}`}>
                Storyhouse
              </span>
            </div>
          </div>
            {/* <div className={style.butterflyWrapper}>
              <span className={`${style.butterflyIcon} ${style.floatBook}`}>📖</span>
            </div> */}

          {/* Right Side Decorations - One of each */}
          <div className={style.rightDecorations}>
            {/* Cloud */}
            <div className={style.cloudWrapper}>
              <span className={`${style.butterflyIcon} ${style.floatBook}`}>📖</span>
              <span className={`${style.cloudIcon1} ${style.floatCloud1}`}>☁️</span>
              <span className={`${style.cloudIcon2} ${style.floatCloud2}`}>☁️</span>
               <span className={`${style.cloudIcon3} ${style.floatCloud3}`}>☁️</span>
            </div>

           

            {/* Book */}
            {/* <div className={style.bookWrapper}>
              <span className={`${style.bookIcon} ${style.floatBook}`}>📚</span>
              <span className={`${style.bookIcon} ${style.floatButterfly}`}></span>

            </div> */}
          </div>
        </div>
      </div>
      
      {/* Professional book border */}
      <div className={style.magicBookBorder}>
        <div className={style.bookSpine}></div>
        <div className={style.bookPages}></div>
      </div>
    </header>
  );
};

export default Header;