
import {Icon} from '../../components/Icon';

const SocialLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      icon: <Icon name="linkedin" size="medium" />,
      href: "http://linkedin.com/in/stapusoa/",
    },
    {
      name: "GitHub",
      icon: <Icon name="github" size="medium" />,
      href: "https://github.com/stapusoa",
    },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium mb-4 text-left">Connect with me</h3>
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="button-hover flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow"
            aria-label={link.name}
          >
            {link.icon}
            <span className="text-sm">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;