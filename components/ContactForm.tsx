"use client";

import { useToast } from "./ToastProvider";

export default function ContactForm() {
  const { showToast } = useToast();

  return (
    <form
      className="form-inner"
      style={{
        border: "1px solid rgba(255,214,0,.4)",
        boxShadow: "var(--shadow-soft)",
        borderRadius: 32,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        showToast("Thanks! We'll reply soon.");
        (e.target as HTMLFormElement).reset();
      }}
    >
      <h2 className="section-title" style={{ fontSize: 32, marginBottom: 24 }}>
        Send a message
      </h2>
      <div className="field" style={{ marginBottom: 16 }}>
        <label>Your name</label>
        <input name="name" required />
      </div>
      <div className="field" style={{ marginBottom: 16 }}>
        <label>Email</label>
        <input name="email" type="email" required />
      </div>
      <div className="field" style={{ marginBottom: 16 }}>
        <label>Subject</label>
        <input name="subject" required />
      </div>
      <div className="field" style={{ marginBottom: 20 }}>
        <label>Message</label>
        <textarea name="message" rows={5} required />
      </div>
      <button
        className="btn btn-red"
        type="submit"
        style={{ width: "100%", justifyContent: "center", padding: 14 }}
      >
        Send message
      </button>
    </form>
  );
}
