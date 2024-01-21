import { useState, useEffect } from 'react';
import { Reminder } from '../types/reminder';
import reminderService from '../services/reminderService';
import NewReminder from '../components/NewReminder';
import ReminderList from '../components/ReminderList';

function ReminderPage() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  const deleteReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className='page'>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onDeleteReminder={deleteReminder} />
    </div>
  );
}

export default ReminderPage;
