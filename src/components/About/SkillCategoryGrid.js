import React from "react";
import { Row, Col } from "react-bootstrap";

function SkillCategoryGrid({ categories }) {
  if (!categories?.length) {
    return null;
  }

  return (
    <Row className="skill-category-grid g-4">
      {categories.map((category) => (
        <Col
          key={category.key}
          xs={12}
          md={6}
          lg={4}
          className="skill-category-col"
        >
          <div className="skill-card">
            <h3 className="skill-card-title">{category.title}</h3>
            {category.summary && (
              <p className="skill-card-summary">{category.summary}</p>
            )}
            <ul className="skill-card-list">
              {category.items.map((item) => (
                <li key={item.name} className="skill-card-list-item">
                  <span className="skill-item-name">{item.name}</span>
                  {item.note && (
                    <span className="skill-item-note">{item.note}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default SkillCategoryGrid;
