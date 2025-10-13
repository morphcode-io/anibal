
export const Logo3DSpinner = () => {
  return (
    <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mr-3 size-5 animate-spin" viewBox="0 0 100 100">
      <circle
        r="45"
        cx="50"
        cy="50"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
        strokeDasharray="283"
        strokeDashoffset="75"
      />
    </svg>
  );
};
