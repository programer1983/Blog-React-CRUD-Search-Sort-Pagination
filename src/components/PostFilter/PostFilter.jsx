import React from 'react'
import MyInput from '../../Ui/Input/MyInput'
import Select from "./../../Ui/Select/Select"
import styles from "./PostFilter.module.css"
 

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
          <MyInput
            value={filter.query}
            onChange={(e) => setFilter({...filter, query: e.target.value})}
            type="text"
            placeholder="Search"
          />
          <Select
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultUalve="Sort"
            options={[
              {value: 'title', name: 'By name'},
              {value: 'body', name: 'By description'},
            ]}
          />
        </div>
  )
}

export default PostFilter