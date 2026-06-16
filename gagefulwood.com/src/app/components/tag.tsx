type TagProps = {
  children: React.ReactNode;
};

export default function Tag({ children }: TagProps) {
  return <span className="tag">{children}</span>;
}
