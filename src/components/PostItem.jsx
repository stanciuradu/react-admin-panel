// aceasta compoenenta va fi una simpla care va afisa structura unui Item de postari care primeste ca parametru un obiect props
import React from 'react';
function PostItem(props) {
    const{title,body}=props
    return (
        <div>
            <p>{title}</p>
            <p>{body}</p> 
        </div>
    )
}

export default PostItem;
