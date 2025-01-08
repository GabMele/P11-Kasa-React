import PropTypes from "prop-types";

function Collapse({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children(title)}</div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Collapse;