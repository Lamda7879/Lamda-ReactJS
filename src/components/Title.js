import React, { Component } from 'react';

export default function title({name,title}) {
    
        return (
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center">
                    <h1>
                        {name} <span className="span-style-1">{title}</span>
                    </h1>
                </div>
            </div>
        );
    
}