// src/components/Chapter/Chapter.jsx
import { textConvert } from '../../markdownConverter.js';
import PropTypes from 'prop-types';

const Chapter = ({ chapter }) => {
  return (
    <div className="chapter">
      <h3>{chapter.name}</h3>
      <div 
        className="chapter-content"
        dangerouslySetInnerHTML={{ 
          __html: textConvert(chapter.content) 
        }} 
      />
    </div>
  );
};

Chapter.propTypes = {
  chapter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Chapter;
