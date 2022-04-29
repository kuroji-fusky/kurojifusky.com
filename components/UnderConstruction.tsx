import styles from '../styles/Cards.module.scss';

export default function UnderConstruction() {
  return(
    <div className={`card__global ${styles["under-construction"]}`}>
      <h2>🚧 Under construction</h2>
      <p>
        This page is currently under construction, please check back soon!
      </p>
    </div>
  )
};
