import React, { useState } from 'react'
import classNames from 'classnames'
import filter from './filter.module.scss'

interface Props {
  test?: string,
}

export const Filter: React.FunctionComponent<Props> = ({
  test
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const filterContainerClass = classNames(filter['filter-container'], {
    [filter['filter-container--active']]: showFilter
  });

  return (
    <>
      <div
        className={ filter['filter-btn'] }
        onClick={ () => setShowFilter(!showFilter) }
      >
        Filter
      </div>
      <div className={ filterContainerClass }>
        { test }
      </div>
    </>
  )
}
