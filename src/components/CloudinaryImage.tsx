import { getCloudinaryUrl } from "../services/cloudinary";

type CloudinaryImageProps = {
  publicId: string;
  alt: string;
  options?: Record<string, unknown>;
  className?: string;
};

export default function CloudinaryImage({
  publicId,
  alt,
  options,
  className,
}: CloudinaryImageProps) {
  const imageUrl = getCloudinaryUrl(publicId, options);
  return <img src={imageUrl} alt={alt} className={className} />;
}
