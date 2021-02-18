import React from 'react';

const TextCard = () => {
  const TitleText = {
    fontFamily: 'Oswald, sans-serif',
    fontWeight: '500',
  };

  const TitleText2 = {
    fontFamily: 'Oswald, sans-serif',
    fontWeight: '500',
    paddingLeft: '3rem',
    paddingBottom: '4rem',
  };

  const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    minHeight: '100vh',
  };

  const Card1Styles = {
    border: '1px solid #292F33',
    display: 'flex',
    flexDirection: 'row-reverse',
    position: 'relative',
    padding: '4rem 2rem 7rem 4rem',
    marginRight: '2rem',
  };

  const Card2Styles = {
    border: '1px solid #292F33',
    padding: '4rem 4rem 7.8rem 2rem',
  };

  const ImgSize = {
    width: '28rem',
    height: '28rem',
    position: 'absolute',
    zIndex: '-1',
    left: -47,
    top: 210,
  };

  const Absolute = {
    position: 'absolute',
  };

  const AlignRight = {
    textAlign: 'right',
    paddingLeft: '4rem',
  };

  const ExtraMargin = {
    marginTop: '6rem',
  };

  const FinanceMargin = {
    marginTop: '3rem',
    marginBottom: '2.5',
  };

  const ButtonStyles = {
    border: 'none',
    background: 'pink',
    opacity: '.8',
    // marginTop: '2rem',
  };
  return (
    <div className="container" style={ContainerStyle}>
      <div className="card1" style={Card1Styles}>
        <div style={AlignRight}>
          <h3 style={TitleText2}>
            <img
              src="/static/insurance-finance-symbol.png"
              width="30"
              height="30"
              alt="accident"
            />{' '}
            INSURANCE + ?
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            nam eaque. Rerum harum modi itaque eos magnam minus dolores!
            Accusamus iste qui libero quibusdam distinctio consequuntur fugit,
            ad neque ullam quia porro ipsam eum nostrum corporis ipsum sunt
            natus, deleniti nemo repellendus! Nam assumenda laborum possimus
            iusto recusandae suscipit consectetur?
          </p>
          <p style={ExtraMargin}>
            <button style={ButtonStyles}>
              <strong>GET A QUOTE</strong>
            </button>
          </p>
        </div>
        <div>
          <img
            style={ImgSize}
            src="/static/accident-photo-with-plus.png"
            alt="plus-sign"
          />
        </div>
      </div>
      <div className="card2" style={Card2Styles}>
        <div>
          <h3 style={TitleText}>
            <img
              src="/static/insurance-finance-symbol.png"
              width="30"
              height="30"
              alt="plus-sign"
            />{' '}
            FINANCE + ?
          </h3>
          <h2 style={TitleText}>
            GET APPROVED FOR FINANCE IN LESS THAN 5 MINUTES!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            nam eaque. Rerum harum modi itaque eos magnam minus dolores!
            Accusamus iste qui libero quibusdam distinctio consequuntur fugit,
            ad neque ullam quia porro ipsam eum nostrum corporis ipsum sunt
            natus, deleniti nemo repellendus! Nam assumenda laborum possimus
            iusto recusandae suscipit consectetur? fkdhs
          </p>
          <p style={ExtraMargin}>
            <button style={ButtonStyles}>
              <strong>GET A QUOTE</strong>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
