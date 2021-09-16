import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import Button from '../Button';
import s from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  DOWNLOAD: 'download',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function ImageGallery({ onClickImage, searchQuery }) {
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = '22499741-87b5d21a315c32b3b505be895';
    const BASE_URL = 'https://pixabay.com/api';
    if (!searchQuery) {
      return;
    }

    setStatus(Status.PENDING);

    setTimeout(() => {
      fetch(
        `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => response.json())
        .then(response => {
          if (response.hits.length === 0) {
            toast.error(`No image with name  ${searchQuery}`);
            return Promise.reject(
              new Error(`Please try to enter something else`),
            );
          }
          setImages(response.hits);
          setStatus(Status.RESOLVED);
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }, 1000);
  }, [searchQuery, page]);

  useEffect(() => {
    const API_KEY = '22499741-87b5d21a315c32b3b505be895';
    const BASE_URL = 'https://pixabay.com/api';
    if (page !== 1) {
      setStatus(Status.DOWNLOAD);
      setTimeout(() => {
        fetch(
          `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        )
          .then(response => response.json())
          .then(images => {
            setImages(prevState => [...prevState, ...images.hits]);
            setStatus(Status.RESOLVED);
          })
          .finally(() => {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          });
      }, 1000);
    }
  }, [searchQuery, page]);

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  if (status === Status.IDLE) {
    return <div className="Text">Enter your query to start image search</div>;
  }

  if (status === Status.PENDING) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (status === Status.DOWNLOAD) {
    return (
      <div className={s.GalleryContainer}>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem images={images} onClickImage={onClickImage} />
        </ul>
        <Loader />
      </div>
    );
  }

  if (status === Status.REJECTED) {
    return <h2 className="ErrorMessage">{error.message}</h2>;
  }

  if (status === Status.RESOLVED) {
    return (
      <div className={s.GalleryContainer}>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem images={images} onClickImage={onClickImage} />
        </ul>

        {images.length > 0 && <Button handleLoadMore={handleLoadMore} />}
      </div>
    );
  }
}
