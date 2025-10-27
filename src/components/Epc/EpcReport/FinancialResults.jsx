import React, { useState } from 'react';

// Helper function to extract the year from a date string like "Month Day, Year"
const getYearFromDateString = (dateString) => {
    try {
        // Split by comma, take the last part (the year), trim whitespace, and parse as integer
        const year = parseInt(dateString.split(',').pop().trim(), 10);
        // Return the year if it's a valid number, otherwise null
        return isNaN(year) ? null : year;
    } catch (error) {
        console.error("Error parsing date string:", dateString, error);
        return null;
    }
};

// Sample data for financial reports.
// Extended with more entries and covering different years.
const reportData = [
    // Reports for 2023
    {
        id: 8,
        date: 'August 2, 2023',
        title: 'Invera Reports Second Quarter 2023 Financial Results',
        description: 'Invera Group Inc. (NYSE: INV) announced its financial results for the second quarter ended July 1, 2023. Revenue increased by 7% year-over-year, driven by strong demand in our Industrial segment.',
        pdfUrl: '/path/to/q2-2023-report.pdf',
    },
    {
        id: 7,
        date: 'May 5, 2023',
        title: 'Invera Reports First Quarter 2023 Financial Results',
        description: 'Invera Group Inc. (NYSE: INV) today reported financial results for the first quarter ended April 1, 2023. Net sales grew 6% to \$1.25 billion, with notable growth in the Aerospace division.',
        pdfUrl: '/path/to/q1-2023-report.pdf',
    },
    // Reports for 2022
    {
        id: 6,
        date: 'February 10, 2023', // This date represents the release of FY2022 results
        title: 'Invera Reports Fourth Quarter and Full Year 2022 Financial Results',
        description: 'Invera Group Inc. (NYSE: INV) announced results for the fourth quarter and full year ended December 31, 2022. Full year net sales increased 9% to \$5.0 billion.',
        pdfUrl: '/path/to/fy2022-report.pdf',
    },
    {
        id: 1,
        date: 'October 7, 2022',
        title: 'Invera Reports Third Quarter 2022 Financial Results',
        description: 'Invera Group Inc. (NYSE: INV), a global provider of highly engineered products, announced financial results for the third quarter of 2022. Aerospace continued to show resilience with strong order intake.',
        pdfUrl: '/path/to/q3-2022-report.pdf',
    },
    {
        id: 2,
        date: 'August 1, 2022',
        title: 'Invera Reports Second Quarter 2022 Financial Results',
        description: 'Invera Group Inc. (NYSE: INV) announced its financial results for the second quarter ended July 2, 2022. The company reported net sales of \$1.2 billion, an increase of 5% year-over-year.',
        pdfUrl: '/path/to/q2-2022-report.pdf',
    },
    {
        id: 3,
        date: 'May 3, 2022',
        title: 'Invera Reports First Quarter 2022 Financial Results',
        description: 'Invera Group Inc. (NYSE: INV) today reported financial results for the first quarter ended April 2, 2022. Revenue for the quarter increased 8% to \$1.15 billion, driven by strong performance in the Energy sector.',
        pdfUrl: '/path/to/q1-2022-report.pdf',
    },
    // Reports for 2021
    {
        id: 4,
        date: 'February 1, 2022', // This date represents the release of FY2021 results
        title: 'Invera Reports Fourth Quarter and Full Year 2021 Financial Results',
        description: 'Invera Group Inc. (NYSE: INV) today announced results for the fourth quarter and full year ended December 31, 2021. Full year net sales grew 10% to \$4.5 billion.',
        pdfUrl: '/path/to/fy2021-report.pdf',
    },
     {
        id: 5,
        date: 'November 2, 2021',
        title: 'Invera Reports Third Quarter 2021 Financial Results',
        description: 'Invera Group Inc. (NYSE: INV) today reported financial results for the third quarter ended October 2, 2021. Net sales were \$1.1 billion, up 6% compared to the prior year period.',
        pdfUrl: '/path/to/q3-2021-report.pdf',
    },
    // Reports for 2020
    {
        id: 9,
        date: 'February 3, 2021', // This date represents the release of FY2020 results
        title: 'Invera Reports Fourth Quarter and Full Year 2020 Financial Results',
        description: 'Invera Group Inc. (NYSE: INV) announced its financial results for the fourth quarter and full year ended December 31, 2020. Despite challenging market conditions, full year net sales were \$4.1 billion.',
        pdfUrl: '/path/to/fy2020-report.pdf',
    },
    // Add more reports as needed
];

// Navigation links for fiscal years. Changed to simple calendar years for easier filtering.
const fiscalYearsNav = ['2023', '2022', '2021', '2020'];

// Reusable component for a single report card.
const ReportCard = ({ report }) => {
    return (
        <div className="bg-[#012337] rounded-xl shadow-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform">
            <p className="text-xs sm:text-sm text-gray-400 mb-2 font-medium">{report.date}</p>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 leading-snug line-clamp-2">{report.title}</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed line-clamp-3">{report.description}</p>
            <a
                href={report.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75"
            >
                {/* SVG icon for download */}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span className="text-xs sm:text-sm">Download PDF</span>
            </a>
        </div>
    );
};

const FinancialResults = () => {
    // Initialize activeYear state to '2022' as it has the most data currently.
    const [activeYear, setActiveYear] = useState('2022');

    const handleYearClick = (year) => {
        setActiveYear(year);
        console.log(`Filtering reports for year: ${year}`);
    };

    // Filter reports based on the active year selected in the navigation.
    const filteredReports = reportData.filter(report => {
        const reportYear = getYearFromDateString(report.date);
        // Check if reportYear is valid and matches the activeYear state
        return reportYear !== null && reportYear.toString() === activeYear;
    });

    return (
        <div className="min-h-screen  text-gray-200 font-sans antialiased p-4 md:p-8 lg:p-12">
            <header className="mb-16 text-center">
                <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CDAB65] to-[#F5D5A2] mb-4 font-noir">
                    FINANCIAL RESULTS
                </h1>

                <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
                    {fiscalYearsNav.map((year) => (
                        <a
                            key={year} // Use year as key since it's unique
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                handleYearClick(year);
                            }}
                            className={`text-lg font-medium transition-colors duration-300 hover:text-[#F5D5A2] ${
                                activeYear === year
                                    ? 'text-[#CDAB65] underline underline-offset-4 decoration-2'
                                    : 'text-gray-400'
                            }`}
                        >
                            {year}
                        </a>
                    ))}
                </nav>
            </header>

            <main className="grid grid-cols-1 gap-8 max-w-screen-xl mx-auto">
                {filteredReports.length > 0 ? (
                    filteredReports.map(report => (
                        <ReportCard key={report.id} report={report} />
                    ))
                ) : (
                    <div className="text-center py-10 text-gray-500">
                        No financial reports available for {activeYear}.
                    </div>
                )}
            </main>

            
        </div>
    );
};

export default FinancialResults;