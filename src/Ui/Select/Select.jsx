import React from 'react'
import styles from "./Select.module.css"

const Select = ({options, defaultUalve, value, sortPosts}) => {
  return (
    <select 
      value={value}
      onChange={(e) => sortPosts(e.target.value)}
    >
        <option disabled value="">{defaultUalve}</option> 
        {options.map((option) =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        )}
    </select>
  )
}

export default Select