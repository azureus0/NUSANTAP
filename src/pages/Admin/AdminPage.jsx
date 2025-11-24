import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { MoreVertical, CheckSquare } from "lucide-react";
import Header from '../../shared/components/Header'; // Import Header
import Footer from '../../shared/components/Footer'; // Import Footer
import classNames from "classnames";
import AdminTable from "./components/AdminTable"; 

const data = [
    {
        id: 1,
        fullName: "Nayla Cahaya",
        email: "n@gmail.com",
        phone: "+62 831 2904 1912",
        donateType: "Funds",
        detail: "Rp 500.000",
        delivery: "-",
        dedication: "For ramadhan event",
        date: "Oct 31, 2025",
        status: "Pending",
        isAnonymous: true,
    },
    {
        id: 2,
        fullName: "Zahira Nayla",
        email: "z@gmail.com",
        phone: "+62 831 2904 8989",
        donateType: "Food",
        detail: "30 rice boxes",
        delivery: "Drop Off",
        dedication: "-",
        date: "Oct 30, 2025",
        status: "Processing",
        isAnonymous: true,
    },
    {
        id: 3,
        fullName: "Humaira",
        email: "h@gmail.com",
        phone: "+62 831 2904 8989",
        donateType: "Food",
        detail: "100 rice boxes",
        delivery: "Pick Up",
        dedication: "For any orphanage",
        date: "Oct 28, 2025",
        status: "Completed",
        isAnonymous: true,
    },
    {
        id: 4,
        fullName: "Adnan Azzam",
        email: "a@gmail.com",
        phone: "+62 831 2904 8989",
        donateType: "Funds",
        detail: "Rp 700.000",
        delivery: "-",
        dedication: "-",
        date: "Oct 25, 2025",
        status: "Failed",
        isAnonymous: true,
    },
];

const columnHelper = createColumnHelper();

const AdminPage = () => {

    // === DEFINISI KOLOM ===
    const columns = useMemo(
        () => [
            columnHelper.accessor("fullName", {
                header: "Full Name",
                cell: (info) => <span className="font-bold text-[#2C2F24]">{info.getValue()}</span>,
            }),
            columnHelper.accessor("email", {
                header: "Email Address",
                cell: (info) => <span className="text-gray-500 underline">{info.getValue()}</span>,
            }),
            columnHelper.accessor("phone", {
                header: "Phone Number",
            }),
            columnHelper.accessor("donateType", {
                header: "Donate Type",
            }),
            columnHelper.accessor("detail", {
                header: "Donation Detail",
            }),
            columnHelper.accessor("delivery", {
                header: "Delivery Method",
            }),
            columnHelper.accessor("dedication", {
                header: "Dedication",
                cell: (info) => <span className="truncate max-w-[150px] block" title={info.getValue()}>{info.getValue()}</span>
            }),
            columnHelper.accessor("date", {
                header: "Date Submitted",
            }),
            columnHelper.accessor("status", {
                header: "Status",
                cell: (info) => {
                    const status = info.getValue();
                    const badgeClass = classNames(
                        "px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5",
                        {
                            "bg-yellow-100 text-yellow-600": status === "Pending",
                            "bg-blue-100 text-blue-600": status === "Processing",
                            "bg-green-100 text-green-600": status === "Completed",
                            "bg-red-100 text-red-600": status === "Failed",
                        }
                    );

                    const dotClass = classNames("w-1.5 h-1.5 rounded-full", {
                        "bg-yellow-500": status === "Pending",
                        "bg-blue-500": status === "Processing",
                        "bg-green-500": status === "Completed",
                        "bg-red-500": status === "Failed",
                    });

                    return (
                        <span className={badgeClass}>
                            <span className={dotClass}></span>
                            {status}
                        </span>
                    );
                },
            }),
            columnHelper.accessor("isAnonymous", {
                header: "Anonymous",
                cell: (info) => (
                    <div className="flex justify-center">
                        {info.getValue() ? (
                            <div className="bg-[#7A2E11] rounded text-white p-0.5">
                                <CheckSquare size={16} fill="#7A2E11" stroke="white" />
                            </div>
                        ) : null}
                    </div>
                ),
            }),
            columnHelper.display({
                id: "actions",
                cell: () => (
                    <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={18} />
                    </button>
                ),
            }),
        ],
        []
    );

    return (
        // Flex Col + min-h-screen agar Footer bisa sticky di bawah jika konten sedikit
        <div className="min-h-screen flex flex-col font-DMsans bg-[#F9F9F7] pt-[120px]">
            
            {/* === 1. HEADER === */}
            <Header />

            {/* === 2. MAIN CONTENT === */}
            {/* flex-grow agar mengisi ruang kosong, p-8 untuk padding konten */}
            <main className="flex-grow p-8">
                
                {/* Judul Halaman */}
                <div className="text-center mb-8 pt-4">
                    <h1 className="text-4xl md:text-5xl font-Playfair font-medium text-[#2C2F24] mb-2">
                        Donate Submission
                    </h1>
                    <p className="text-[#737865] text-sm md:text-base">
                        Every contribution, no matter how small, helps us serve more meals.
                    </p>
                </div>

                {/* Komponen Tabel */}
                <AdminTable
                    data={data}
                    columns={columns}
                    tableName="Recent Donation"
                    lastUpdated="Oct 30, 2025"
                />
            </main>

            {/* === 3. FOOTER === */}
            <Footer />
            
        </div>
    );
};

export default AdminPage;