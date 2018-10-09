import { Comment } from "./comment";

export class Image {
  id: string;
  uploadedby: string;
  description: string;
  path: string;
  name: string;
  comments: Comment[];
}
