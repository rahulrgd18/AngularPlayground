import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NotesFolderComponent } from './components/notes-folder/notes-folder.component';
import { NotesComponent } from './components/notes-folder/note-list/notes/notes.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
    // {path: '', component: TodoComponent},
    {path: '', component: CalendarComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'counter', component: CounterComponent},
    {path: 'notes-folder', component: NotesFolderComponent},
    {path: 'notes', component: NotesComponent},
    {path: 'list', component: ListComponent},
    {path: 'search', component: SearchComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'calendar', component: CalendarComponent},
    // {path: 'calendar', component: CalendarComponent}
];
