// import React from 'react';

// function Popup({ isOpen, onClose, buttonRef }) {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className='popup-overlay' onClick={onClose}>
//       <div ref={buttonRef} className='popup'>
//         <div>
//         {/* the outer curly brace is to mention js code and actual js code present is object, that why the two curly braces */}
//           <span style={{color:'gray'}}>Grouping</span>
//           <button>select group</button>
//         </div>
//         <div>
//           <span style={{color:'gray'}}>Ordering</span>
//           <button>select order</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Popup;


import React, { useState, useRef } from 'react';

function Popup(props) {
  const [selectedGroup, setSelectedGroup] = useState('Group 1');
  const [selectedOrder, setSelectedOrder] = useState('Order 1');

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    props.selectGroup(event.target.value);
  };

  const handleOrderChange = (event) => {
    setSelectedOrder(event.target.value);
    props.selectOrder(event.target.value);
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  if (!props.isOpen) {
    return null;
  }

  return (
    <div className='popup-overlay' onClick={props.onClose}>
      <div  className='popup' onClick={handlePopupClick}>
        <div>
          <span style={{ color: 'gray' }}>Grouping</span>
          <select value={selectedGroup} onChange={handleGroupChange}>
            <option value='Priority'>Priority</option>
            <option value='Status'>Status</option>
            <option value='User'>User</option>
          </select>
        </div>
        <div>
          <span style={{ color: 'gray' }}>Ordering</span>
          <select value={selectedOrder} onChange={handleOrderChange}>
            <option value='Priority'>Priority</option>
            <option value='Title'>Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Popup;
