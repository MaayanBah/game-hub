# GameHub

GameHub is a video game discovery web app that helps you find new and interesting games to play.

<img src="https://github.com/user-attachments/assets/2c99625d-b3f3-430d-a3d4-093735493737" alt="image" width="400"/>

### To set up the GameHub website, follow these steps:

1. Clone this repository to your local machine.
2. Run npm install to install the necessary dependencies.
3. Obtain a RAWG API key from RAWG API documentation. Note that you'll need to create an account.
4. Add your API key to src/services/api-client.ts.
5. Create a ".env" file in the project's directory, with `VITE_SPOTIFY_CLIENT_ID` and `VITE_SPOTIFY_CLIENT_SECRET` configured (See [Spotify's official guide](https://developer.spotify.com/documentation/web-api/tutorials/getting-started#request-an-access-token))
6. Start the web server by running npm run dev.
