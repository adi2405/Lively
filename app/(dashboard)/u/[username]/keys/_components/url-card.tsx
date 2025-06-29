interface UrlCardProps {
  value: string | null;
};

export const UrlCard = ({
  value,
} : UrlCardProps) => {
  return (
    <div className="rounded-xl bg-background p-6">
      <div className="flex items-center gap-x-10">
        <p className="font-semibold shrink-0">
          Server URL
        </p>
      </div>
    </div>
  );
};