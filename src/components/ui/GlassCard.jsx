import React from 'react';
import { cn } from '../../lib/utils';

export function GlassCard({ className, children, dark = false, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        dark ? "glass-panel-dark text-white" : "glass-panel text-cafe-charcoal",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
