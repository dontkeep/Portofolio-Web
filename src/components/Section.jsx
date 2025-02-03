/* eslint-disable react/prop-types */

const Section = ({ title, children }) => {
  return (
    <section className="neo-brutalist">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;