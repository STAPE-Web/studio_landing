const Code = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 30 30"
            {...props}
        >
            <g
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="3"
                clipPath="url(#clip0_43_88)"
            >
                <path d="M13 21l3-12"></path>
                <path
                    strokeLinejoin="round"
                    d="M22 20l4.777-4.044a.577.577 0 000-.912L22 11M7 11l-3.81 4.018a.708.708 0 000 .964L7 20"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_43_88">
                    <path fill="#fff" d="M0 0H30V30H0z"></path>
                </clipPath>
            </defs>
        </svg>
    )
}

export default Code