import IssueList from './IssueList.jsx';
import IssueReport from './IssueReport.jsx';
import IssueEdit from './IssueEdit.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';
import ContactCalendar from './ContactCalendar.jsx';
import Homepage from './Homepage.jsx';
/* import CreateTodo from './todocomponents/create-todo.component.jsx';
import EditTodo from './todocomponents/edit-todo.component.jsx';
import TodoList from './todocomponents/todo-list.component.jsx'; */
// eslint-disable-next-line import/no-named-as-default

const routes = [
  { path: '/issues/:id?', component: IssueList },
  { path: '/edit/:id', component: IssueEdit },
  { path: '/report', component: IssueReport },
  { path: '/about', component: About },
  { path: '/calendar', component: ContactCalendar },
  { path: '/homepage', component: Homepage },
/*   { path: '/create-todo', component: CreateTodo },
  { path: '/edit-todo/:id', component: EditTodo },
  { path: '/todo-list', component: TodoList }, */
  { path: '*', component: NotFound },
];

export default routes;
