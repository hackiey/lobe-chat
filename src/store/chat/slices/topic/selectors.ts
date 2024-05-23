import { ChatTopic } from '@/types/topic';

import { ChatStore } from '../../store';

const currentTopics = (s: ChatStore): ChatTopic[] => s.topics;

const currentActiveTopic = (s: ChatStore): ChatTopic | undefined => {
  return s.topics.find((topic) => topic.id === s.activeTopicId);
};

const currentTopicPlugins = (s: ChatStore): string[] => {
  const topic = s.topics.find((topic) => topic.id === s.activeTopicId);

  return topic && topic.plugins ? topic.plugins : s.defaultPlugins;
}

const searchTopics = (s: ChatStore): ChatTopic[] => s.searchTopics;

const displayTopics = (s: ChatStore): ChatTopic[] =>
  s.isSearchingTopic ? searchTopics(s) : currentTopics(s);

const currentUnFavTopics = (s: ChatStore): ChatTopic[] => s.topics.filter((s) => !s.favorite);

const currentTopicLength = (s: ChatStore): number => currentTopics(s).length;

const getTopicById =
  (id: string) =>
  (s: ChatStore): ChatTopic | undefined =>
    currentTopics(s).find((topic) => topic.id === id);

export const topicSelectors = {
  currentActiveTopic,
  currentTopicLength,
  currentTopicPlugins,
  currentTopics,
  currentUnFavTopics,
  displayTopics,
  getTopicById,
  searchTopics,
};
