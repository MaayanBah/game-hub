# GameHub 🎮🎶

> [!IMPORTANT]
> This project allows you to log in with your Spotify account, but the integration is currently pending approval. If you'd like to access this feature, please contact me at maayanbah@gmail.com

GameHub is a video game discovery web app that helps you find new and interesting games to play.
Using the RAWG API, GameHub provides personalized game suggestions based on your interests.
With the Spotify API, GameHub also connects you to music inspired by your favorite games!

<p align="center">
<img src="https://github.com/MaayanBah/game-hub/blob/359b8814feb79443d79fed31dec49c56f3e12386/screenshots/dark_mode.png" alt="image" width="400"/>

<img src="https://github.com/MaayanBah/game-hub/blob/359b8814feb79443d79fed31dec49c56f3e12386/screenshots/light_mode.png" alt="image" width="400"/>
</p>
<br>
<p align="center">
<img src="https://github.com/MaayanBah/game-hub/blob/3e6634e9ee2e2123d78ae6c98c16f4b03240366f/screenshots/game_page.png" alt="image" width="400"/>
<img src="https://github.com/MaayanBah/game-hub/blob/3e6634e9ee2e2123d78ae6c98c16f4b03240366f/screenshots/spotify.png" alt="image" width="400"/>
</p>
<br>
<p align="center">
<img src="https://github.com/MaayanBah/game-hub/blob/3e6634e9ee2e2123d78ae6c98c16f4b03240366f/screenshots/stardew.png" alt="image" width="400"/>
</p>

### Built With 🛠

- React: For a smooth, responsive user interface.
- Chakra UI: For a clean, user-friendly design.
- RAWG API: To fetch detailed game data and provide customized recommendations.
- Spotify API: To provide popular songs related to the game you select.

### To set up the GameHub website, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/MaayanBah/game-hub
   ```

2. Install the necessary dependencies.

   ```bash
   npm install
   ```

3. Obtain a RAWG API key from the [RAWG API documentation](https://rawg.io/apidocs). Note that you'll need to create an account.
4. Add your API key to `src/services/api-client.ts`
5. Create a `.env` file in the project's directory, with `VITE_SPOTIFY_CLIENT_ID` and `VITE_SPOTIFY_CLIENT_SECRET` configured (See [Spotify's official guide](https://developer.spotify.com/documentation/web-api/tutorials/getting-started#request-an-access-token)). Your `.env` file should look something like this:

   ```bash
   VITE_SPOTIFY_CLIENT_ID=<YOUR-SPOTIFY-CLIENT-ID>
   VITE_SPOTIFY_CLIENT_SECRET=<YOUR-SPOTIFY-CLIENT-SECRET>
   ```

6. Start the web server
   ```bash
   npm run dev .
   ```
