import { useEffect } from "react";
import styles from "./home.module.css";
import { UseFetchProducts } from "./hooks/Home.hooks";
import { useGetProducts } from "./selectors/Home.selector";
import {useDispatch} from "react-redux"
import { add_product_list } from "./store/Products.store";
import { Product } from "./components/Product";
const Home: React.FC = () => {
  const ProductData = useGetProducts();
  const dispatch=useDispatch()
  /* Effects */
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(ProductData);
  }, [ProductData]);

  /*methods  */
  const fetchData = () => {
    const products: Promise<any> = UseFetchProducts();
    products
      .then((data) => {
        postDataToStore(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postDataToStore=(data:any)=>{
    dispatch(add_product_list(data.data.data))
  }

  return (
    <div className={styles.outerSection}>
      <div className={styles["heading-section"]}>
        <h1>Products</h1>
      </div>
      <div className={styles['product-section']}>
            {ProductData.length>0 && ProductData.map((products:any)=><Product className={styles['products']} products={products}/>)}
      </div>
    </div>
  );
};
export default Home;
