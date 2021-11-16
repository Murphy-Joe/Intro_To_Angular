export interface ResourceModel {
  id: string;
  title: string;
  author: string;
  suggestedBy?: string;
  format: string;
  link?: string;
  watchedOn?: string;
}
