const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://placehold.co/600x400";
};

export default getImagePath;
