import axios from "axios";
export function UseFetchProducts() {
  return axios.get("http://localhost:3000/product");
}
