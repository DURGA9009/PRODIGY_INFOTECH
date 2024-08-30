import React from 'react';
import './Admindashboard.css';
import { IoMdLogOut, IoIosSearch, IoIosArrowDown} from 'react-icons/io';

import {  } from 'react-icons/io'; // For the dropdown arrow
import { MdFastfood } from 'react-icons/md';
import Logo from '../assets/img/logo.png';
import Life from '../assets/img/forlife.jpg';

import Women from '../assets/img/women.png';

import { Link} from 'react-router-dom';

import { FaCheckCircle,FaSignOutAlt, FaRunning, FaBed, FaTint, FaWeight, FaSwimmingPool,FaHeartbeat,FaChalkboardTeacher, FaRegCalendarAlt, FaChartLine, FaHandsHelping, FaUserAlt, FaQuestionCircle, FaFire  } from 'react-icons/fa';
import { Bar, Line } from 'react-chartjs-2';

import 'chartjs-plugin-style'; // Make sure to install this plugin for additional styling
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  LineElement,
  PointElement
);

const yogaChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Yoga',
      data: [60, 75, 90, 105, 60, 80, 95],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
    {
      label: 'Rest',
      data: [30, 45, 65, 35, 50, 30, 40],
      backgroundColor: 'rgba(201, 203, 207, 0.6)',
    },
    {
      label: 'Daily Goal',
      data: [100, 100, 100, 100, 100, 100, 100],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
};

// Sample data for Meal Statistic line chart
const mealChartData = {
  labels: ['Salad', 'Juice', 'Food', 'Water'],
  datasets: [
    {
      label: 'Calories',
      data: [65, 59, 80, 81],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      tension: 0.4,
    },
  ],
};

// Custom bar chart options
const yogaChartOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        // Customize the legend here
      }
    },
    tooltip: {
      // Customize the tooltip here
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  elements: {
    bar: {
      borderRadius: 20, // Round corners
      backgroundColor: function(context) {
        const chart = context.chart;
        const {ctx, chartArea} = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return null;
        }
        return getGradient(ctx, chartArea);
      },
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: true
    }
  },
};

// Custom line chart options
const mealChartOptions = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  elements: {
    line: {
      tension: 0.4, // Smoothes the line
      backgroundColor: function(context) {
        const chart = context.chart;
        const {ctx, chartArea, scales} = chart;

        if (!chartArea) {
          return null;
        }
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(1, 'rgba(75, 192, 192, 0.2)');
        return gradient;
      },
    },
    point: {
      radius: 5, // Makes points larger
      backgroundColor: 'rgba(75, 192, 192, 1)',
      hoverRadius: 7, // Larger hover state
    },
  },
  plugins: {
    legend: {
      display: false, // Hides the legend
    },
    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      borderWidth: 1,
      borderRadius: 10,
      titleColor: 'white',
      bodyColor: 'white',
      titleFont: {
        size: 16,
        weight: 'bold',
      },
      bodyFont: {
        size: 14,
      },
      displayColors: false,
      callbacks: {
        title: (tooltipItems) => {
          // Customize the title
          return tooltipItems[0].label;
        },
        label: (tooltipItem) => {
          // Customize the label
          return `Calories: ${tooltipItem.formattedValue} kcal`;
        },
      },
    },
  },
};

function getGradient(ctx, chartArea) {
  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(0, 'rgba(131, 58, 180, 1)');
  gradient.addColorStop(1, 'rgba(253, 29, 29, 0.6)');
  return gradient;
}


const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { display: false },
    y: { display: false }
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  },
  elements: {
    line: {
      tension: 0.3,
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.8)'
    },
    point: {
      radius: 0
    }
  }
};

// Dummy data for the line chart
const lineChartData = {
  labels: Array(8).fill(''),
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
    }
  ]
};

// Custom card component
const Card = ({ icon, title, metric, percentage, bgColor }) => (
  <div className={`flex flex-col items-center justify-between p-4 rounded-xl shadow-md ${bgColor} text-white`}>
    <div className="flex items-center justify-between w-full">
      <div className="text-2xl">{icon}</div>
      <div className="bg-white text-xs font-semibold px-2 py-1 rounded-full text-[#10B981]">
        {percentage}
      </div>
    </div>
    <div className="my-4 w-full">
      <Line data={lineChartData} options={lineChartOptions} height={60} />
    </div>
    <div className="text-3xl font-semibold">{metric}</div>
    <div className="uppercase text-sm">{title}</div>
  </div>
);

