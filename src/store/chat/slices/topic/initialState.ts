import { ChatTopic } from '@/types/topic';

export interface ChatTopicState {
  // TODO: need to add the null to the type
  activeTopicId?: string;
  defaultPlugins: string[];
  isSearchingTopic: boolean;
  searchTopics: ChatTopic[];
  topicLoadingIds: string[];
  topicMaps: Record<string, ChatTopic[]>;
  topicRenamingId?: string;
  topicSearchKeywords: string;
  topics: ChatTopic[];
  /**
   * whether topics have fetched
   */
  topicsInit: boolean;
}

export const initialTopicState: ChatTopicState = {
  activeTopicId: null as any,
  defaultPlugins: [],
  isSearchingTopic: false,
  searchTopics: [],
  topicLoadingIds: [],
  topicMaps: {},
  topicSearchKeywords: '',
  topics: [],
  topicsInit: false,
};
