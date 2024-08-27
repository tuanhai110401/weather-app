import "../styles/Loading.scss";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
function Loading({ open }) {
  return (
    <>
      <Modal open={open}>
        <div className="loading-wrapper">
          <img
            className="loading"
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-rain.svg"
            alt="loading"
          />
        </div>
      </Modal>
    </>
  );
}

export default Loading;
