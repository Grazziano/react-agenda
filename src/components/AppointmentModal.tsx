import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/AppointmentModal.module.css';

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
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      className={styles.modalContent}
    >
      <h2 className={styles.modalHeader}>Novo Compromisso</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Hora:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Descrição:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Adicionar
        </button>
        <button
          type="button"
          onClick={closeModal}
          className={`${styles.button} ${styles.cancelButton}`}
        >
          Cancelar
        </button>
      </form>
    </Modal>
  );
}
