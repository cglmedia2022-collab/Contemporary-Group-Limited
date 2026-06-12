"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Tab = "blog" | "career" | "project";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("blog");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [blogForm, setBlogForm] = useState({ title: "", excerpt: "", content: "", author: "", category: "Award", image: "" });
  const [careerForm, setCareerForm] = useState({ title: "", location: "", workModel: "On-site", description: "" });
  const [projectForm, setProjectForm] = useState<{
    title: string; client: string; category: string; image: string; content: string; gallery: string[]
  }>({ title: "", client: "", category: "Aviation", image: "", content: "", gallery: [] });

  useEffect(() => {
    // Check auth
    if (localStorage.getItem("admin_auth") !== "true") {
      router.push("/admin");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin");
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, setFormState: Function) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setFormState((prev: any) => ({ ...prev, image: data.url }));
        setMessage("Image uploaded successfully!");
      } else {
        setMessage("Image upload failed.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error uploading image.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>, setFormState: Function) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setMessage("");

    const uploadedUrls: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      try {
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        const data = await res.json();
        if (data.url) uploadedUrls.push(data.url);
      } catch (error) {
        console.error("Gallery upload error", error);
      }
    }

    setFormState((prev: any) => ({ ...prev, gallery: [...prev.gallery, ...uploadedUrls] }));
    setMessage(`${uploadedUrls.length} image(s) added to gallery.`);
    setIsUploading(false);
  };

  const submitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogForm),
      });
      if (res.ok) {
        setMessage("Blog post created successfully!");
        setBlogForm({ title: "", excerpt: "", content: "", author: "", category: "Award", image: "" });
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setMessage("Failed to create blog post.");
      }
    } catch (err) {
      setMessage("Error creating blog post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitCareer = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(careerForm),
      });
      if (res.ok) {
        setMessage("Career opening created successfully!");
        setCareerForm({ title: "", location: "", workModel: "On-site", description: "" });
      } else {
        setMessage("Failed to create career.");
      }
    } catch (err) {
      setMessage("Error creating career.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectForm),
      });
      if (res.ok) {
        setMessage("Project created successfully!");
        setProjectForm({ title: "", client: "", category: "Aviation", image: "", content: "", gallery: [] });
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setMessage("Failed to create project.");
      }
    } catch (err) {
      setMessage("Error creating project.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Render Forms ---

  const renderBlogForm = () => (
    <form onSubmit={submitBlog} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-neutral-700 mb-2">Title</label>
          <input type="text" required value={blogForm.title} onChange={e => setBlogForm({...blogForm, title: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" />
        </div>
        <div>
          <label className="block text-sm font-bold text-neutral-700 mb-2">Author</label>
          <input type="text" required value={blogForm.author} onChange={e => setBlogForm({...blogForm, author: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-neutral-700 mb-2">Category</label>
        <select value={blogForm.category} onChange={e => setBlogForm({...blogForm, category: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none">
          {["Award", "Sustainability", "Construction", "Architecture"].map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold text-neutral-700 mb-2">Excerpt (Short summary)</label>
        <textarea required value={blogForm.excerpt} onChange={e => setBlogForm({...blogForm, excerpt: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" rows={2} />
      </div>
      <div>
        <label className="block text-sm font-bold text-neutral-700 mb-2">Content (Use HTML tags for formatting)</label>
        <textarea required value={blogForm.content} onChange={e => setBlogForm({...blogForm, content: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none font-mono text-sm" rows={8} placeholder="<p>Your paragraph here...</p>" />
      </div>
      <div>
        <label className="block text-sm font-bold text-neutral-700 mb-2">Cover Image (Uploads to Cloudinary)</label>
        <input type="file" accept="image/*" ref={fileInputRef} onChange={e => handleImageUpload(e, setBlogForm)} className="w-full" required={!blogForm.image} />
        {isUploading && <p className="text-sm text-brand-primary mt-2">Uploading image...</p>}
        {blogForm.image && !isUploading && (
          <div className="mt-4 relative w-32 aspect-video rounded-lg overflow-hidden">
            <Image src={blogForm.image} alt="Preview" fill className="object-cover" />
          </div>
        )}
      </div>
      <button type="submit" disabled={isSubmitting || isUploading} className="px-6 py-3 bg-neutral-900 text-white font-bold rounded-xl hover:bg-brand-primary transition-colors disabled:opacity-50">
        {isSubmitting ? "Publishing..." : "Publish Blog Post"}
      </button>
    </form>
  );

  const renderCareerForm = () => (
    <form onSubmit={submitCareer} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-neutral-700 mb-2">Job Title</label>
          <input type="text" required value={careerForm.title} onChange={e => setCareerForm({...careerForm, title: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" placeholder="e.g. Senior Architect" />
        </div>
        <div>
          <label className="block text-sm font-bold text-neutral-700 mb-2">Location</label>
          <input type="text" required value={careerForm.location} onChange={e => setCareerForm({...careerForm, location: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" placeholder="e.g. Asaba, Delta State" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-neutral-700 mb-2">Work Model</label>
        <select value={careerForm.workModel} onChange={e => setCareerForm({...careerForm, workModel: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none">
          {["On-site", "Hybrid", "Remote"].map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold text-neutral-700 mb-2">Job Description</label>
        <textarea required value={careerForm.description} onChange={e => setCareerForm({...careerForm, description: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" rows={5} />
      </div>
      <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-neutral-900 text-white font-bold rounded-xl hover:bg-brand-primary transition-colors disabled:opacity-50">
        {isSubmitting ? "Adding..." : "Add Career Opening"}
      </button>
    </form>
  );

  const renderProjectForm = () => (
    <form onSubmit={submitProject} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-neutral-700 mb-2">Project Title</label>
          <input type="text" required value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" />
        </div>
        <div>
          <label className="block text-sm font-bold text-neutral-700 mb-2">Client Name</label>
          <input type="text" required value={projectForm.client} onChange={e => setProjectForm({...projectForm, client: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-neutral-700 mb-2">Category</label>
        <select value={projectForm.category} onChange={e => setProjectForm({...projectForm, category: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none">
          {["Aviation", "Healthcare", "Hospitality & Leisure", "Public Spaces", "Education", "Commercial", "Industrial", "Residential", "Public Buildings"].map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold text-neutral-700 mb-2">Project Cover Image</label>
        <input type="file" accept="image/*" ref={fileInputRef} onChange={e => handleImageUpload(e, setProjectForm)} className="w-full" required={!projectForm.image} />
        {isUploading && <p className="text-sm text-brand-primary mt-2">Uploading image...</p>}
        {projectForm.image && !isUploading && (
          <div className="mt-4 relative w-32 aspect-[4/3] rounded-lg overflow-hidden">
            <Image src={projectForm.image} alt="Preview" fill className="object-cover" />
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm font-bold text-neutral-700 mb-2">Main Description (Optional, HTML allowed)</label>
        <textarea value={projectForm.content} onChange={e => setProjectForm({...projectForm, content: e.target.value})} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none font-mono text-sm" rows={5} placeholder="<p>Project details...</p>" />
      </div>
      <div>
        <label className="block text-sm font-bold text-neutral-700 mb-2">Gallery Images (Optional, multiple allowed)</label>
        <input type="file" accept="image/*" multiple onChange={e => handleGalleryUpload(e, setProjectForm)} className="w-full" />
        {projectForm.gallery.length > 0 && (
          <div className="mt-4 flex gap-4 flex-wrap">
            {projectForm.gallery.map((url, i) => (
              <div key={i} className="relative w-24 aspect-square rounded-lg overflow-hidden">
                <Image src={url} alt={`Gallery ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
      <button type="submit" disabled={isSubmitting || isUploading} className="px-6 py-3 bg-neutral-900 text-white font-bold rounded-xl hover:bg-brand-primary transition-colors disabled:opacity-50">
        {isSubmitting ? "Adding..." : "Add Project"}
      </button>
    </form>
  );

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      {/* Top Navbar */}
      <nav className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-8">
                <Image src="/Contemporary-Group-Coloured-Logo.png" alt="CGL Logo" fill className="object-contain" />
              </div>
              <span className="font-gotham font-bold text-neutral-800 text-lg border-l border-neutral-300 pl-4">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm font-medium text-neutral-500 hover:text-brand-primary">View Site</Link>
              <button onClick={handleLogout} className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-bold hover:bg-red-100 transition">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0 space-y-2">
          <button onClick={() => setActiveTab("blog")} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === "blog" ? "bg-brand-primary text-white" : "bg-white text-neutral-600 hover:bg-neutral-100"}`}>
            Add Blog Post
          </button>
          <button onClick={() => setActiveTab("career")} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === "career" ? "bg-brand-primary text-white" : "bg-white text-neutral-600 hover:bg-neutral-100"}`}>
            Add Career Opening
          </button>
          <button onClick={() => setActiveTab("project")} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === "project" ? "bg-brand-primary text-white" : "bg-white text-neutral-600 hover:bg-neutral-100"}`}>
            Add Project
          </button>
        </div>

        {/* Form Container */}
        <div className="flex-1 bg-white p-8 rounded-3xl shadow-xs border border-neutral-100">
          <h2 className="font-gotham text-2xl font-bold mb-6 text-neutral-900 border-b border-neutral-100 pb-4">
            {activeTab === "blog" && "Create New Blog Post"}
            {activeTab === "career" && "Create New Career Opening"}
            {activeTab === "project" && "Create New Project"}
          </h2>
          
          {message && (
            <div className={`p-4 mb-6 rounded-lg font-bold text-sm ${message.includes("success") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
              {message}
            </div>
          )}

          {activeTab === "blog" && renderBlogForm()}
          {activeTab === "career" && renderCareerForm()}
          {activeTab === "project" && renderProjectForm()}
        </div>
        
      </div>
    </div>
  );
}
