export default function GetIsMobile(callback) {
    window.addEventListener("resize", () => {
        var screenwidth = window.innerWidth
        var isMobile
        if (screenwidth < 768) {
            isMobile = true
        } else {
            isMobile = false
        }
        if (callback) {
            callback(isMobile)
        }
    })
}