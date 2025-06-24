import Link from "next/link";

type ListItemProps = {
  title: string;
  subtitle?: string;
  href?: string;
  rightContent?: React.ReactNode;
};

export default function ListItem({
  title,
  subtitle,
  href,
  rightContent,
}: ListItemProps) {
  const Wrapper = href ? Link : "div";

  return (
    <li className="hover:bg-gray-50 transition-colors">
      <Wrapper
        href={href ?? "#"}
        className="flex items-center justify-between w-full px-4 py-3"
      >
        <div className="flex flex-col">
          <span className="font-medium text-sm">{title}</span>
          {subtitle && (
            <span className="text-gray-500 text-xs">{subtitle}</span>
          )}
        </div>
        {rightContent && (
          <div className="text-sm text-gray-600">{rightContent}</div>
        )}
      </Wrapper>
    </li>
  );
}
