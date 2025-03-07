const MOBILE_BREAKPOINT = 768;
const ADDRESS = "Tuna mah. 5522 sokak No 32 Bornova İzmir, İzmir, Turkey 35090";
const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS
)}`;

export { MOBILE_BREAKPOINT, ADDRESS, GOOGLE_MAPS_URL, DIRECTIONS_URL };
