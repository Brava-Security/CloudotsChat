import { memo } from 'react';
import { ExternalLink } from 'lucide-react';
import { useGetStartupConfig } from '~/data-provider';
import { useLocalize } from '~/hooks';
import { cn } from '~/utils';

const CloudotsButton = () => {
  const localize = useLocalize();
  const { data: startupConfig } = useGetStartupConfig();
  
  const cloudotsURL = startupConfig?.cloudotsHomepageURL;
  
  if (!cloudotsURL) {
    return null;
  }

  const handleClick = () => {
    window.open(cloudotsURL, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex w-full items-center gap-2 rounded-lg p-2 text-sm transition-colors duration-200',
        'text-text-primary hover:bg-accent',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      )}
      title={localize('com_nav_cloudots_homepage')}
    >
      <ExternalLink className="h-4 w-4" />
      <span className="truncate">{localize('com_nav_cloudots_homepage')}</span>
    </button>
  );
};

export default memo(CloudotsButton); 