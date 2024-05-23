import { BaseDataModel } from '@/types/meta';

export interface ChatTopic extends Omit<BaseDataModel, 'meta'> {
  favorite?: boolean;
  plugins?: string[];
  sessionId?: string;
  title: string;
}

export type ChatTopicMap = Record<string, ChatTopic>;
