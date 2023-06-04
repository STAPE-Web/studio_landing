const Logo = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="25"
            fill="none"
            viewBox="0 0 145 25"
            {...props}
        >
            <path
                fill="#fff"
                d="M7.464 19.74a12.78 12.78 0 01-3.768-.552c-1.2-.384-2.152-.872-2.856-1.464L1.92 15.3c.672.528 1.504.968 2.496 1.32a9.05 9.05 0 003.048.528c.88 0 1.592-.096 2.136-.288.544-.192.944-.448 1.2-.768.256-.336.384-.712.384-1.128 0-.512-.184-.92-.552-1.224-.368-.32-.848-.568-1.44-.744a19.677 19.677 0 00-1.944-.528 38.206 38.206 0 01-2.136-.552 10.176 10.176 0 01-1.944-.84 4.358 4.358 0 01-1.416-1.392C1.384 9.108 1.2 8.372 1.2 7.476c0-.912.24-1.744.72-2.496.496-.768 1.24-1.376 2.232-1.824 1.008-.464 2.28-.696 3.816-.696 1.008 0 2.008.128 3 .384s1.856.624 2.592 1.104l-.984 2.424a8.924 8.924 0 00-2.328-.984 8.54 8.54 0 00-2.304-.336c-.864 0-1.568.104-2.112.312-.528.208-.92.48-1.176.816-.24.336-.36.72-.36 1.152 0 .512.176.928.528 1.248.368.304.84.544 1.416.72.592.176 1.248.352 1.968.528.72.16 1.432.344 2.136.552.72.208 1.368.48 1.944.816a3.871 3.871 0 011.416 1.368c.368.576.552 1.304.552 2.184 0 .896-.248 1.728-.744 2.496-.48.752-1.224 1.36-2.232 1.824-1.008.448-2.28.672-3.816.672zm16.702-.072c-1.04 0-1.992-.24-2.856-.72-.848-.48-1.528-1.2-2.04-2.16-.496-.976-.744-2.208-.744-3.696 0-1.504.24-2.736.72-3.696.496-.96 1.168-1.672 2.016-2.136.848-.48 1.816-.72 2.904-.72 1.264 0 2.376.272 3.336.816a5.953 5.953 0 012.304 2.28c.576.976.864 2.128.864 3.456 0 1.328-.288 2.488-.864 3.48a5.953 5.953 0 01-2.304 2.28c-.96.544-2.072.816-3.336.816zm-7.104 4.488V6.684h2.856v3.024l-.096 3.408.24 3.408v7.632h-3zM23.83 17.1c.72 0 1.36-.16 1.92-.48a3.473 3.473 0 001.368-1.392c.336-.608.504-1.32.504-2.136 0-.832-.168-1.544-.504-2.136a3.473 3.473 0 00-1.368-1.392c-.56-.32-1.2-.48-1.92-.48s-1.368.16-1.944.48a3.473 3.473 0 00-1.368 1.392c-.336.592-.504 1.304-.504 2.136 0 .816.168 1.528.504 2.136a3.473 3.473 0 001.368 1.392c.576.32 1.224.48 1.944.48zm9.685 2.4V6.684h2.856v3.528l-.336-1.032a4.067 4.067 0 011.8-1.968c.832-.448 1.864-.672 3.096-.672v2.856a1.488 1.488 0 00-.36-.048 2.373 2.373 0 00-.336-.024c-1.136 0-2.04.336-2.712 1.008-.672.656-1.008 1.64-1.008 2.952V19.5h-3zm9.96 0V6.684h3V19.5h-3zm1.513-14.928c-.56 0-1.024-.176-1.392-.528a1.734 1.734 0 01-.528-1.272c0-.512.176-.936.528-1.272.368-.352.832-.528 1.392-.528.56 0 1.016.168 1.368.504.368.32.552.728.552 1.224 0 .528-.176.976-.528 1.344-.352.352-.816.528-1.392.528zM57.685 6.54c1.024 0 1.936.2 2.736.6.816.4 1.456 1.016 1.92 1.848.464.816.696 1.872.696 3.168V19.5h-3v-6.96c0-1.136-.272-1.984-.816-2.544-.528-.56-1.272-.84-2.232-.84-.704 0-1.328.144-1.872.432-.544.288-.968.72-1.272 1.296-.288.56-.432 1.272-.432 2.136v6.48h-3V6.684h2.856v3.456l-.504-1.056a4.486 4.486 0 011.944-1.872c.864-.448 1.856-.672 2.976-.672zm14.99 17.784c-1.185 0-2.345-.16-3.48-.48-1.12-.304-2.04-.752-2.76-1.344l1.343-2.256c.56.464 1.264.832 2.112 1.104a8.225 8.225 0 002.616.432c1.408 0 2.44-.328 3.096-.984.656-.64.984-1.608.984-2.904v-2.28l.24-2.904-.096-2.904v-3.12h2.856v10.872c0 2.32-.592 4.024-1.776 5.112-1.184 1.104-2.896 1.656-5.136 1.656zm-.385-5.4c-1.216 0-2.32-.256-3.312-.768a6.113 6.113 0 01-2.328-2.184c-.56-.928-.84-2.016-.84-3.264 0-1.232.28-2.312.84-3.24a5.934 5.934 0 012.328-2.16c.992-.512 2.096-.768 3.312-.768 1.088 0 2.064.216 2.928.648.864.432 1.552 1.104 2.064 2.016.528.912.792 2.08.792 3.504s-.264 2.6-.792 3.528c-.512.912-1.2 1.592-2.064 2.04-.864.432-1.84.648-2.928.648zm.456-2.544c.752 0 1.424-.152 2.016-.456a3.45 3.45 0 001.368-1.296c.336-.56.504-1.2.504-1.92s-.168-1.352-.504-1.896a3.098 3.098 0 00-1.368-1.272c-.592-.304-1.264-.456-2.016-.456s-1.432.152-2.04.456a3.243 3.243 0 00-1.392 1.272c-.32.544-.48 1.176-.48 1.896s.16 1.36.48 1.92c.336.544.8.976 1.392 1.296.608.304 1.288.456 2.04.456z"
            ></path>
            <path
                fill="#A393FF"
                d="M91.594 19.74c-1.28 0-2.471-.208-3.575-.624a8.929 8.929 0 01-2.857-1.8 8.433 8.433 0 01-1.872-2.76c-.448-1.056-.672-2.208-.672-3.456 0-1.248.225-2.4.672-3.456a8.004 8.004 0 011.896-2.736 8.41 8.41 0 012.856-1.8c1.088-.432 2.28-.648 3.576-.648 1.377 0 2.633.24 3.769.72a7.353 7.353 0 012.88 2.088L96.25 7.164c-.609-.656-1.288-1.144-2.04-1.464a5.932 5.932 0 00-2.448-.504c-.88 0-1.689.144-2.425.432a5.77 5.77 0 00-1.895 1.224 5.815 5.815 0 00-1.248 1.872c-.288.72-.432 1.512-.432 2.376 0 .864.143 1.656.431 2.376.305.72.72 1.344 1.248 1.872a5.77 5.77 0 001.897 1.224c.736.288 1.543.432 2.424.432.88 0 1.695-.16 2.447-.48.753-.336 1.433-.84 2.04-1.512l2.016 1.92a7.685 7.685 0 01-2.88 2.088c-1.135.48-2.4.72-3.791.72zm14.642-.072c-1.312 0-2.48-.28-3.504-.84a6.456 6.456 0 01-2.424-2.352c-.592-.992-.888-2.12-.888-3.384 0-1.28.296-2.408.888-3.384a6.279 6.279 0 012.424-2.328c1.024-.56 2.192-.84 3.504-.84 1.328 0 2.504.28 3.528.84 1.04.56 1.848 1.328 2.424 2.304.592.976.888 2.112.888 3.408 0 1.264-.296 2.392-.888 3.384a6.233 6.233 0 01-2.424 2.352c-1.024.56-2.2.84-3.528.84zm0-2.568c.736 0 1.392-.16 1.968-.48a3.32 3.32 0 001.344-1.392c.336-.608.504-1.32.504-2.136 0-.832-.168-1.544-.504-2.136a3.32 3.32 0 00-1.344-1.392c-.576-.32-1.224-.48-1.944-.48-.736 0-1.392.16-1.968.48-.56.32-1.008.784-1.344 1.392-.336.592-.504 1.304-.504 2.136 0 .816.168 1.528.504 2.136a3.522 3.522 0 001.344 1.392c.576.32 1.224.48 1.944.48zm15.133 2.568c-1.232 0-2.344-.272-3.336-.816a6.126 6.126 0 01-2.304-2.304c-.56-.976-.84-2.128-.84-3.456 0-1.328.28-2.48.84-3.456a5.953 5.953 0 012.304-2.28c.992-.544 2.104-.816 3.336-.816 1.072 0 2.032.24 2.88.72.848.464 1.52 1.176 2.016 2.136.496.96.744 2.192.744 3.696 0 1.488-.24 2.72-.72 3.696-.48.96-1.144 1.68-1.992 2.16-.848.48-1.824.72-2.928.72zm.36-2.568c.72 0 1.36-.16 1.92-.48a3.473 3.473 0 001.368-1.392c.352-.608.528-1.32.528-2.136 0-.832-.176-1.544-.528-2.136a3.473 3.473 0 00-1.368-1.392c-.56-.32-1.2-.48-1.92-.48s-1.368.16-1.944.48c-.56.32-1.016.784-1.368 1.392-.336.592-.504 1.304-.504 2.136 0 .816.168 1.528.504 2.136.352.608.808 1.072 1.368 1.392.576.32 1.224.48 1.944.48zm3.888 2.4v-3.024l.12-3.408-.24-3.408V1.692h2.976V19.5h-2.856zm12.828.168c-1.424 0-2.672-.28-3.744-.84-1.056-.576-1.88-1.36-2.472-2.352-.576-.992-.864-2.12-.864-3.384 0-1.28.28-2.408.84-3.384a6.2 6.2 0 012.352-2.328c1.008-.56 2.152-.84 3.432-.84 1.248 0 2.36.272 3.336.816a5.907 5.907 0 012.304 2.304c.56.992.84 2.16.84 3.504 0 .128-.008.272-.024.432 0 .16-.008.312-.024.456h-10.68V12.06h9.096l-1.176.624c.016-.736-.136-1.384-.456-1.944s-.76-1-1.32-1.32c-.544-.32-1.176-.48-1.896-.48-.736 0-1.384.16-1.944.48-.544.32-.976.768-1.296 1.344-.304.56-.456 1.224-.456 1.992v.48c0 .768.176 1.448.528 2.04a3.52 3.52 0 001.488 1.368c.64.32 1.376.48 2.208.48.72 0 1.368-.112 1.944-.336a4.138 4.138 0 001.536-1.056l1.608 1.848c-.576.672-1.304 1.192-2.184 1.56-.864.352-1.856.528-2.976.528z"
            ></path>
        </svg>
    )
}

export default Logo