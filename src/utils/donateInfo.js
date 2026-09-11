// Shared donation constants used by both the Donate page and the
// sitewide Donate QR popup modal, so the UPI ID only has to be
// updated in one place.

export const UPI_ID = "9873699126@upi";

export const QR_CODE_URL =
  "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=" +
  encodeURIComponent(`upi://pay?pa=${UPI_ID}&pn=TogetherForHelp&cu=INR`);
