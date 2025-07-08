import type {
  TConversation,
  TEndpointsConfig,
  TModelsConfig,
  TPreset,
} from 'librechat-data-provider';
import { useGetModelsQuery } from 'librechat-data-provider/react-query';
import { useGetEndpointsQuery, useListAgentsQuery } from '~/data-provider';
import { buildDefaultConvo, getDefaultEndpoint } from '~/utils';

type TDefaultConvo = { conversation: Partial<TConversation>; preset?: Partial<TPreset> | null };

const useDefaultConvo = () => {
  const { data: endpointsConfig = {} as TEndpointsConfig } = useGetEndpointsQuery();
  const { data: modelsConfig = {} as TModelsConfig } = useGetModelsQuery();
  
  // Get agents directly from the query
  const { data: agentsList } = useListAgentsQuery(undefined, {
    select: (res) => res.data,
  });

  const getDefaultConversation = ({ conversation, preset }: TDefaultConvo) => {
    const endpoint = getDefaultEndpoint({
      convoSetup: preset as TPreset,
      endpointsConfig,
    });

    const models = modelsConfig[endpoint ?? ''] || [];

    return buildDefaultConvo({
      conversation: conversation as TConversation,
      endpoint,
      lastConversationSetup: preset as TConversation,
      models,
      fallbackAgentId: agentsList?.[0]?.id,
    });
  };

  return getDefaultConversation;
};

export default useDefaultConvo;
