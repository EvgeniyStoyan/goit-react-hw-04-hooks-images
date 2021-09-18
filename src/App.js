import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [imageInModal, setImageInModal] = useState('');

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
  };

  const openModal = imageInModal => {
    setImageInModal(imageInModal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ToastContainer autoClose={5000} position="top-center" theme="colored" />
      <ImageGallery searchQuery={searchQuery} onClickImage={openModal} />
      {showModal && (
        <Modal imageInModal={imageInModal} onCloseModal={closeModal} />
      )}
    </div>
  );
}
