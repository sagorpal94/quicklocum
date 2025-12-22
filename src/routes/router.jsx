import DashboardLayout from "@/layouts/dashboard-layout.jsx";
import DashboardPages from "@/pages/dashboard.jsx";
import {createBrowserRouter} from "react-router-dom";
import MessagesPage from "@/pages/messages.jsx";
import MyContracts from "@/pages/contracts/my-contracts.jsx";
import UpcomingWork from "@/pages/contracts/upcoming-work.jsx";
import Applicants from "@/pages/contracts/applicants.jsx";
import BillingPaymentsPage from "@/pages/billing-legal/billing-payments.jsx";
import InvoicesPage from "@/pages/billing-legal/invoices.jsx";
import PaymentHistoryPage from "@/pages/billing-legal/payment-history.jsx";
import AgreementsPage from "@/pages/billing-legal/agreements.jsx";
import JobBoardsPage from "@/pages/job-board/job-boards.jsx";
import ApplicantsPage from "@/pages/job-board/applications.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <DashboardPages/>,
            }, {
                path: "/messages",
                element: <MessagesPage/>,
            },

            {
                path: "/my-contract",
                element: <MyContracts/>,
            },
            {
                path: "/upcoming-work",
                element: <UpcomingWork/>,
            },
            {
                path: "/applicants",
                element: <Applicants/>,
            },

            {
                path: "/job-board",
                element: <JobBoardsPage/>,
            }, {
                path: "/applications",
                element: <ApplicantsPage/>,
            },

            {
                path: "/billing-payments",
                element: <BillingPaymentsPage/>,
            }, {
                path: "/invoices",
                element: <InvoicesPage/>,
            }, {
                path: "/payment-history",
                element: <PaymentHistoryPage/>,
            }, {
                path: "/agreements",
                element: <AgreementsPage/>,
            },

        ],
    },
]);