"use client";

import { useToast } from "./ToastProvider";

export default function FranchiseForm() {
  const { showToast } = useToast();

  return (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();
        showToast("Thanks! We'll be in touch within 24 hours.");
        (e.target as HTMLFormElement).reset();
      }}
    >
      <div className="field">
        <label>Full name</label>
        <input name="name" required />
      </div>
      <div className="field">
        <label>Mobile number</label>
        <input name="mobile" type="tel" required />
      </div>
      <div className="field">
        <label>Email</label>
        <input name="email" type="email" required />
      </div>
      <div className="field">
        <label>City</label>
        <input name="city" required />
      </div>
      <div className="field">
        <label>State</label>
        <input name="state" required />
      </div>
      <div className="field">
        <label>Investment budget</label>
        <input name="budget" placeholder="e.g. ₹10L" />
      </div>
      <div className="field full">
        <label>Preferred location</label>
        <input name="location" />
      </div>
      <div className="field full">
        <label>Message</label>
        <textarea name="message" rows={4} />
      </div>
      <div className="form-submit">
        <button className="btn btn-red btn-lg" type="submit">
          Submit enquiry
        </button>
      </div>
    </form>
  );
}
