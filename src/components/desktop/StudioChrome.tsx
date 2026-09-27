"use client";

import { motion, type DragControls } from "framer-motion";

export function StudioWindow({
  title,
  index,
  onClose,
  dragControls,
  width,
  height,
  children,
}: {
  title: string;
  index: string;
  onClose?: () => void;
  dragControls: DragControls;
  width: string;
  height?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="studio-window flex flex-col overflow-hidden z-[50] pointer-events-auto"
      style={{ width, height }}
    >
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="studio-titlebar"
      >
        <button
          type="button"
          onClick={onClose}
          onPointerDown={(e) => e.stopPropagation()}
          className="studio-close"
          aria-label={`Close ${title}`}
        >
          Close
        </button>
        <h2 className="studio-title">&quot;{title}&quot;</h2>
        <span className="studio-index">{index}</span>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">{children}</div>
    </motion.div>
  );
}

export function WidgetFrame({
  label,
  meta,
  width,
  children,
}: {
  label: string;
  meta?: string;
  width?: number | string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      className="studio-widget select-none cursor-grab active:cursor-grabbing"
      style={{ width }}
    >
      <div className="studio-widget-bar">
        <span className="studio-title studio-title-sm">&quot;{label}&quot;</span>
        {meta ? <span className="studio-index">{meta}</span> : null}
      </div>
      {children}
    </motion.div>
  );
}
