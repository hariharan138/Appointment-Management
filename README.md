# Doctor Appointment Management System

## Overview
A robust system designed to streamline the management of doctor appointments. The platform ensures efficiency by dynamically handling no-shows, rescheduling, and conflict resolution with ease.

---

## 💥 Key Features

1. **Automatic Detection**: Automatically detect no-shows after a 15-minute grace period.
2. **Slot Finder**: Dynamically identify available slots in the doctor’s schedule.
3. **Notification System**: Notify patients of rescheduling options via email.
4. **Rebooking Management**: Enable doctors and patients to confirm new slots quickly.
5. **Conflict Resolution**: Prevent double-booking for rescheduled appointments.

---

## 💥 Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: React
- **Database**: MongoDB (preferred)

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed and running)
- npm or yarn package manager

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/hariharan138/Appointment-Management.git
   cd doctor-appointment-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     PORT=5000
     MONGO_URI=your-mongodb-uri
     EMAIL_SERVICE_API_KEY=your-email-service-api-key
     ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:5000`.

---

## Usage

1. **For Doctors:**
   - View and manage your appointment schedule.
   - Confirm rescheduling requests.

2. **For Patients:**
   - Receive email notifications for rescheduling.
   - Confirm new slots via the provided link.

---

## Project Structure

```
root
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.js
└── README.md
```

---

## Future Enhancements

- Integration with third-party calendar systems (e.g., Google Calendar).
- Advanced analytics for appointment trends.
- Multi-language support.

---

## Contributions

Contributions are welcome! Please open an issue to discuss your ideas or submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

- **Developer**: Hariharan S
- **Email**: hariharan98704@gmail.com
- **GitHub**: [Hariharan138](https://github.com/hariharan138/)

