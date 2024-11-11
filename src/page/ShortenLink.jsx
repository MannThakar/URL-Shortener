import { useParams } from "react-router-dom";
import API from "../services";
import { useEffect } from "react";

const ShortenLink = () => {
  const { id } = useParams();

  const handleLinkById = async (id) => {
    try {
      const response = await API.getLinkById(id);
      if (response && response.link) {
        window.location.replace(
          response.link.startsWith("http")
            ? response.link
            : `https://${response.link}`
        );
      } else {
        console.error("Link not found in response");
      }
    } catch (error) {
      console.error("Error fetching the link:", error);
    }
  };

  useEffect(() => {
    handleLinkById(id);
  }, [id]);

  return <div>Redirecting...</div>;
};

export default ShortenLink;
