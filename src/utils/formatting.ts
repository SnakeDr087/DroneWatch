export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

export const formatDateTime = (date: string): string => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
};

export const generateEmailSubject = (location: string, date: string): string => {
  const formattedDate = new Date(date).toLocaleDateString('en-US');
  return `Suspicious Drone Activity Report - ${location} - ${formattedDate}`;
};