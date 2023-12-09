const ErrorMessage: React.FC = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-red-500 text-white p-4 rounded'>
        <h2 className='text-xl font-semibold'>
          Error loading images. Please try again later.
        </h2>
      </div>
    </div>
  );
};

export default ErrorMessage;
