import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

// Определяем интерфейс для пользователей
interface User {
  name: string;
  role: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // Массив пользователей с типизацией User[]
  users: User[] = [
    {
      name: 'John Doe',
      role: 'Admin',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg', // реальное фото
    },
    {
      name: 'Jane Smith',
      role: 'User',
      avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg', // реальное фото
    },
    {
      name: 'Mike Ross',
      role: 'Manager',
      avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg', // реальное фото
    },
  ];

  filteredUsers: User[] = this.users; // Для отображения отфильтрованных пользователей
  selectedUser: User | null = null; 

  constructor() {}

  ngOnInit(): void {
    // Инициализация графика активности пользователей
    const ctx = document.getElementById('usersActivityChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Active Users',
          data: [5, 10, 15, 20],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  openUserModal(user: User) {
    this.selectedUser = user;
  }

  closeUserModal() {
    this.selectedUser = null;
  }

  viewProfile(user: User) {
    this.openUserModal(user);
  }

  
  filterUsers(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(query));
  }
  messageUser(user: User) {
    console.log(`Message sent to ${user.name}`);
    this.closeUserModal(); 
  }
}
