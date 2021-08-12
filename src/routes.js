import IssueList from './IssueList.jsx';
import IssueReport from './IssueReport.jsx';
import IssueEdit from './IssueEdit.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';
import Calendar from './Calendar.jsx';
// eslint-disable-next-line import/no-named-as-default

const routes = [
  { path: '/issues/:id?', component: IssueList },
  { path: '/edit/:id', component: IssueEdit },
  { path: '/report', component: IssueReport },
  { path: '/about', component: About },
  { path: '/calendar', component: Calendar },
  { path: '*', component: NotFound },
];

export default routes;
