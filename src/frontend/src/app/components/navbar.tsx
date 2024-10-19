import { House, BarChart2, Activity, TrendingUp, PieChart, Users, Settings } from 'lucide-react';

type siteprob = {
  site: string;
}

export default function NavBar({ site }: siteprob) {
  return (
    <>
      <nav className='fixed top-0 left-0 h-screen pr-[82%]'> 
        <div className='p-[20px] border-t border-slate-700 h-screen bg-white rounded-xl'>
          <li className='list-none'>
            <ul>
              <div className={`flex p-[20px] rounded-xl transition-all duration-500 ease-out ${site === 'dashboard' ? 'bg-slate-500 text-white' : 'hover:bg-slate-500 hover:text-white'} my-1`}>
                <House />
                <a href="/" className='ml-2'>Dashboard</a>
              </div>
            </ul>
            <ul>
              <div className={`flex p-[20px] rounded-xl transition-all duration-500 ease-out ${site === 'realtime' ? 'bg-slate-500 text-white' : 'hover:bg-slate-500 hover:text-white'} my-1`}>
                <BarChart2 />
                <a href="/realtime" className='ml-2'>Real-Time Statistics</a>
              </div>
            </ul>
            <ul>
              <div className={`flex p-[20px] rounded-xl transition-all duration-500 ease-out ${site === 'behavior' ? 'bg-slate-500 text-white' : 'hover:bg-slate-500 hover:text-white'} my-1`}>
                <Activity />
                <a href="/behavior" className='ml-2'>Behavior Analysis</a>
              </div>
            </ul>
            <ul>
              <div className={`flex p-[20px] rounded-xl transition-all duration-500 ease-out ${site === 'sources' ? 'bg-slate-500 text-white' : 'hover:bg-slate-500 hover:text-white'} my-1`}>
                <TrendingUp />
                <a href="/traffic" className='ml-2'>Verkehrsquellen</a>
              </div>
            </ul>
            <ul>
              <div className={`flex p-[20px] rounded-xl transition-all duration-500 ease-out ${site === 'conversion' ? 'bg-slate-500 text-white' : 'hover:bg-slate-500 hover:text-white'} my-1`}>
                <PieChart />
                <a href="/conversion" className='ml-2'>Conversion Tracking</a>
              </div>
            </ul>
            <ul>
              <div className={`flex p-[20px] rounded-xl transition-all duration-500 ease-out ${site === 'user' ? 'bg-slate-500 text-white' : 'hover:bg-slate-500 hover:text-white'} my-1`}>
                <Users />
                <a href="/user" className='ml-2'>User-Management</a>
              </div>
            </ul>
            <ul>
              <div className={`flex p-[20px] rounded-xl transition-all duration-500 ease-out ${site === 'settings' ? 'bg-slate-500 text-white' : 'hover:bg-slate-500 hover:text-white'} my-1`}>
                <Settings />
                <a href="/settings" className='ml-2'>Settings</a>
              </div>
            </ul>
          </li>
        </div>
      </nav>
    </>
  );
}
