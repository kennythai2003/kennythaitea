import React from "react";

const Language = ({ image, alttag, language, category }) => {
  return (
    <article>
      <img
        src={`/${image ? image : "/kennythaitea/checkmark.png"}`}
        alt={alttag ? alttag : "/kennythaitea/checkmark icon"}
        className="icon"
      />
      <div>
        <h3>{language}</h3>
        {category && <p className="h3sub">{category}</p>}
      </div>
    </article>
  );
};

export default Language;
