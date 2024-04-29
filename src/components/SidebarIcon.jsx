import classNames from 'classnames';
import React from 'react';

const SidebarIcon = ({ Icon, Select, fun }) => {
    return (
        <div className={classNames('w-[80px] h-[80px] flex justify-center items-center pl-[0px] text-white hover:bg-zinc-900', {
            'bg-zinc-800': Select,
            'border-l-[4px] border-blue-600': Select,
            'pr-[4px]': Select,
            'text-blue-400':Select,
        })} onClick={fun}>
            <Icon className="scale-150" />
        </div>
    );
};

export default SidebarIcon;
