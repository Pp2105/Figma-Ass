import styles from "./Reviews.module.css";
import lolla from './assets/lolla.png'
import star from './assets/star.svg'
import rightarrow from './assets/rightarrow.svg'
import ellipse from './assets/ellipse.png';
import grey from './assets/grey.png'
const Reviews = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.radixIconsdotFilledParent}>
        <div className={styles.radixIconsdotFilled}>
          <img className={styles.vectorIcon} alt="" src={ellipse}/>
        </div>
        <div className={styles.radixIconsdotFilled}>
          <img className={styles.vectorIcon} alt="" src= {grey} />
        </div>
        <div className={styles.radixIconsdotFilled}>
          <img className={styles.vectorIcon} alt="" src= {grey} />
        </div>
        <div className={styles.radixIconsdotFilled}>
          <img className={styles.vectorIcon} alt="" src= {grey} />
        </div>
        <div className={styles.radixIconsdotFilled}>
          <img className={styles.vectorIcon} alt="" src={grey} />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.reviewFromCustomersParent}>
          <b className={styles.reviewFromCustomers}>Review from customers</b>
          <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.lolla1Parent}>
                <img
                  className={styles.lolla1Icon}
                  alt=""
                  src={lolla}
                />
                <div className={styles.frameDiv}>
                  <div className={styles.frameDiv}>
                    <b className={styles.lollaSmith}>Lolla Smith</b>
                    <div className={styles.microsoft}>Microsoft</div>
                  </div>
                  <div className={styles.fluentEmojiFlatstarParent}>
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src={star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src={star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src={star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src= {star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src={star}
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.loremIpsumIs1}
              >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameContainer}>
              <div className={styles.lolla1Parent}>
                <img
                  className={styles.lolla1Icon}
                  alt=""
                  src={lolla}
                />
                <div className={styles.frameDiv}>
                  <div className={styles.frameDiv}>
                    <b className={styles.lollaSmith}>Lolla Smith</b>
                    <div className={styles.microsoft}>Microsoft</div>
                  </div>
                  <div className={styles.fluentEmojiFlatstarParent}>
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src= {star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src={star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src= {star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src= {star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src= {star}
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.loremIpsumIs1}
              >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameContainer}>
              <div className={styles.lolla1Parent}>
                <img
                  className={styles.lolla1Icon}
                  alt=""
                  src= {lolla}
                />
                <div className={styles.frameDiv}>
                  <div className={styles.frameDiv}>
                    <b className={styles.lollaSmith}>Lolla Smith</b>
                    <div className={styles.microsoft}>Microsoft</div>
                  </div>
                  <div className={styles.fluentEmojiFlatstarParent}>
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src={star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src= {star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src= {star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src= {star}
                    />
                    <img
                      className={styles.fluentEmojiFlatstarIcon}
                      alt=""
                      src= {star}
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.loremIpsumIs1}
              >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
            </div>
          </div>
          <div className={styles.pepiconsPencilarrowRightWrapper}>
            <img
              className={styles.pepiconsPencilarrowRight}
              alt=""
              src={rightarrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
