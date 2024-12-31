# Doctor Appointment Management System

## Overview
The Doctor Appointment Management System is a comprehensive web application designed to optimize and simplify the process of scheduling and managing doctor appointments. This system addresses common challenges faced by both doctors and patients, such as no-shows, scheduling conflicts, and the tedious process of rescheduling. With features like automatic detection of no-shows, dynamic slot identification, and an efficient notification system, this platform ensures seamless communication and operational efficiency.

---

## 💥 Key Features

1. **Automatic Detection**:
   - Automatically detects patient no-shows after a 15-minute grace period.
   - Triggers a notification to the patient and marks the slot as available for rescheduling.

2. **Slot Finder**:
   - Dynamically identifies available slots in the doctor’s schedule.
   - Ensures real-time updates for maximum efficiency.

3. **Notification System**:
   - Sends email notifications to patients with rescheduling options.
   - Keeps both doctors and patients informed about appointment changes.

4. **Rebooking Management**:
   - Allows patients to select new appointment slots directly from the notification email.
   - Enables doctors to approve or decline rescheduling requests.

5. **Conflict Resolution**:
   - Ensures no double-booking for rescheduled appointments.
   - Utilizes real-time updates to maintain schedule integrity.

---

## 💥 Tech Stack

- **Backend**: Node.js with Express.js for building a scalable and efficient API.
- **Frontend**: React for creating a dynamic and user-friendly interface.
- **Database**: MongoDB for managing and storing data in a flexible, schema-less format.

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed and running)
- npm or yarn package manager

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/hariharan138/doctor-appointment-system.git
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
   - View and manage your appointment schedule through the dashboard.
   - Confirm or decline rescheduling requests with a single click.

2. **For Patients:**
   - Receive real-time email notifications for missed appointments and rescheduling options.
   - Select new appointment slots directly from the notification link.

---

## Project Structure

```
root
├── backend
│   ├── models         # Database schemas
│   ├── routes         # API routes
│   ├── controllers    # Business logic for routes
│   └── server.js      # Entry point for the backend
├── frontend
│   ├── src
│   │   ├── components # Reusable React components
│   │   ├── pages      # Application pages (e.g., Home, Dashboard)
│   │   ├── services   # API service calls
│   │   └── App.js     # Main React app entry point
└── README.md
```

---

## Future Enhancements

- **Third-Party Calendar Integration**:
  - Sync appointments with Google Calendar or Outlook.

- **Advanced Analytics**:
  - Provide detailed insights into appointment trends, patient no-shows, and doctor availability.

- **Multi-Language Support**:
  - Enhance accessibility by supporting multiple languages.

- **Mobile App**:
  - Develop a mobile app for on-the-go access to schedules and notifications.

---

## Contributions

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Submit a pull request with a detailed description of your changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

- **Developer**: Hariharan S
- **Email**: hariharan98704@gmail.com
- **GitHub**: [Hariharan138](https://github.com/hariharan138/)

