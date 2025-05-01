import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  selectedMonth = new Date().getMonth();
  selectedYear = new Date().getFullYear();
  selectedDateDisplay = '';
  calendarMatrix: (number | null)[][] = [];

  ngOnInit(): void {
    this.updateCalendar();
  }

  updateCalendar() {
    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1);
    const totalDays = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
    const startDayIndex = (firstDay.getDay() + 6) % 7; // Monday as first day

    let dates: (number | null)[] = Array(startDayIndex).fill(null);
    for (let i = 1; i <= totalDays; i++) {
      dates.push(i);
    }

    while (dates.length % 7 !== 0) {
      dates.push(null);
    }

    this.calendarMatrix = [];
    for (let i = 0; i < dates.length; i += 7) {
      this.calendarMatrix.push(dates.slice(i, i + 7));
    }
  }

  prevMonth() {
    if (this.selectedMonth === 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
    this.updateCalendar();
  }

  nextMonth() {
    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
    this.updateCalendar();
  }

  openDateModal(day: number) {
    this.selectedDateDisplay = `${day} ${this.months[this.selectedMonth]} ${this.selectedYear}`;
    const modal = new bootstrap.Modal(document.getElementById('dateModal'));
    modal.show();
  }
}
