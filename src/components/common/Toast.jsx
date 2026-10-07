import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in slide-in-from-bottom-5 duration-200">
      <div className={`p-4 rounded-2xl shadow-soft-lg border flex items-start gap-3 backdrop-blur-md ${
        toast.type === 'warning'
          ? 'bg-amber-50/95 border-amber-200 text-amber-900'
          : toast.type === 'info'
          ? 'bg-sky-50/95 border-sky-200 text-sky-900'
          : 'bg-emerald-50/95 border-emerald-200 text-emerald-950'
      }`}>
        <div className="mt-0.5 flex-shrink-0">
          {toast.type === 'warning' ? (
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          ) : toast.type === 'info' ? (
            <Info className="w-5 h-5 text-sky-600" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          )}
        </div>
        <div className="flex-1 text-sm font-medium leading-snug">
          {toast.message}
        </div>
      </div>
    </div>
  );
};
