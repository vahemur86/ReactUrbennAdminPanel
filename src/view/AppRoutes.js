import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './shared/Spinner';
const Login = lazy(() => import('./user-pages/Login2'));
const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));
// const KanbanBoard = lazy(() => import('./components/apps/KanbanBoard'));
// const Chats = lazy(() => import('./components/apps/Chats'));
// const TodoList = lazy( () => import('./components/apps/TodoList'));
//
// const Accordions = lazy(() => import('./Ui/basic-ui/Accordions'));
// const Buttons = lazy(() => import('./Ui/basic-ui/Buttons'));
// const Badges = lazy(() => import('./Ui/basic-ui/Badges'));
// const Breadcrumbs = lazy(() => import('./Ui/basic-ui/Breadcrumbs'));
// const Dropdowns = lazy(() => import('./Ui/basic-ui/Dropdowns'));
// const Modals = lazy(() => import('./Ui/basic-ui/Modals'));
// const Progress = lazy(() => import('./Ui/basic-ui/Progress'));
// const Paginations = lazy(() => import('./Ui/basic-ui/Paginations'));
// const TabsPage = lazy(() => import('./Ui/basic-ui/TabsPage'));
// const Typography = lazy(() => import('./Ui/basic-ui/Typography'));
// const Tooltips = lazy(() => import('./Ui/basic-ui/Tooltips'));
// const Popups = lazy(() => import('./Ui/basic-ui/Popups'));
//
// const Dragula = lazy(() => import('./Ui/advanced-ui/Dragula'));
// const Clipboard = lazy(() => import('./Ui/advanced-ui/Clipboards'));
// const ContextMenu = lazy(() => import('./Ui/advanced-ui/ContextMenus'));
// const Sliders = lazy(() => import('./Ui/advanced-ui/Sliders'));
// const Carousel = lazy(() => import('./Ui/advanced-ui/Carousel'));
// const Loaders = lazy(() => import('./Ui/advanced-ui/Loaders'));
// const TreeView = lazy(() => import('./Ui/advanced-ui/TreeView'));
//
// const BasicElements = lazy(() => import('./components/form-elements/BasicElements'));
// const AdvancedElements = lazy(() => import('./components/form-elements/AdvancedElements'));
// const Validation = lazy(() => import('./components/form-elements/Validation'));
// const Wizard = lazy(() => import('./components/form-elements/Wizard'));
//
// const BasicTable = lazy(() => import('./components/tables/BasicTable'));
// const DataTable = lazy(() => import('./components/tables/DataTables'));
// const ReactTable = lazy(() => import('./components/tables/ReactTable'));
// const SortableTable = lazy(() => import('./components/tables/SortableTable'));
//
// const VectorMap = lazy(() => import('./components/maps/VectorMap'));
// const SimpleMap = lazy(() => import('./components/maps/SimpleMap'));
//
// const Notifications = lazy(() => import('./components/notifications/Notifications'));
//
// const Mdi = lazy(() => import('./icons/Mdi'));
// const FlagIcons = lazy(() => import('./icons/FlagIcons'));
// const FontAwesome = lazy(() => import('./icons/FontAwesome'));
// const SimpleLine = lazy(() => import('./icons/SimpleLine'));
// const Themify = lazy(() => import('./icons/Themify'));
// const TypIcons = lazy(() => import('./icons/TypIcons'));
//
// const TextEditors = lazy(() => import('./components/editors/TextEditors'));
// const CodeEditor = lazy(() => import('./components/editors/CodeEditor'));
//
// const ChartJs = lazy(() => import('./components/charts/ChartJs'));
// const C3Charts = lazy(() => import('./components/charts/C3Charts'));
// const Chartist = lazy(() => import('./components/charts/Chartist'));
// const GoogleCharts = lazy(() => import('./components/charts/GoogleCharts'));
// const SparkLineCharts = lazy(() => import('./components/charts/SparkLineCharts'));
// const GuageChart = lazy(() => import('./components/charts/GuageChart'));
//
// const Error404 = lazy(() => import('./components/error-pages/Error404'));
// const Error500 = lazy(() => import('./components/error-pages/Error500'));
//
// const Login2 = lazy(() => import('./user-pages/Login2'));
// const Register1 = lazy(() => import('./user-pages/Register'));
// const Register2 = lazy(() => import('./user-pages/Register2'));
// const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));
//
// const BlankPage = lazy(() => import('./components/general-pages/BlankPage'));
// const Profile = lazy(() => import('./components/general-pages/Profile'));
// const Faq = lazy(() => import('./components/general-pages/Faq'));
// const Faq2 = lazy(() => import('./components/general-pages/Faq2'));
// const NewsGrid = lazy(() => import('./components/general-pages/NewsGrid'));
// const Timeline = lazy(() => import('./components/general-pages/Timeline'));
// const SearchResults = lazy(() => import('./components/general-pages/SearchResults'));
// const Portfolio = lazy(() => import('./components/general-pages/Portfolio'));
//
// const Invoice = lazy(() => import('./components/ecommerce/Invoice'));
// const Pricing = lazy(() => import('./components/ecommerce/Pricing'));
// const ProductCatalogue = lazy(() => import('./components/ecommerce/ProductCatalogue'));
// const ProjectList = lazy(() => import('./components/ecommerce/ProjectList'));
//
// const Email = lazy(() => import('./components/apps/Email'));
// const Calendar = lazy(() => import('./components/apps/Calendar'));
// const Gallery = lazy(() => import('./components/apps/Gallery'));
// const Orders = lazy(() => import('./components/ecommerce/Orders'));


