import styles from './Hero.module.css'
import I1 from './assets/I1.png'
import I2 from './assets/I2.png'
import I3 from './assets/I3.svg'
import I4 from './assets/I4.svg'
import I5mic from './assets/I5mic.svg'
import polygon1 from './assets/polygon1.svg'
import polygon2 from './assets/polygon1 - Copy.svg'
const Hero = () => {
  return (
    <div className={styles.contentParent}>
      <div><img className={styles.polygon1} src={polygon1}/></div>
      
       
      
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </div>
          <b className={styles.learnHowTo}>
            Learn how to launch a successful podcast
          </b>
        </div>
        <div className={styles.button}>
          <b className={styles.signUpNow}>Sign up Now</b>
        </div>
      </div>
      
      <img className={styles.frameChild} alt="" src={I3} />
     
      <img
        className={styles.everyoneIsSmilingListensGrIcon}
        alt=""
        src={I2}
      />
      <img
        className={styles.groupBusinessWorkersSmilingIcon}
        alt=""
        src={I1}
      />
      <div className={styles.streamlinecomputerVoiceMail}>
        <img className={styles.groupIcon} alt="" src={I5mic} />
      </div>
      <div className={styles.solarpodcastOutline}>
        <img className={styles.vectorIcon} alt="" src={I4} />
      </div>
      
    </div>
  );
};

export default Hero;
