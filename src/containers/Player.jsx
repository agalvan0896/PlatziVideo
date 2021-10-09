import React, { useEffect } from "react";
import "../assets/styles/components/Player.scss";
import { connect } from "react-redux";
import { getVideoSource } from "../redux/actions";
import NotFound from "./NotFound";

const Player = ({ history, match, getVideoSource, playing }) => {
  const id = match.params.id;

  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    getVideoSource(id);
  }, []);

  return (
    <>
      {hasPlaying && (
        <div className="Player">
          <video controls autoPlay>
            <source src={playing.source} type="video/mp4" />
          </video>
          <div className="Player-back">
            <button onClick={() => history.goBack()} type="button">
              Regresar
            </button>
          </div>
        </div>
      )}
      {!hasPlaying && <NotFound />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource: getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
