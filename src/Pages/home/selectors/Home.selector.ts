import { useSelector } from "react-redux";
export function useGetProducts() {
  return useSelector((satte: any) => satte.products.products);
}
