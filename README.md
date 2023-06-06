# Get Started
## Setup your Auth0 tenant and application
- Create a free account on [auth0.com](https://auth0.com) if you don't have one already
- Create a new "native application" called "Device Flow" in your Auth0 dashboard
- Add `http://localhost:5173` as an allowed callback URL, allowed logout URL and allowed web origin. (If you're not using Vite or have changed the port, make sure to use your developement URL)
- Enable the "Allow Cross-Origin Authentication" toggle
- Under Advanced settings > Grant Types, make sure "Device Code" is enabled

## Run the application
- run `npm install` to install all dependencies
- copy the `.env.sample` file to `.env`
- Add your Auth0 application's client ID and Domain to the `.env` file
- run `npm run dev` to start a development server

# Branches
When following along with the video, there are multiple branches for each section of the video.
- `0-start`: The basic scaffolding is ready to be used
- `1-device-code`: We'll request a device and user code
- `2-poll`: We start polling for tokens, which should be available once the user authenticates on their device
- `3-user`: We'll display the user information once we have the tokens available
- `4-connect`: We'll add a lightweight server to talk to a Raspberry Pi and open a connected lock when the user authenticates
