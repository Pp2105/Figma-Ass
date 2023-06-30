import styles from "./About.module.css";
import tmic from './assets/tmic.png';
import polygon1 from './assets/polygon1.svg'
const About = () => {
  return (
    <div className={styles.courseParent}>
          
      <div className={styles.course}>
      
        <div className={styles.course1}>
          <b className={styles.interactiveFeatures}>Interactive Features</b>
          <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </div>
        </div>
        <div className={styles.course2}>
          <b className={styles.interactiveFeatures}>Interactive Features</b>
          <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </div>
        </div>
        <div className={styles.course11}>
          <b className={styles.interactiveFeatures}>Interactive Features</b>
          <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </div>
        </div>
        <div className={styles.course12}>
          <b className={styles.interactiveFeatures}>Interactive Features</b>
          <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </div>
        </div>
      </div>
      <img className={styles.pngwing1Icon} alt="" src={tmic} />
      <div className={styles.titleParent}>
     <div style={{width: '100%', height: '100%', border: '0.25px #7A3199 solid'}}/>
        <div className={styles.title}>
          <b className={styles.interactiveFeatures}>About the Course</b>
          <div className={styles.loremIpsumIs4}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unkno
          </div>
        </div>
        <div className={styles.button}>
          <b className={styles.exploreNow}>Explore Now</b>
        </div>
      </div>
    </div>
  );
};

export default About;
