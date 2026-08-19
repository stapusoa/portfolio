import React, { useState } from "react";
import Form from "./Form";
import FormField from "./FormField";
import Input from "../Input/Input";
import Textarea from "../Input/TextArea";
import { useToast } from "../Toast/ToastProvider";

const ContactForm = () => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        showToast({
          title: "Message sent",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        showToast({
          title: "Error",
          description: result.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch {
      showToast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg bg-white/10 backdrop-blur p-6 rounded-lg border border-gray-200">
      <FormField label="Name">
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
      </FormField>

      <FormField label="Email">
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
        />
      </FormField>

      <FormField label="Subject">
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="What is this regarding?"
        />
      </FormField>

      <FormField label="Message">
        <Textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell me about your project..."
        />
      </FormField>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-3 px-4 rounded hover:bg-gray-900 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </Form>
  );
};

export default ContactForm;