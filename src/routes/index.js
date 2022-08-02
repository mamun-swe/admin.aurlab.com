
import {
    PieChart,
    List,
    Users
} from "react-feather"

import Dashboard from "../pages/dashboard"

import CategoryIndex from "../pages/category"
import CategoryEdit from "../pages/category/edit"
import CategoryStore from "../pages/category/store"

import ResearcherIndex from "../pages/researcher"

export const appRoutes = [
    {
        title: "Dashboard",
        name: "dashboard",
        path: "/dashboard/",
        exact: true,
        inDrawer: true,
        icon: <PieChart size={20} />,
        component: Dashboard
    },

    // Category
    {
        title: "Category",
        name: "category index",
        path: "/dashboard/category",
        exact: true,
        inDrawer: true,
        icon: <List size={20} />,
        component: CategoryIndex
    },
    {
        title: "New Category",
        name: "category store",
        path: "/dashboard/category/store",
        exact: true,
        inDrawer: false,
        icon: null,
        component: CategoryStore
    },
    {
        title: "Edit Category",
        name: "category edit",
        path: "/dashboard/category/:id/edit",
        exact: true,
        inDrawer: false,
        icon: null,
        component: CategoryEdit
    },
    // Researcher
    {
        title: "Researcher",
        name: "researcher index",
        path: "/dashboard/researcher",
        exact: true,
        inDrawer: true,
        icon: <Users size={20} />,
        component: ResearcherIndex
    },
]