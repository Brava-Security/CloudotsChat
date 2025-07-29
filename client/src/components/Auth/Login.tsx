import { useGetStartupConfig } from '../../data-provider';

function Login() {
  const { data: startupConfig } = useGetStartupConfig();

  const loginURL = startupConfig?.loginURL ?? 'https://chat.cloudots.io/oauth/openid/callback';

  window.location.href = loginURL;
  
  return <div>Redirecting to Cloudots...</div>;
}

export default Login;
