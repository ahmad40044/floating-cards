import PropTypes from 'prop-types';
import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function Card({ data,refer }) {
  return (
    <motion.div drag dragConstraints={refer} whileDrag={{ scale: 1.2 }} className="relative flex-shrink-0 w-60 h-80 bg-sky-200 rounded-[45px] bg-zinc-900 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex justify-between items-center py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <MdOutlineFileDownload size=".8em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor} flex justify-center items-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Prop types validation
Card.propTypes = {
  data: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    filesize: PropTypes.string.isRequired,
    close: PropTypes.bool.isRequired,
    tag: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      tagTitle: PropTypes.string.isRequired,
      tagColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  refer: PropTypes.any,
};
