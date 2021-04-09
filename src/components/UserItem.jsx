import React from 'react';

function UserItem(props) {
    
    const {name, email, isGoldClient, wage, src, button} = props;
    
    return (
        <div className='user-item'>
            <h3>{ name }</h3>
            <p>{ email }</p>
            <p>{wage}</p>
            <img src={src} alt=''/>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <button type={button}>Sterge userul</button>
            
        </div>
        
    );
}

export default UserItem;