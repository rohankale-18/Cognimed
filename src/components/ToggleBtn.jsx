import React, { useState } from 'react';
import classNames from 'classnames';

const ToggleBtn = ({toggle,setToggle}) => {

    return (
        <div
            onClick={() => setToggle(!toggle)}
            className='w-[40px] h-[68px] rounded-full  bg-white cursor-pointer flex justify-center items-start'
        >
            <div className={
                classNames(
                    'h-[30px] w-[30px]  rounded-full transition-all duration-500 my-1',
                    {
                        'bg-slate-500 transform translate-y-full ': toggle,
                        'bg-blue-900':!toggle
                    }
                )}>
            </div>
        </div>
    );
};

export default ToggleBtn;