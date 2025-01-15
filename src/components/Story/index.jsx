import Chapter from "../../components/Chapter";
import { useEffect, useState } from "react";

const Story = () => {
    const [chapters, setChapters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const loadChapters = async () => {
        try {
          setIsLoading(true);
          const response = await fetch('public/stories.json');
          if (!response.ok) {
            throw new Error('Failed to fetch chapters');
          }
          const data = await response.json();
          // Verify the data structure
          console.log('Loaded chapters:', data);
          setChapters(data);
        } catch (error) {
          console.error('Error loading chapters:', error);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      loadChapters();
    }, []);
  
    if (isLoading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!chapters || chapters.length === 0) return <div>No chapters available</div>;
  
    return (
      <div className="stories">
        {chapters.map(chapter => {
          // Add verification of chapter data
          console.log('Rendering chapter:', chapter);
          return <Chapter key={chapter.id} chapter={chapter} />;
        })}
      </div>
    );
  };

export default Story;
