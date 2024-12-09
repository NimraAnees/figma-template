
import ProductFilterColor from '@/components/Filter/Colourfilter'
import  FiltersSidebar  from '@/components/Filter/Coloursbar'
import React from 'react';

const Filters = () => {
  return (
    <div className='  md:px-[100px]  grid md:grid-cols-[1fr_2fr] grid-cols-[1fr]'>
<FiltersSidebar/>
<ProductFilterColor/>
    </div>
  )
}

export default Filters