import products from "../components/Content/products";

const parsedJSON = JSON.parse(products);

export  default function productsList(state = parsedJSON) {

    return state;
}