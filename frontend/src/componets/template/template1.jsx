const Template1 = ({ portfolio }) => {
  const { hero, about, blog, contact, skills, services, testimonials } = portfolio;

  return (
    <div>
      <h1 className="text-3xl font-bold">{hero?.name} - Modern Template</h1>
      {/* Add more stylized sections using Tailwind */}
    </div>
  );
};

export default Template1;
