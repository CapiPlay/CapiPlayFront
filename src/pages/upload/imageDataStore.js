// ImageDataStore.js

let imageData = null;

export const setImageData = (data) => {
  imageData = data;
};

export const getImageData = () => {
  return imageData;
};
