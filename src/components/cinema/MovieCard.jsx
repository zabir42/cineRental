import React, { useState } from "react";
import tag from "../../assets/tag.svg";
import { useMovieContext } from "../../context";
import { getImgUrl } from "../../utility/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie, onCartClick }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useMovieContext();

  // handler
  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  function handleAddToCart(e, movie) {
    e.stopPropagation();
    const found = state?.cartData?.find((item) => item.id === movie.id) ?? null;
    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
    } else {
      console.error(`${movie.title} already in cart!`);
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onAddCart={handleAddToCart}
        />
      )}

      <figure
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        onClick={() => handleMovieSelection(movie)}
      >
        <img
          className="w-full h-3/4 object-cover"
          src={getImgUrl(movie.cover)}
          alt=""
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          {/* star */}
          <Rating value={movie.rating} />
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={(e) => handleAddToCart(e, movie)}
          >
            <img src={tag} alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
