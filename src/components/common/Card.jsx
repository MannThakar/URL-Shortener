const Card = ({ unique, setOpenModal, domainName }) => {
  console.log(setOpenModal);
  return (
    <div className="card bg-[#31363F] w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{domainName}</h2>
        <div className="card-actions justify-end">
          <button
            className="btn btn-square btn-sm"
            onClick={() => setOpenModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        <a href={`http://localhost:5173/shorten/` + unique} target="_blank">
          {`http://localhost:5173/shorten/` + unique}
        </a>
      </div>
    </div>
  );
};

export default Card;