// const Widgets = lazy(() => import('./widgets/Widgets'));
class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>

            <Route path="/user-pages/login-1" component={ Login } />
            <Route exact path="/dashboard" component={ Dashboard } />
            <Redirect to="/user-pages/login-1" />
       {/*   <Route path="/user-pages/login-2" component={ Login2 } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/register-2" component={ Register2 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />*/}



          {/*<Route exact path="/widgets" component={ Widgets } />*/}

          {/*<Route exact path="/apps/kanban-board" component={ KanbanBoard } />*/}
          {/*<Route exact path="/apps/todo-list" component={ TodoList } />*/}
          {/*<Route exact path="/apps/chats" component={ Chats } />*/}

          {/*<Route path="/basic-ui/accordions" component={ Accordions } />*/}
          {/*<Route path="/basic-ui/buttons" component={ Buttons } />*/}
          {/*<Route path="/basic-ui/badges" component={ Badges } />*/}
          {/*<Route path="/basic-ui/breadcrumbs" component={ Breadcrumbs } />*/}
          {/*<Route path="/basic-ui/dropdowns" component={ Dropdowns } />*/}
          {/*<Route path="/basic-ui/modals" component={ Modals } />*/}
          {/*<Route path="/basic-ui/progressbar" component={ Progress } />*/}
          {/*<Route path="/basic-ui/pagination" component={ Paginations } />*/}
          {/*<Route path="/basic-ui/tabs" component={ TabsPage } />*/}
          {/*<Route path="/basic-ui/typography" component={ Typography } />*/}
          {/*<Route path="/basic-ui/tooltips" component={ Tooltips } />*/}
          {/*<Route path="/basic-ui/popups" component={ Popups } />*/}

          {/*<Route path="/advanced-ui/dragula" component={ Dragula } />*/}
          {/*<Route path="/advanced-ui/clipboard" component={ Clipboard } />*/}
          {/*<Route path="/advanced-ui/context-menu" component={ ContextMenu } />*/}
          {/*<Route path="/advanced-ui/sliders" component={ Sliders } />*/}
          {/*<Route path="/advanced-ui/carousel" component={ Carousel } />*/}
          {/*<Route path="/advanced-ui/loaders" component={ Loaders } />*/}
          {/*<Route path="/advanced-ui/tree-view" component={ TreeView } />*/}

          {/*<Route path="/form-Elements/basic-elements" component={ BasicElements } />*/}
          {/*<Route path="/form-Elements/advanced-elements" component={ AdvancedElements } />*/}
          {/*<Route path="/form-Elements/validation" component={ Validation } />*/}
          {/*<Route path="/form-Elements/wizard" component={ Wizard } />*/}

          {/*<Route path="/tables/basic-table" component={ BasicTable } />*/}
          {/*<Route path="/tables/data-table" component={ DataTable } />*/}
          {/*<Route path="/tables/react-table" component={ ReactTable } />*/}
          {/*<Route path="/tables/sortable-table" component={ SortableTable } />*/}

          {/*<Route path="/maps/vector-map" component={ VectorMap } />*/}
          {/*<Route path="/maps/simple-map" component={ SimpleMap } />*/}

          {/*<Route path="/notifications" component={ Notifications } />*/}

          {/*<Route path="/icons/mdi" component={ Mdi } />*/}
          {/*<Route path="/icons/flag-icons" component={ FlagIcons } />*/}
          {/*<Route path="/icons/font-awesome" component={ FontAwesome } />*/}
          {/*<Route path="/icons/simple-line" component={ SimpleLine } />*/}
          {/*<Route path="/icons/themify" component={ Themify } />*/}
          {/*<Route path="/icons/typicons" component={ TypIcons } />*/}

          {/*<Route path="/editors/text-editors" component={ TextEditors } />*/}
          {/*<Route path="/editors/code-editor" component={ CodeEditor } />*/}

          {/*<Route path="/icons/themify" component={ Themify } />*/}

          {/*<Route path="/charts/chart-js" component={ ChartJs } />*/}
          {/*<Route path="/charts/c3-chart" component={ C3Charts } />*/}
          {/*<Route path="/charts/chartist" component={ Chartist } />*/}
          {/*<Route path="/charts/google-charts" component={ GoogleCharts } />*/}
          {/*<Route path="/charts/sparkline-charts" component={ SparkLineCharts } />*/}
          {/*<Route path="/charts/guage-chart" component={ GuageChart } />*/}



          {/*<Route path="/error-pages/error-404" component={ Error404 } />*/}
          {/*<Route path="/error-pages/error-500" component={ Error500 } />*/}

          {/*<Route path="/general-pages/blank-page" component={ BlankPage } />*/}
          {/*<Route path="/general-pages/profile" component={ Profile } />*/}
          {/*<Route path="/general-pages/faq-1" component={ Faq } />*/}
          {/*<Route path="/general-pages/faq-2" component={ Faq2 } />*/}
          {/*<Route path="/general-pages/news-grid" component={ NewsGrid } />*/}
          {/*<Route path="/general-pages/timeline" component={ Timeline } />*/}
          {/*<Route path="/general-pages/search-results" component={ SearchResults } />*/}
          {/*<Route path="/general-pages/portfolio" component={ Portfolio } />*/}

          {/*<Route path="/ecommerce/invoice" component={ Invoice } />*/}
          {/*<Route path="/ecommerce/pricing" component={ Pricing } />*/}
          {/*<Route path="/ecommerce/product-catalogue" component={ ProductCatalogue } />*/}
          {/*<Route path="/ecommerce/project-list" component={ ProjectList } />*/}
          {/*<Route path="/ecommerce/orders" component={ Orders } />*/}

          {/*<Route path="/apps/email" component={ Email } />*/}
          {/*<Route path="/apps/calendar" component={ Calendar } />*/}
          {/*<Route path="/apps/gallery" component={ Gallery } />*/}



        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
