import * as React from "react"

const Logo = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30.67}
        height={30.86}
        {...props}
    >
        <path
            style={{
                opacity: 1,
                fill: "#0090FF",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.884775,
                strokeOpacity: 1,
            }}
            d="M19.957.178C11.487.18 4.624 7.228 4.625 15.922c0 4.655 2.009 9.072 5.484 12.062L9.98 10.756s2.485-1.567 4.797-.633l5.34 9.424 2.227-3.627 3.67-5.98s2.735-1.514 4.513.331l.051 5.647 4.717-.002C35.293 7.222 28.426.176 19.957.178ZM30.578 15.92l.1 11.258c2.952-2.962 4.617-7.02 4.617-11.258zm-16.525 2.47.099 11.207c2.05.996 3.584 1.44 5.853 1.44 2.586 0 3.855-.476 6.12-1.756-2.275 1.275 0 0 0 0l-.334-10.646-5.557 7.314z"
            transform="translate(-4.625 -.178)"
        />
    </svg>
)

export default Logo