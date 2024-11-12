const Card = ({ unique, domainName, handleDelete, color }) => {
  return (
    <div className=" bg-[#31363F] w-96 shadow-xl flex h-28 rounded">
      <div
        className="color w-1 h-full rounded-l"
        style={{ backgroundColor: color }}
      ></div>
      <div className="p-4 w-full">
        <div className="flex justify-between w-full items-center mt-2">
          <h1 className="font-bold text-lg kanit-regular">{domainName}</h1>
          <button
            className="btn btn-circle btn-sm hover:bg-red-600 hover:border-red-600"
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-3 ">
          <a
            href={`https://linkyfy.netlify.app/shorten/${unique}`}
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="cursor-pointer text-base">
              {`https://linkyfy.netlify.app/shorten/${unique}`}
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
