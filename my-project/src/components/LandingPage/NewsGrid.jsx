import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsGrid = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const newsItems = [
    {
      date: 'Monday 05, September 2021',
      author: 'By Author',
      title: "This Article's Title goes Here, but not too long.",
      views: 68,
      likes: 86
    },
    // Duplicate items for demo
    {
      date: 'Monday 05, September 2021',
      author: 'By Author',
      title: "This Article's Title goes Here, but not too long.",
      views: 68,
      likes: 86
    },
    {
      date: 'Monday 05, September 2021',
      author: 'By Author',
      title: "This Article's Title goes Here, but not too long.",
      views: 68,
      likes: 86
    },
    {
      date: 'Monday 05, September 2021',
      author: 'By Author',
      title: "This Article's Title goes Here, but not too long.",
      views: 68,
      likes: 86
    }
  ];

  const totalPages = Math.ceil(newsItems.length / 2);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
      <h2 className="text-center text-blue-600 text-lg font-bold uppercase mb-4">Trusted Care</h2>
      <h3 className="text-center text-3xl font-bold mb-8">News</h3>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            <div className="w-full flex-none grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-32 h-32 bg-gray-200 flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <div className="text-blue-500 text-sm">{item.date}</div>
                    <div className="text-gray-500 text-sm">{item.author}</div>
                    <h3 className="font-semibold mt-2">{item.title}</h3>
                    <div className="flex gap-4 mt-auto">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {item.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {item.likes}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? 'bg-blue-600' : 'bg-blue-200'
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>

        <button
          onClick={prevPage}
          className="absolute top-1/2 -left-78 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextPage}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default NewsGrid;