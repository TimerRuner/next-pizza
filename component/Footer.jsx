import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="bg" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>FIND OUR RESTAURANTS</h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF
                        PIZZA
                    </h1>
                    <p className={styles.text}>
                        1654 R. Don Road #340
                        <br />
                        New York, 85022
                        <br /> (602) 685-1010
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #340
                        <br />
                        New York, 85022
                        <br /> (602) 685-1010
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #340
                        <br />
                        New York, 85022
                        <br /> (602) 685-1010
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKNING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br />
                        9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br />
                        12:00 - 00:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
