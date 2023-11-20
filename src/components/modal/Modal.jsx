import "./modal.scss";

const Modal = () => {
  return (
    <div className="modal" id="modal_resume">
      <div className="modal__dialog">
        <button className="modal__close" type="button" data-close>
          <img src="close-lg-svgrepo-com.svg" width="22" alt="close-button" />
        </button>

        <div className="modal__content">
          <h2 className="modal__title">Resume</h2>
        </div>

        <div className="timeline">
          <div className="timeline__col timeline__col-left">
            <h4 className="timeline__title">Experience</h4>

            <div className="timeline__item">
              <div className="timeline__date">
                July 2018 - <b>Present</b>
              </div>
              <h5 className="timeline__subtitle">Online Sales Support Agent</h5>
              <div className="timeline__location">
                <span>Name and address of employer</span>
                <p>"Explor TUR" S.R.L. 31 August 1989 64.</p>
              </div>
              <div className="timeline__responsibility">
                <span>Main activities and responsibilities</span>
                <p>
                  Data processing manager, tickets sales in reservation systems:
                  Galileo, Amadeus, Sirena Travel, Gabriel, SPRK, Smart
                  Ticketing, SkySpeed, Radixx.
                </p>
              </div>
            </div>

            <div className="timeline__item">
              <div className="timeline__date">June 2017 - October 2017</div>
              <h5 className="timeline__subtitle">Sales Agent</h5>
              <div className="timeline__location">
                <span>Name and address of employer</span>
                <p>"Aeroport Handling" Bd. Dacia 80/3</p>
              </div>
              <div className="timeline__responsibility">
                <span>Main activities and responsibilities</span>
                <p>
                  Sale of avia services, ticket sales in reservation systems :
                  Amadeus, Sirena Travel, Gabriel, Sabre Reservation, Sky Speed,
                  Amadeus Alteea
                </p>
              </div>
            </div>
          </div>

          <div className="timeline__col timeline__col-right">
            <h4 className="timeline__title">Education</h4>

            <div className="timeline__item">
              <div className="timeline__date">July 2018 - June 2023</div>
              <h5 className="timeline__subtitle">Student</h5>
              <div className="timeline__location">
                <span>Name and address of university</span>
                <p className="capitalize">technical university of moldova</p>
              </div>
              <div className="timeline__responsibility">
                <span>Faculty</span>
                <p className="capitalize">electronics and telecommunication</p>
                <p className="capitalize">
                  specialty of telecommunications software networks
                </p>
              </div>
            </div>

            <div className="timeline__item">
              <div className="timeline__date">January 2023 - April 2023</div>
              <h5 className="timeline__subtitle">Courses - Data Analytics</h5>
              <div className="timeline__location">
                <span>MAIB Academy</span>
              </div>
              <div className="timeline__responsibility">
                <p className="capitalize">SQL, PowerBi, SAP BO, BIG DATA </p>
              </div>
            </div>

            <div className="timeline__item">
              <div className="timeline__date">July 2023 - present</div>
              <h5 className="timeline__subtitle">Courses - ODC FrontEnd</h5>
              <div className="timeline__location">
                <span>Orange Digital Center</span>
              </div>
              <div className="timeline__responsibility">
                <p className="capitalize">HTML5, CSS3, JavaScript, React </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* const modalOpen = document.querySelector('.about');
const btnResume = document.querySelector('.resume');

btnResume.addEventListener("click", function (e) {
   e.preventDefault()

   console.log('salut')

   modalOpen.classList.add('show')

}); */

export default Modal;
