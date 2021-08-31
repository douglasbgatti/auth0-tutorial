interface Config {
  domain: string;
  clientId: string;
  audience: string; // auth0 api unique identifier
}

export const config: Config = {
  domain: "dev-1yvjs6a3.us.auth0.com",
  clientId: "iOgJ66VNNSUEL4AdIhWk0SBBl6WMYl1P",
  audience: "http://localhost:4000",
};
