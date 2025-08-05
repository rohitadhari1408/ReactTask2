const Template2 = ({ portfolio }) => {
  const { hero, about, blog, contact, skills, services, testimonials } = portfolio;

  return (
    <div>
      <h1 className="text-3xl font-bold">{hero?.name} - Classic Template</h1>
      {/* Add different styles/structure */}
    </div>
  );
};

export default Template2;
