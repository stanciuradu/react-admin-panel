// aceasta componenta va fi una simpla de tip function Component care va afisa o lista de postari prin map
import React from 'react';
import PostItem from './PostItem';

function PostList(props) {
    const{posts}=props;
    return (
        <div className='post-list'>
            {
                // se realizeaza listarea postarilor prin map care primeste ca parametru un callback si se adauga si un key pentru performanta
                // key are rolul de identificator unic
                posts.map((post,index)=>{
                    return <PostItem
                            title={post.title}
                            body={post.body}
                            key={index}
                            />

                })
            }
            
        </div>
    )
}

export default PostList;
