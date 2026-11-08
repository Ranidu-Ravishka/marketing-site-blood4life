import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({ className, title }: BrandMarkProps) {
  return <Image src="/brand/blood-drop.png" alt={title ?? ""} width={64} height={64} className={className} aria-hidden={title ? undefined : true} />;
}
