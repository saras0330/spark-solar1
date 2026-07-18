import { useEffect, useRef } from "react";
import Modal from "./Modal";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function VideoModal({ open, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!open) return;
    return () => {
      // Auto pause when modal closes/unmounts
      videoRef.current?.pause();
    };
  }, [open]);

  const handleClose = () => {
    videoRef.current?.pause();
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} title="Company Introduction">
      <div className="p-4 sm:p-6">
        <div className="w-full overflow-hidden rounded-xl bg-black/10">
          <video
            ref={videoRef}
            controls
            preload="metadata"
            className="w-full aspect-video"
            poster="/src/assets/hero.png"
            // src may not exist yet; show friendly fallback
            onError={(e) => {
              const video = e.currentTarget;
              // Remove broken src and show placeholder.
              video.removeAttribute("src");
            }}
          >
            <source src="/src/assets/videos/company-introduction.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Friendly placeholder for missing file (shows when video can't load) */}
          <div className="mt-3 text-sm text-[var(--text-light)]">
            If the video is not available yet, please try again later.
          </div>
        </div>
      </div>
    </Modal>
  );
}

