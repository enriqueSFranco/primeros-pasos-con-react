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

export function IconHeart ({ fill = '#fff' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        fill={fill}
        d='M8.962 18.91l.464-.588-.464.589zM12 5.5l-.54.52a.75.75 0 001.08 0L12 5.5zm3.038 13.41l.465.59-.465-.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48 3.65 13.028 2.75 11.334 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339 1.43 1.61 3.254 2.9 4.68 4.024l.93-1.178zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713 1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06 2.786 4.073 1.25 6.425 1.25 9.137h1.5zM8.497 19.5c.513.404 1.063.834 1.62 1.16.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385-.453-.264-.922-.628-1.448-1.043L8.497 19.5zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024 1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.197-.9 3.891-2.188 5.343-1.315 1.48-2.972 2.647-4.488 3.842l.929 1.178zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596 1.659.759 2.874 2.562 2.874 4.713h1.5zm-8.176 9.185c-.526.415-.995.779-1.448 1.043-.452.264-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59.558-.326 1.107-.756 1.62-1.16l-.929-1.178z'
      ></path>
    </svg>
  );
}

export function IconCart () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeWidth="1.5"
        d="M7.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM16.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 3l.261.092c1.302.457 1.953.686 2.325 1.231.372.545.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"
      ></path>
    </svg>
  );
}


export function IconFolderOpen () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#1C274C"
        strokeWidth="1.5"
        d="M4 11.5V5.712c0-.662 0-.993.055-1.268C4.3 3.23 5.312 2.28 6.607 2.052 6.9 2 7.254 2 7.96 2c.31 0 .464 0 .612.013.641.056 1.25.292 1.745.677a6.7 6.7 0 01.443.397l.44.413c.653.612.979.918 1.37 1.122.214.112.442.2.678.263.43.115.892.115 1.815.115h.299c2.106 0 3.158 0 3.843.577.063.053.123.11.18.168.615.642.615 1.63.615 3.603V11.5"
        opacity="0.5"
      ></path>
      <path
        stroke="#1C274C"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 17h4"
        opacity="0.5"
      ></path>
      <path
        stroke="#1C274C"
        strokeWidth="1.5"
        d="M3.477 17.484C3 14.768 2.76 13.41 3.339 12.433c.148-.25.33-.475.54-.67C4.704 11 6.038 11 8.705 11h6.59c2.667 0 4 0 4.826.763.21.195.392.42.54.67.578.977.34 2.335-.138 5.05-.343 1.956-.515 2.934-1.11 3.582a2.926 2.926 0 01-.515.445c-.723.49-1.683.49-3.603.49h-6.59c-1.92 0-2.88 0-3.603-.49a2.925 2.925 0 01-.515-.445c-.595-.648-.767-1.626-1.11-3.581z"
      ></path>
    </svg>
  );
}

export function IconFolderClose () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 14h-4"
        opacity="0.5"
      ></path>
      <path
        stroke="#fff"
        strokeWidth="1.5"
        d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 015.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 012.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 00.848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.079.07.154.145.224.224.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14V6.95z"
      ></path>
    </svg>
  );
}

export function IconFile () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M15.393 4.054l-.502.557.502-.557zm3.959 3.563l-.502.557.502-.557zm2.302 2.537l-.685.305.685-.305zM3.172 20.828l.53-.53-.53.53zm17.656 0l-.53-.53.53.53zM14 21.25h-4v1.5h4v-1.5zM2.75 14v-4h-1.5v4h1.5zm18.5-.437V14h1.5v-.437h-1.5zM14.891 4.61l3.959 3.563 1.003-1.115-3.958-3.563-1.004 1.115zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h1.5zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115zM10 21.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5zM1.25 14c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5zM14 22.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5zM21.25 14c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869.155-1.15.153-2.625.153-4.489h-1.5zm-18.5-4c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10h1.5zm7.28-8.75c-1.875 0-3.356-.002-4.511.153-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811 1.033-.138 2.395-.14 4.312-.14v-1.5z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6 14.5h8M6 18h5.5"
        opacity="0.5"
      ></path>
      <path
        stroke="#fff"
        strokeWidth="1.5"
        d="M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4"
        opacity="0.5"
      ></path>
    </svg>
  );
}