// app/location/page.tsx
// Location page with address and map for Walter Farm.
export default function LocationPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Location</h1>
      <p className="text-sm text-neutral-700">
        Walter Farm is located in Segamat, Johor. This page will include an
        interactive map and directions to the farm. Additional details will be
        fetched from the backend in future updates.
      </p>
    </div>
  );
}