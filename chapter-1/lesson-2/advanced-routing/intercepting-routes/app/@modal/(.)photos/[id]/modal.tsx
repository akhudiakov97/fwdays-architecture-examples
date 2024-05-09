'use client';
import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <dialog
        ref={dialogRef}
        onClose={onDismiss}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-auto"
      >
        <div className="mb-4">{children}</div>
        <button
          onClick={onDismiss}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}