import { useEffect, useState } from "react";
import Sessor from "../assets/Icons/01_Sessor.svg";
import Link from "../assets/Icons/02_link.svg";
import API from "../services";
import Card from "./common/Card";
import NoDataFound from "./common/NoDataFound";
import { loader } from "../utils/helper";
import { schema } from "../validation";

const UserInput = () => {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [apiError, setApiError] = useState("");
  const [responseLoader, setResponseLoader] = useState(true);

  const handleValidation = async (input) => {
    try {
      const response = await schema.validate(
        { userInputLink: input },
        { abortEarly: false }
      );
      return true;
    } catch (error) {
      setErrors(error.errors);
      return error.errors;
    }
  };

  const colorGenerator = () =>
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");

  const extractDomainName = (websiteURL) => {
    return websiteURL.match(/:\/\/(?:www\.)?([^/]+)/)[1].split(".")[0];
  };

  const handleUrl = async () => {
    try {
      //Loading set to true
      setLoading(true);

      //Checking Validation
      const validationResponse = await handleValidation(input);

      //Extracting Domain name from url and setting to state
      const extractedDomain = extractDomainName(input);

      //Color Generator
      const randomColor = colorGenerator();

      //POST api call for creating link
      if (validationResponse) {
        await API.createLink({
          link: input,
          domain: extractedDomain,
          color: randomColor,
        });
        setErrors([]);
        handleGetUrl();
      }
      setInput("");
      setLoading(false);
    } catch (error) {
      console.log("this is error", error);
      setApiError(error.message);
      setLoading(false);
    }
  };

  const handleGetUrl = async () => {
    try {
      setResponseLoader(true);
      const response = await API.getLinks();
      setResponseLoader(false);
      setUrl(response);
    } catch (error) {
      setApiError(error.message);
      setResponseLoader(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.deleteLink(id);
      handleGetUrl();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUrl();
  }, []);

  return (
    <>
      <div className="h-screens w-11/12 mx-auto">
        <h1 className="text-6xl font-bold text-center mt-16 text-white kanit-medium">
          ShortIt – Small <span className="text-[#CC2B52]">Links</span>, Big
          Impact!
        </h1>
        <h2 className="text-base font-bold text-center text-white raleway-regular">
          Create short, powerful links that make sharing easy. Track clicks,
          manage links, and connect your audience with the content they love.
        </h2>
        <div className="flex gap-4 justify-center mt-10">
          <div className=" w-2/3">
            <label className="input input-bordered flex items-center w-full">
              <input
                type="text"
                className="grow"
                placeholder="Enter the link here..."
                value={input}
                name="userInputLink"
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
            <p className="text-red-400 p-1">{errors[0]}</p>
          </div>
          <button className="btn btn-square btn-outline" onClick={handleUrl}>
            {loading ? (
              loader()
            ) : (
              <img src={Sessor} alt="Sessor" height="20" width="20" />
            )}
          </button>
        </div>

        {url?.length === 0 && (
          <div className="mt-10 w-full">
            <NoDataFound />
          </div>
        )}
        {apiError && (
          <div className="w-full flex justify-center mt-5">
            <p className="text-red-400">{apiError}</p>
          </div>
        )}

        <div className="grid lg:grid-cols-4 lg:gap-x-1 gap-y-6 mt-10 sm:grid-cols-1 md:grid-cols-2 w-11/12 mx-auto">
          {responseLoader ? (
            <div className="flex justify-center items-center w-full h-full col-span-4">
              {loader()}
            </div>
          ) : (
            url?.map((item) => {
              return (
                <Card
                  key={item?.id}
                  unique={item?.id}
                  handleDelete={() => handleDelete(item?.id)}
                  domainName={item?.domain}
                  color={item?.color}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default UserInput;
