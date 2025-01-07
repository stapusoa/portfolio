const Roles: React.FC = () => (
  <div className="bg-transparent relative z-30 pt-28 pb-16 sm:px-6 md:px-14 lg:px-32 items-center justify-center gap-16 flex flex-row">
    {[
      {
        title: 'product design',
        description:
          'Creating intuitive and engaging experiences that focus on user problems and meet business goals',
        image: '/images/role-product-illustration.webp',
      },
      {
        title: 'user research',
        description:
          'Gathering insights to inform design decisions and ensure solutions are user-centered and effective',
        image: '/images/role-research-illustration.webp',
      },
      {
        title: 'design systems',
        description:
          'Building scalable design systems that ensure consistency, efficiency, and cohesive experiences.',
        image: '/images/role-uxd-illustration.webp',
      },
    ].map((role, index) => (
      <div key={index} className="flex flex-col items-center gap-14">
        <div className="h-39 w-39 flex items-end justify-center">
          <img src={role.image} alt={role.title} className="h-33" />
        </div>
        <div className="gap-2">
          <div className="py-2">
            <h6 className="font-gilroy font-300 tracking-wide text-grey-800 text-7 m-0">
              {role.title}
            </h6>
          </div>
          <div className="py-2">
            <h6 className="font-gilroy font-500 text-8 text-center text-grey-900 leading-tight m-0">
              {role.description}
            </h6>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Roles;