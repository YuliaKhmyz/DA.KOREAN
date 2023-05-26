import React from 'react';
import './successSubscribeModal.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

type SuccessSubscribeModalProps = {
  toggleModal: () => void;
};

function SuccessSubscribeModal({ toggleModal }: SuccessSubscribeModalProps): JSX.Element {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"></h5>
            <button type="button" className="btn-close" onClick={toggleModal}></button>
          </div>
          <div className="modal-body">
            <p>Вы успешно подписались на рассылку.</p>
          </div>

          <div className="modal-footer">
            <Link to="/courses">
              <Button variant="outline-secondary" className="close-btn" onClick={toggleModal}>
                Закрыть
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessSubscribeModal;
