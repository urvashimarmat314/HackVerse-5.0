import React from 'react'
import BlogLayout from '../components/BlogPage/BlogLayout'
import ContactHeader from '../components/Contact/ContactHeader'

import ContactSection from '../components/Footer/ContactSection'

const BlogPage = () => {
  return (
    <div>
        <ContactHeader/>
        <BlogLayout/>
      
        <ContactSection/>
    </div>
  )
}

export default BlogPage