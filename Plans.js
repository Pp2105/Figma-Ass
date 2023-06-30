import styles from "./Plans.module.css";
const Plans = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.vectorParent} >
        
        <b className={styles.podcast}>Podcast</b>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.titleParent}>
          <div className={styles.title}>
            <b className={styles.chooseYourPlan}>Choose your plan</b>
            <div
              className={styles.loremIpsumIs}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `}</div>
          </div>
          <div className={styles.radio}>
            <div className={styles.monthlyWrapper}>
              <div className={styles.chooseYourPlan}>monthly</div>
            </div>
            <div className={styles.chooseYourPlan}>yearly</div>
          </div>
        </div>
        <div className={styles.planParent}>
          <div className={styles.plan}>
            <div className={styles.basicPlanParent}>
              <b className={styles.chooseYourPlan}>Basic Plan</b>
              <div className={styles.loremIpsumIs1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </div>
            </div>
            <div className={styles.parent}>
              <b className={styles.chooseYourPlan}>$ 54</b>
              <div className={styles.month}>/month</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
                <b className={styles.chooseYourPlan}>
                  Free access to video class
                </b>
              </div>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
                <b className={styles.chooseYourPlan}>
                  Free access to video class
                </b>
              </div>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
                <b className={styles.chooseYourPlan}>
                  Free access to video class
                </b>
              </div>
            </div>
            <div className={styles.startFreeTrialWrapper}>
              <div className={styles.startFreeTrial}>Start Free Trial</div>
            </div>
          </div>
          <div className={styles.plan1}>
            <div className={styles.basicPlanParent}>
              <b className={styles.chooseYourPlan}>Basic Plan</b>
              <div className={styles.loremIpsumIs1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </div>
            </div>
            <div className={styles.parent}>
              <b className={styles.chooseYourPlan}>$ 54</b>
              <div className={styles.month}>/month</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
                <b className={styles.chooseYourPlan}>
                  Free access to video class
                </b>
              </div>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
                <b className={styles.chooseYourPlan}>
                  Free access to video class
                </b>
              </div>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
                <b className={styles.chooseYourPlan}>
                  Free access to video class
                </b>
              </div>
            </div>
            <div className={styles.startFreeTrialWrapper}>
              <div className={styles.startFreeTrial}>Start Free Trial</div>
            </div>
          </div>
          <div className={styles.plan2}>
            <div className={styles.basicPlanParent}>
              <b className={styles.chooseYourPlan}>Premium Plan</b>
              <div className={styles.loremIpsumIs1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </div>
            </div>
            <div className={styles.container}>
              <b className={styles.chooseYourPlan}>$ 54</b>
              <div className={styles.month}>/month</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
                <b className={styles.chooseYourPlan}>
                  Free access to video class
                </b>
              </div>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
                <b className={styles.chooseYourPlan}>
                  Free access to video class
                </b>
              </div>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
                <b className={styles.chooseYourPlan}>
                  Free access to video class
                </b>
              </div>
            </div>
            <div className={styles.startFreeTrialFrame}>
              <div className={styles.startFreeTrial}>Start Free Trial</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
