const FacultyMember = () => {
  return (
    <div className="text-gray-800">
      {/* Header */}
      <header
        className="relative bg-cover bg-center text-white text-center h-64"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/graduation-hat-academic-gown-close-up_1232-3077.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold">Professor Adrian Wolfe</h1>
          <div className="p-2 text-sm text-center">
            <p>
              <span>Home</span> &gt; <span>Professor</span> &gt;{" "}
              <span className="font-bold">Adrian Wolfe</span>
            </p>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md overflow-hidden flex flex-col lg:flex-row">
          {/* Left Section: Image */}
          <div className="p-6 flex-shrink-0">
            <img
              src="https://img.freepik.com/free-photo/3d-illustration-senior-professor-standing-front-bookshelves_1057-45904.jpg?semt=ais_hybrid"
              alt="Adrian Wolfe"
              className="rounded-md w-48 lg:w-64"
            />
          </div>

          {/* Right Section: Info */}
          <div className="p-6 flex-grow">
            {/* Professor Info */}
            <h1 className="text-3xl font-bold mb-2">Adrian Wolfe</h1>
            <p className="text-gray-600 text-lg mb-4">
              Professor of Computer Science
            </p>
            <p className="text-gray-700 mb-6">
              Professor Adrian Wolfe is a luminary in the field of computer
              science, a man whose intellect is rivaled only by his passion for
              innovation. Specializing in artificial intelligence and
              computational theory, he’s earned accolades worldwide for his
              contributions to ethical AI development and next-generation
              algorithms.
            </p>

            {/* Areas of Expertise */}
            <h2 className="font-bold text-xl mb-2">Areas of Expertise</h2>
            <p className="text-gray-700 mb-6">
              Artificial intelligence, computational theory, and cybersecurity.
              He specializes in designing ethical AI systems, optimizing
              algorithms for real-world applications, and developing
              cryptographic protocols to safeguard digital infrastructure.
            </p>

            {/* Courses */}
            <h2 className="font-bold text-xl mb-2">Courses</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>CSCI 1501/1502 Introduction to Programming I & II</li>
              <li>CSCI 3407/3417 Advanced AI Applications I & II</li>
              <li>CSCI 2503/2513 Cybersecurity Essentials I & II</li>
              <li>CSCI 3705/3715 Algorithmic Design and Optimization</li>
            </ul>

            {/* Publications */}
            <h2 className="font-bold text-xl mb-2">Publications</h2>
            <p className="text-gray-700">
              Wolfe, Adrian. &quot;Ethical Frameworks in Artificial
              Intelligence: Balancing Innovation and Responsibility.&quot;
              Journal of Computational Ethics. Cambridge, UK: Cambridge
              University Press, 2021.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default FacultyMember;
