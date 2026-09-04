interface PlusIconProps {
  className?: string
  color?: string
}

export default function PlusIcon({ className = '', color = 'black' }: PlusIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.8425 24V0H13.1575V24H10.8425ZM0 13.1664V10.8336H24V13.1664H0Z" fill={color} />
    </svg>
  )
}
