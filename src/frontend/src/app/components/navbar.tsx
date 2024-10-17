import { House, BarChart2, Activity, TrendingUp, PieChart, Users, Settings } from 'lucide-react';

export default function NavBar() {
  return (
    <>
        <nav className='pr-[1400px] mb-[100%]'>
            <div className='p-[20px] border-t border-gray-700 pb-[100%] h-screen bg-white rounded-xl '>
                <div className='flex py-[20px]'><House /><a href="" className='ml-2'>Dashboard</a></div>
                <div className='flex py-[20px]'><BarChart2 /><a href="" className='ml-2'>Real-Time Statistics</a></div>
                <div className='flex py-[20px]'><Activity /><a href="" className='ml-2'>Behavior Analysis</a></div>
                <div className='flex py-[20px]'><TrendingUp /><a href="" className='ml-2'>Verkehrsquellen</a></div>
                <div className='flex py-[20px]'><PieChart /><a href="" className='ml-2'>Conversion Tracking</a></div>
                <div className='flex py-[20px] '><Users /><a href="" className='ml-2'>User-Management</a></div>
                <div className='flex py-[20px]'><Settings /><a href="" className='ml-2'>Settings</a></div>
            </div>
        </nav>
    </>
  );
}
