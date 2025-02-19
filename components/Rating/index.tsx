"use client";
import { Rating } from "@material-tailwind/react";

interface IRatingProps {
  readonly?: boolean;
  value?: number;
  onChange?: (...event: any[]) => void;
  error?: any;
}

export function MyRating({
  value,
  readonly = true,
  onChange,
  error,
}: IRatingProps) {
  return (
    <div>
      <Rating readonly={readonly} value={value} onChange={onChange} />
      {error && <p className="text-sm text-red-400 mt-2">{error?.message}</p>}
    </div>
  );
}
