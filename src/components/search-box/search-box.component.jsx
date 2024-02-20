

import './search-box.styles.css';

const SearchBox = (props) => {
  console.log('PROPSBOX:::',props)
  return (
    <input
      className='search-box'
      type='search'
      placeholder='search monsters'
      onChange={props.onSearchChange}
    />
  )
}



export default SearchBox;