function ImageItem({ image }) {
  return (
    <div>
      <img className="imageListImg" src={image.urls.small} alt={image.alt_descripition} />
    </div>
  );
}

export default ImageItem;
