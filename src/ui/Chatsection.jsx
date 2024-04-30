import classNames from 'classnames';
import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { RiMicLine } from "react-icons/ri";
import { Scrollbar } from 'react-scrollbars-custom';
import { PiMicrophoneBold } from "react-icons/pi";

const Chatsection = ({ toggle }) => {
    const [messages, setMessages] = useState([{
        text: 'Lörem ipsum religen hiraligt, bösk. Personalisering vabel. Bebökosa posong suprask. Gigarin app, bioligt. Virade laktiga. ', sent: true
    }, {
        text: 'Lörem ipsum tilångar previlig låsat. Flexidaritet orat fyplar i arat bede. See now buy now ans än paralohilig smart content. Kontrande tretoren episkop innovationsstödssystem.        Fängen pydosa sabel lektig kontrasam eller donde. Dil gubbploga eftersom rer nenade. Fäning pelogi. Tevis pregisk, nyr ensofi, om kopoligt vipyssa.      Euna track record rende. Sajäs tillväxtföretag blåkort. Sonyligt tissade pinde förutom ordningskonsult nil. Retöligen internet of things kopytining i oheten.         Dost befågt. Pseudode laligt dovis räddningskort. Dialedes USP vyheten. Deligt biorar, dode dosk.         Ask nyse, för att nebelt dyren. Tredobel nek bens makrolår testbädd. Kroktigt innovationsekosystem miren årtad datalektiker inkubator. Sase motiverad religen.         Trevis dena renera. Debubel last mile hemester när ossade. Innovationssystem trin vitening dylest. Bepoheten paranera.         Sossade brony, ovack. Tedonedat. Kasm digon. Bev sahet. ', sent: false
    }]);
    const [tmsg, setTmsg] = useState([{
        text: 'Lörem ipsum religen hiraligt, bösk. Personalisering vabel. Bebökosa posong suprask. Gigarin app, bioligt. Virade laktiga. ', sent: true
    }, {
        text: `www.lin1.com/jsdfhoij
            www.link2.com/sdufhsoidj
            www.link3.com/sdifhjoiwasjdf`, sent: false
    }])
    const [messageInput, setMessageInput] = useState('');

    const handleMessageSend = () => {
        if (messageInput.trim() !== '' && !toggle) {
            setMessages([...messages, { text: messageInput.trim(), sent: true }]);
            setMessageInput('');
        } else if (messageInput.trim() !== '' && toggle) {
            setTmsg([...tmsg, { text: messageInput.trim(), sent: true }]);
            setMessageInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleMessageSend();
        }
    };

    return (
        <div className='flex flex-col h-screen w-full transition-all duration-300'>
            <div className='flex justify-start items-start h-[10%] px-10 text-2xl py-6'>
                <div className={classNames('font-lg font-bold ', { 'text-black': toggle, 'text-white': !toggle })}>
                    {toggle ? "New" : "First Last Name"}
                </div>
            </div>
            <div className={classNames('flex justify-center items-center', {
                'text-gray-400': !toggle,
            })}>
                <div className={classNames('border border-gray-400 w-[45%] h-[0px]', {
                    'text-gray-400': !toggle,
                })}></div>
                <div className='mx-3 text-gray-400'>Today</div>
                <div className={classNames('border border-gray-400 w-[45%] h-[0px]', {
                    'text-gray-400': !toggle,
                })}></div>
            </div>
            <div className='h-[80%] mx-[30px] px-10 py-2  flex flex-col overflow-y-auto overflow-x-hidden text-sm' style={{ position: 'relative' }}>
                <Scrollbar style={{ width: '100%', height: '100%' }}>
                    {toggle ?
                        tmsg.map((message, index) => (
                            message.sent ?
                                <div className='flex items-end'>
                                    <div key={index} className='break-words w-[60%] px-5 py-4 bg-slate-800 text-indigo-200 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl my-1 ml-auto '>{message.text}</div>
                                    <div className='w-[40px] h-[40px] rounded-full m-2 bg-slate-800'></div>
                                </div>
                                :
                                <div className='flex items-end'>
                                    <div className='w-[40px] h-[40px] rounded-full m-2 bg-black rotate-center flex justify-center items-center' >
                                        <img src="/Logo.png" alt="" className='w-[40px] h-[40px] ' style={{ animation: 'rotateZoom 2.5s linear infinite' }}/>
                                    </div>

                                    <div key={index} className='break-words w-[60%] px-5 py-4 bg-indigo-300 opacity-80 text-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl my-1 mr-auto'>{message.text}</div>
                                </div>

                        ))
                        :
                        messages.map((message, index) => (
                            message.sent ?
                                <div className='flex items-end'>
                                    <div key={index} className='break-words w-[60%] px-5 py-4 bg-slate-800 text-indigo-200 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl my-1 ml-auto'>{message.text}</div>
                                    <div className='w-[40px] h-[40px] rounded-full m-2 bg-slate-800'></div>
                                </div>
                                :
                                <div className='flex items-end'>
                                    <div className='w-[40px] h-[40px] rounded-full m-2 '>
                                        <img src="chatlogo2.png" alt="" className='w-[40px] h-[40px] ' />
                                    </div>
                                    <div key={index} className='break-words w-[60%] px-5 py-4 bg-blue-900 text-gray-300 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl my-1 mr-auto'>{message.text}</div>
                                </div>

                        ))
                    }


                </Scrollbar>
            </div>
            <div className='flex justify-center items-center my-5'>
                <input
                    type="text"
                    className='w-[80%] rounded-lg h-[40px] font-md px-5 mx-3 bg-slate-200'
                    placeholder="Type your message here...."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                {toggle ? <IoSend onClick={handleMessageSend} /> : <IoSend onClick={handleMessageSend} className='text-white' />}
                <div className={classNames(' m-3 w-[40px] h-[40px] rounded-full flex justify-center items-center transition-colors duration-300 scale-[1.2]', {
                    'bg-slate-200': toggle,
                    'bg-zinc-500  font-extrabold': !toggle
                })}>
                    {toggle ? <PiMicrophoneBold /> : <PiMicrophoneBold className='text-white' />}
                </div>
            </div>
        </div>
    );
};

export default Chatsection;
