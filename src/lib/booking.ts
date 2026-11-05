/** Abre o seletor de profissional (BookingDialog) de qualquer lugar da página. */
export const BOOKING_EVENT = "conceito:booking";

export const openBooking = () => window.dispatchEvent(new Event(BOOKING_EVENT));
