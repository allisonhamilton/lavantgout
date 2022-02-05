const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="left-footer">
        
        <h3>2126 rue Centre, Pointe St Charles</h3>
      </div>
      <div className="right-footer">
        <h3>lundi au vendredi: 9h -20h</h3>
        <h3>samedi & dimanche: 9h -19h</h3>
        
      </div>
      <style jsx global>{`
        .footer-container {
          color: #fff;
          z-index: 999;
          display: flex;
          justify-content: stretch;
          align-items: stretch;
          flex-wrap: wrap;
          // text-transform: uppercase;
        }
        .left-footer {
          background-color: #3f523a;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 100px 0;
        }
        .right-footer {
          background-color: #95a788;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