const sleepGoalPercentage = (92 / 240) * 100;
const waterGoalPercentage = (50 / 160) * 100;
const weightGoalPercentage = (4.5 / 5) * 100;

const GoalProgress = ({ icon: Icon, title, current, goal }) => {
  const progressPercentage = (current / goal) * 100;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex items-center justify-between mb-2">
        <Icon className="text-teal-500" />
        <span className="text-sm font-semibold text-gray-700">{title}</span>
        <span className="text-sm font-semibold text-teal-500">{`${progressPercentage.toFixed(0)}%`}</span>
      </div>
      <div className="w-full bg-gray-200 rounded h-2">
        <div className="bg-teal-500 h-2 rounded" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="text-xs text-gray-500 mt-2">{`${current} / ${goal} ${title}`}</div>
    </div>
  );
};

const Task = ({ title, date, completed }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4 flex items-center justify-between">
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
      {completed && (
        <FaCheckCircle className="text-teal-500" />
      )}
    </div>
  );
};
// Then used as props

const AdminDashboard = ({ icon: Icon, title, current, goal }) => {
  
const progressPercentage = (current / goal) * 100;

  return (
    <div className="pt-28 pb-28" > 
    <div className="bg-green-200 p-10  shadow-lg flex w-full max-w-screen-2xl mx-auto">
   <div className="pr-10 rounded-lg">
    <aside className="bg-green-100 text-white w-28 space-y-9 py-7 px-2 flex flex-col items-center border-r-2 border-green-700 ">
      <div className="mb-10">
        <Link to='/'>
          <img src={Logo} alt='' /> {/* Adjusted logo size if needed */}
        </Link>
      </div>
      <nav className="flex flex-col space-y-4">
        <a href="#" className="flex flex-col items-center space-y-2 text-white hover:text-green-300 focus:text-green-300" aria-label="My Class">
          <FaChalkboardTeacher className="text-4xl" /> {/* Increased icon size */}
          <span className="text-lg">Institution</span> {/* Increased text size */}
        </a>
        <a href="#" className="flex flex-col items-center space-y-2 text-white hover:text-green-300 focus:text-green-300" aria-label="Schedule">
          <FaRegCalendarAlt className="text-4xl" /> {/* Increased icon size */}
          <span className="text-lg">Schedule</span> {/* Increased text size */}
        </a>
        <a href="#" className="flex flex-col items-center space-y-2 text-white hover:text-green-300 focus:text-green-300" aria-label="Progress">
          <FaChartLine className="text-4xl" /> {/* Increased icon size */}
          <span className="text-lg">Progress</span> {/* Increased text size */}
        </a>
        <a href="#" className="flex flex-col items-center space-y-2 text-white hover:text-green-300 focus:text-green-300" aria-label="Workshops">
          <FaHandsHelping className="text-4xl" /> {/* Increased icon size */}
          <span className="text-lg">Workshops</span> {/* Increased text size */}
        </a>
        <a href="/admindata" className="flex flex-col items-center space-y-2 text-white hover:text-green-300 focus:text-green-300" aria-label="Profile">
          <FaUserAlt className="text-4xl" /> {/* Increased icon size */}
          <span className="text-lg">Course</span> {/* Increased text size */}
        </a>
        <a href="#" className="flex flex-col items-center space-y-2 text-white hover:text-green-300 focus:text-green-300 mt-auto" aria-label="Help">
          <FaQuestionCircle className="text-4xl" /> {/* Increased icon size */}
          <span className="text-lg">Help</span> {/* Increased text size */}
        </a>
      </nav>

      <img
          
          src={Life}
          alt="Profile"
        />
        
    </aside>
    </div>
   

      {/* Main content */}

      <div className="flex-1 flex flex-col">
      <main className="flex-1 bg-white p-8">
      <div className="top-bar-container">
  <h1 className="text-3xl font-bold text-black">Dashboard</h1>
  <div className="flex items-center bg-teal-100 p-3 rounded-full">
    <IoIosSearch className="text-teal-500" />
    <input type="text" placeholder="Search" className="bg-teal-100 outline-none pl-2 text-teal-600" />
  </div>
</div>

      <header className="bg-orange-100 flex justify-between items-center mb-8 p-4 rounded-tl-3xl rounded-tr-3xl shadow-lg">
      {/* Left Section with Title and Greetings */}
      
      <div className="flex items-start">
        <div className="flex flex-col justify-center">
          
          <div className="mt-2">
            <p className="h2 max-w-[295px] md:max-w-none text-black">Hello Admin</p>
            <p className="text-md text-teal-400">Build Your Management!</p>
          </div>
        </div>
       
      </div>

      {/* Right Section with Search and Logout */}
       
        <img src={Women} alt="Yoga Pose" className="w-28 h-28 ml-8 mt-8 relative" />
        
           
    </header>


        {/* Stats and Goals */}
        <div className="grid grid-cols-12 gap-4">
      {/* Large card for Yoga Activity */}
      <div className="col-span-8 bg-green-100 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Yoga Activity</h2>
        <div className="h-64">
          <Bar data={yogaChartData} options={yogaChartOptions} />
        </div>
      </div>

      {/* Small card for Meal Statistics */}
      <div className="col-span-4 bg-green-500 p-6 rounded-lg shadow text-white">
        <h2 className="text-lg font-semibold mb-4">Meal Statistic</h2>
        <div className="h-64">
          <Line data={mealChartData} options={mealChartOptions} />
        </div>
      </div>

          {/* Heart Rate */}
       {/* Ensure this container is wide enough */}
     
        <div className=" col-span-3 flex-none bg-blue-500 p-4 m-2 shadow-lg text-white">
        <Card
          icon={<FaFire />}
          title="Energy Burn"
          metric="120 kcal"
          percentage="+18%"
          bgColor="bg-[#60A5FA]" // Custom color, use the color from your project
        /></div>
        <div className="col-span-3 flex-none bg-purple-500 p-4 m-2 shadow-lg text-white">
        <Card
          icon={<FaSwimmingPool />}
          title="Swimming"
          metric="01 hrs"
          percentage="+30%"
          bgColor="bg-[#818CF8]" // Custom color, use the color from your project
        />
        </div>
        <div className="col-span-3  flex-none bg-green-500 p-4 m-2 shadow-lg text-white">
        <Card
          icon={<FaHeartbeat />}
          title="Heart Rate"
          metric="75 BPM"
          percentage="+12%"
          bgColor="bg-[#34D399]" // Tailwind CSS doesn't support dynamic classes out of the box, so use a fixed class or adjust your config
        />
        </div>
      </div>
   
   
        
      </main>
      </div>
       
      <div className="pl-16"> 
      <aside className="w-72 h-screen bg-teal-100 p-6 flex flex-col bg-green-100 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-700">Yola.</h1>
        <FaSignOutAlt className="text-gray-600 cursor-pointer" />
      </div>
      
      {/* Profile Section */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          className="h-16 w-16 rounded-full"
          src={Women}
          alt="Profile"
        />
        <div>
          <p className="text-lg text-gray-700 font-semibold">Janee Mortensen</p>
          <p className="text-sm text-gray-500">Trainer</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-between text-gray-700 mb-6">
        <div className="text-center">
          <p className="font-bold">5.3 F</p>
          <p className="text-xs text-gray-500">Height</p>
        </div>
        <div className="text-center">
          <p className="font-bold">75 K</p>
          <p className="text-xs text-gray-500">Weight</p>
        </div>
        <div className="text-center">
          <p className="font-bold">25 Y</p>
          <p className="text-xs text-gray-500">Age</p>
        </div>
      </div>

      {/* Monthly Goals Section */}
      <div className="flex-grow">
        <h3 className="text-gray-700 font-semibold mb-4">Your Monthly Goals</h3>
        
        {/* Sleep Goal */}
        <GoalProgress
          icon={FaBed}
          title="Sleep"
          current={92}
          goal={240}
        />
        
        {/* Water Goal */}
        <GoalProgress
          icon={FaTint}
          title="Drink Water"
          current={50}
          goal={160}
        />
        
        {/* Weight Goal */}
        <GoalProgress
          icon={FaWeight}
          title="Lose Weight"
          current={4.5}
          goal={5}
        />
      </div>
      
{/* Tasks Section */}
<div className="mb-6">
        <h3 className="text-gray-700 font-semibold mb-4">Tasks</h3>
        <Task
          title="Drink Water"
          date="15/11/2019 5:00 pm"
          completed={true}
        />
        {/* Repeat for other tasks */}
      </div>
      
      
    </aside>
       
    </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
