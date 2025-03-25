import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setToastMessage("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setToastMessage(result.error || "Something went wrong.");
      }
    } catch (err) {
      setToastMessage("Failed to send. Try again later.");
    }

    setLoading(false);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <>
      {toastMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          {toastMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-full max-w-lg bg-white/10 backdrop-blur p-6 rounded-lg border border-gray-200"
      >
        {["name", "email", "subject"].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="block text-sm font-medium text-white mb-1 capitalize"
            >
              {field}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              required
              className="w-full p-3 rounded bg-white text-black"
              value={(formData as any)[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
            />
          </div>
        ))}

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full p-3 rounded bg-white text-black resize-none"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 px-4 rounded hover:bg-gray-900 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;