import styles from "./Header.module.css";
import tmic from './assets/tmic.png'
import polygon1 from './assets/polygon1.svg'
import ellipse from './assets/ellipse.png'
const Header = () => {
  return (
   
         
    <div className={styles.header}>
             
          <img className={styles.polygon1} src={polygon1}/>
         
      <b className={styles.logo}>Logo</b>
      
      <div className={styles.aboutParent}>
       
        <div className={styles.about}>About</div>
        <div className={styles.about}>Pricing</div>
        <div className={styles.about}>Review</div>
        
      </div>
      

    </div>
    
    
  );
};

export default Header;
