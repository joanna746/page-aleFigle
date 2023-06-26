import styles from './Product.module.scss';



const ImageContainer = ({ title, name, currentColor }) => {
    let containerClass = styles.imageContainer;
    let imageSrc = `${process.env.PUBLIC_URL}/images/${name}.jpg`;
  
    if (currentColor) {
      containerClass = `${containerClass} ${styles[currentColor]}`;
      imageSrc = `${process.env.PUBLIC_URL}/images/${name}--${currentColor}.jpg`;
    }
  
    return (
      <div className={containerClass}>
        <img
          className={styles.image}
          alt={title}
          src={imageSrc}
        />
      </div>
    );
  };
  export default ImageContainer;