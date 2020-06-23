import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => (
    <div className="input-group flex-nowrap">
        <div className="input-group-prepend mx-auto">
            <input
                className="m-3 form-control"
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    </div>
)