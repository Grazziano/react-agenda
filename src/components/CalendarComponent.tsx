import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../styles/CalendarComponent.module.css';

interface CalendarProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

export default function CalendarComponent({
  selectedDate,
  setSelectedDate,
}: CalendarProps) {
  return (
    <div className={styles.calendarContainer}>
      <Calendar onClickDay={setSelectedDate} />
      {selectedDate && (
        <p className={styles.selectedDate}>
          Data selecionada: {selectedDate.toLocaleDateString('pt-BR')}
        </p>
      )}
    </div>
  );
}
