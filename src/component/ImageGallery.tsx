import { useImages } from "../hook/useImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loader from "./utils/Loader";
import ErrorMessage from "./utils/ErrorMessage";

const ImageGallery: React.FC = () => {
  const { data: images = [], isLoading, isError } = useImages();
  return (
    <>
      <h2 className='text-center font-semibold uppercase text-3xl mt-5'>
        The Cat Api (Lazy Loading)
      </h2>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorMessage />
      ) : (
        <div className='flex flex-wrap gap-10 p-5'>
          {images?.map(image => (
            <div className='flex-1 bg-white mt-5'>
              <div className='bg-whte shadow-md rounded-lg'>
                <LazyLoadImage
                  src={image.url}
                  alt={image.url}
                  height={200}
                  width={300}
                  effect='blur'
                  className='w-full h-40 object-cover rounded-t-lg'
                />
                <div className='btn flex justify-center p-5'>
                  <button className='bg-slate-700 hover:bg-slate-800 text-white font-bold rounded-md py-2 px-4'>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ImageGallery;
