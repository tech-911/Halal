export const cloudinary =
  "https://res.cloudinary.com/dbjxfwqjo/image/upload/v1683920964/mobile_login_carousel";
export const baseUrlAuth = "https://halal.onrender.com/api/auth";
export const baseUrlUserActions = "https://halal.onrender.com/api/useraction";

export const calculateAge = (dateString) => {
  const birthDate = new Date(dateString);
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the current date and the birth date
  const ageInMillis = currentDate - birthDate;

  // Convert milliseconds to years
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const ageInYears = ageInMillis / millisecondsPerYear;

  // Return the age as a number rounded to two decimal places
  return Math.floor(ageInYears * 100) / 100;
}