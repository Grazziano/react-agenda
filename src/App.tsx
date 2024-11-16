import { useState } from 'react';
import CalendarComponent from './components/CalendarComponent';
import AppointmentModal from './components/AppointmentModal';
import styles from './styles/App.module.css';

interface Appointment {
  date: string;
  time: string;
  description: string;
}

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Agenda</h1>
      <CalendarComponent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {selectedDate && (
        <AppointmentModal
          selectedDate={selectedDate}
          addAppointment={addAppointment}
          closeModal={() => setSelectedDate(null)}
        />
      )}
      <div className={styles.appointments}>
        <h2>Compromissos</h2>
        {appointments.map((appointment, index) => (
          <div key={index} className={styles.appointmentItem}>
            <strong className={styles.appointmentDate}>
              {appointment.date}
            </strong>
            : {appointment.time} - {appointment.description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
