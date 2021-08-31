import { Auth0Provider } from "@auth0/auth0-react";
import { config } from "./auth0.config";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const SCOPES: string[] = ["openid", "profile", "email"];

const Auth0ProviderWrapper: React.FC<Props> = (props: Props) => {
  const getScopes = (): string => SCOPES.join(" ");

  return (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
      audience={config.audience}
      scope={getScopes()}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWrapper;
