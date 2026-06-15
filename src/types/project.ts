export interface DBProject {
  _id: string;
  name: string;
  description: string;
  tags: string[];
  highlights: string[];
  images: { _id: string; contentType: string; filename: string }[];
  link?: string;
  company?: string;
  featured: boolean;
  order: number;
}
