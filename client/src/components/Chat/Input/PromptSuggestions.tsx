import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { cn } from '~/utils';
import store from '~/store';

type PromptSuggestionsProps = {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
};

const PromptSuggestions = memo(({ suggestions, onSuggestionClick }: PromptSuggestionsProps) => {
  const chatDirection = useRecoilValue(store.chatDirection).toLowerCase();
  const isRTL = chatDirection === 'rtl';

  if (!suggestions.length) {
    return null;
  }
  return (
    <div className={cn(
      'flex flex-wrap gap-2 p-2',
      isRTL ? 'justify-end' : 'justify-start'
    )}>
      {suggestions.map((suggestion, index) => (
        <button  
          key={index}
          onClick={() => onSuggestionClick(suggestion)}
          className={cn(
            'rounded-full border border-surface-primary px-3 py-1 text-sm text-text-primary',
            'hover:bg-surface-hover hover:border-surface-primary-hover transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-border-heavy'
          )}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
});

PromptSuggestions.displayName = 'PromptSuggestions';

export default PromptSuggestions; 