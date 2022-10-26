import React from 'react';
import './Dashbord.css';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashbord = () => {
    const data = [
        {
            month: "Mar",
            investment: 4000,
            sell: 2400,
            revenue: 2400
        },
        {
            month: "Apr",
            investment: 3000,
            sell: 1398,
            revenue: 2210
        },
        {
            month: "May",
            investment: 2000,
            sell: 9800,
            revenue: 2290
        },
        {
            month: "Jun",
            investment: 2780,
            sell: 3908,
            revenue: 2000
        },
        {
            month: "Jul",
            investment: 1800,
            sell: 4800,
            revenue: 2181
        },
        {
            month: "Aug",
            investment: 2390,
            sell: 3800,
            revenue: 2500
        }

    ];
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
    return (
        <div className='chart'>
             <div className='chart-title single-chart'>
                <h1>Month Wise Sell</h1>
                {/* Line chart */}

                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d"></Line>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8"></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                </LineChart>
            </div>
            <div className='single-chart'>
                <h1>Investment VS Revenue</h1>
                <AreaChart width={600} height={300} data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <YAxis></YAxis>
                    <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
                    <Legend></Legend>
                </AreaChart>

            </div>
            <div className='single-chart'>
                <h1>Investment VS Revenue</h1>
                <BarChart width={600} height={300} data={data}>
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
            <div className='single-chart'>
            <h1>Investment VS Revenue</h1>
            <PieChart width={600} height={300}>
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
            </div>
        </div>
    );
};

export default Dashbord;