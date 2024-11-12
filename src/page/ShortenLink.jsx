import { useParams, useNavigate } from "react-router-dom";
import API from "../services";
import { useEffect } from "react";

const ShortenLink = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      navigate("/");
    }
  };

  useEffect(() => {
    handleLinkById(id);
  }, [id]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
        <div className="relative">
          {/* Animated text container */}
          <div className="relative">
            <h1 className="text-6xl font-bold tracking-widest text-[#CC2B52] flex items-center gap-1 kanit-regular">
              {/* Animate each letter individually */}
              {"LINKY".split("").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-bounce"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationDuration: "1s",
                  }}
                >
                  {letter}
                </span>
              ))}
              {/* Fy with special animation */}
              <span className="relative ml-2 text-gray-200">
                FY
                <span className="absolute left-0 top-0 text-white animate-pulse">
                  FY
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortenLink;
