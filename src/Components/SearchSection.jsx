import React from 'react'

export const SearchSection = ({ keyword, keywordChange, selectedFilter, setSelectedFilter }) => {
  return (
    <div className='flex flex-wrap gap-3 justify-center align-middle'>
        <input type="search" placeholder=" Cari berdasarkan nama produk ..." className="search-product-input"  value={keyword} onChange={(event) => keywordChange(event.target.value)} />
        <br />
        <div className="filter-item">
          <label>Filter : </label>
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
                <option value="">Semua</option>
                <option value="O.H. Terstandar">O.H. Terstandar </option>
                <option value="Fitofarmaka">Fitofarmaka </option>
                <option value="Jamu">Jamu</option>
            </select>
        </div>
    </div>
  )
}
