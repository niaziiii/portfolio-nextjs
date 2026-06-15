import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProjectImage {
  data: Buffer;
  contentType: string;
  filename: string;
}

export interface IProject extends Document {
  name: string;
  description: string;
  tags: string[];
  highlights: string[];
  images: IProjectImage[];
  link?: string;
  company?: string;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectImageSchema = new Schema<IProjectImage>(
  {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
    filename: { type: String, required: true },
  },
  { _id: true }
);

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    tags: [{ type: String, trim: true }],
    highlights: [{ type: String }],
    images: [ProjectImageSchema],
    link: { type: String },
    company: { type: String },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Project: Model<IProject> =
  mongoose.models.Project ?? mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
