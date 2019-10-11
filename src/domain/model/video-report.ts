import { CommonItem } from './common-item';

export class VideoReport {
  emotions: CommonItem[];
  feelings: CommonItem[];
  satisfaction: CommonItem[];
  people: CommonItem[];
  name: string;
  description: string;
  date: Date;
  preview: Blob;
}
