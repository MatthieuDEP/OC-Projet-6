import React from "react";
import './tag.scss';

export default function Tag({ id, content }) {
    return (
        <p className="tag" key={id}>{content}</p>
    );
};