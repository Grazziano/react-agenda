import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

export default function CalendarComponent({
  selectedDate,
  setSelectedDate,
}: CalendarProps) {
  return (
    <div>
      <Calendar onClickDay={setSelectedDate} />
      {selectedDate && (
        <p>Data selecionada: {selectedDate.toLocaleDateString('pt-BR')}</p>
      )}
    </div>
  );
}
