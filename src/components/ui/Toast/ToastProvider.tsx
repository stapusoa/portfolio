import React, { createContext, useContext, useState } from "react";
import Toast from "./Toast"; // this is the Toast component we wrote earlier

type ToastType = {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

const ToastContext = createContext<{
  showToast: (toast: Omit<ToastType, "id">) => void;
} | null>(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
};

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const showToast = ({ title, description, variant = "default" }: Omit<ToastType, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, title, description, variant }]);

    // Auto-remove after 4s
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast stack */}
      <div className="fixed z-[100] bottom-4 right-4 flex flex-col gap-4 w-full max-w-sm px-4">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
            onClose={() =>
              setToasts((prev) => prev.filter((t) => t.id !== toast.id))
            }
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;