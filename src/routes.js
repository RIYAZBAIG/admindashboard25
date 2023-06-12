/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
// import Notifications from "./index";
import Rtl from "views/Rtl.js";
import TableList from "./views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import PieChart from "./variables/PieChart.js";
import ApiFetch1 from "./variables/ApiFetch1.js";
import { bgcolor } from "@mui/system";
// import { Chart } from "react-chartjs-2";
// import Chart from "variables/Chart";
import ChartDataViz from "variables/ChartDataViz.js";
import LineChart from "variables/LineChart.js";
import BarChart from "variables/BarChart.js";

var routes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  // {
  //   path: "/Chart",
  //   name: "Chart",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: Dashboard,
  //   layout: "/Chart"
  // },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  // {
  //   path: "/Chart",
  //   name: "Chart",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Chart,
  //   layout: "/admin"
  // },
 
  {
    path: "/PieChart",
    name: "PieChart ",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: PieChart,
    layout: "/admin"
  },
  {
    path: "/ApiFetch1",
    name: "ApiFetch1 ",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: ApiFetch1,
    layout: "/admin"
  },
  {
    path: "/BarChart",
    name: "BarChart ",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: BarChart,
    layout: "/admin"
  },
  {
    path: "/LineChart",
    name: "LineChart ",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: LineChart,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    // component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl"
  },
  {
    path: "/dashboard",
    name: "Dashboard Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Dashboard,
    layout: "/dashboard"
  },
  {
    path: "/ChartDataViz",
    name: "ChartDataViz",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: ChartDataViz,
    layout: "/ChartDataViz"
  },
];

export default routes;










