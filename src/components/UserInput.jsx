import { useEffect, useState } from "react";
import Sessor from "../assets/Icons/01_Sessor.svg";
import Link from "../assets/Icons/02_link.svg";
import API from "../services";
import Card from "./common/Card";
import Modal from "./common/Modal";

const UserInput = () => {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState([]);
  const [domainName, setDomainName] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleUrl = async () => {
    try {
      setLoading(true);
      const extractedDomain = input
        .match(/:\/\/(?:www\.)?([^/]+)/)[1]
        .split(".")[0];
      setDomainName(extractedDomain);
      const response = await API.createLink({
        link: input,
        domain: extractedDomain,
      });
      setInput("");
      setLoading(false);
      handleGetUrl();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetUrl = async () => {
    try {
      const response = await API.getLinks();
      setUrl(response);
    } catch (error) {
      console.log(error);
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
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="h-screens w-11/12 mx-auto">
        <div className="flex gap-4 justify-center mt-10">
          <label className="input input-bordered flex items-center w-1/2">
            <input
              type="text"
              className="grow"
              placeholder="Enter the link here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <img src={Link} alt="Link" height="15" width="15" />
          </label>

          <button className="btn btn-square btn-outline" onClick={handleUrl}>
            {loading ? (
              "Loading..."
            ) : (
              <img src={Sessor} alt="Sessor" height="20" width="20" />
            )}
          </button>
        </div>
        <div className="grid lg:grid-cols-3 gap-1 mt-10 sm:grid-cols-1 ">
          {url?.map((item) => {
            return (
              <Card
                key={item?.id}
                unique={item?.id}
                handleDelete={() => handleDelete(item?.id)}
                domainName={item?.domain}
                setOpenModal={setOpenModal}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserInput;
