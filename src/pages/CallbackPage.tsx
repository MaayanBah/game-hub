import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../state-management/spotify-auth/store";

const CallbackPage = () => {
  const { accessToken, setAccessToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");

    if (accessToken) {
      setAccessToken(accessToken);
    } else {
      console.error("Authorization failed, no access token found in URL.");
    }
  }, [setAccessToken, navigate]);

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div>
      <h2>Logging in...</h2>
    </div>
  );
};

export default CallbackPage;
