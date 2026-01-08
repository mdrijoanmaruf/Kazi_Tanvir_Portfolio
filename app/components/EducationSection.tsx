export default function EducationSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-purple-600 uppercase tracking-wider">Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Academic{' '}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive foundation in computer science and engineering, building the skills necessary for innovation in AI and machine learning.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-linear-to-b from-purple-600 to-indigo-600"></div>
            
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {/* BSc */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0">
                    <div className="inline-block md:block bg-white px-4 py-2 rounded-full border border-purple-200 shadow-sm">
                      <span className="text-purple-600 font-semibold text-sm">Sept 2019 - Aug 2023</span>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-4 md:-left-8 top-0 w-8 h-8 bg-linear-to-br from-purple-600 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    <div className="ml-8 md:ml-0 bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">BSc in Computer Science and Engineering</h4>
                          <p className="text-purple-600 font-medium">American International University-Bangladesh (AIUB)</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Comprehensive study in computer science fundamentals, algorithms, data structures, and specialized courses in machine learning and artificial intelligence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* HSC */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0 md:order-1">
                    <div className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-4 md:left-auto md:-right-8 top-0 w-8 h-8 bg-linear-to-br from-purple-600 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                      
                      <div className="ml-8 md:ml-0 md:mr-0 bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex md:flex-row-reverse items-start gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-indigo-600 to-purple-600 flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 md:text-right">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">Higher Secondary Certificate (H.S.C)</h4>
                            <p className="text-purple-600 font-medium">Birshrestha Noor Mohammad Public College</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm md:text-right">
                          <span className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-purple-700 font-semibold">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            GPA: 4.75
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:order-2">
                    <div className="inline-block md:block bg-white px-4 py-2 rounded-full border border-purple-200 shadow-sm">
                      <span className="text-purple-600 font-semibold text-sm">Mar 2017 - Aug 2019</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* SSC */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0">
                    <div className="inline-block md:block bg-white px-4 py-2 rounded-full border border-purple-200 shadow-sm">
                      <span className="text-purple-600 font-semibold text-sm">Jan 2015 - Mar 2017</span>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Timeline Dot */}
<div className="absolute -left-4 md:-left-8 top-0 w-8 h-8 bg-linear-to-br from-purple-600 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    <div className="ml-8 md:ml-0 bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">Secondary School Certificate (S.S.C)</h4>
                          <p className="text-purple-600 font-medium">Birshrestha Noor Mohammad Public College</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        <span className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-purple-700 font-semibold">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          GPA: 5.00 (Perfect Score)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
