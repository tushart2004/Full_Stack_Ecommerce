import { backend_url } from "../App";

export const getProductImageUrl = (image) => {
  if (!image) {
    return "";
  }

  if (typeof image !== "string") {
    return image;
  }

  if (image.startsWith("http") || image.startsWith("data:") || image.startsWith("blob:")) {
    return image;
  }

  return `${backend_url}${image}`;
};
