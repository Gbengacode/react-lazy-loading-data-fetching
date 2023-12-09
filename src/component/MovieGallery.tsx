import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loader from "./utils/Loader";
import ErrorMessage from "./utils/ErrorMessage";
import { useMovie } from "../hook/useMovie";
import { IMovie } from "../interface/Movie";

const MovieGallery: React.FC = () => {
  const { data, isLoading, isError } = useMovie();

  return (
    <>
      <h2 className='text-center text-white font-semibold uppercase text-3xl pt-5'>
        Movies Listing
      </h2>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorMessage />
      ) : (
        <div className='grid md:grid-cols-3 gap-20 p-5 md:p-20'>
          {data?.map((movie: IMovie) => (
            <div
              className='overflow-hidden bg-white md:max-w-xs shadow-md rounded-lg'
              key={movie.id}
            >
              <LazyLoadImage
                src={`https://shikimori.one/${movie.image.original}`}
                alt={movie.image.original}
                width={350}
                effect='blur'
                className='  w-full h-40 object-cover' 
              />
              <div className='btn flex justify-center p-5 flex-col items-center gap-5'>
                <p>{movie.name}</p>
                <button className='bg-slate-700 hover:bg-slate-800 text-white font-bold rounded-md py-2 px-4'>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieGallery;
