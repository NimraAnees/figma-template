import ProductDetail from '@/components/reviews/details'
import ReviewsSection from '@/components/reviews/reviews'
import Detailcards from '@/components/reviews/reviewscards'
import React from 'react'

const Review = () => {
  return (
    <div>
     <div className='md:px-[100px]  '>
     <ProductDetail/>
     <ReviewsSection/>
     <Detailcards/>
     </div>
    </div>
  )
}
export default Review
