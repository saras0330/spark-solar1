import { ReactNode, useEffect, useMemo, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const describedById = useMemo(() => {
    if (!title) return undefined;
    return "modal-title";
  }, [title]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    // Focus close button for keyboard users.
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      aria-hidden={false}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onMouseDown={(e) => {
          // Click outside closes
          if (e.target === e.currentTarget) onClose();
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-[61] w-[min(920px,92%)]"
        role="dialog"
        aria-modal="true"
        aria-describedby={describedById}
      >
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] p-4 sm:p-5">
            <div className="min-w-0">
              {title ? (
                <h3
                  id={describedById}
                  className="text-base font-bold text-[var(--text)] truncate"
                >
                  {title}
                </h3>
              ) : null}
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--text-light)] hover:text-[var(--text)] transition"
              aria-label="Close video modal"
            >
              ✕
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

