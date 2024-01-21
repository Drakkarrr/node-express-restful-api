import axios from 'axios';
import { Reminder } from '../types/reminder';

class ReminderService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  async getReminders() {
    const response = await this.http.get<Reminder[]>('/todos');
    return response.data;
  }
}

export default new ReminderService();
