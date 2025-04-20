    import React from 'react';
    import Sidebar from '../Components/Sidebar';
    import Navbar from '../Components/Navbar';

    // 💾 ResultCard Component
    const ResultCard = ({ title, status, fileSize, updatedAt }) => {
    return (
        <div className="bg-[#4a5565] text-white rounded-xl p-5 w-full shadow-md hover:shadow-xl transition-all">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold capitalize">{title}</h3>
            <span className={`text-sm px-3 py-1 rounded-full cursor-pointer ${status === 'Completed' ? 'bg-[#6ca933]' : 'bg-yellow-500'}`}>
            {status}
            </span>
        </div>

        <p className="mt-3 text-sm">1 File</p>
        <p className="text-sm text-gray-300">{fileSize}</p>
        <p className="mt-2 text-xs text-gray-400">Updated {updatedAt}</p>

        <div className="mt-5 flex justify-between">
            <button className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-sm px-4 py-2 rounded-md">
            Preview
            </button>
            <button className=" bg-[#6ca933] hover:bg-[#9fce79] cursor-pointer text-sm px-4 py-2 rounded-md">
            Download Result
            </button>
        </div>
        </div>
    );
    };

    // 🏠 Main Home Component
    const Home = () => {

    const dashboardStats = [
        {
        title: "Total Uploads",
        value: 128,
        icon: "📤",
        color: "from-blue-400 to-blue-600",
        description: "Videos and audios uploaded so far."
        },
        {
        title: "Signs Generated",
        value: 92,
        icon: "🧠",
        color: "from-green-400 to-green-600",
        description: "Successful avatar sign conversions."
        },
        {
        title: "Pending Tasks",
        value: 6,
        icon: "⏳",
        color: "from-yellow-400 to-yellow-600",
        description: "Tasks currently in processing queue."
        },
        {
        title: "Conversion Success Rate",
        value: "71.9%",
        icon: "✅",
        color: "from-purple-400 to-purple-600",
        description: "Based on uploaded media."
        }
    ];

    const recentResults = [
        {
        title: "SignSpell Video Conversion 1",
        status: "Completed",
        fileSize: "164.3 KB",
        updatedAt: "Apr 17, 2025, 3:50 PM"
        },
        {
        title: "SignSpell Video Conversion 2",
        status: "Completed",
        fileSize: "697.5 KB",
        updatedAt: "Apr 18, 2025, 2:53 PM"
        },
        {
        title: "SignSpell Video Conversion 3",
        status: "Completed",
        fileSize: "697.5 KB",
        updatedAt: "Apr 20, 2025, 7:31 PM"
        }
    ];

    return (
        <>
        <Sidebar />
        <Navbar />
        <main className=' md:pl-70 pt-25'>
            <div className='p-6'>
            <div className=''>
                <p className='text-4xl font-bold leading-normal animate-bounce'>Welcome to SignSpell Dashboard</p>
                <p className='text-3xl font-bold text-[#59872f] leading-loose animate-pulse'>Voicing the Unspoken</p>
            </div>

            {/* 🧠 Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
                {dashboardStats.map((stat, index) => (
                <div
                    key={index}
                    className={`rounded-2xl p-5 text-white shadow-md bg-gradient-to-r ${stat.color} hover:scale-105 transition-all duration-300`}
                >
                    <div className="text-4xl">{stat.icon}</div>
                    <h3 className="text-xl font-semibold mt-2">{stat.title}</h3>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    <p className="text-sm mt-2 opacity-90">{stat.description}</p>
                </div>
                ))}
            </div>

            {/* 📄 Downloadable Result Cards */}
            <div className="pb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentResults.map((item, index) => (
                    <ResultCard key={index} {...item} />
                ))}
                </div>
            </div>
            </div>
        </main>
        </>
    );
    };

    export default Home;
