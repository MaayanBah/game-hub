import { Box, Button } from "@chakra-ui/react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LoginPage = () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = "https://game-hub-three-pied.vercel.app/callback";
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=user-library-read`;

  return (
    <Box paddingY={5}>
      <Button
        onClick={() => (window.location.href = authUrl)}
        backgroundColor="#1DB954"
        color="white"
        _hover={{
          backgroundColor: "#1ED760",
        }}
        fontSize="16px"
        leftIcon={<i className="fab fa-spotify" style={{ fontSize: "18px" }} />}
      >
        Log in with Spotify
      </Button>
    </Box>
  );
};

export default LoginPage;
