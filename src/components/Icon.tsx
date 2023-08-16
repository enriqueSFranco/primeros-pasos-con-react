export function IconSave ({ fill = "none", stroke = "#fff" }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='36'
      fill={fill}
      viewBox='0 0 24 24'
    >
      <path
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 5h-7.5C7.56 5 7 5.588 7 6.313V19l5-3.5 5 3.5V6.312C17 5.588 16.44 5 15.75 5z'
      ></path>
    </svg>
  )
}

export function IconSearch () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-.82 4.74a6 6 0 111.06-1.06l4.79 4.79-1.06 1.06-4.79-4.79z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}

