const CourseList = ({ courses }) => (
    <div>
      <h2 className="text-2xl mb-4">Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="mb-2 p-2 border rounded">
            <h3 className="text-xl">{course.title}</h3>
            <p>Modules:</p>
            <ul>
              {course.modules.map((module) => (
                <li key={module.id}>
                  {module.title} - <a href={module.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default CourseList;
  