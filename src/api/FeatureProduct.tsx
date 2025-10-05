export const GetFeatureProduct = async () => {
  try {
    const data = await fetch('https://dummyjson.com/products').then(res => res.json());
    return data;
  } catch (error) {
    console.log('Error from feature Product', error);
  }
}
