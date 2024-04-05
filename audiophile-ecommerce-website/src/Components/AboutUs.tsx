import styles from './Styles/AboutUs.module.css';
import imageBestGearForDesktopScreen from './assets/shared/desktop/image-best-gear.jpg';
import imageBestGearForTabletScreen from './assets/shared/tablet/image-best-gear.jpg';
import imageBestGearForMobileScreen from './assets/shared/mobile/image-best-gear.jpg';
import UseWindowWidth from './Hooks/UseWindowWidth';

function AboutUs(){
    const windowInnerWidth = UseWindowWidth();
    return(
        <>
        <div className={styles.parentContainer}>
            <div className={styles.aboutUsMainContainer}>
                <div className={styles.aboutInfoContainer}>
                    <div className={styles.aboutUsInfo}>
                    <h2 className={styles.textHeader}>BRINGING YOU THE <span className={styles.lightTextHeader}>BEST</span> AUDIO GEAR</h2>
                    <p className={styles.description}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                    </div>
                    
                </div>
                <div className={styles.aboutImgContainer}>
                    <img src={windowInnerWidth <=600 ?imageBestGearForMobileScreen :
                    windowInnerWidth <=992 ? imageBestGearForTabletScreen :
                    imageBestGearForDesktopScreen
                    } alt="imageBestGear" className={styles.imageBestGear}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs;

