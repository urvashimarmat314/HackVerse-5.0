import React from 'react'
// import BlogLayout from '../components/BlogPage/BlogLayout'
import ContactHeader from '../components/Contact/ContactHeader'

import ContactSection from '../components/Footer/ContactSection'
import SchemeLayout from '../components/BlogPage/SchemeLayout'

const BlogPage = () => {
  return (
    <div>
        <ContactHeader/>
        <SchemeLayout/>
      
        <ContactSection/>
    </div>
  )
}

export default BlogPage