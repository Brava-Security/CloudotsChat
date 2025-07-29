import { useGetStartupConfig } from '../../data-provider';

function Login() {
  const { data: startupConfig } = useGetStartupConfig();

  const loginURL = startupConfig?.loginURL;

  if (!loginURL) {
    return <div>Something went wrong. Please go to Cloudots to login</div>;
  }

  window.location.href = loginURL;
  return <div>Redirecting to Cloudots...</div>;
}

export default Login;
