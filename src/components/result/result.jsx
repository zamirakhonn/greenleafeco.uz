import React from 'react';
import './result.scss';

const Results = () => {
  return (
    <section className="results-section">
      <div className="results-container">
        {/* Заголовок */}
        <h1 className="results-title">
          Bizning Natijalarimiz
          <span className="underline"></span>
        </h1>

        {/* Карточки */}
        <div className="results-grid">
          {/* Карточка 1 */}
          <div className="result-card">
            <div className="card-icon">
              <span role="img" aria-label="growth">📈</span>
            </div>
            <h2 className="card-number">$10B</h2>
            <p className="card-text">
              Yillik savdo maqsadimiz bilan <br />
              o‘sishimizni ko‘rsatamiz
            </p>
          </div>

          {/* Карточка 2 */}
          <div className="result-card">
            <div className="card-icon globe">
              <span role="img" aria-label="world">🌍</span>
            </div>
            <h2 className="card-number">30+</h2>
            <p className="card-text">
              Dunyo bo‘ylab xizmat <br />
              qilinadigan mamlakatlar
            </p>
          </div>

          {/* Карточка 3 */}
          <div className="result-card">
            <div className="card-icon">
              <span role="img" aria-label="factory">🏭</span>
            </div>
            <h2 className="card-number">$68M</h2>
            <p className="card-text">
              Sanoat parklariga sarmoya, <br />
              kelajak uchun barqaror <br />
              infratuzilma yaratamiz
            </p>
          </div>

          {/* Карточка 4 */}
          <div className="result-card">
            <div className="card-icon">
              <span role="img" aria-label="people">👥</span>
            </div>
            <h2 className="card-number">300 000</h2>
            <p className="card-text">
              Dunyo bo‘ylab ishonchli <br />
              hamkorlarimiz
            </p>
          </div>
        </div>
      </div>

      <div className="leaf leaf-1">🍃</div>
      <div className="leaf leaf-2">🍃</div>
      <div className="leaf leaf-3">🍃</div>
      <div className="leaf leaf-4">🍃</div>
    </section>
  );
};

export default Results;