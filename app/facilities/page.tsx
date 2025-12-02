// app/facilities/page.tsx
// Facilities page describing physical amenities at the farm.
export default function FacilitiesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Facilities</h1>
      <p className="text-sm text-neutral-700">
        Here you'll find information about parking, rest areas, animal enclosures
        and other facilities available to visitors. Future versions will load
        data from the backend.
      </p>
    </div>
  );
}