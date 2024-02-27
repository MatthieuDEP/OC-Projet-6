import React, { useState } from "react";
import './collapse.scss'
import arrow from '../../images/arrow.svg'

export default function Collapse({title, children, styles = ''}) {
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    function openCollapse () {
        setIsCollapsed(!isCollapsed)
    };

    return (
        <div className={styles}>
            <button className="collapse">
                <h3 className="collapse__title">{title}</h3>
                <div className={isCollapsed ? "arrow--up" : "arrow--down"} onClick={openCollapse}>
                    <img src={arrow} alt="flèche déroulante" />
                </div>
            </button>
            <div className={isCollapsed ? "content content--hide" : "content content--show"}>
                <div className="content__text">
                    {children}
                </div>
            </div>
        </div>
    );
};