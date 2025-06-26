import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const carTypes = ["BMW", "Toyota", "Honda", "Mercedes", "Hyundai", "Kia"];

const TripsSection = ({
  trips,
  loading,
  error,
  hotelReservations = [],
  hotelReservationsLoading = false,
  hotelReservationsError = null,
  setHotelReservations,
}) => {
  const navigate = useNavigate();
  const [carForm, setCarForm] = useState({}); 

  const handleCarBookingForHotel = async (tripId, hotelId) => {
    setCarForm((prev) => ({
      ...prev,
      [hotelId]: { ...prev[hotelId], loading: true },
    }));
    try {
      const token = localStorage.getItem("token");
      const type = carForm[hotelId]?.type || carTypes[0];
      const payload = {
        type,
        flightReservationId: tripId,
        hotelReservationId: hotelId,
      };
      const response = await fetch(
        "https://tickifywebsite.runasp.net/api/Car/Reserve",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : undefined,
          },
          body: JSON.stringify(payload),
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.description || "Failed to book car");
      }
      // Update hotelReservations in place to add car info for this hotel
      if (typeof window !== "undefined") {
        // Only update if running in browser
        setHotelReservations &&
          setHotelReservations((prev) =>
            prev.map((h) => (h.id === hotelId ? { ...h, car: { type } } : h))
          );
      }
      setCarForm((prev) => ({
        ...prev,
        [hotelId]: { open: false, type: carTypes[0], loading: false },
      }));
      await Swal.fire({
        icon: "success",
        title: "تم حجز السيارة بنجاح!",
        confirmButtonText: "حسناً",
      });
    } catch (err) {
      setCarForm((prev) => ({
        ...prev,
        [hotelId]: { ...prev[hotelId], loading: false },
      }));
      await Swal.fire({
        icon: "error",
        title: "فشل الحجز",
        text: err.message,
        confirmButtonText: "حسناً",
      });
    }
  };

  if (loading)
    return <div className="user-info-card">Loading your reservations...</div>;
  if (error)
    return (
      <div className="user-info-card" style={{ color: "red" }}>
        {error}
      </div>
    );
  if (hotelReservationsLoading)
    return (
      <div className="user-info-card">Loading your hotel reservations...</div>
    );
  if (hotelReservationsError)
    return (
      <div className="user-info-card" style={{ color: "red" }}>
        {hotelReservationsError}
      </div>
    );
  return (
    <div className="trips-section">
      <h2>My Trips</h2>
      {!trips || trips.length === 0 ? (
        <div>No trips found.</div>
      ) : (
        trips.map((trip) => {
          // Workaround: No flightReservationId in hotelReservations, so show all hotels under every flight
          // TODO: When backend provides flightReservationId, filter by it
          const hotelsForTrip = hotelReservations;
          return (
            <div key={trip.id} className="trip-card">
              <div className="trip-header">
                <b>
                  {trip.flight
                    ? `${trip.flight.from} → ${trip.flight.to}`
                    : trip.departureAirport + " → " + trip.arrivalAirport}
                </b>
                <span>
                  {trip.flight
                    ? `${new Date(
                        trip.flight.departureDate
                      ).toLocaleString()} - ${new Date(
                        trip.flight.arrivalDate
                      ).toLocaleString()}`
                    : `${new Date(
                        trip.departureDate
                      ).toLocaleString()} - ${new Date(
                        trip.arrivalDate
                      ).toLocaleString()}`}
                </span>
              </div>
              {/* Hotels for this flight */}
              <div className="trip-hotels">
                <b>Hotels for this flight:</b>
                {hotelsForTrip.length === 0 ? (
                  <button
                    className="settings-btn"
                    style={{ marginTop: 8 }}
                    onClick={() => {
                      if (trip.id) {
                        navigate("/hotels/results", {
                          state: { reservationId: trip.id },
                        });
                      } else {
                        alert("No reservation ID found for this reservation.");
                      }
                    }}
                  >
                    Book Hotel
                  </button>
                ) : (
                  hotelsForTrip.map((hotel) => (
                    <div key={hotel.id} className="hotel-card-in-trip">
                      <div>
                        <b>Hotel:</b> {hotel.hotelName}
                      </div>
                      <div>
                        <b>Address:</b> {hotel.hotelAddress}
                      </div>
                      <div>
                        <b>Room IDs:</b>{" "}
                        {hotel.roomsId && hotel.roomsId.length > 0
                          ? hotel.roomsId.join(", ")
                          : "N/A"}
                      </div>
                      {/* Car info if available */}
                      {hotel.car ? (
                        <div className="car-card-in-trip">
                          <b>Car:</b> {hotel.car.type} from {hotel.car.from} to{" "}
                          {hotel.car.to} (${hotel.car.price})
                        </div>
                      ) : (
                        <div>No car booked for this hotel.</div>
                      )}
                      {/* Book Car Button/Form */}
                      {hotel.car ? (
                        <div
                          style={{
                            marginTop: 8,
                            color: "#28a745",
                            fontWeight: 600,
                          }}
                        >
                          تم حجز السيارة لهذا الفندق
                        </div>
                      ) : carForm[hotel.id]?.open ? (
                        <form
                          onSubmit={async (e) => {
                            e.preventDefault();
                            await handleCarBookingForHotel(trip.id, hotel.id);
                          }}
                          style={{ display: "inline", marginTop: 8 }}
                        >
                          <select
                            value={carForm[hotel.id]?.type || carTypes[0]}
                            onChange={(e) =>
                              setCarForm((prev) => ({
                                ...prev,
                                [hotel.id]: {
                                  ...prev[hotel.id],
                                  type: e.target.value,
                                },
                              }))
                            }
                            style={{
                              padding: "8px",
                              borderRadius: 6,
                              border: "1px solid #ccc",
                              marginRight: 8,
                            }}
                          >
                            {carTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          <button
                            type="submit"
                            style={{
                              padding: "8px 16px",
                              borderRadius: 6,
                              border: "none",
                              background: "#00233d",
                              color: "#fff",
                            }}
                            disabled={carForm[hotel.id]?.loading}
                          >
                            {carForm[hotel.id]?.loading
                              ? "...جاري الحجز"
                              : "احجز سيارة"}
                          </button>
                        </form>
                      ) : (
                        <button
                          className="settings-btn"
                          style={{ marginTop: 8 }}
                          onClick={() =>
                            setCarForm((prev) => ({
                              ...prev,
                              [hotel.id]: {
                                open: true,
                                type: carTypes[0],
                                loading: false,
                              },
                            }))
                          }
                        >
                          احجز سيارة
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })
      )}
      {/* User's All Hotel Reservations Section */}
      {hotelReservations && hotelReservations.length > 0 && (
        <div style={{ marginTop: 48 }}>
          <h2>All My Hotel Reservations</h2>
          {hotelReservations.map((hotel) => (
            <div key={hotel.id} className="trip-card">
              <div className="trip-header">
                <b>{hotel.hotelName}</b>
                <span>{hotel.hotelAddress}</span>
              </div>
              <div className="trip-hotels">
                <div>
                  <b>Room IDs:</b>{" "}
                  {hotel.roomsId && hotel.roomsId.length > 0
                    ? hotel.roomsId.join(", ")
                    : "N/A"}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default TripsSection;
