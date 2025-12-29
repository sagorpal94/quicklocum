import {Routes, Route} from "react-router-dom";
import DashboardLayout from "@/layouts/dashboard-layout.jsx";
import DashboardPages from "@/pages/dashboard.jsx";
import MessagesPage from "@/pages/messages.jsx";
import MyContracts from "@/pages/contracts/my-contracts.jsx";
import CreateContract from "@/pages/contracts/create-contract.jsx";
import UpcomingWork from "@/pages/contracts/upcoming-work.jsx";
import Applicants from "@/pages/contracts/applicants.jsx";
import JobBoardsPage from "@/pages/job-board/job-boards.jsx";
import ApplicationsPage from "@/pages/job-board/applications.jsx";
import BillingPaymentsPage from "@/pages/billing-legal/billing-payments.jsx";
import InvoicesPage from "@/pages/billing-legal/invoices.jsx";
import PaymentHistoryPage from "@/pages/billing-legal/payment-history.jsx";
import AgreementsPage from "@/pages/billing-legal/agreements.jsx";
import MyProfile from "@/pages/my-profile.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout/>}>
                <Route index element={<DashboardPages/>}/>
                <Route path="/messages" element={<MessagesPage/>}/>
                <Route path="/my-profile" element={<MyProfile/>}/>
                <Route path="/my-contract" element={<MyContracts/>}/>
                <Route path="/create-contract" element={<CreateContract/>}/>
                <Route path="/upcoming-work" element={<UpcomingWork/>}/>
                <Route path="/applicants" element={<Applicants/>}/>
                <Route path="/job-board" element={<JobBoardsPage/>}/>
                <Route path="/applications" element={<ApplicationsPage/>}/>
                <Route path="/billing-payments" element={<BillingPaymentsPage/>}/>
                <Route path="/invoices" element={<InvoicesPage/>}/>
                <Route path="/payment-history" element={<PaymentHistoryPage/>}/>
                <Route path="/agreements" element={<AgreementsPage/>}/>
            </Route>
        </Routes>
    )
}

export default App;
