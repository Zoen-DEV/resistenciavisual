import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div className="flex items-center gap-2 text-xs text-[#6b6b6b] tracking-wide">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="opacity-40">/</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-[#1a1a1a] transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-[#1a1a1a]">{crumb.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
