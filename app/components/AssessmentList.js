const AssessmentList = ({ assessments }) => (
    <div>
      <h2 className="text-2xl mb-4">Assessments</h2>
      <ul>
        {assessments.map((assessment) => (
          <li key={assessment.id} className="mb-2 p-2 border rounded">
            <h3 className="text-xl">Course ID: {assessment.courseId}</h3>
            <p>Questions:</p>
            <ul>
              {assessment.questions.map((question) => (
                <li key={question.id}>
                  {question.question}
                  <ul>
                    {question.options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default AssessmentList;
  