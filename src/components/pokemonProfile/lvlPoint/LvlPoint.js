import styles from "./LvlPoint.module.css"

const LvlPoint = ({active}) => {
    return (
        <div className={active === true ? `${styles.point} ${styles.active}` : styles.point}>

        </div>
    );
};

export default LvlPoint;