import React from 'react';


const Thumbnail = ({imgUrl, handleClick, index}) => {
    return (
        <div style={styles} >

            <img 
            src={imgUrl} 
            style={{ height:'100%', width:'100%', cursor:'pointer' }}
            onClick={handleClick}
            data-index={index}
            />

        </div>
    )
}

const styles = {
    height: "50%",
    width: "25%",
    position: 'relative'
}

export default Thumbnail;