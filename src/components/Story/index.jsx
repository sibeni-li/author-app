import Chapter from "../../components/Chapter";
import PropTypes from 'prop-types';

function Story ({story}) {

  return (
    <div className="stories-div">
        <div key={story.id}>
          <h2>{story.title}</h2>
          <div className="stories">
          {story.chapters.map(chapter => (
            <Chapter key={chapter.id} chapter={chapter} />
          ))}
          </div>
        </div>
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    chapters: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        content: PropTypes.array.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Story;