'use client'
interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  type: 'submit' | 'button';
  enabled: boolean;
  className?: string
  onClick?: () => void
}
export function Button({ text, type, variant, enabled, className }: ButtonProps) {
  const primary = `custom-shadow hover:custom-shadow ${enabled ? (variant === 'primary' ? 'outline-1 outline-black outline cursor-pointer bg-color-highlight hover:bg-color-highlight-50 text-black' : 'outline-none outline-0') : ' text-color-gray-60 bg-color-gray-30 cursor-not-allowed outline-none outline-0'}`
  const secondary = ' bg-color-primary hover:bg-color-primary-50 text-white'
  const button3dShadow = 'shadow-md hover:shadow-lg'
  return (
    <>
      <button
        className={`px-6 relative transition-all duration-300 py-3 font-extrabold ${variant === 'primary' ? primary : secondary } ${className}`}
        disabled={!enabled}
        type={type}
      >
        {text}
        {/* <div className="absolute -bottom-1 mx-auto border-t-[9px] border-black border-b-[100px] inset-x-0" /> */}
      </button>
    </>
  )
}
