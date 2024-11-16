import React, { useState } from 'react';
import Modal from 'react-modal';

interface AppointmentModalProps {
  selectedDate: Date;
  addAppointment: (appointment: {
    date: string;
    time: string;
    description: string;
  }) => void;
  closeModal: () => void;
}

export default function AppointmentModal({
  selectedDate,
  addAppointment,
  closeModal,
}: AppointmentModalProps) {
  const [time, setTime] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addAppointment({
      date: selectedDate.toLocaleDateString('pt-BR'),
      time,
      description,
    });
    closeModal();
  };

  return (
    <Modal isOpen={true} onRequestClose={closeModal}>
      <h2>Novo Compromisso</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Hora:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <label>
          Descrição:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Adicionar</button>
        <button type="button" onClick={closeModal}>
          Cancelar
        </button>
      </form>
    </Modal>
  );
}
