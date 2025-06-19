import Link from "next/link";

type HeaderActionsProps = {
  backHref: string;
  onSave: () => void;
  isSaving?: boolean; // optional loading indicator
};

export function HeaderActions({
  backHref,
  onSave,
  isSaving,
}: HeaderActionsProps) {
  return (
    <div className="flex justify-between items-center py-4">
      <Link
        href={backHref}
        className="flex items-center gap-2 text-gray-600 border-1 border-gray-400 text-md px-4 py-2 rounded hover:shadow transition cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Back
      </Link>

      <button
        onClick={onSave}
        disabled={isSaving}
        className="bg-black text-white text-md px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-800 hover:shadow-md transition disabled:cursor-not-allowed cursor-pointer"
      >
        Save
      </button>
    </div>
  );
}
