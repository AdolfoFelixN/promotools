interface ImageCardProps {
  imageUrl: string;
  altText: string;
  text: string;
}

function ImageCard({ imageUrl, altText, text }: ImageCardProps) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xs shadow-sm">
      <img src={imageUrl} alt={altText} className="rounded-xs" />
      <div className="flex items-center justify-center p-1 my-auto">
        <span className="text-xs">{text}</span>
      </div>
    </div>
  );
}

export default ImageCard;
