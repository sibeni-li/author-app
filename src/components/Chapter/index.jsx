// src/components/Chapter/Chapter.jsx
import { textConvert } from '../../markdownConverter.js';
import PropTypes from 'prop-types';
import '../../styles/chapter.scss'

const Chapter = ({ chapter }) => {
  return (
    <div className="chapter">
      <h3>{chapter.name}</h3>
      <div className="chapter-content">
        {chapter.content.map((content, i) => (
          <div
            key={i}
            dangerouslySetInnerHTML={{ __html: textConvert(content)}} 
          />
        ))}
      </div>
    </div>
  );
};

Chapter.propTypes = {
  chapter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
  }).isRequired,
};

export default Chapter;
