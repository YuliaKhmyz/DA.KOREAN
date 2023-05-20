import React from 'react';
import { Link } from 'react-router-dom';
import CalligraphyPage from '../../features/calligraphy/CalligraphyPage';

function Calligraphy() {
  return (
    <div>
      <div>
        Каллиграфия — это искусство красивого письма, в котором отражена
        целостность отдельных букв, всего текста, воплощенного в гармонии форм и
        ритма. В современном мире с бешеным ритмом жизни занятие каллиграфией
        это то, что может принести успокоение, снять стресс и обрести внутреннюю
        гармонию. Каллиграфия может стать не только новым увлекательным хобби,
        но и окном в корейскую культуру, а также способом расслабиться после
        напряженного дня.
      </div>
      <Link to="/calligraphy">
        <button>Подробнее</button>
      </Link>
    </div>
  );
}

export default Calligraphy;
