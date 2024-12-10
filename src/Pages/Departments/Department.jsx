

const Department = () => {
  return (
    <div className="font-sans text-gray-800 mt-12">
      {/* Tailwind CSS Styling in the JSX */}
      <style>
        {`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
        `}
      </style>

      {/* Header Section */}
      <header
        className="bg-cover bg-center py-16"
        style={{
          backgroundImage:
            'url("https://basecamplive.com/wp-content/uploads/2023/02/books.jpeg")',
          height: "500px",
        }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold">Department of Science</h1>
          <p className="mt-4 text-lg">Welcome to the Department of Science</p>
        </div>
      </header>

      {/* Department Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">About the Department</h2>
          <p className="text-lg">
            The Department of Science is dedicated to fostering curiosity and
            innovation in the fields of biology, chemistry, physics, and
            mathematics. With state-of-the-art laboratories and experienced
            faculty, students are encouraged to explore complex scientific
            concepts and engage in hands-on research. The department offers a
            wide range of courses designed to equip students with critical
            thinking and problem-solving skills. We aim to prepare future
            scientists who can contribute to advancements in technology,
            medicine, and the environment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">
            Program Courses
          </h2>

          {/* Year 1 */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <h3 className="text-3xl font-semibold mb-6 col-span-full">
              Year 1
            </h3>

            {/* Semester 1 */}
            <div className="mb-6 bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Semester 1</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <img
                    src="path/to/icon1.png"
                    alt="Course 1"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Introduction to Literature (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon2.png"
                    alt="Course 2"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Basic English Grammar (2 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon3.png"
                    alt="Course 3"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Communication Skills (2 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon4.png"
                    alt="Course 4"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Introduction to Writing (3 Credits)</span>
                </div>
              </div>
            </div>

            {/* Semester 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Semester 2</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <img
                    src="path/to/icon5.png"
                    alt="Course 1"
                    className="w-12 h-12 mr-4"
                  />
                  <span>World Literature (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon6.png"
                    alt="Course 2"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Creative Writing (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon7.png"
                    alt="Course 3"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Academic Writing (2 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon8.png"
                    alt="Course 4"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Phonetics and Phonology (2 Credits)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Year 2 */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <h3 className="text-3xl font-semibold mb-6 col-span-full">
              Year 2
            </h3>

            {/* Semester 3 */}
            <div className="mb-6 bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Semester 3</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <img
                    src="path/to/icon9.png"
                    alt="Course 1"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Shakespeare and Drama (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon10.png"
                    alt="Course 2"
                    className="w-12 h-12 mr-4"
                  />
                  <span>English Syntax (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon11.png"
                    alt="Course 3"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Literary Criticism (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon12.png"
                    alt="Course 4"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Introduction to Linguistics (3 Credits)</span>
                </div>
              </div>
            </div>

            {/* Semester 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Semester 4</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <img
                    src="path/to/icon13.png"
                    alt="Course 1"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Modern English Literature (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon14.png"
                    alt="Course 2"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Advanced Composition (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon15.png"
                    alt="Course 3"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Translation Studies (2 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon16.png"
                    alt="Course 4"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Speech and Oral Communication (2 Credits)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Year 3 */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <h3 className="text-3xl font-semibold mb-6 col-span-full">
              Year 3
            </h3>

            {/* Semester 5 */}
            <div className="mb-6 bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Semester 5</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <img
                    src="path/to/icon17.png"
                    alt="Course 1"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Postcolonial Literature (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon18.png"
                    alt="Course 2"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Advanced Linguistics (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon19.png"
                    alt="Course 3"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Research Methods in Literature (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon20.png"
                    alt="Course 4"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Film and Literature (2 Credits)</span>
                </div>
              </div>
            </div>

            {/* Semester 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Semester 6</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <img
                    src="path/to/icon21.png"
                    alt="Course 1"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Contemporary Literature (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon22.png"
                    alt="Course 2"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Discourse Analysis (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon23.png"
                    alt="Course 3"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Literary Theory (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon24.png"
                    alt="Course 4"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Creative Writing Workshop (3 Credits)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Year 4 */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <h3 className="text-3xl font-semibold mb-6 col-span-full">
              Year 4
            </h3>

            {/* Semester 7 */}
            <div className="mb-6 bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Semester 7</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <img
                    src="path/to/icon25.png"
                    alt="Course 1"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Advanced Poetry (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon26.png"
                    alt="Course 2"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Literary Editing (3 Credits)</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="path/to/icon27.png"
                    alt="Course 3"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Thesis Writing (4 Credits)</span>
                </div>
              </div>
            </div>

            {/* Semester 8 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Semester 8</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <img
                    src="path/to/icon28.png"
                    alt="Course 1"
                    className="w-12 h-12 mr-4"
                  />
                  <span>Capstone Project (6 Credits)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Our Faculty</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHB3-_Pg0tCWJKjDkjigpCdmeliMYFaQC_Q&s"
                alt="Faculty Member"
              />
              <h3 className="font-semibold">Professor 1</h3>
              <p className="text-gray-600">Professor of Math</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFDxma7Iy4W26sgvAl3XmByS9skGaPgvh_C02oA3tA06QXiXzX7FmM2ENLpIrZKDeK_I&usqp=CAU"
                alt="Faculty Member"
              />
              <h3 className="font-semibold">Professor 2</h3>
              <p className="text-gray-600">Associate Biology</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEulXSSsUR_ZbVJBtbOAuoRL5pC3Fdz1qnhEhj-avp-mXOjgn5j0ZIvrZE218GMBqNpM&usqp=CAU"
                alt="Faculty Member"
              />
              <h3 className="font-semibold">Professor 3</h3>
              <p className="text-gray-600">Lecturer in Calculus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Department;
