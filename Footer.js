import styles from "./Footer.module.css";
import Insta from './assets/Insta.svg'
import Polygon from './assets/polygon.svg'
import yt from './assets/yt.svg'
import fb from './assets/fb.svg'
import twi from './assets/twi.svg'
const Footer = () => {
  return (
    <div className={styles.vectorParent}>
      <img className={styles.frameChild} alt="" src={Polygon} />
      <div className={styles.allRightReservedCopyrightParent}>
        <div className={styles.allRightReserved}>
          All Right Reserved @Copyright 2023
        </div>
        <div className={styles.frameParent}>
          <div className={styles.termsOfServiceParent}>
            <div className={styles.allRightReserved}>Terms of Service</div>
            <div className={styles.allRightReserved}>Privacy Policy</div>
            <div className={styles.allRightReserved}>Product</div>
          </div>
          <div className={styles.mdifacebookParent}>
            <img
              className={styles.mdifacebookIcon}
              alt=""
              src={fb}
            />
            <img
              className={styles.mdifacebookIcon}
              alt=""
              src= {yt}
            />
            <img
              className={styles.mdifacebookIcon}
              alt=""
              src= 
              {Insta}
            />
            <img
              className={styles.mdifacebookIcon}
              alt=""
              src={twi}
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.weHaveWhatYoureLookingFoParent}>
          <b className={styles.allRightReserved}>
            We have what you’re looking for
          </b>
          <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            a
          </div>
        </div>
        <div className={styles.button}>
          <b className={styles.getStartedNow}>Get Started Now</b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
