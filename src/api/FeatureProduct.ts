import type { fullApiType } from "../types/productapidata";

export const GetFeaturesProduct = async (): Promise<fullApiType> => {
  try {
    const data = await fetch('https://dummyjson.com/products').then(res =>
      res.json()
    );
    return data;
  } catch (error) {
    console.log('error from features product function', error);
    throw error;
  }
};
