import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import authConfig from "../auth_config.json"

const domain = authConfig.domain
const clientId = authConfig.client_id

const providerConfig = {
  domain: domain,
  clientId: clientId,
  authorizationParams: {
    redirect_uri: window.location.origin
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Auth0Provider
      {...providerConfig}
    >
      <App />
    </Auth0Provider>
)
