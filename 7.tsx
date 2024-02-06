import { useState } from "react"

const Layout = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className="mode-body" data-theme={darkmode ? "dark" : "light"}>
            <div>
                
            </div>
    )
}