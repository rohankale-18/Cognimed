import React, { useState } from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";
import { PiChatCenteredBold } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import SidebarIcon from '../components/SidebarIcon';
import ToggleBtn from '../components/ToggleBtn';
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Chatlist from './Chatlist';
import Chatsection from './Chatsection';
import classNames from 'classnames';
import { Scrollbar } from 'react-scrollbars-custom';


export const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
    const [msgicon, setmsgicon] = useState(true);
    const [proicon, setproicon] = useState(false);
    const [settingicon, setsettingicon] = useState(false);
    const [chevi, setChevi] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [resfilterData, setResfilteredData] = useState([]);
    const [data, setData] = useState([
        { id: 1, fullName: 'Alice' },
        { id: 2, fullName: 'Bob' },
        { id: 3, fullName: 'Charlie' },
        { id: 4, fullName: 'David' },
        { id: 5, fullName: 'Rohan' },
        { id: 6, fullName: 'Pranav' },
        { id: 7, fullName: 'Vedant' },
        { id: 8, fullName: 'Newton' },
        { id: 9, fullName: 'Virat' },
        { id: 10, fullName: 'David' },
    ]);
    const [res, setRes] = useState([
        { id: 1, fullName: 'Engineering Research' },
        { id: 2, fullName: 'Medical Research' },
        { id: 3, fullName: 'Civil Research' },
        { id: 4, fullName: 'Psycological Research' },
        { id: 5, fullName: 'Physical Fitness Research' },
        { id: 6, fullName: 'Phylosophical Research' },
        { id: 7, fullName: 'Health Research' },
        { id: 8, fullName: 'Mathematics' },
        { id: 9, fullName: 'Physics' },
        { id: 10, fullName: 'Chemistry' },
    ])

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (!toggle) {
            const filtered = data.filter(item =>
                item.fullName.toLowerCase().includes(query)
            );
            setFilteredData(filtered);
        } else {
            const filtered = res.filter(item =>
                item.fullName.toLowerCase().includes(query)
            );
            setResfilteredData(filtered);
        }

    };
    return (
        <div className='flex flex-row'>
            <div className='bg-slate-950 opacity-95 w-[80px] h-screen flex flex-col justify-between pb-5 items-center '>
                <div className='flex flex-col justify-start items-center '>
                    <div className='w-[80px] h-[95px] flex justify-center items-center'>
                        <div className='bg-neutral-700 rounded-full w-[50px] h-[50px]'></div>
                    </div>
                    <div className='flex flex-row'>

                        <SidebarIcon
                            Icon={PiChatCenteredBold}
                            Select={msgicon}
                            fun={() => {
                                setmsgicon((prev) => !prev);
                                setproicon(false);
                                setsettingicon(false);
                                console.log("msg:" + msgicon + " pro:" + proicon + " setting:" + settingicon);
                            }}
                        />
                    </div>
                    <div className='flex flex-row'>
                        <SidebarIcon
                            Icon={MdOutlinePersonOutline}
                            Select={proicon}
                            fun={() => {
                                setmsgicon(false);
                                setproicon((prev) => !prev);
                                setsettingicon(false);
                                console.log("msg:" + msgicon + " pro:" + proicon + " setting:" + settingicon);
                            }}
                        />
                    </div>
                    <div className='flex flex-row'>
                        <SidebarIcon
                            Icon={TbSettings}
                            Select={settingicon}
                            fun={() => {
                                setmsgicon(false);
                                setproicon(false);
                                setsettingicon((prev) => !prev);
                                console.log("msg:" + msgicon + " pro:" + proicon + " setting:" + settingicon);
                            }}
                        />
                    </div>

                </div>
                <div className='w-[80px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-white my-2'>Mode 1</div>
                        <ToggleBtn toggle={toggle} setToggle={setToggle} />
                        <div className='text-white my-2'>Mode 2</div>
                    </div>
                </div>

            </div>
            <div className={classNames(' h-screen  bg-zinc-800 flex flex-col shadow-black-xl transition-all duration-500 ease-in-out ',
                {
                    'w-[0px]': !chevi,
                    'w-[35%]':chevi
                    // 'border-r-2':!toggle
                })}
            >
                <div className='w-full shadow-2xl bg-zinc-800 my-3 py-2 h-[70px] flex flex-row justify-evenly items-center'>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className='h-[30px] w-[250px] rounded-full z-1 pl-4'
                        placeholder={toggle?"Search topic":"Search name"}
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <div className='bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center scale-[1.1]' onClick={handleSearch}>
                        {chevi ? <FiSearch /> : null}
                    </div>
                    <div className='rounded-md w-[30px] h-[30px] bg-white text-3xl flex justify-center items-end'>+</div>
                </div>
                <div className='overflow-y-auto w-full h-full'>
                    <Scrollbar style={{height:'100%',width:'100%'}}>

                        {!toggle ?
                            filteredData.length > 0 ?
                                filteredData.map(item => (
                                    <Chatlist key={item.id} toggle={toggle} first={item.fullName} chevi={chevi} />
                                ))
                                :
                                data.map(item => (
                                    <Chatlist key={item.id} toggle={toggle} first={item.fullName} chevi={chevi} />
                                ))
                            :
                            resfilterData.length > 0 ?
                                resfilterData.map(item => (
                                    // <div key={item.id}>{item.fullName}</div>
                                    <Chatlist toggle={toggle} first={item.fullName} chevi={chevi} />
                                ))
                                :
                                res.map(item => (
                                    // <div key={item.id}>{item.fullName}</div>
                                    <Chatlist toggle={toggle} first={item.fullName} chevi={chevi} />
                                ))

                        }
                    </Scrollbar>
                </div>
            </div>
            <div className='flex flex-col justify-center w-0 z-1 transition-transform duration-300 ease-in-out' onClick={() => setChevi(!chevi)}>
                {chevi ?
                    <RiArrowLeftSLine className={classNames('-translate-x-2 scale-[2.2] rounded-full transition-colors duration-300',
                        {
                            'bg-gray-900 text-white': toggle,
                            'bg-white text-gray-900': !toggle
                        })} /> :
                    <RiArrowRightSLine className={classNames('-translate-x-2 scale-[2.2] rounded-full transition-colors duration-300',
                        {
                            'bg-gray-900 text-white': toggle,
                            'bg-white text-gray-900': !toggle
                        })} />}
            </div>
            <div className={classNames('w-full h-screen transition-colors duration-500', {
                'bg-slate-300': toggle,
                'bg-blue-950': !toggle,
            })}>
                <Chatsection toggle={toggle} />
            </div>

        </div>
    )
}
