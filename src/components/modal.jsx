import { CloseSquare } from "iconsax-react";

import PropTypes from "prop-types";


export default function Modal({ isOpen, onClose, deletPost }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50 px-4">
      <div className="relative bg-[#131313] flex flex-col gap-4 max-w-sm py-4 px-4 w-full rounded-3xl ">
      <CloseSquare
              onClick={onClose}
              className="cursor-pointer absolute top-5 right-5"
              size="20"
            />
        
        <h1 className="text-xl font-bold">Delete Post?</h1>
        <p className="text-gray-400">This can't be undone.</p>
        <div className="flex gap-4 items-end justify-end">
        <button
            onClick={onClose}
            className="py-2 px-3 rounded-lg font-semibold text-sm w-24 text-gray-400 hover:underline"
          >
            Cancel
          </button>
        <button
        onClick={deletPost}
            className="py-2 px-3 bg-violet-800 rounded-lg font-semibold text-sm text-center w-24 hover:bg-violet-800/80 hover:underline"
          >
            Delete
          </button>
          
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};