import Chapter from "../../components/Chapter";
import { useEffect, useState } from "react";

function Story () {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/src/stories.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStories(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="stories-div">
      {stories.map(story => (
        <div key={story.id}>
          <h2>{story.title}</h2>
          <div className="stories">
          {story.chapters.map(chapter => (
            <Chapter key={chapter.id} chapter={chapter} />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
  };

export default Story;