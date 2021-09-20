import React from "react";
import { Link } from "react-router-dom";

import Card from "../Card/Card.component";

import "./SummaryCard.styles.css";

const SummaryCard = ({
  id,
  title,
  description,
  difficulty,
  servings,
  time,
  ingredients,
  imageUrl
}) => {
  return (
    <div className="summary-card">
      <Card>
        <aside>
          {imageUrl && (
            <Link to={`/recipes/${id}`}>
              <img
                className="card-image summary-card-image"
                src={imageUrl}
                alt={`${title}`}
              />
            </Link>
          )}
        </aside>
        <article>
          <h2>{title}</h2>
          <ul className="card-recipe-info">
            <li>
              <span className="icon">
                <i className="material-icons">people</i>
              </span>
              <span>{servings}</span>
            </li>
            <li>
              <span className="icon icon-clock">
                <i className="material-icons">access_time</i>
              </span>
              <span>{time}</span>
            </li>
            <li>
              <span className="icon icon-level">
                <span className="icon">
                  <i className="material-icons">assessment</i>
                </span>
              </span>
              <span>{difficulty}</span>
            </li>
          </ul>
          <p className="summary-card-description">{description}</p>
          <div className="summary-card-extra-info">
            <p>
              <span className="bold">Ingredients: </span>
              {ingredients}
            </p>
          </div>
        </article>
      </Card>
    </div>
  );
};

export default SummaryCard;
