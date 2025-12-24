import {clsx} from "clsx";
import {twMerge} from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const getPageTitle = (path) => {
    const titles = {
        '/': 'Dashboard',
        '/messages': 'Messages',
        '/my-account': 'My Account',
        '/my-contract': 'My Contract',
        '/upcoming-work': 'Upcoming Work',
        '/applicants': 'Applicants',
        '/job-board': 'Job Board',
        '/applications': 'Applications',
        '/billing-payments': 'Billing & Payments',
        '/invoices': 'Invoices',
        '/payment-history': 'Payment History',
        '/agreements': 'Agreements',
    };
    return titles[path] || null;
};

export const getCurrentDate = () => {
    const now = new Date();
    return {
        weekday: now.toLocaleDateString('en-US', {weekday: 'long'}),
        formattedDate: now.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
    };
};
