import React from "react";
import StyledH2 from "../StyledElements/StyledH2";

const Heading = () => {
  return (
    <>
      <StyledH2>Basics</StyledH2>
      <div className="ui three column stackable grid">
        <div className="column">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
          </p>
        </div>
        <div className="column">
          <h2>Example body text</h2>
          <p>
            Nullam quis risus eget
            <a href="https://semantic-ui.com/examples/components/site.html#">
              urna mollis ornare
            </a>
            vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies
            vehicula.
          </p>
          <p>
            <small>
              This line of text is meant to be treated as fine print.
            </small>
          </p>
          <p>
            The following snippet of text is
            <strong>rendered as bold text</strong>.
          </p>
          <p>
            The following snippet of text is
            <em>rendered as italicized text</em>.
          </p>
          <p>
            An abbreviation of the word attribute is
            <abbr title="attribute">attr</abbr>.
          </p>
        </div>
        <div className="column">
          <div className="ui three column stackable padded middle aligned centered color grid">
            <div className="red column">Red</div>
            <div className="orange column">Orange</div>
            <div className="yellow column">Yellow</div>
            <div className="olive column">Olive</div>
            <div className="green column">Green</div>
            <div className="teal column">Teal</div>
            <div className="blue column">Blue</div>
            <div className="violet column">Violet</div>
            <div className="purple column">Purple</div>
            <div className="pink column">Pink</div>
            <div className="brown column">Brown</div>
            <div className="grey column">Grey</div>
            <div className="black column">Black</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
