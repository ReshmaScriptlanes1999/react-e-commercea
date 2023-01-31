import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import ProductsStore from "../store/Products.store";
import Styles from "./Products.module.css";
export const Product = (props: any) => {
  useEffect(() => {
    console.log(props.products);
  }, [props.products]);

  return (
    <Card sx={{ maxWidth: 345 }} className={Styles['card']} >
      <CardMedia
        sx={{ height: 140 }}
        
        title="green iguana"
      /><img src={props.products.product_image}/>
      <CardContent>
        {/* <Typography><img src={props.products.product_image}/></Typography> */}
        <Typography gutterBottom variant="h5" component="div">
          {props.products.product_name} {' '} At - $ {props.products.product_price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.products.product_details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
