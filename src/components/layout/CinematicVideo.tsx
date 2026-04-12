const CinematicVideo = () => {
  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/Qw5j1r_9uG4"
            title="Chứa Chan Roaster"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CinematicVideo;
