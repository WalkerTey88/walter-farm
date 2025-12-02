// app/accommodation/page.tsx
// Accommodation listing page. Lists available stays for visitors.
export default function AccommodationPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Accommodation</h1>
      <p className="text-sm text-neutral-700">
        This page will list the real accommodation types of Walter Farm.
        Data will be loaded from the database in a later phase.
      </p>
    </div>
  );
}