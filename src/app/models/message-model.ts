export interface MessageModel {
  id: number;
  content: string;
  likes: number;
  timestemp: string;
  author: { id: number; name: string };
}
