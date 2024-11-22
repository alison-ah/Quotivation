import React from "react";
import { Filter } from "react-feather";

function CategoryForm({ category, categories, handleCategoryChange }) {
    return (
        <div className='category-form'>
        <form 
            className='category-filter'
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <Filter />
            <label htmlForm='category'>Filter Quotes:</label>
            <select id='category' name='category' value={category} onChange={handleCategoryChange}>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </form>
    </div>
 );
}

export default CategoryForm;