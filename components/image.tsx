
import Image from "next/image";
import styles from "../styles/image.module.css";
const ImageComponent = () => (
    <Image className={styles.image_1}
      src="/images/iphone_image.png" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      
    />
  );
  export default ImageComponent;

  