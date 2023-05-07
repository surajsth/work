import React, { useState, useEffect } from 'react'
import './Blog.css'
import img1 from '../Images/img (1).png'
function Divide() {
    const [active, setActive] = useState({ tab1: true, tab2: false, tab3: false })
    // const items = [
    //     { id: 1, name: "Value Clients", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum suscipit modi ipsa error explicabo harum odio maxime. Ut minus ratione iure hic quis totam, vero, eveniet eius suscipit laboriosam odio!" },
    //     { id: 2, name: "Always Available", content: "This is the content for Item 2." },
    //     { id: 3, name: "Competitice pricing", content: "This is the content for Item 3. " }
    // ];
    // const [selectedItem, setSelectedItem] = useState(items);

    // const handleSelectItem = (item) => {
    //     setSelectedItem(item);
    // };
    // useEffect(() => {
    //     handleSelectItem();

    // }, [])
    // console.log(selectedItem)
    const handleTab1 = () => {
        setActive({ tab1: true, tab2: false, tab3: false })
    }
    const handleTab2 = () => {
        setActive({ tab1: false, tab2: true, tab3: false })
    }
    const handleTab3 = () => {
        setActive({ tab1: false, tab2: false, tab3: true })
    }

    return (
        <div>
            <span><h5>Why choose Happy Home</h5></span>
            <h1>You can choose us.</h1>
            <div class="flex-container">
                <div class="flex-item-left">
                    <div>
                        {/* {selectedItem && (
                            <div>
                                <h2>{selectedItem.name}</h2>
                                {/* <img src={img1} alt="" /> */}
                        {/* <p>{selectedItem.content}</p>
                            </div>
                        )}  */}

                        {active.tab1 && (<p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, odit culpa repudiandae veniam ipsam fugit cupiditate necessitatibus rem facere! Mollitia labore est iusto totam dolorem fugit explicabo, facere itaque beatae.</p>)}
                        {active.tab2 && (<p>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, odit culpa repudiandae veniam ipsam fugit cupiditate </p>)}
                        {active.tab3 && (<p>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, odit culpa repudiandae veniam ipsam fugit cupiditate </p>)}

                    </div>
                </div>
                <div class="flex-item-right">
                    <div className="content">
                        <ul className='ul'>
                            {/* {items.map((item) => (
                                <p key={item.id} onClick={() => handleSelectItem(item)}>
                                    {item.name}
                                </p>
                            ))} */}
                            <li className={active.tab1 === true ? "active" : ""} onClick={handleTab1}>
                                value Client
                                <img src="https://img.icons8.com/sf-regular-filled/24/null/chevron-left.png" />
                            </li>
                            <li className={active.tab2 === true ? "active" : ""} onClick={handleTab2}>Always Available
                                <img src="https://img.icons8.com/sf-regular-filled/24/null/chevron-left.png" />
                            </li>
                            <li className={active.tab3 === true ? "active" : ""} onClick={handleTab3}>competetive pricing
                                <img src="https://img.icons8.com/sf-regular-filled/24/null/chevron-left.png" />
                            </li>
                        </ul>
                    </div>

                    <div className="background-image">
                        <img src={img1} alt="" />
                        <div className="overlay">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Divide