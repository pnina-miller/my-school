export const attendanceToServer = (date, userId, subject) => {
  fetch('/lesson/attendance', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      date,
      userId,
      subject,
    })
  });
}