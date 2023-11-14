import React, { Children, cloneElement } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const CustomLink = ({ href, children, ...props }) => {
    const { asPath } = useRouter()
    const childClassName = children.props.className || ""
    const className = href === asPath ? `${childClassName} ${childClassName}--active` : childClassName
    return (
        <Link href={href} {...props}>
            {cloneElement(children, { className: className || null })}
        </Link>
    )
}
export default CustomLink

//      DOC

//      <CustomLink href="/about">
//      <a className="navigation__link">Компания</a>
//      </CustomLink> 

//      для стилизации активной ссылки необходимо в стилях к основному классу добавить --active
//      navigation__link--active, в верстке активный класс не прописывается. 




