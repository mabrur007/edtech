const WebinarList = ({ webinars }) => (
    <div>
      <h2 className="text-2xl mb-4">Webinars</h2>
      <ul>
        {webinars.map((webinar) => (
          <li key={webinar.id} className="mb-2 p-2 border rounded">
            <h3 className="text-xl">{webinar.title}</h3>
            <ul>
              {webinar.slots.map((slot, index) => (
                <li key={index}>{new Date(slot).toLocaleString()}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default WebinarList;
  