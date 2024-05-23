'use client';

import { OpenAI } from '@lobehub/icons';
import { memo } from 'react';

import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import ProviderConfig from '../components/ProviderConfig';

const OpenAIProvider = memo(() => {
  // const { showOpenAIProxyUrl, showOpenAIApiKey } = useServerConfigStore(featureFlagsSelectors);

  const showOpenAIProxyUrl = false;
  const showOpenAIApiKey = false;

  return (
    <ProviderConfig
      modelList={{ showModelFetcher: false }}
      provider={'openai'}
      proxyUrl={
        showOpenAIProxyUrl && {
          placeholder: 'https://api.openai.com/v1',
        }
      }
      showApiKey={showOpenAIApiKey}
      title={<OpenAI.Combine size={24} />}
    />
  );
});

export default OpenAIProvider;
