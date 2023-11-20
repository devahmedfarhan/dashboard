import IndividualLayout from "src/Individual/Layout/IndividualLayout";
import Layout from '../Layout/Layout'
  
export const roles = {
    INDIVIDUAL: 'Employee',
    ENTITY: 'Employer',
    ADMIN: 'Admin'
};
 
export const PrivateRouter = [
    { path: "/employee/*", exact: true, access: [roles.INDIVIDUAL, roles.ENTITY], name: 'Layout', component: Layout },
];