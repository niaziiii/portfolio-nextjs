"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface ExistingImage {
  _id: string;
  contentType: string;
  filename: string;
}

interface ProjectFormProps {
  projectId?: string;
  defaultValues?: {
    name: string;
    description: string;
    tags: string;
    highlights: string;
    link: string;
    company: string;
    featured: boolean;
    order: number;
    images: ExistingImage[];
  };
}

export default function ProjectForm({ projectId, defaultValues }: ProjectFormProps) {
  const router = useRouter();
  const isEdit = !!projectId;

  const [name, setName] = useState(defaultValues?.name ?? "");
  const [description, setDescription] = useState(defaultValues?.description ?? "");
  const [tags, setTags] = useState(defaultValues?.tags ?? "");
  const [highlights, setHighlights] = useState(defaultValues?.highlights ?? "");
  const [link, setLink] = useState(defaultValues?.link ?? "");
  const [company, setCompany] = useState(defaultValues?.company ?? "");
  const [featured, setFeatured] = useState(defaultValues?.featured ?? false);
  const [order, setOrder] = useState(defaultValues?.order ?? 0);
  const [existingImages, setExistingImages] = useState<ExistingImage[]>(
    defaultValues?.images ?? []
  );
  const [removedIndices, setRemovedIndices] = useState<number[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [newPreviews, setNewPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    setNewFiles((prev) => [...prev, ...files]);
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      setNewPreviews((prev) => [...prev, url]);
    });
    e.target.value = "";
  }

  function removeExisting(globalIdx: number) {
    setRemovedIndices((prev) => [...prev, globalIdx]);
  }

  function restoreExisting(globalIdx: number) {
    setRemovedIndices((prev) => prev.filter((i) => i !== globalIdx));
  }

  function removeNew(idx: number) {
    setNewFiles((prev) => prev.filter((_, i) => i !== idx));
    setNewPreviews((prev) => prev.filter((_, i) => i !== idx));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData();
    fd.append("name", name);
    fd.append("description", description);
    fd.append("tags", tags);
    fd.append("highlights", highlights);
    fd.append("link", link);
    fd.append("company", company);
    fd.append("featured", String(featured));
    fd.append("order", String(order));
    if (isEdit && removedIndices.length > 0) {
      fd.append("removeImages", removedIndices.join(","));
    }
    newFiles.forEach((file) => fd.append("images", file));

    const url = isEdit ? `/api/projects/${projectId}` : "/api/projects";
    const method = isEdit ? "PUT" : "POST";
    const res = await fetch(url, { method, body: fd });
    setLoading(false);

    if (res.ok) {
      router.push("/admin/projects");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {/* Name */}
      <Field label="Project Name *">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputCls}
          placeholder="e.g. WhatsApp Automation SaaS"
        />
      </Field>

      {/* Company */}
      <Field label="Company / Context">
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputCls}
          placeholder="e.g. Infiniti Business Solutions"
        />
      </Field>

      {/* Description */}
      <Field label="Description *">
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className={inputCls}
          placeholder="Describe the project…"
        />
      </Field>

      {/* Tags */}
      <Field label="Tech Stack / Tags" hint="Comma-separated, e.g. React, Node.js, MongoDB">
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className={inputCls}
          placeholder="React, Node.js, MongoDB"
        />
      </Field>

      {/* Highlights */}
      <Field label="Key Highlights" hint="One per line">
        <textarea
          value={highlights}
          onChange={(e) => setHighlights(e.target.value)}
          rows={5}
          className={inputCls}
          placeholder={"Built real-time messaging with Socket.io\nSupports 10,000+ users"}
        />
      </Field>

      {/* Link */}
      <Field label="Project Link">
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className={inputCls}
          placeholder="https://..."
          type="url"
        />
      </Field>

      {/* Order + Featured */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="Display Order" hint="Lower = appears first">
          <input
            type="number"
            value={order}
            onChange={(e) => setOrder(Number(e.target.value))}
            className={inputCls}
          />
        </Field>
        <Field label="Featured">
          <label className="flex items-center gap-2 mt-1 cursor-pointer">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="w-4 h-4 accent-blue-500"
            />
            <span className="text-sm text-gray-300">Show as featured</span>
          </label>
        </Field>
      </div>

      {/* Images */}
      <Field label="Project Images">
        {/* Existing images */}
        {existingImages.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-3">
            {existingImages.map((img, i) => {
              const removed = removedIndices.includes(i);
              return (
                <div key={img._id} className="relative group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/api/projects/${projectId}/image/${i}`}
                    alt={img.filename}
                    className={`w-24 h-24 object-cover rounded-lg border border-white/10 ${removed ? "opacity-30" : ""}`}
                  />
                  <button
                    type="button"
                    onClick={() => (removed ? restoreExisting(i) : removeExisting(i))}
                    className="absolute top-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition"
                  >
                    {removed ? "Undo" : "✕"}
                  </button>
                  {removed && (
                    <div className="absolute inset-0 flex items-center justify-center text-red-400 text-xs font-bold pointer-events-none">
                      Removed
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* New previews */}
        {newPreviews.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-3">
            {newPreviews.map((url, i) => (
              <div key={i} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="preview" className="w-24 h-24 object-cover rounded-lg border border-blue-500/30" />
                <button
                  type="button"
                  onClick={() => removeNew(i)}
                  className="absolute top-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="text-sm border border-dashed border-white/20 hover:border-blue-500/50 text-gray-400 hover:text-blue-300 px-4 py-3 rounded-lg transition w-full"
        >
          + Upload Images (PNG, JPG, WebP)
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </Field>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition"
        >
          {loading ? "Saving…" : isEdit ? "Save Changes" : "Create Project"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="text-gray-400 hover:text-white px-4 py-2.5 rounded-lg transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      {hint && <p className="text-xs text-gray-500 mb-1">{hint}</p>}
      {children}
    </div>
  );
}

const inputCls =
  "w-full bg-[#0f1117] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition text-sm";
