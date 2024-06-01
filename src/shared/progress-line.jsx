import PropTypes from "prop-types";

export default function ProgressLine({ title, percentage }) {
  return (
    <>
      <div className="info-sidebar-skills__content">
        <p className="info-sidebar-skills__desc">{title}</p>
        <p className="info-sidebar-skills__desc">{percentage}%</p>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </>
  );
}
ProgressLine.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
