import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl m-4">Accounting Website</h1>
        <div className="p-3">
            <ModeToggle />
        </div>
      </div>
    </>
  );
};
