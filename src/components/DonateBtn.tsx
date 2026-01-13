import { useDonate } from '../context/DonateContext';

const DonateBtn = () => {
  const { isVisible, toggleDonate } = useDonate();

  return (
    <button
      onClick={toggleDonate}
      className="
        bg-second-color text-white min-w-2xs 
        rounded-3xl p-3 font-extrabold shadow-primary-color
        shadow-md cursor-pointer hover:bg-primary-color
        absolute z-50 lg:top-[479px] top-[292px]
      "
    >
      Doe
    </button>
  );
};

export default DonateBtn;
