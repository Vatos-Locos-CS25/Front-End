import React, { useState, useEffect } from 'react'
import Pusher from 'pusher-js'
import axios from 'axios'



const Chat = props => {
    const [chat, setChat] = useState([
        // {id: 1, user: 'elan7', message: 'Elan\'s Message!'}, 
        // {id: 2, user: 'Riznis', message: 'Riznis\' Message!'},
        // {id: 1, user: 'elan7', message: 'Elan\'s Message!'}, 
        // {id: 2, user: 'Riznis', message: 'Riznis\' Message!'},
        // {id: 1, user: 'elan7', message: 'Elan\'s Message!'}, 
        // {id: 2, user: 'Riznis', message: 'Riznis\' Message!'},
        // {id: 1, user: 'elan7', message: 'Elan\'s Message!'}, 
        // {id: 2, user: 'Riznis', message: 'Riznis\' Message!'},
        // {id: 2, user: 'Riznis', message: 'Riznis\' Message!'},
        // {id: 2, user: 'Riznis', message: 'Riznis\' Message!'},
    ])
    const [message, setMessage] = useState('')
    const [user, setUser] = useState('')


    Pusher.logToConsole = true;
    const pusher = new Pusher(
        '103635f1e5e86ef0cf06', 
        {
            cluster: 'us2',
            forceTLS: true
        }
    );
    useEffect(() => {
        axios
        .get('https://wack-ass-game.herokuapp.com/api/adv/init', {headers: {Authorization: `Token ${JSON.parse(localStorage.getItem('mud_token')).key}`}})
        .then(res => {
            setUser(res.data.name)
        })
        .catch(err => {
            console.log('ERRRRORRRR')
        })
        
        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {});
    }, [])

    pusher.bind('my-event', (data) => {
        setChat(chat => [...chat, data])
    })


    const messageHandler = e => {
        setMessage(e.target.value)
    }
    
    const submit = e => {
        e.preventDefault()
        const newMessage = {'message': message}
        axios
        .post('https://wack-ass-game.herokuapp.com/api/adv/say/', newMessage, {headers: {Authorization: `Token ${JSON.parse(localStorage.getItem('mud_token')).key}`}})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log('This is an error')
        })

        setMessage('')
    }


    return(
        <div className={props.chat ? 'chat-container' : 'none'}>   
            <div className='scroll'>
                 {chat.map(each => (
                    <div className={each.user === user ? 'right both' : 'left both'}>
                        <h4>{each.user}</h4>
                        <p>{each.message}</p>
                    </div>
                ))}
            </div>
           
            <form onSubmit={submit}>
                <input 
                 value={message}
                 onChange={messageHandler}
                />
                <button>Send Message</button>
            </form>
        </div>
    )
}


export default Chat