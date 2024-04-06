import React from "react";

function Breadcumbs({url_1, url_2, url_3, text_1, text_2, text_3}) {
    return (
        <ul className="flex gap-1 text-dark mt-12">
            <li>
                <Link
                    href={url_1}
                    className="text-dark/80 hover:font-medium font-light"
                >
                    {text_1} {">"}
                </Link>
            </li>
            <li>
                <Link
                    href={url_2}
                    className="text-dark/80 hover:font-medium font-light"
                >
                    {text_2} {">"}
                </Link>
            </li>
            <li>
                <Link
                    href={url_3}
                    className="text-dark hover:font-bold font-semibold"
                >
                    {text_3}
                </Link>
            </li>
        </ul>
    );
}

export default Breadcumbs;
