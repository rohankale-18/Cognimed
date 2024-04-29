import React from 'react'
import ChatCard from '../components/ChatCard'

const Chatlist = ({ toggle,first,second ,chevi}) => {
    return (
        <>
            {!toggle ?
                <>
                    <ChatCard first={first} second={"Last Chat Details"} chevi={ chevi} />
                </>
                :
                <>
                    <ChatCard first={first} second={"Date of Research"} chevi={ chevi} />
                </>}
        </>
    )
}

export default Chatlist