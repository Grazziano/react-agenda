import { useState } from 'react';
import CalendarComponent from './components/CalendarComponent';
import AppointmentModal from './components/AppointmentModal';
import './App.css';

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
    <div>
      <h1>Agenda</h1>
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
      <div>
        <h2>Compromissos</h2>
        {appointments.map((appointment, index) => (
          <div key={index}>
            <strong>{appointment.date}</strong>: {appointment.time} -{' '}
            {appointment.description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
