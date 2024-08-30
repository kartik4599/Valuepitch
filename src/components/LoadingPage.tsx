import { PiSpinnerGapThin } from "react-icons/pi";

export default function LoadingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background">
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-primary p-4 text-primary-foreground">
          <PiSpinnerGapThin className="h-8 w-8 animate-spin" />
        </div>
        <p className="text-muted-foreground">Loading content...</p>
      </div>
    </div>
  );
}
