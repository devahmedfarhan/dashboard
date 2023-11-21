// import IndividualLayout from "src/Individual/Layout/IndividualLayout";
import Layout from '../Layout/Layout'
import TableData from "../Compoments/table/TableData";
import Payroll from '../Compoments/Payroll/Payroll';
  
// export const roles = {
//     INDIVIDUAL: 'Employee',
//     ENTITY: 'Employer',
//     ADMIN: 'Admin'
// };
 
// export const PrivateRouter = [
//     { path: "/employee/*", exact: true, access: [roles.INDIVIDUAL, roles.ENTITY], name: 'Layout', component: Layout },
// ];

export const LayoutItem = [
    {
        path: "/tabledata",
        exact: true,
        component: TableData
    },
    {
        path: "/payroll",
        exact: true,
        component: Payroll
    }
];