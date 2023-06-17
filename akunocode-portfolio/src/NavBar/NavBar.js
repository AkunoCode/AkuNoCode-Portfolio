import './NavBar.css'

function NavBar() {
    return (
        <div id="NavBar">
            <h1 id="PageName">AkuNoCode</h1>
            <div>
                <div id="Icons">
                    <svg width="66" height="10" viewBox="0 0 66 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L61.3667 5" stroke="#080510" stroke-width="9" stroke-linecap="round" id="Line" />
                    </svg>
                    <svg width="65" height="51" viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Maximize">
                            <mask id="path-1-inside-1_2_76" fill="white">
                                <rect width="65" height="51" rx="3" />
                            </mask>
                            <rect width="65" height="51" rx="3" stroke="#080510" stroke-width="18" mask="url(#path-1-inside-1_2_76)" />
                        </g>
                    </svg>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Exit" d="M5.21345 5L45.0707 44.8573M5 45L44.8573 5.00322" stroke="#080510" stroke-width="9" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default NavBar;